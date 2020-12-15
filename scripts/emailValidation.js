const subscribeForm = document.querySelector(".subscribe__form");
const input = subscribeForm.querySelector(".form__input");
const inputError = subscribeForm.querySelector(".form__input-error");
const btn = subscribeForm.querySelector(".form__btn");

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let emailAddr = input.value;

  if (!emailAddr) {
    input.classList.add("form__input--error");
    inputError.innerHTML = "Whoops! It looks like you forgot to add your email";
    inputError.style.paddingBottom = "1.5rem";
  } else if (!emailRegExp.test(emailAddr)) {
    inputError.innerHTML = "Please provide a valid email address";    
  }
})

input.addEventListener("input", () => {
  input.classList.remove("form__input--error");
  inputError.innerHTML = "";
})