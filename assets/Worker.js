class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate; //ставка за день работы
        this.days = days;
    }
    getSalary() { //з/п
        let multiply = this.rate * this.days;
        return ('В этом месяце Вы заработали: ' + multiply + ' y.e.');
    }
}
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31