function generateBarChart(data, yearField, canvasId, labelText) {
  const yearCounts = {};
  data.forEach(row => {
    const year = row[yearField];
    if(year) yearCounts[year] = (yearCounts[year] || 0) + 1;
  });

  const chartLabels = Object.keys(yearCounts).sort();
  const chartData = chartLabels.map(y => yearCounts[y]);

  new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: labelText,
        data: chartData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: labelText }
      },
      scales: { y: { beginAtZero: true, precision: 0 } }
    }
  });
}
