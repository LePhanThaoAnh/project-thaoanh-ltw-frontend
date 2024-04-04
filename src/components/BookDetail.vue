<template>
  <Header />
  <div class="book-detail">

    <h2>Chi tiết sách</h2>
    <div class="detail">
      <div class="info">
        <p><strong>Mã sách:</strong> {{ book.masach }}</p>
        <p><strong>Tên sách:</strong> {{ book.tensach }}</p>
        <p><strong>Số lượng:</strong> {{ book.soquyen }}</p>
        <p><strong>Đơn giá:</strong> {{ book.dongia }}</p>
        <p><strong>Tác giả:</strong> {{ book.tacgia }}</p>
        <p><strong>Năm sản xuất:</strong> {{ book.namxuatban }}</p>
        <p><strong>Nhà sản xuất:</strong> {{ book.nhaxuatban.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import BookService from '@/services/book.service';
import Header from './AppHeader.vue';

export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      book: {}, // Sửa tên biến từ books thành book
    };
  },
  components: {
    Header,
  },
  methods: {
    async getBookById(id) {
      try {
        this.book = await BookService.get(this.id); // Sử dụng this.id để truyền vào hàm get
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getBookById(id); // Sử dụng this.id
  }
};
</script>

<style>
.book-detail {
  max-width: 600px;
  margin: auto;
}

.detail {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
}

.info {
  margin-bottom: 10px;
}
</style>
