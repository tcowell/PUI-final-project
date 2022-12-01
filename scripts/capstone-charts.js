const ctx = document.getElementById('doughnut-1');
  
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Amount of Feedback'],
            datasets: [{
            data: [300],
            borderWidth: 1,
            backgroundColor: '#6AAA78'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
            },
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Amount of Feedback',
                    position: 'top',
                    align: 'center'
                }
            }
        }
    });

    const ctx2 = document.getElementById('doughnut-2');
  
    var chart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Usability Increase'],
            datasets: [{
            data: [300],
            borderWidth: 1,
            backgroundColor: '#6AAA78'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
            },
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Usability Increase',
                    position: 'top',
                    align: 'center'
                }
            }
        }
    });

    const ctx3 = document.getElementById('doughnut-3');

    var chart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Types of Learning Data'],
            datasets: [{
            data: [300],
            borderWidth: 1,
            backgroundColor: '#6AAA78'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
            },
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Types of Learning Data',
                    position: 'top',
                    align: 'center'
                }
            }
        }
    });