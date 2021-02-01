const form = document.querySelector('.autorization__form');

form.addEventListener('submit', () => {
  
    fetch('/reg', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        login: form.login.value,
        password: form.password.value,
      }),
    }).then(res => {
      console.log(res);
      const req = res.json();
      console.log(req);
      req.then(answer => {
        console.log(answer);
        error(answer)
      })
    });

  form.reset();
});

function error() {
  const message = document.createElement('div');
  message.classList.add('message__error');
  message.textContent = 'That login has been already'

  document.body.append(message);

  // setInterval(() => message.remove(), 2000);
}