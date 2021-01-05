var ctx = document.getElementById('line-chart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Line Chart',
                data: [12, 10, 3, 5, 7, 8],
                fill:false,
                lineTension:0,
                pointBackgroundColor:"red",
                borderColor:"black"
            }]
        },
        options: {
            responsive:true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });