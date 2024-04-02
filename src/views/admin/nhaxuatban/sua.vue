<template>
  <div class="edit-publisher">
    <h2>Sửa Nhà Xuất Bản</h2>
    <form @submit="submitNhaxuatban" :validation-schema="nhaxuatbanFormSchema">
      <div class="form-group">
        <label for="publisherName">Tên Nhà Xuất Bản:</label>
        <input type="text" id="publisherName" v-model="nhaxuatbanLocal.name" required />
      </div>
      <div class="form-group">
        <label for="publisherAddress">Địa Chỉ:</label>
        <input type="text" id="publisherAddress" v-model="nhaxuatbanLocal.address" required />
      </div>
      <button type="submit">Lưu</button>
    </form>   
     <p>{{ message }}</p>
  </div>
</template>
  
<script>
import IssuerService from "../../../services/issuer.service";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
        Form,
        Field,
        ErrorMessage,
    },
  props: {
    id: { type: String, required: true },
  },
  data() {
    const nhaxuatbanFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
        });
    return {
      nhaxuatbanLocal: [],
      message: "",
      nhaxuatbanFormSchema, 
    };
  },
  methods: {
    async getNhaxuatban(id) {
      try {
        this.nhaxuatbanLocal = await IssuerService.get(id);
      } catch (error) {
        console.log(error);
        // Chuyển hướng sang trang NotFound đồng thời giữ nguyên URL
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1)
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },
    async submitNhaxuatban() {
      try {
        await IssuerService.update(this.id, this.nhaxuatbanLocal);
        this.message = "Nhà xuất bản được cập nhật thành công.";
      } catch (error) {
        console.log(error);
        this.message = "Đã xảy ra lỗi khi cập nhật nhà xuất bản.";
      }
    },
  },
  created() {
    this.getNhaxuatban(this.id);
    this.message = "";
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