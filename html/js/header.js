const header = document.querySelector('.header');

if (!header) throw new Error('Header element not found.');

const expanders = header.querySelectorAll('.header__expand');

if (!expanders.length) throw new Error('Expander element not found inside of header.');

expanders.forEach((expander) => {
  expander.addEventListener('click', () => {
    header.dataset.expanded = !JSON.parse(header.dataset.expanded);
  })
})
