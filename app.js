
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
    console.log(clickDay);
    console.log(cTime);

    var val = document.getElementById("input");
    var inputValue = val.value;

    if(clickMonth != currentMonth){
        localStorage.setItem('1','0');
        localStorage.setItem('2','0');
        localStorage.setItem('3','0');
        localStorage.setItem('4','0');
        localStorage.setItem('5','0');
        localStorage.setItem('6','0');
        localStorage.setItem('7','0');
        localStorage.setItem('8','0');
        localStorage.setItem('9','0');
        localStorage.setItem('10','0');
        localStorage.setItem('11','0');
        localStorage.setItem('12','0');
        localStorage.setItem('13','0');
        localStorage.setItem('14','0');
        localStorage.setItem('15','0');
        localStorage.setItem('16','0');
        localStorage.setItem('17','0');
        localStorage.setItem('18','0');
        localStorage.setItem('19','0');
        localStorage.setItem('20','0');
        localStorage.setItem('21','0');
        localStorage.setItem('22','0');
        localStorage.setItem('23','0');
        localStorage.setItem('24','0');
        localStorage.setItem('25','0');
        localStorage.setItem('26','0');
        localStorage.setItem('27','0');
        localStorage.setItem('28','0');
        localStorage.setItem('29','0');
        localStorage.setItem('30','0');
        localStorage.setItem('31','0');
        
    }

    //Day Change
    if (clickDay === currentDay) {
        let prevVal = localStorage.getItem(currentDay)
        let newVal = Number(prevVal) + Number(inputValue)
        localStorage.setItem(currentDay, Number(newVal));
    } else {
        localStorage.setItem(currentDay, Number(inputValue));
    }


    if (clickMonth === currentMonth) {
        let prevVal = localStorage.getItem('Month'+currentMonth)
        let newVal = Number(prevVal) + Number(inputValue)
        localStorage.setItem('Month'+currentMonth, Number(newVal));
    } else {
        localStorage.setItem('Month'+currentMonth, Number(inputValue));
    }


    if (clickYear === currentYear) {
        let prevVal = localStorage.getItem('year')
        let newVal = Number(prevVal) + Number(inputValue)
        localStorage.setItem('year', Number(newVal));
    } else {
        localStorage.setItem('year', Number(inputValue));
    }
    let showElm = document.getElementById("set");
    showElm.innerHTML = `<h1>Today Rs. ${localStorage.getItem(currentDay)}<h1> <h1>This Month Rs. ${localStorage.getItem('Month'+currentMonth)}<h1><h1>This Year Rs. ${localStorage.getItem('year')}<h1>`
    val.value = "";
    JSC.Chart('chartDiv', {
        type: 'column',
        series: [
            {
                points: [
                    { x: '1', y: Number(localStorage.getItem('0')) },
                    { x: '2', y: Number(localStorage.getItem('1')) },
                    { x: '3', y: Number(localStorage.getItem('2')) },
                    { x: '4', y: Number(localStorage.getItem('3')) },
                    { x: '5', y: Number(localStorage.getItem('4')) },
                    { x: '6', y: Number(localStorage.getItem('5')) },
                    { x: '7', y: Number(localStorage.getItem('6')) },
                    { x: '8', y: Number(localStorage.getItem('7')) },
                    { x: '9', y: Number(localStorage.getItem('8')) },
                    { x: '10', y: Number(localStorage.getItem('9')) },
                    { x: '11', y: Number(localStorage.getItem('10')) },
                    { x: '12', y: Number(localStorage.getItem('11')) },
                    { x: '13', y: Number(localStorage.getItem('12')) },
                    { x: '14', y: Number(localStorage.getItem('13')) },
                    { x: '15', y: Number(localStorage.getItem('14')) },
                    { x: '16', y: Number(localStorage.getItem('15')) },
                    { x: '17', y: Number(localStorage.getItem('16')) },
                    { x: '18', y: Number(localStorage.getItem('17')) },
                    { x: '19', y: Number(localStorage.getItem('18')) },
                    { x: '20', y: Number(localStorage.getItem('19')) },
                    { x: '21', y: Number(localStorage.getItem('20')) },
                    { x: '22', y: Number(localStorage.getItem('21')) },
                    { x: '23', y: Number(localStorage.getItem('22')) },
                    { x: '24', y: Number(localStorage.getItem('23')) },
                    { x: '25', y: Number(localStorage.getItem('24')) },
                    { x: '26', y: Number(localStorage.getItem('25')) },
                    { x: '27', y: Number(localStorage.getItem('26')) },
                    { x: '28', y: Number(localStorage.getItem('27')) },
                    { x: '29', y: Number(localStorage.getItem('28')) },
                    { x: '30', y: Number(localStorage.getItem('29')) },
                    { x: '31', y: Number(localStorage.getItem('30')) },

                ]
            }
        ]
    });


}
function press(event) {
    if (event.key === 'Enter') {
        clicked();
    }
}

let showElm = document.getElementById("set");
showElm.innerHTML = `<h1>Today Rs. ${localStorage.getItem(currentDay)}<h1> <h1>This Month Rs. ${localStorage.getItem('Month'+currentMonth)}<h1><h1>This Year Rs. ${localStorage.getItem('year')}<h1>`


JSC.Chart('chartDiv', {
    type: 'column',
    series: [
        {
            points: [
                { x: '1', y: Number(localStorage.getItem('0')) },
                { x: '2', y: Number(localStorage.getItem('1')) },
                { x: '3', y: Number(localStorage.getItem('2')) },
                { x: '4', y: Number(localStorage.getItem('3')) },
                { x: '5', y: Number(localStorage.getItem('4')) },
                { x: '6', y: Number(localStorage.getItem('5')) },
                { x: '7', y: Number(localStorage.getItem('6')) },
                { x: '8', y: Number(localStorage.getItem('7')) },
                { x: '9', y: Number(localStorage.getItem('8')) },
                { x: '10', y: Number(localStorage.getItem('9')) },
                { x: '11', y: Number(localStorage.getItem('10')) },
                { x: '12', y: Number(localStorage.getItem('11')) },
                { x: '13', y: Number(localStorage.getItem('12')) },
                { x: '14', y: Number(localStorage.getItem('13')) },
                { x: '15', y: Number(localStorage.getItem('14')) },
                { x: '16', y: Number(localStorage.getItem('15')) },
                { x: '17', y: Number(localStorage.getItem('16')) },
                { x: '18', y: Number(localStorage.getItem('17')) },
                { x: '19', y: Number(localStorage.getItem('18')) },
                { x: '20', y: Number(localStorage.getItem('19')) },
                { x: '21', y: Number(localStorage.getItem('20')) },
                { x: '22', y: Number(localStorage.getItem('21')) },
                { x: '23', y: Number(localStorage.getItem('22')) },
                { x: '24', y: Number(localStorage.getItem('23')) },
                { x: '25', y: Number(localStorage.getItem('24')) },
                { x: '26', y: Number(localStorage.getItem('25')) },
                { x: '27', y: Number(localStorage.getItem('26')) },
                { x: '28', y: Number(localStorage.getItem('27')) },
                { x: '29', y: Number(localStorage.getItem('28')) },
                { x: '30', y: Number(localStorage.getItem('29')) },
                { x: '31', y: Number(localStorage.getItem('30')) },
            ]
        }
    ]
});
