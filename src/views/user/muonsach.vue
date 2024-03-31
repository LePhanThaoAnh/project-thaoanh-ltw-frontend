<!-- BorrowBook.vue -->
<template>
  <Header />
    <div class="borrow-book">
      <h2>Mượn Sách</h2>
      <form @submit.prevent="borrowBook">
        <div class="form-group">
          <label for="borrowerName">Tên người mượn:</label>
          <input type="text" id="borrowerName" v-model="borrowerName" required>
        </div>
        <div class="form-group">
          <label for="borrowDate">Ngày mượn:</label>
          <input type="date" id="borrowDate" v-model="borrowDate" required>
        </div>
        <div class="form-group">
          <label for="returnDate">Ngày trả:</label>
          <input type="date" id="returnDate" v-model="returnDate" required>
        </div>
        <div class="form-group">
          <label for="book">Tên sách:</label>
          <select id="book" v-model="selectedBook" required>
            <option value="">Chọn sách</option>
            <option v-for="book in availableBooks" :key="book.id" :value="book.title">{{ book.title }}</option>
          </select>
        </div>
        <button type="submit" class="muonsach">Mượn Sách</button>
      </form>
    </div>
  </template>
  
  <script>
  import Header from '../../components/AppHeader.vue';
  export default {
    data() {
      return {
        borrowerName: '',
        borrowDate: '',
        returnDate: '',
        selectedBook: '',
        books: [
          { id: 1, title: 'Sách 1' },
          { id: 2, title: 'Sách 2' },
          { id: 3, title: 'Sách 3' },
          // Thêm dữ liệu sách khác tại đây
        ]
      };
    },
    components: {
    Header,
  },
    computed: {
      availableBooks() {
        // Lọc ra những sách có thể mượn (chưa được mượn)
        // Trong ví dụ này, giả sử rằng sách chưa được mượn khi 'borrowerName' rỗng
        return this.books.filter(book => !book.borrowerName);
      }
    },
    methods: {
      borrowBook() {
        // Logic để xử lý việc mượn sách
        console.log('Thông tin mượn sách:', {
          borrowerName: this.borrowerName,
          borrowDate: this.borrowDate,
          returnDate: this.returnDate,
          selectedBook: this.selectedBook
        });
      }
    }
  };
  </script>
  
  <style>
  .borrow-book {
    max-width: 400px;
    margin: auto;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
  }
  input[type="text"],
  input[type="date"],
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  