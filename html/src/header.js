const header = document.querySelector('.header');

if (!header) throw new Error('Header element not found.');

const expander = header.querySelector('.header__expand');

if (!expander) throw new Error('Expander element not found inside of header.');

expander.addEventListener('click', () => {
  (() => {
    if (header.classList.contains('h-screen')) {
      header.classList.remove('h-screen');
    } else {
      header.classList.add('h-screen');
    }
  })();
  (() => {
    const icon = expander.querySelector(".header__expand__icon");
    
    if (!icon) return;
    
    if (icon.classList.contains('rotate-180')) {
      icon.classList.remove('rotate-180');
    } else {
      icon.classList.add('rotate-180');
    }
  })();
  (() => {
    const content = header.querySelector('.header__content');
    
    if (!content) return;
    
    if (content.classList.contains('h-screen')) {
      content.classList.remove('h-screen');
      content.classList.add('h-0');
    } else if (content.classList.contains('h-0')) {
      content.classList.remove('h-0');
      content.classList.add('h-screen');
    }
  })();
})
