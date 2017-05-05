$(document).ready(function () {
    var context = document.getElementById('options').getContext('2d');

    var data = {
        labels: [
            "Java",
            "C++",
            "UNIX",
            "Android",
            "HTML",
            "CSS",
            "JS"
        ],
        datasets: [{
                data: [65, 10, 10, 10, 2, 2, 2],
                backgroundColor: [
                    "#1FBED6",//java
                    "#2292a7",//C++
                    "#a80030",//unix
                    "#a4c639",//android
                    "#e34f26",//html
                    "#fcd000",//css
                    "#f4dc2a"//js
                ],
                hoverBorderWidth: 1,
                hoverBorderColor: "#eee"
            }]
    };

    var pieOptions = {
        segmentShowStroke : true,
        animateScale : true,
        rotation: 150,
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        }
    };

    var myPieChart = new Chart(context, {
        type: 'pie',
        data: data,
        options: pieOptions
    });

});
