<template>
  <div class="edit-borrowing-status">
    <h2>Sửa Trạng Thái Mượn Sách</h2>
    <form @submit.prevent="saveStatus">
      <div class="form-group">
        <label for="status">Chọn Trạng Thái:</label>
        <select v-model="selectedStatus" id="status">
          <option value="Đang Mượn">Đang Mượn</option>
          <option value="Đã Trả">Đã Trả</option>
        </select>
      </div>
      <button type="submit">Lưu</button>
    </form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      selectedStatus: "Đang Mượn",
    };
  },
  methods: {
    saveStatus() {
      // Xử lý logic để lưu trạng thái mượn sách
      console.log("Trạng Thái Mượn Sách:", this.selectedStatus);
      // Sau khi lưu xong, có thể thực hiện cập nhật dữ liệu hoặc chuyển hướng trở lại trang quản lý mượn sách
    },
  },
};
</script>
  
  <style scoped>
.edit-borrowing-status {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
  