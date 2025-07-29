function verificarSenha() {
  const senha = document.getElementById("senhaInput").value;
  const senhaCorreta = "Victória";

  if (senha === senhaCorreta) {
    window.location.href = "inicial.html";
  } else {
    document.getElementById("erroSenha").textContent = "Senha incorreta 😢";
  }
}

