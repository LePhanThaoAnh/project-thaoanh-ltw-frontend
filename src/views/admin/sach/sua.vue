<template>
    <div class="edit-book">
      <h2>Sửa Sách</h2>
      <form @submit.prevent="updateBook">
        <div class="form-group">
          <label for="title">Tên Sách:</label>
          <input type="text" id="title" v-model="book.title" required>
        </div>
        <div class="form-group">
          <label for="price">Đơn Giá:</label>
          <input type="number" id="price" v-model="book.price" required>
        </div>
        <div class="form-group">
          <label for="quantity">Số Lượng:</label>
          <input type="number" id="quantity" v-model="book.quantity" required>
        </div>
        <div class="form-group">
          <label for="author">Tác Giả:</label>
          <input type="text" id="author" v-model="book.author" required>
        </div>
        <div class="form-group">
          <label for="year">Năm Sản Xuất:</label>
          <input type="number" id="year" v-model="book.year" required>
        </div>
        <div class="form-group">
          <label for="publisher">Nhà Xuất Bản:</label>
          <select id="publisher" v-model="book.publisher" required>
            <option disabled value="">Chọn nhà xuất bản</option>
            <option v-for="publisher in publishers" :key="publisher">{{ publisher }}</option>
          </select>
        </div>
        <button type="submit">Lưu Thay Đổi</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        book: {
          id: 1, // Thay thế bằng ID của sách bạn muốn sửa
          title: 'Tên Sách',
          price: 0,
          quantity: 0,
          author: 'Tác Giả',
          year: new Date().getFullYear(),
          publisher: 'Nhà Xuất Bản'
        },
        publishers: ['Nhà Xuất Bản A', 'Nhà Xuất Bản B', 'Nhà Xuất Bản C'] // Thay thế bằng dữ liệu thực tế
      };
    },
    methods: {
      updateBook() {
        // Xử lý logic để cập nhật sách
        console.log('Sửa sách:', this.book);
        // Sau khi xử lý, có thể chuyển hướng người dùng đến trang quản lý sách hoặc trang khác
      }
    }
  };
  </script>
  
  <style scoped>
  .edit-book {
    max-width: 500px;
    margin: auto;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"],
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  