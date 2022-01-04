
let date = new Date();
let currentDay = date.getDay();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

function clicked() {
    let date = new Date();
    let clickDay = date.getDay();
    let clickYear = date.getFullYear();
    let clickMonth = date.getMonth();

    var val = document.getElementById("input");
    var inputValue = val.value;
    console.log(inputValue);

    //Day Change
    if (clickDay === currentDay) {
        let prevVal = localStorage.getItem('today')
        let newVal = Number(prevVal) + Number(inputValue)
        console.log('stored = ' + newVal);
        localStorage.setItem('today', Number(newVal));
    } else {
        localStorage.setItem('today', Number(inputValue));
    }


    if (clickMonth === currentMonth) {
        let prevVal = localStorage.getItem('month')
        let newVal = Number(prevVal) + Number(inputValue)
        console.log('stored month = ' + newVal);
        localStorage.setItem('month', Number(newVal));
    } else {
        localStorage.setItem('month', Number(inputValue));
    }


    if (clickYear === currentYear) {
        let prevVal = localStorage.getItem('year')
        let newVal = Number(prevVal) + Number(inputValue)
        console.log('stored = ' + newVal);
        localStorage.setItem('year', Number(newVal));
    } else {
        localStorage.setItem('year', Number(inputValue));
    }
    let showElm = document.getElementById("set");
    showElm.innerHTML = `<h1>Today's = ${localStorage.getItem('today')}<h1> <h1>This Month = ${localStorage.getItem('month')}<h1><h1>This Year = ${localStorage.getItem('year')}<h1>`




}
function press(event) {
    if (event.key === 'Enter') {
        clicked();
    }
}

let showElm = document.getElementById("set");
showElm.innerHTML = `<h1>Today's = ${localStorage.getItem('today')}<h1> <h1>This Month = ${localStorage.getItem('month')}<h1><h1>This Year = ${localStorage.getItem('year')}<h1>`
