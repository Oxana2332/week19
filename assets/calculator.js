class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    static getSum(num1, num2) {
        let sum = Number(num1) + Number(num2);
        document.getElementById('out').innerHTML = sum;
    }

    static getMinus(num1, num2) {
        let minus = Number(num1) - Number(num2);
        document.getElementById('out').innerHTML = minus;
    }

    static getMultiply(num1, num2) {
        let multiply = Number(num1) * Number(num2);
        document.getElementById('out').innerHTML = multiply;
    }

    static getDivision(num1, num2) {
        let division = Number(num1) / Number(num2);
        document.getElementById('out').innerHTML = division;
    }
}