<!-- Header.vue -->
<template>
  <header class="header">
    <div class="container">
      <router-link class="gachchan" to="/">
        <h1>Quản lý Thư Viện</h1>
      </router-link>
      <nav>
        <router-link class="gachchan" to="/">Trang chủ</router-link>
        <router-link class="gachchan" to="/user/lichsu">Xem lịch sử mượn sách</router-link>
        <select @change="filterByPublisher">
          <option value="">Chọn nhà xuất bản</option>
          <option v-for="publisher in publishers" :value="publisher._id" :key="publisher._id">{{ publisher.name }}</option>
        </select>
        <router-link class="gachchan" to="/login">Đăng xuất</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import IssuerService from "../services/issuer.service";

export default {
  data() {
    return {
      publishers: [],
    };
  },

  methods: {
    
    async getAllIssuer() {
      try {
        this.publishers = await IssuerService.getAll();
      } catch (error) {
        console.error("Error fetching publishers: ", error);
      }
    },
    async filterByPublisher(event) {
      const selectedPublisherId = event.target.value;
      console.log(selectedPublisherId)
      if (selectedPublisherId) {
        this.$router.push({ path: `/user/nhaxuatban/${selectedPublisherId}` });
      } else {
        this.$router.push({ path: '/user' });
      }
    },
  },
  mounted() {
    this.getAllIssuer();
  },
};
</script>

<style scoped>
.header {
  font-family: ui-monospace;
  background-color: #cbcaca;
  color: #383468;
  padding: 1rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: #fff;
  margin-left: 1rem;
  text-decoration: none;
  font-size: large;
}

nav a:hover {
  text-decoration: underline;
}

select {
  padding: 0.5rem;
  border-radius: 4px;
  margin-left: 12px;
  width: unset;
}

a.gachchan,
a.gachchan {
  text-decoration: none;
  color: inherit;
}
</style>