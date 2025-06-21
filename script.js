const form = document.getElementById('registrationForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordMessage = document.getElementById('passwordMessage');
const popup = document.getElementById('popup');

confirmPassword.addEventListener('input', () => {
  if (password.value !== confirmPassword.value) {
    passwordMessage.textContent = 'Passwords do not match!';
  } else {
    passwordMessage.textContent = '';
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (password.value === confirmPassword.value) {
    popup.style.display = 'flex';
    form.reset();
  } else {
    passwordMessage.textContent = 'Passwords do not match!';
  }
});

function closePopup() {
  popup.style.display = 'none';
}
