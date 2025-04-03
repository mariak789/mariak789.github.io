document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
        if (openAnswer !== answer) {
          openAnswer.classList.remove('open');
        }
      });

      answer.classList.toggle('open');
    });
  });
});