const form = document.getElementById('noteForm');
const notesList = document.getElementById('notes');

// Ngarkon notat nga serveri dhe i shfaq
const loadNotes = async () => {
  const res = await fetch('http://localhost:3001/notes');
  const notes = await res.json();
  renderNotes(notes);
};

// Renderon notat në UI dhe shton butonin DELETE
function renderNotes(notes) {
  const ul = document.createElement('ul');
  notes.forEach(note => {
    const li = document.createElement('li');
    li.textContent = note.text;

    // Butoni DELETE
    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑️';
    delBtn.style.marginLeft = '10px';
    delBtn.onclick = () => deleteNote(note._id);

    li.appendChild(delBtn);
    ul.appendChild(li);
  });
  notesList.innerHTML = '';
  notesList.appendChild(ul);
}

// Fshin një note sipas ID-së nga serveri dhe rifreskon listën
function deleteNote(id) {
  if (confirm("A je i sigurt që dëshiron ta fshish këtë note?")) {
    fetch(`http://localhost:3001/notes/${id}`, {
      method: 'DELETE'
    })
    .then(() => loadNotes());
  }
}

// Event për shtimin e notes së re
form.addEventListener('submit', async e => {
  e.preventDefault();
  const text = document.getElementById('noteText').value;
  await fetch('http://localhost:3001/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  form.reset();
  loadNotes();
});

// Ngarko notat kur faqja hapet
loadNotes();
