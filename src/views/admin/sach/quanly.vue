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
              <td>{{ book.id }}</td>
              <td>{{ book.title }}</td>
              <td>{{ book.quantity }}</td>
              <td>{{ book.price }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.year }}</td>
              <td>{{ book.publisher }}</td>
              <td>
                <button class="xemchitiet" @click="viewDetail(book)">Xem Chi Tiết</button>
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
  
  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        books: [
          { id: 1, title: 'Sách A', quantity: 10, price: 10000, author: 'Tác Giả A', year: 2022, publisher: 'Nhà Xuất Bản A' },
          { id: 2, title: 'Sách B', quantity: 15, price: 15000, author: 'Tác Giả B', year: 2021, publisher: 'Nhà Xuất Bản B' },
          { id: 3, title: 'Sách C', quantity: 8, price: 12000, author: 'Tác Giả C', year: 2020, publisher: 'Nhà Xuất Bản A' }
          // Thêm dữ liệu sách khác tại đây nếu cần
        ]
      };
    },
    methods: {
      viewDetail(book) {
        this.$router.push({ name: "chitiet" });
      },
      editBook(book) {
        this.$router.push({ name: "suasach" });
      },
      deleteBook(bookId) {
        // Xử lý khi người dùng click vào nút Xóa
        console.log('Xóa Sách:', bookId);
      }
    }
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
    background-color: blue;

  }
  .sua{
    background-color: #ffc107;

  }
  .xoa{
    background-color: #dc3545;

  }
  .xemchitiet{
    background-color: #28a745;
    ;

  }
  </style>
  