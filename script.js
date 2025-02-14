const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    Swal.fire("Success!", "Account successfully created!", "success");
  });

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  Swal.fire("Welcome!", "Login successful!", "success");
});
document.querySelectorAll(".icon").forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.3)";
    icon.style.transition = "0.3s";
    icon.style.backgroundColor = "rgb(92, 10, 233)";
    icon.style.borderRadius = "50%";
    icon.style.padding = "5px";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
    icon.style.backgroundColor = "transparent";
  });
});
const text = "Welcome to Aksan Portal";
let index = 0;
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typing-text");

  if (!isDeleting) {
    element.innerHTML = text.substring(0, index);
    index++;
  } else {
    element.innerHTML = text.substring(0, index);
    index--;
  }

  if (index > text.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (index === 0) {
    isDeleting = false;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();
const welcomeText = "Welcome Back to Aksan Portal!";
let welcomeIndex = 0;
let isDeletingWelcome = false;

function typeWelcome() {
  const welcomeElement = document.getElementById("typing-welcome");

  if (!isDeletingWelcome) {
    welcomeElement.innerHTML = welcomeText.substring(0, welcomeIndex);
    welcomeIndex++;
  } else {
    welcomeElement.innerHTML = welcomeText.substring(0, welcomeIndex);
    welcomeIndex--;
  }

  if (welcomeIndex > welcomeText.length) {
    isDeletingWelcome = true;
    setTimeout(typeWelcome, 1000);
  } else if (welcomeIndex === 0) {
    isDeletingWelcome = false;
    setTimeout(typeWelcome, 500);
  } else {
    setTimeout(typeWelcome, isDeletingWelcome ? 50 : 100);
  }
}

typeWelcome();
