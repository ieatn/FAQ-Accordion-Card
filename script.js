const buttons = document.querySelectorAll('.accordion-question');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    // stop user from spamming button
    if (!button.classList.contains('collapsing')) {
      // if button is closed, show answer
      if (!button.classList.contains('open')) {
        content.style.display = 'block'
        let height = content.clientHeight

        // set height of answer container to its current value so animation can smoothly expand height
        setTimeout(() => {
          content.style.height = height + 'px'
          content.style.display = ''
        }, 1)

        content.classList = 'accordion-collapse collapsing'

        // show answer
        setTimeout(() => {
          content.classList = 'accordion-collapse collapse open'
        }, 300)
      
      // close accordion
      } else {
        // remove open
        content.classList = 'accordion-collapse collapsing'

        // set height of answer back to 0 when closed
        setTimeout(() => {
          content.style.height = '0px';
        }, 1);

        // add collapse
        setTimeout(() => {
          content.classList = 'accordion-collapse collapse'
          content.style.height = ''
        }, 300)
      }
      button.classList.toggle('open');
    }
  });
});
