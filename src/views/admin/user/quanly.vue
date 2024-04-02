<template>
    <div class="admin-page">
        <Sidebar />
        <div class="main-content">
            <h2>Quản lý Người Dùng</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và Tên</th>
                        <th>Giới Tính</th>
                        <th>Ngày Sinh</th>
                        <th>Số Điện Thoại</th>
                        <th>Địa Chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ user.fullName }}</td>
                        <td>{{ user.gender }}</td>
                        <td>{{ user.birthDate }}</td>
                        <td>{{ user.phoneNumber }}</td>
                        <td>{{ user.address }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue"; // Đường dẫn đến component Sidebar

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            users: [
                {
                    fullName: "Nguyễn Văn A",
                    gender: "Nam",
                    birthDate: "01/01/1990",
                    phoneNumber: "0123456789",
                    address: "Số nhà 123, đường ABC, quận XYZ"
                },
                {
                    fullName: "Trần Thị B",
                    gender: "Nữ",
                    birthDate: "02/02/1995",
                    phoneNumber: "0987654321",
                    address: "Số nhà 456, đường XYZ, quận ABC"
                }
                // Thêm dữ liệu người dùng khác nếu cần
            ]
        };
    }
};
</script>

<style scoped>
.admin-page {
    display: flex;
}

.main-content {
    flex: 1;
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}
.sidebar {
    background-color: #f2f2f2;
  }
th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
</style>