// part 8 lesson 4

const correctAnswers = ['B', 'A', 'B', 'A'];

let form = document.querySelector('.quiz-form');
form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // checking answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    console.log(score);
});

// part 8 lesson 5
