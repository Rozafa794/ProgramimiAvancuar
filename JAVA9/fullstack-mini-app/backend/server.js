const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Lidhja me MongoDB – përdor variabël ose rezervë
const mongoUrl = process.env.MONGO_URL || 'mongodb://mongo:27017/notesdb';

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

const Note = mongoose.model('Note', { text: String });

// Merr të gjitha notat
app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Shto një note të re
app.post('/notes', async (req, res) => {
  const note = new Note({ text: req.body.text });
  await note.save();
  console.log('📥 Saved note:', note);
  res.json(note);
});

// Fshij një note sipas ID
app.delete('/notes/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));

