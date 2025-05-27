const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');  // Altera o tema do body
  toggleButton.classList.toggle('dark'); // Altera a classe do botão
});
