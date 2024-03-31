<template>
  <div class="add-book">
    <h2>Thêm Sách</h2>
    <form @submit.prevent="addBook">
      <div class="form-group">
        <label for="title">Tên Sách:</label>
        <input type="text" id="title" v-model="newBook.title" required>
      </div>
      <div class="form-group">
        <label for="price">Đơn Giá:</label>
        <input type="number" id="price" v-model="newBook.price" required>
      </div>
      <div class="form-group">
        <label for="quantity">Số Lượng:</label>
        <input type="number" id="quantity" v-model="newBook.quantity" required>
      </div>
      <div class="form-group">
        <label for="author">Tác Giả:</label>
        <input type="text" id="author" v-model="newBook.author" required>
      </div>
      <div class="form-group">
        <label for="year">Năm Sản Xuất:</label>
        <input type="number" id="year" v-model="newBook.year" required>
      </div>
      <div class="form-group">
        <label for="publisher">Nhà Xuất Bản:</label>
        <select id="publisher" v-model="newBook.publisher" required>
          <option disabled value="">Chọn nhà xuất bản</option>
          <option v-for="publisher in publishers" :key="publisher">{{ publisher }}</option>
        </select>
      </div>
      <button type="submit">Thêm Sách</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBook: {
        title: '',
        price: 0,
        quantity: 0,
        author: '',
        year: new Date().getFullYear(),
        publisher: ''
      },
      publishers: ['Nhà Xuất Bản A', 'Nhà Xuất Bản B', 'Nhà Xuất Bản C'] // Thay thế bằng dữ liệu thực tế
    };
  },
  methods: {
    addBook() {
      console.log('Thêm sách:', this.newBook);
    }
  }
};
</script>

<style scoped>
.add-book {
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
