<template>
    <div class="admin-manage-publishers">
        <Sidebar />
      <div class="main-content">
        <h2>Quản lý Nhà Xuất Bản</h2>
        <router-link to="/admin/nhaxuatban/them"> <button class="them" >Thêm nhà xuất bản</button> </router-link>
  
        <table>
          <thead>
            <tr>
              <th>Số thứ tự</th>
              <th>Tên Nhà Xuất Bản</th>
              <th>Địa Chỉ</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(publisher, index) in publishers" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ publisher.name }}</td>
              <td>{{ publisher.address }}</td>
              <td>
                <button  class="sua"  @click="editPublisher(publisher)">Sửa</button>
                <button class="xoa"  @click="deletePublisher(publisher)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from "@/components/Sidebar.vue"; 

  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        publishers: [
          { name: 'Nhà Xuất Bản A', address: 'Địa chỉ A' },
          { name: 'Nhà Xuất Bản B', address: 'Địa chỉ B' },
          // Thêm dữ liệu nhà xuất bản khác tại đây
        ],
    
      };
    },
    methods: {
      editPublisher(publisher) {
        this.$router.push({ name: "suanhaxuatban" });
      },
      deletePublisher(publisher) {
        const index = this.publishers.indexOf(publisher);
        if (index !== -1) {
          this.publishers.splice(index, 1);
        }
      },
    }
  };
  </script>
  
  <style scoped>
  .admin-manage-publishers {
    display: flex;
  }
  
  .sidebar {

    padding: 20px;
    background-color: #f2f2f2;
  }
  
  .main-content {
    flex: 4;
    padding: 20px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  .them{
    background-color: #007bff;
    margin-bottom: 11px;
  }
  .sua{
    background-color: #ffc107;

  }
  .xoa{
    background-color: #dc3545;

  }
  </style>
  