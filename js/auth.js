import { supabase } from "./supabaseClient.js"; 

// Fonction d'inscription
export async function signup(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error("Erreur d'inscription :", error.message);
    return;
  }

  const userId = data.user?.id;

  if (userId) {
    const { error: insertError } = await supabase
      .from("profils")
      .insert([{ id: userId }]);

    if (insertError) {
      console.error(
        "Erreur lors de l'insertion du profil :",
        insertError.message
      );
    } else {
      console.log("Profil inséré !");
    }
  }

  console.log("Utilisateur inscrit !", data.user);
}

// Fonction de connexion
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error.message);
  } else {
    console.log("Connecté !", data.user);
  }
}

// Fonction de déconnexion
export async function logout() {
  await supabase.auth.signOut();
  console.log("Déconnecté");
}

// Récupérer l’utilisateur connecté
export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}