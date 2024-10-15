document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    // Mostra o sumário ao passar o mouse
    sidebarToggle.addEventListener('mouseenter', function () {
        sidebar.classList.add('visible');
    });

    // Esconde o sumário ao sair do mouse
    sidebarToggle.addEventListener('mouseleave', function () {
        sidebar.classList.remove('visible');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Perguntas corretas
        const correctAnswers = ['a', 'b', 'a', 'c', 'a'];
        let score = 0;

        // Verifica as respostas
        for (let i = 0; i < correctAnswers.length; i++) {
            const question = form['q' + (i + 1)];
            const selectedAnswer = [...question].find(input => input.checked);
            if (selectedAnswer && selectedAnswer.value === correctAnswers[i]) {
                score++;
            }
        }

        // Exibe o resultado
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.textContent = Você acertou ${score} de ${correctAnswers.length} perguntas!;
        form.appendChild(resultDiv);
    });
});
function readPage() {
    // Capture the body content
    const bodyText = document.body.innerText;

    // Create a new instance of SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(bodyText);

    // Set some optional properties
    utterance.lang = 'en-US'; // You can set this to other languages like 'pt-BR' for Portuguese
    utterance.pitch = 1; // You can change pitch (range: 0 to 2)
    utterance.rate = 1; // You can change rate (range: 0.1 to 10)
    utterance.volume = 1; // Volume control (range: 0 to 1)

    // Speak the text
    speechSynthesis.speak(utterance);
}
