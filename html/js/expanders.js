(() => {
  const expanders = document.querySelectorAll('.expander');

  for (const expander of expanders) {
    expander.addEventListener('click', () => {
      expander.dataset.expanded = !JSON.parse(expander.dataset.expanded);
    })
  }
})()