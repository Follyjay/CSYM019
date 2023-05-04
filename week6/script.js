function myLoadFunction() {
    const ctx = document.getElementById('myChart').getContext('2d');
    var myChartConfig = {
        type: 'scatter',
        data: {
            labels: ['Nigeria', 'Ghana', 'Togo', 'South Africa', 'Kenya'],
            /* The two datasets are given below as twi items in an array of json objects, i.e. [{}, {}]*/
            datasets: [
            {
                type: 'bar',
                label: 'Population Dataset',
                data: [12000000, 1900000, 3000000, 5000000, 2340000, 15000000],
                backgroundColor: [
                    "red",
                    "blue",
                    "yellow",
                    "green",
                    "purpple"
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }     
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    const myChart = new Chart(ctx, myChartConfig);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);