import { signup, login, logout, getUser } from "./auth.js";
let user = await getUser();
if (user) {
  document.querySelector('.welcomeUser').textContent=`Bienvenue ${user.profil[0].name}` 
}
document.querySelector(".signupLink").addEventListener("click", function (e) {
  document.querySelector(".loginSect").classList.add("hidden");
  document.querySelector(".signupSect").classList.remove("hidden");
  document.querySelector(".formTitle").textContent = "Inscription";
});
document
  .querySelector(".bi-arrow-left-circle")
  .addEventListener("click", function (e) {
    document.querySelector(".signupSect").classList.add("hidden");
    document.querySelector(".loginSect").classList.remove("hidden");
    document.querySelector(".formTitle").textContent = "Connexion";
  });
const loginform = document.querySelector(".loginForm");
const signupForm = document.querySelector(".signupForm");
const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{10,}$/;
console.log(signupForm["name"]);

const statusError = true;
document.getElementById("signupBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  const name = signupForm["name"].value;
  const email = signupForm["emailSignup"].value;
  const pass = signupForm["passSignup"].value;
  const confirmPass = signupForm["confirmPass"].value;
  const errorContainer = document.querySelector(".errorForm");

  let errorMessage = ""; // Initialise une chaîne vide pour les erreurs

  if (!pass.match(passRegex)) {
    !statusError;
    errorMessage +=
      "Mot de passe invalide ! Doit contenir 10 caractères avec majuscule, minuscule et un caractère spécial. <br>";
  }

  if (confirmPass !== pass) {
    !statusError;
    errorMessage += "Les mots de passe ne correspondent pas.<br>";
  }
  errorContainer.innerHTML = errorMessage.trim();
  if (!error) {
    errorMessage.textContent = "Erreur lors de l'inscription.";
  } else {
    const { error } = await signup(email, pass, name);
  }
});


document.getElementById("loginBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = loginform["email"].value;
  const pass = loginform["pass"].value;
  await login(email, pass);
  const user = await getUser();
  if (user) {
    window.location.href = "/";
  } else {
    errorContainer.innerHTML = "Erreur lors de la connexion.";

  }
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await logout();
  document.getElementById("status").textContent = "Déconnecté";
});
