const scripts = [
  "https://code.jquery.com/jquery-3.7.1.min.js",
  "https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js",
  "https://cdn.jsdelivr.net/npm/chart.js",
  "https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"
];

scripts.forEach(src => {
  const s = document.createElement('script');
  s.src = src;
  s.defer = true;
  document.head.appendChild(s);
});
