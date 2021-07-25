// Email validation

const team_email = document.querySelector('#team_email');

team_email.addEventListener('keyup', emailValidation);

function emailValidation() {
  let email_regex = /^[\w\d.!#$%&'*+/=?^_`{|}~-]+@[\w\d-]+\.([\w\d-]+)*$/;
  let value = team_email.value;
  let email_span = document.querySelector('.email_validation');

  if (email_regex.test(value)) {
    team_email.style.border = 'solid 2px green';
    email_span.textContent = 'Email is ok!';
  } else {
    team_email.style.border = 'solid 2px red';
    email_span.textContent = 'Email is invalid!';
  }
}

// password checker
const btn_password = document.querySelector('#btn__password');
const team_password = document.querySelector('#team__password');
const password_span = document.querySelector('.team__password--checker');

btn_password.addEventListener('click', checkPassword);

function checkPassword() {
  const password = 'jisa987!';
  if (team_password.value !== password) {
    password_span.textContent = 'Check your password again!';
  } else {
    password_span.textContent = 'Correct!';
  }
}
