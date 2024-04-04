<template>
    <div class="books-by-publisher">
        <Header />
        <div class="content">
            <h2>Danh Sách Sách Theo Nhà Xuất Bản</h2>
            <div class="publisher-filter">
                <label for="publisher">Chọn Nhà Xuất Bản:</label>
                <select v-model="selectedPublisher" id="publisher">
                    <option value="">Tất cả</option>
                    <option v-for="publisher in publishers" :key="publisher">{{ publisher }}</option>
                </select>
            </div>
            <div class="book-list">
                <div v-for="(book, index) in filteredBooks" :key="index" class="book">
                    <h3>{{ book.title }}</h3>
                    <p><strong>Năm Xuất Bản:</strong> {{ book.year }}</p>
                    <p><strong>Nhà Xuất Bản:</strong> {{ book.publisher }}</p>
                    <p><strong>Số Lượng:</strong> {{ book.quantity }}</p>
                    <p><strong>Đơn Giá:</strong> {{ book.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Header from '../../components/AppHeader.vue';

export default {
    props: {
    id: { type: String, required: true },
  },
    data() {
        return {
            books: [
                { title: 'Sách 1', year: 2022, publisher: 'Nhà Xuất Bản A', quantity: 10, price: 10000 },
                { title: 'Sách 2', year: 2020, publisher: 'Nhà Xuất Bản B', quantity: 15, price: 15000 },
                { title: 'Sách 3', year: 2021, publisher: 'Nhà Xuất Bản A', quantity: 8, price: 12000 },
                // Thêm dữ liệu sách khác tại đây
            ],
            publishers: [],
            selectedPublisher: ''
        };
    },
    computed: {
        filteredBooks() {
            if (this.selectedPublisher) {
                return this.books.filter(book => book.publisher === this.selectedPublisher);
            }
            return this.books;
        }
    },
    mounted() {
        this.publishers = [...new Set(this.books.map(book => book.publisher))];
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