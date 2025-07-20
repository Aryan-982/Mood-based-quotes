const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // serves your frontend

const quotes = {
  happy: [
    "Happiness is a warm puppy. 🐶",
    "Smile, it's free therapy. 😄"
  ],
  sad: [
    "This too shall pass. 🌧️",
    "Crying is how your heart speaks when your lips can’t explain the pain. 💧"
  ],
  angry: [
    "Breathe. It’s just a bad day, not a bad life. 😤",
    "Anger is one letter short of danger. 🚫"
  ],
  chill: [
    "Stay cool like a cucumber. 🥒",
    "Relax, nothing is under control. 😎"
  ]
};

app.get('/quote/:mood', (req, res) => {
  const mood = req.params.mood;
  const moodQuotes = quotes[mood];
  if (moodQuotes) {
    const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
    res.json({ quote: randomQuote });
  } else {
    res.status(404).json({ error: "Mood not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Moodify running at http://localhost:${PORT}`);
});
