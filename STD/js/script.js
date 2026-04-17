const envelope = document.querySelector('.envelope');
  const body = document.body;

  envelope.addEventListener('click', () => {
    body.classList.add('open');
  });