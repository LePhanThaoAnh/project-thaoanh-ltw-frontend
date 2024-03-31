<template>
  <div class="add-publisher">
    <h2>Thêm Nhà Xuất Bản</h2>
    <form @submit.prevent="addPublisher">
      <div class="form-group">
        <label for="publisherName">Tên Nhà Xuất Bản:</label>
        <input
          type="text"
          id="publisherName"
          v-model="newPublisher.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="publisherAddress">Địa Chỉ:</label>
        <input
          type="text"
          id="publisherAddress"
          v-model="newPublisher.address"
          required
        />
      </div>
      <button type="submit">Thêm</button>
    </form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      newPublisher: {
        name: "",
        address: "",
      },
    };
  },
  methods: {
    addPublisher() {
      // Xử lý logic để thêm nhà xuất bản
      console.log("Thêm Nhà Xuất Bản:", this.newPublisher);
      // Sau khi thêm xong, có thể thực hiện chuyển hướng hoặc cập nhật dữ liệu
    },
  },
};
</script>
  
  <style scoped>
.add-publisher {
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
  