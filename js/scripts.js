// ==============================
// NAVIGATION LOADER
// ==============================
window.addEventListener('DOMContentLoaded', () => {
  fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      const container = document.createElement('div');
      container.innerHTML = html;
      document.body.prepend(container);
    })
    .catch(err => console.error('Failed to load nav:', err));
});

// ==============================
// CSV TABLE LOADER
// ==============================
function loadCSV(csvUrl, tableId, callback) {
  Papa.parse(csvUrl, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      const data = results.data;
      const headers = results.meta.fields;

      // Build table headers
      const thead = $(`#${tableId} thead tr`);
      thead.empty();
      headers.forEach(h => thead.append(`<th>${h}</th>`));

      // Build table rows
      const tbody = $(`#${tableId} tbody`);
      tbody.empty();
      data.forEach(row => {
        let tr = '<tr>';
        headers.forEach(h => {
          let cell = row[h] || '';
          if(h.toLowerCase().includes('link') || h.toLowerCase().includes('title')) {
            if(cell.startsWith('http')) {
              cell = `<a href="${cell}" target="_blank">${cell}</a>`;
            }
          }
          tr += `<td>${cell}</td>`;
        });
        tr += '</tr>';
        tbody.append(tr);
      });

      // Initialize DataTable
      $(`#${tableId}`).DataTable({
        pageLength: 10,
        order: [[0,'desc']],
        scrollX: true
      });

      // Optional chart callback
      if(callback) callback(data, headers);
    },
    error: function(err){
      console.error(err);
    }
  });
}
