
let date = new Date();
let currentDay = date.getDay();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

function clicked() {
    let date = new Date();
    let clickDay = date.getDay();
    let clickYear = date.getFullYear();
    let clickMonth = date.getMonth();
    let cTime = date.getHours();

    var val = document.getElementById("input");
    var inputValue = val.value;
    console.log(inputValue);
    console.log(cTime);

    //Day Change
    if (clickDay === currentDay) {
        let prevVal = localStorage.getItem('today')
        let newVal = Number(prevVal) + Number(inputValue)
        localStorage.setItem('today', Number(newVal));
    } else {
        localStorage.setItem('today', Number(inputValue));
    }


    if (clickMonth === currentMonth) {
        let prevVal = localStorage.getItem('month')
        let newVal = Number(prevVal) + Number(inputValue);
        localStorage.setItem('month', Number(newVal));
    } else {
        localStorage.setItem('month', Number(inputValue));
    }


    if (clickYear === currentYear) {
        let prevVal = localStorage.getItem('year')
        let newVal = Number(prevVal) + Number(inputValue)
        localStorage.setItem('year', Number(newVal));
    } else {
        localStorage.setItem('year', Number(inputValue));
    }
    let showElm = document.getElementById("set");
    showElm.innerHTML = `<h1>Today Rs. ${localStorage.getItem('today')}<h1> <h1>This Month Rs. ${localStorage.getItem('month')}<h1><h1>This Year Rs. ${localStorage.getItem('year')}<h1>`
    val.value = "";



}
function press(event) {
    if (event.key === 'Enter') {
        clicked();
    }
}

let showElm = document.getElementById("set");
showElm.innerHTML = `<h1>Today Rs. ${localStorage.getItem('today')}<h1> <h1>This Month Rs. ${localStorage.getItem('month')}<h1><h1>This Year Rs. ${localStorage.getItem('year')}<h1>`
