let submit = document.querySelector('.submit');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let form = document.getElementById("form");
let timeMsg = document.querySelector('.timesup');
let inputs = document.querySelectorAll('input[type="radio"]');

let correctAnswers = [];

window.onload = () => {
  const category = localStorage.getItem('selectedCategory');
  if (category) {
    fetch(`https://the-trivia-api.com/v2/questions?categories=${category}&limit=10`)
      .then(res => res.json())
      .then(data => {
        const ol = form.querySelector('ol');
        ol.innerHTML = ''; // clear dummy question

        for (let i = 0; i < 10; i++) {
          const question = data[i];
          correctAnswers[i] = question.correctAnswer;

          // Shuffle options
          const options = [...question.incorrectAnswers];
          const randIndex = Math.floor(Math.random() * 4);
          options.splice(randIndex, 0, question.correctAnswer);

          // Create LI
          const li = document.createElement('li');
          const label = document.createElement('label');
          label.id = `q${i + 1}`;
          label.textContent = question.question.text;
          li.appendChild(label);

          // Add radio buttons
          for (let j = 0; j < 4; j++) {
            const input = document.createElement('input');
            const span = document.createElement('span');
            const lineBreak = document.createElement('br');

            input.type = 'radio';
            input.name = `q${i + 1}`;
            input.id = `q${i + 1}${String.fromCharCode(97 + j)}`;
            input.value = options[j];

            span.id = `q${i + 1}${j + 1}`;
            span.textContent = options[j];

            li.appendChild(input);
            li.appendChild(span);
            li.appendChild(lineBreak);
          }

          ol.appendChild(li);
        }
      })
      .catch(err => console.error('Error fetching questions:', err));
  } else {
    console.error('No category selected!');
  }
};

// Only one submit handler
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  const formData = new FormData(form);

  for (let i = 1; i <= 10; i++) {
    const selected = formData.get(`q${i}`);
    if (selected === correctAnswers[i - 1]) {
      score++;
    }
  }

  sessionStorage.setItem("score", score);
  window.open("./result.html", "_blank");
});

// Timer logic
min.innerHTML = '05';
sec.innerHTML = '00';

let interval = setInterval(() => {
  let m = parseInt(min.innerHTML, 10);
  let s = parseInt(sec.innerHTML, 10);

  if (m === 0 && s === 0) {
    clearInterval(interval);
    timeMsg.innerHTML = "Time's Up!! No longer responses accepted.";
    inputs.forEach(i => i.disabled = true);
    submit.click();
    return;
  }

  if (s === 0) {
    m -= 1;
    s = 59;
  } else {
    s -= 1;
  }

  min.innerHTML = `${m}`.padStart(2, '0');
  sec.innerHTML = `${s}`.padStart(2, '0');
}, 1000);
