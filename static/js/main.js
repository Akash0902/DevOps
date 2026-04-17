const form = document.getElementById('quiz-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {};
    new FormData(form).forEach((v, k) => data[k] = v);
    const res = await fetch('/api/quiz/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const r = await res.json();
    document.getElementById('result').innerHTML = `
      <div class="card">
        <h2>Your Score: ${r.score}/${r.total} (${r.percent}%)</h2>
        <p><strong>Recommended next certification:</strong></p>
        <p class="accent" style="font-size:1.2rem">${r.recommendation}</p>
        <a class="btn ghost" href="/certifications">See all certifications →</a>
      </div>`;
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
  });
}
