<template>
  <div class="edit-publisher">
    <h2>Sửa Nhà Xuất Bản</h2>
    <form @submit.prevent="editPublisher">
      <div class="form-group">
        <label for="publisherName">Tên Nhà Xuất Bản:</label>
        <input
          type="text"
          id="publisherName"
          v-model="editedPublisher.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="publisherAddress">Địa Chỉ:</label>
        <input
          type="text"
          id="publisherAddress"
          v-model="editedPublisher.address"
          required
        />
      </div>
      <button type="submit">Lưu</button>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      editedPublisher: {
        name: "",
        address: "",
      },
    };
  },
  mounted() {
    // Trong thực tế, bạn có thể nhận dữ liệu của nhà xuất bản cần sửa từ API và gán vào biến editedPublisher
    this.editedPublisher = {
      name: "Tên Nhà Xuất Bản Cần Sửa",
      address: "Địa chỉ Nhà Xuất Bản Cần Sửa",
    };
  },
  methods: {
    editPublisher() {
      // Xử lý logic để sửa nhà xuất bản
      console.log("Sửa Nhà Xuất Bản:", this.editedPublisher);
      // Sau khi sửa xong, có thể thực hiện chuyển hướng hoặc cập nhật dữ liệu
    },
  },
};
</script>
  <style scoped>
.edit-publisher {
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

input[type="text"] {
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
  