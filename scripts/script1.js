let formObject = sessionStorage.getItem("formObject")
let formData = JSON.parse(formObject)
let q1=document.getElementById('q1')
let result=document.getElementById('result')
let points=document.querySelector('.points')

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


let score = sessionStorage.getItem("score")
points.innerHTML=score