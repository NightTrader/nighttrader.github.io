const expanders = document.querySelectorAll('.expander');

for (const expander of expanders) {
  expander.addEventListener('click', () => {
    (() => {
      const content = expander.querySelector('.expander__body');

      if (!content) return;

      if (content.classList.contains('max-h-0')) {
        content.classList.remove('max-h-0');
        content.classList.add('max-h-40');
      } else if (content.classList.contains('max-h-40')) {
        content.classList.remove('max-h-40');
        content.classList.add('max-h-0');
      }
    })();

    (() => {
      const chevron = expander.querySelector('.expander__chevron');

      if (!chevron) return;

      if (chevron.classList.contains('rotate-180')) {
        chevron.classList.remove('rotate-180');
      } else {
        chevron.classList.add('rotate-180');
      }
    })();
  })
}