<template>
  <div class="admin-manage-borrowing">
    <Sidebar />

    <div class="main-content">
      <h2>Quản lý Mượn Sách</h2>
      <table>
        <thead>
          <tr>
            <th>Số Thứ Tự</th>
            <th>Tên Người Mượn</th>
            <th>Tên Sách Mượn</th>
            <th>Ngày Mượn</th>
            <th>Ngày Trả</th>
            <th>Tình Trạng</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(borrowing, index) in borrowings" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ borrowing.borrower }}</td>
            <td>{{ borrowing.book }}</td>
            <td>{{ borrowing.borrowDate }}</td>
            <td>{{ borrowing.returnDate }}</td>
            <td>{{ borrowing.status }}</td>
            <td>
              <button class="sua" @click="editStatus(borrowing)">Sửa Trạng Thái</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
  <script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      borrowings: [
        {
          borrower: "Người Mượn A",
          book: "Sách A",
          borrowDate: "01/01/2023",
          returnDate: "31/01/2023",
          status: "Đã Mượn",
        },
        {
          borrower: "Người Mượn B",
          book: "Sách B",
          borrowDate: "05/02/2023",
          returnDate: "28/02/2023",
          status: "Đã Mượn",
        },
      ],
    };
  },
  methods: {
    editStatus(borrowing) {
      this.$router.push({ name: "suatrangthai" });
    },
  },
};
</script>
  
  <style scoped>
.admin-manage-borrowing {
  display: flex;
}
.sidebar {
  background-color: #f2f2f2;
}
.main-content {
    flex: 4;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
.sua {
  background-color: #ffc107;
}
button {
  padding: 5px 10px;
  margin-right: 5px;
}
</style>
  
  