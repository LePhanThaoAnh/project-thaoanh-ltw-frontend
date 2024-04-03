<!-- Header.vue -->
<template>
    <header class="header">
      <div class="container">
        <router-link class="gachchan" to="/"><h1>Quản lý Thư Viện</h1></router-link>
        <nav>
          <router-link class="gachchan" to="/">Trang chủ</router-link>
          <router-link class="gachchan" to="/user/lichsu">Xem lịch sử mượn sách</router-link>
          <select @change="filterByPublisher">
            <option value="">Chọn nhà xuất bản</option>
            <option v-for="publisher in publishers" :value="publisher" :key="publisher.id">{{ publisher }}</option>
          </select>
          <router-link class="gachchan" to="/login" >Đăng xuất</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        publishers: ['Nhà xuất bản A', 'Nhà xuất bản B', 'Nhà xuất bản C'] // Thay thế bằng dữ liệu thực tế
      };
    },
    methods: {
      filterByPublisher(event) {
      const selectedPublisher = event.target.value;
      if (selectedPublisher) {
        // this.$router.push({ path: `/user/books/${selectedPublisher}` });
        this.$router.push({ path: `/user/nhaxuatban` });

      } else {
        this.$router.push({ path: '/user' });
      }
    }
    }
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
  a.gachchan, a.gachchan{
    text-decoration: none;
  color: inherit;
  }
  </style>
  