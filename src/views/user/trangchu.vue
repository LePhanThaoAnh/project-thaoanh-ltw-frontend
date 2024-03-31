<!-- BookList.vue -->

<template>
  <Header />
  <div class="book-list">
    <h2>Sách mới cập nhật</h2>
    <div class="search-filter">
      <input type="text" v-model="searchQuery" placeholder="Tìm kiếm">
    </div>
    <div class="books">
      <div v-for="book in filteredBooks" :key="book.id" class="book">
        <router-link class="gachchan" :to="{
          name: 'chitietsach',
      }">
        <h3>{{ book.title }}</h3>
        <p>Năm sản xuất: {{ book.year }}</p>
        <p>Nhà xuất bản: {{ book.publisher }}</p>
        <p>Số quyển: {{ book.quantity }}</p>
        <p>Đơn giá: {{ book.price }}</p>
        </router-link>
        <router-link class="gachchan" :to="{
          name: 'muonsach',
      }"><button class="muonsach" >MƯỢN SÁCH</button></router-link>
      </div>
    </div>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>Trang {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/AppHeader.vue';

export default {
  data() {
    return {
      books: [
        { id: 1, title: 'Vì sao đưa anh đến', year: 2022, publisher: 'Nhà xuất bản A', quantity: 10, price: 10000 },
        { id: 2, title: 'Hóa ra anh vẫn ở đây', year: 2020, publisher: 'Nhà xuất bản B', quantity: 15, price: 15000 },
        { id: 3, title: 'Năm tháng vội vã', year: 2021, publisher: 'Nhà xuất bản A', quantity: 8, price: 12000 },
        { id: 4, title: 'Vì sao đưa anh đến', year: 2022, publisher: 'Nhà xuất bản A', quantity: 10, price: 10000 },
        { id: 5, title: 'Hóa ra anh vẫn ở đây', year: 2020, publisher: 'Nhà xuất bản B', quantity: 15, price: 15000 },
        { id: 6, title: 'Năm tháng vội vã', year: 2021, publisher: 'Nhà xuất bản A', quantity: 8, price: 12000 },
        { id: 7, title: 'Vì sao đưa anh đến', year: 2022, publisher: 'Nhà xuất bản A', quantity: 10, price: 10000 },
        { id: 8, title: 'Hóa ra anh vẫn ở đây', year: 2020, publisher: 'Nhà xuất bản B', quantity: 15, price: 15000 },
        { id: 9, title: 'Năm tháng vội vã', year: 2021, publisher: 'Nhà xuất bản A', quantity: 8, price: 12000 },
        { id: 10, title: 'Vì sao đưa anh đến', year: 2022, publisher: 'Nhà xuất bản A', quantity: 10, price: 10000 },
        { id: 11, title: 'Hóa ra anh vẫn ở đây', year: 2020, publisher: 'Nhà xuất bản B', quantity: 15, price: 15000 },
        { id: 12, title: 'Năm tháng vội vã', year: 2021, publisher: 'Nhà xuất bản A', quantity: 8, price: 12000 },
        { id: 13, title: 'Hóa ra anh vẫn ở đây', year: 2020, publisher: 'Nhà xuất bản B', quantity: 15, price: 15000 },
        { id: 14, title: 'Năm tháng vội vã', year: 2021, publisher: 'Nhà xuất bản A', quantity: 8, price: 12000 },
      ],
      searchQuery: '',
      currentPage: 1,
      pageSize: 12, 
    };
  },
  components: {
    Header,
  },
  computed: {
    filteredBooks() {
      let filtered = this.books;
      if (this.searchQuery) {
        filtered = filtered.filter(book => 
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return filtered;
    },
    publishers() {
      return [...new Set(this.books.map(book => book.publisher))];
    },
    totalPages() {
      return Math.ceil(this.filteredBooks.length / this.pageSize);
    },
    paginatedBooks() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredBooks.slice(startIndex, endIndex);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>


<style>
.book-list {
  max-width: 1000px;
  margin: auto;
}

.search-filter {
  margin-bottom: 1rem;
}
.books {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}
.book {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 0px;
}
.muonsach {
  border: none;
  bottom: 10px;
  cursor: pointer;
  background: linear-gradient(to right, #fc00ff, #00dbde);
}
.muonsach:hover{

  background: linear-gradient(to right, #fc466b, #3f5efb); 
}
h2{
  font-family: ui-rounded;
    margin-top: 8px;
}
a.gachchan, a.gachchan{
  text-decoration: none;
  color: inherit;
}

</style>
