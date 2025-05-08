const sifatlar = [
  { so'z: "chiroyli", sinonimlar: ["go‘zal", "ko‘rkam"] },
  { so'z: "katta", sinonimlar: ["yirik", "ulkan"] },
  { so'z: "quvnoq", sinonimlar: ["sho‘x", "shod"] },
  { so'z: "oq", sinonimlar: ["oq rangli", "yorug‘"] }
];

const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = sifatlar.filter(item => item.so'z.includes(query));
  resultsDiv.innerHTML = '';

  filtered.forEach(item => {
    const el = document.createElement('div');
    el.innerHTML = <strong>${item.so'z}</strong>: ${item.sinonimlar.join(', ')};
    resultsDiv.appendChild(el);
  });

  if (filtered.length === 0 && query.length > 0) {
    resultsDiv.innerHTML = '<i>Hech narsa topilmadi.</i>';
  }
});
