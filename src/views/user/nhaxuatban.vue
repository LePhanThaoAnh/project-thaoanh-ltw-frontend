<template>
    <div class="books-by-publisher">
        <Header />
        <div class="content">
            <h2>Danh Sách Sách Theo Nhà Xuất Bản</h2>
            <div class="publisher-filter">
                <label for="publisher">Chọn Nhà Xuất Bản:</label>
                <select v-model="selectedPublisher" id="publisher">
                    <option value="">Tất cả</option>
                    <option v-for="publisher in publishers" :value="publisher._id" :key="publisher._id">{{ publisher.name }}</option>
                </select>
            </div>
            <div class="book-list">
                <div v-for="(book, index) in filteredBooks" :key="index" class="book">
                    <h3>{{ book.title }}</h3>
                    <p><strong>Mã sách:</strong> {{ book.masach }}</p>
                    <p><strong>Tên sách:</strong> {{ book.tensach }}</p>
                    <p><strong>Số lượng:</strong> {{ book.soquyen }}</p>
                    <p><strong>Đơn giá:</strong> {{ formatPrice(book.dongia)  }}</p>
                    <p><strong>Năm Xuất Bản:</strong> {{ book.namxuatban }}</p>
                    <p><strong>Nhà Xuất Bản:</strong> {{ book.nhaxuatban.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/AppHeader.vue';
import BookService from "../../services/book.service";
import IssuerService from "../../services/issuer.service";

export default {
    data() {
        return {
            books: [],
            publishers: [],
            selectedPublisher: ''
        };
    },
    props: {
    id: { type: String, required: true },
  },
    computed: {
        filteredBooks() {
            if (this.selectedPublisher) {
                return this.books.filter(book => book.publisher._id === this.selectedPublisher);
            }
            return this.books;
        }
    },
    methods: {
        async getAllIssuer() {
            try {
                this.publishers = await IssuerService.getAll();
            } catch (error) {
                console.error("Error fetching publishers: ", error);
            }
        },
        formatPrice(price) {
      // Ép kiểu giá trị đơn giá sang số
      const priceNumber = parseFloat(price);
      // Kiểm tra nếu không phải là một số hợp lệ thì trả về giá trị ban đầu
      if (isNaN(priceNumber)) {
        return price;
      }
      // Định dạng giá tiền sang "40.000 vnđ"
      return priceNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    },
        // async getPublisherName(id) {
        //     try {
        //         const publisher = await IssuerService.get(id);
        //         return publisher.name;
        //     } catch (error) {
        //         console.error("Error fetching publisher name: ", error);
        //         return "";
        //     }
        // },
        async getAllBook() {
            this.books = await BookService.getAll();
        },
        
    },
    mounted() {
        this.getAllBook();
        this.getAllIssuer();
    },
    components: {
        Header
    }
};
</script>

<style scoped>
.content {
    max-width: 800px;
    margin: auto;
}

.publisher-filter {
    margin-bottom: 20px;
}

.book-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
}

.book {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
}
</style>
