// Email validation

const team_email = document.querySelector('#team_email');

team_email.addEventListener('keyup', emailValidation);

const email_regex = /^[\w\d.!#$%&'*+/=?^_`{|}~-]+@[\w\d-]+\.([\w\d-]+)*$/;

function emailValidation() {
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

// check description length
const textarea = document.querySelector('#team__description');
const textarea_check = document.querySelector('.textarea__length--check');

textarea.addEventListener('change', checkTextLength);
function checkTextLength() {
  let text_length = textarea.value.length;
  if (text_length > 200) {
    textarea.style.border = 'solid 2px red';
    textarea_check.textContent = 'Too long!';
  } else {
    textarea.style.border = 'solid 2px green';
  }
}

// Client request form
// // not entirely sure if this is needed
document.querySelector('form').onsubmit = (event) => {
  event.preventDefault();
  validateWorkRequest(event.target.elements.work);
};
//
// variables that will be compared against or changed
const validemail = /\S+@\S+\.\S+/; //double-check
let validornot = '';
let requestDetails = [];
const robotString = 'Honestly, I really am not a robot.';
const wrLength = 300;
// get and name the textarea values
const clientinput = document.getElementById('clientname');
const cemailinput = document.getElementById('clientemail');
const workinput = document.getElementById('workrequest');
const robotinput = document.getElementById('verifyrobot');
const robotoutput = document.querySelector('.verifystring');
robotoutput.innerHTML = robotString;
// const confirmedrequest = document.querySelector(".confirmrequest"); // only used when using innerHTML
const checkedemail = document.querySelector('.checkemail');
const checkedwrlength = document.querySelector('.checkwr');
const verifiedrobot = document.querySelector('.verified');
// check email address as it's typed
cemailinput.addEventListener('keyup', function () {
  checkedemail.innerHTML = cemailinput.value;
  validateCEmail(cemailinput.value);
});
// check work request length as it's typed
workinput.addEventListener('keyup', function () {
  validateWorkRequest(workinput.value.length);
});
// check robot verification as it's typed
robotinput.addEventListener('keyup', function () {
  robotVerification(robotinput.value);
});
// on submitting the form, check again and write back to page
// console.dir(requestDetails);
const submitBtn = document.getElementById('submitWR');
submitBtn.addEventListener('click', function () {
  requestDetails = [
    'Work request description',
    `name: ${clientinput.value}`,
    `email: ${cemailinput.value}`,
    `work request: ${workinput.value}`,
  ];
  // console.log(cemailinput.value, workinput.value.length, robotinput.value, requestDetails);
  console.log(requestDetails);
  validateCEmail(cemailinput.value);
  validateWorkRequest(workinput.value.length);
  robotVerification(robotinput.value);
  const ul = generateWRDescription(requestDetails);
  if (ul) {
    submitBtn.insertAdjacentElement('afterend', ul);
  }
});
// validator functions
// check email name@domain.com/co.uk/etc using regex set above
function validateCEmail(address) {
  if (validemail.test(address)) {
    cemailinput.setAttribute('aria-invalid', false);
    validornot = ' -> valid email.';
  } else {
    cemailinput.setAttribute('aria-invalid', true);
    validornot = ' -> invalid email. Check and re-enter';
  }
  checkedemail.innerHTML = cemailinput.value + validornot;
}
// check length of work request which is set above
function validateWorkRequest(length) {
  if (length > wrLength) {
    workinput.setAttribute('aria-invalid', true);
    checkedwrlength.innerHTML = `Work request is too long, ${length} characters. Check and edit`;
  } else {
    workinput.setAttribute('aria-invalid', false);
    checkedwrlength.innerHTML = `Work request is ok, ${length} characters.`;
  }
}
// checking against a verification phrase set above
function robotVerification(phraseCheck) {
  if (phraseCheck === robotString) {
    verifiedrobot.innerHTML = `I have seen things you people would not believe.\n
    Attack ships on fire off the shoulder of Orion... \n
    But I believe you are not a robot, you may submit your request.`;
    robotinput.setAttribute('aria-invalid', false);
  } else {
    verifiedrobot.innerHTML = `Danger, Will Robinson. \n
    You seem to be a robot. \n
    Check and re-enter.`;
    robotinput.setAttribute('aria-invalid', true);
  }
}
// confirming the request submitted by writing to page
function generateWRDescription(wrArray) {
  // confirmedrequest.innerHTML = requestDetails;
  console.dir(wrArray);
  const ulelement = document.createElement('ul');
  console.log(ulelement);
  wrArray.forEach((element) => {
    console.log(element);
    const lielement = document.createElement('li');
    const inputitem = document.createTextNode(element);
    lielement.appendChild(inputitem);
    ulelement.appendChild(lielement);
  });
  return ulelement;
}
// use style sheet to remove the bullets

// present member info when clicking "add member" button

const add_mem_btn = document.querySelector('.btn__add');

const mem_name = document.querySelector('#name');

const mem_des = document.querySelector('#team__description');

const mem_email = document.querySelector('#team__email');

const mem_img = document.querySelector('input[type=file]');

add_mem_btn.addEventListener('click', createInfo);

const team = document.querySelector('.team');

function createInfo() {
  let div = document.createElement('div');
  div.setAttribute('class', 'team__member');

  let nameP = document.createElement('p');
  nameP.setAttribute('class', 'team__member--name');

  let uploadImg = document.createElement('img');
  let reader = new FileReader();
  uploadImg.setAttribute('class', 'img__penguin');

  let p = document.createElement('p');

  nameP.textContent = mem_name.value;
  uploadImg.src = reader.result;
  p.textContent = mem_des.value;

  div.append(nameP);
  div.append(uploadImg);
  div.append(p);

  team.append(div);
}
