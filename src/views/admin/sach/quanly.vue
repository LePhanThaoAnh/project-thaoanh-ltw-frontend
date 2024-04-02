<template>
    <div class="admin-panel">
      <Sidebar />
      <div class="main-content">
        <h2>Quản lý Sách</h2>
        <router-link to="/admin/sach/them"> <button class="them">Thêm sách</button> </router-link>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã Sách</th>
              <th>Tên Sách</th>
              <th>Số Lượng</th>
              <th>Giá</th>
              <th>Tác Giả</th>
              <th>Năm Sản Xuất</th>
              <th>Nhà Xuất Bản</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in books" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ book.masach }}</td>
              <td>{{ book.tensach }}</td>
              <td>{{ book.soquyen }}</td>
              <td>{{ book.dongia }}</td>
              <td>{{ book.tacgia }}</td>
              <td>{{ book.namxuatban }}</td>
              <td>{{ book.nhaxuatban.name }}</td>
              <td>
                <button class="sua"  @click="editBook(book)">Sửa</button>
                <button class="xoa"  @click="deleteBook(book.id)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "@/components/Sidebar.vue"; // Đường dẫn đến component Sidebar
  import BookService from "../../../services/book.service";

  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        books: [],
      };
    },
    methods: {
      viewDetail(book) {
        this.$router.push({ name: "chitiet" });
      },
      editBook(book) {
        this.$router.push({ name: "suasach" });
      },
      async deleteBook(book) {
      if (confirm("Bạn muốn xóa sách này?")) {
        try {
          await BookService.delete(book._id);
          this.books = this.books.filter(
            (item) => item._id !== book._id
          );
        } catch (error) {
          console.error("Lỗi khi xóa sách:", error);
        }
      }
    },
    async getAllBook() {
      this.books = await BookService.getAll();
    },
    },
    mounted() {
    this.getAllBook();
  },
  };
  </script>
  
  <style scoped>
  .admin-panel {
    display: flex;
  }
  .sidebar {
    background-color: #f2f2f2;
  }
  .main-content {
    flex: 1;
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    padding: 5px 10px;
    margin-right: 5px;
  }
  .them{
    margin-bottom: 12px;
    background-color: #28a745;
  }
  .sua{
    background-color: #ffc107;

  }
  .xoa{
    background-color: #dc3545;

  }

  </style>
  