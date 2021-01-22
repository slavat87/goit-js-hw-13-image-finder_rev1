const url = 'https://pixabay.com/api/';
const apiKey = '19848074-61d1ecc26c8ce39d23ee5357a';

export default {
  searchQuery: '',
  page: 1,
  perPage: 12,
  totalItems: 0,
  fetchCard() {
    const search = `${url}?image_type=photo&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&orientation=horizontal&key=${apiKey}`;

    return fetch(search)
      .then(res => res.json())
      .then(({ hits, totalHits }) => {
        this.totalItems = totalHits;
        if (hits.length === 0) {
          throw new Error('Error fetching data');
        }
        return { hits, page: this.page };
      })
      .catch(error => {
        console.log(
          'Nothing was found for your request. Enter the correct request',
        );
        return error;
      });
  },

  reset() {
    this.page = 1;
  },

  get newPage() {
    return this.page;
  },

  set newPage(value) {
    this.page = value;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
