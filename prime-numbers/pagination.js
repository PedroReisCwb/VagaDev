export default class Pagination {
    constructor({ data, limitPerPage }) {
        this.data = data;
        this.limitPerPage = limitPerPage;
    }

    static create(props) {
        return new Pagination(props);
    }

    paginate() {
        let totalPages = this.getTotalPages();
        const pages = [];
        for(let currentPage = 1; currentPage <= totalPages; currentPage++) {
            const items = this.getPageItems(currentPage);
            pages.push(items);
        }
        return pages;
    }

    setLimitPerPage(limitPerPage) {
        this.limitPerPage = limitPerPage;
    }

    setData(data) {
        this.data = data;
    }

    getTotalPages() {
        return Math.ceil(this.data.length / this.limitPerPage);
    }

    getPageItems(page) {
        return this.data.slice((page - 1) * this.limitPerPage, page * this.limitPerPage);
    }
}