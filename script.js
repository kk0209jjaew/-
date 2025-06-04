new Sortable(filmList, {
  animation: 150
});

function showResult() {
  const listItems = document.querySelectorAll('#filmList li');
  const resultTable = document.getElementById('resultTable');
  const container = document.getElementById('resultContainer');

  resultTable.innerHTML = '<tr><th>순위</th><th>작품</th></tr>';

  listItems.forEach((item, index) => {
    const row = resultTable.insertRow();
    row.insertCell(0).textContent = index + 1;
    row.insertCell(1).textContent = item.textContent;
  });

  container.style.display = 'block';
}
