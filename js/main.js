import { signup, login, logout, getUser } from "./auth.js";

document.getElementById("signupBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  await signup(email, pass);
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  await login(email, pass);
  const user = await getUser();
  document.getElementById("status").textContent = user
    ? `Connecté : ${user.email}`
    : "Non connecté";
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await logout();
  document.getElementById("status").textContent = "Déconnecté";
});
