export default class PrimeNumbers {
    static getPrimeNumbers(limit) {
        const primeNumbers = [];
        let currentNumber = 0;
        for(let i = 1; i <= limit; i++) {
            do {
                currentNumber++;
            } while(!PrimeNumbers.isPrime(currentNumber))
            primeNumbers.push(currentNumber);
        }

        return primeNumbers;
    }

    static isPrime(value) {
        if (value === 0 || value === 1) {
            return false;
        }

        const square = PrimeNumbers.getSquareNumber(value);
        for (let i = 2; i <= square; i++) {
            if ((value % i) === 0) {
                return false
            }
        }

        return true;
    }

    static getSquareNumber(value) {
        return Math.sqrt(value);
    }
}
