    const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Project Leadership', 'Data Analysis', 'User Research', 'Instructional Design', 'Programming', 'Cognitive Task Analysis'],
        datasets: [{
          data: [10, 6, 5, 4, 6, 7],
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
        scales: {
          x: {
            ticks: {
                font: {
                    size: 20,
                }
            }
          },
          y: {
            display: false,
            beginAtZero: true
          }
        }
      }
    });
