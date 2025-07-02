function checkPassword() {
    const correctPassword = "minhasenha123";
    const passwordInput = document.getElementById("passwordInput");
    const enteredPassword = passwordInput.value;
    const loginForm = document.getElementById("login-form");
    const protectedContent = document.getElementById("protectedContent");
    const errorMessage = document.getElementById("errorMessage");

    if (enteredPassword === correctPassword) {
        loginForm.classList.add("hidden");
        protectedContent.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    } else {
        errorMessage.classList.remove("hidden");
        passwordInput.value = "";
        passwordInput.focus();
    }
}

// Adiciona eventos após o DOM estar pronto
document.addEventListener("DOMContentLoaded", function () {
    // Evento Enter no input de senha
    const passwordInput = document.getElementById("passwordInput");
    if (passwordInput) {
        passwordInput.addEventListener("keypress", function (event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
    }

    // Confetti no hover/click do botão "Entrar"
    const entrarBtn = document.getElementById("entrarBtn");
    if (entrarBtn) {

        entrarBtn.addEventListener("mouseenter", function (e) {
    console.log("Hover detectado!");
    if (window.confetti) {
        window.confetti({
            particleCount: 60,
            spread: 70,
            origin: {
                x: (e.clientX || entrarBtn.getBoundingClientRect().left + entrarBtn.offsetWidth / 2) / window.innerWidth,
                y: (e.clientY || entrarBtn.getBoundingClientRect().top + entrarBtn.offsetHeight / 2) / window.innerHeight
            }
        });
    }
});
        entrarBtn.addEventListener("click", function (e) {
            if (window.confetti) {
                window.confetti({
                    particleCount: 120,
                    spread: 100,
                    origin: {
                        x: (e.clientX || entrarBtn.getBoundingClientRect().left + entrarBtn.offsetWidth / 2) / window.innerWidth,
                        y: (e.clientY || entrarBtn.getBoundingClientRect().top + entrarBtn.offsetHeight / 2) / window.innerHeight
                    }
                });
            }
        });
    }
})