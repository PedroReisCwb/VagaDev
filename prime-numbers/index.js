import PrimeNumbers from './prime-numbers.js';
import Pagination from './pagination.js';
import PrintArray from './print-array.js';

const MAX_NUMBERS = 1000;
const MAX_COLUMNS = 4;

const numbers = PrimeNumbers.getPrimeNumbers(MAX_NUMBERS);
const pagination = Pagination.create({ data: numbers, limitPerPage: 200 });
const pages = pagination.paginate();
for (let page = 0; page < pages.length; page++) {
    console.log(`Page ${page + 1}`);
    PrintArray.printWithColumns(pages[page], MAX_COLUMNS);
}