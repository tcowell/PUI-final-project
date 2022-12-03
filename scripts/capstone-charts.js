
// First doughnut chart
const ctx = document.getElementById('doughnut-1');
  
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [300],
        borderWidth: 1,
        backgroundColor: '#6AAA78'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: '3x increase in Amount of Feedback',
                position: 'top',
                align: 'center',
                font: {
                    size: 20
                }
            },
            legend: {
                display: false
            },
        }
    },
});


// Second doughnut chart
const ctx2 = document.getElementById('doughnut-2');
  
var chart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [300],
        borderWidth: 1,
        backgroundColor: '#6AAA78'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: '20% Usability Increase',
                position: 'top',
                align: 'center',
                font: {
                    size: 20
                }
            },
            legend: {
                display: false
            },
        }
    }
});


// Third doughnut chart
const ctx3 = document.getElementById('doughnut-3');

var chart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [300],
        borderWidth: 1,
        backgroundColor: '#6AAA78'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: '2x increase in Types of Learning Data',
                position: 'top',
                align: 'center',
                font: {
                    size: 20
                }
            },
            legend: {
                display: false
            },
        }
    }
});
