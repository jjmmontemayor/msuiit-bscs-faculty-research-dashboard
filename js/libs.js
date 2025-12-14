const scripts = [
  // jQuery (must be first)
  "https://code.jquery.com/jquery-3.7.1.min.js",

  // PapaParse (CSV loader)
  "https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js",

  // Chart.js
  "https://cdn.jsdelivr.net/npm/chart.js",

  // DataTables core
  "https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js",

  // DataTables Buttons
  "https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js",

  // Excel / CSV export dependencies
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
  "https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js"
];

(function loadScriptsSequentially(index = 0) {
  if (index >= scripts.length) return;

  const script = document.createElement("script");
  script.src = scripts[index];
  script.defer = true;
  script.onload = () => loadScriptsSequentially(index + 1);
  document.head.appendChild(script);
})();
