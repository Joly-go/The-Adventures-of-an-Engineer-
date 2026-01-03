
function saveProgress(volId, chapIdx){
  const data = {volId: volId, chapIdx: chapIdx, ts: Date.now()};
  localStorage.setItem('book_progress', JSON.stringify(data));
  alert('Прогресс сохранён: ' + volId + ' глава ' + (chapIdx+1));
}
function continueReading(){
  const raw = localStorage.getItem('book_progress');
  if(!raw){ alert('Прогресс не найден'); return; }
  const data = JSON.parse(raw);
  const path = 'chapters/' + data.volId + '/ch' + String(data.chapIdx+1).padStart(2,'0') + '.html';
  window.location.href = path;
}
function markOpened(volId, chapIdx){
  localStorage.setItem('book_last_opened', JSON.stringify({volId:volId, chapIdx:chapIdx, ts:Date.now()}));
}
