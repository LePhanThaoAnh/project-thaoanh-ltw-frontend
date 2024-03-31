<template>
  <Header />
  <div class="borrow-history">
    <h2>Lịch sử mượn sách</h2>
    <div class="history-list">
      <div v-for="(borrow, index) in borrowHistory" :key="index" class="borrow-item">
        <p><strong>Tên sách:</strong> {{ borrow.bookTitle }}</p>
        <p><strong>Ngày mượn:</strong> {{ borrow.borrowDate }}</p>
        <p><strong>Ngày trả:</strong> {{ borrow.returnDate }}</p>
        <p><strong>Trạng thái:</strong> {{ borrow.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/AppHeader.vue';

export default {
  data() {
    return {
      borrowHistory: [
        { borrowDate: '2024-03-01', returnDate: '2024-03-10', bookTitle: 'Sách 1', status: 'Đã trả' },
        { borrowDate: '2024-03-05', returnDate: '2024-03-15', bookTitle: 'Sách 2', status: 'Đang mượn' },
        { borrowDate: '2024-03-10', returnDate: '2024-03-20', bookTitle: 'Sách 3', status: 'Đã trả' },
        // Thêm dữ liệu lịch sử mượn sách khác tại đây
      ]
    };
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.borrow-history {
  max-width: 800px;
  margin: auto;
}

.history-list {
  margin-top: 20px;
}

.borrow-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
