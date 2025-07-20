const moodBtns = document.querySelectorAll('.mood-btn');
const quoteElem = document.getElementById('quote');
const randomizeBtn = document.getElementById('randomize-btn');
let currentMood = null;

async function fetchQuote(mood) {
  try {
    const res = await fetch(`/quote/${mood}`);
    if (!res.ok) throw new Error('No quote found');
    const data = await res.json();
    return data.quote;
  } catch (e) {
    return 'Could not fetch quote. Try again.';
  }
}

function showQuote(quote) {
  quoteElem.style.opacity = 0;
  setTimeout(() => {
    quoteElem.textContent = quote;
    quoteElem.style.opacity = 1;
  }, 250);
}

moodBtns.forEach(btn => {
  btn.addEventListener('click', async () => {
    moodBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMood = btn.dataset.mood;
    randomizeBtn.disabled = false;
    const quote = await fetchQuote(currentMood);
    showQuote(quote);
  });
});

randomizeBtn.addEventListener('click', async () => {
  if (currentMood) {
    const quote = await fetchQuote(currentMood);
    showQuote(quote);
  }
}); 