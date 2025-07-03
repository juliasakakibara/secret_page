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

    
// Troca de imagem ao clicar/tocar + confetti
    const mainImage = document.getElementById("mainImage");
    if (mainImage) {
        function showSmileAndConfetti(e) {
            mainImage.src = "smile.png";
            if (window.confetti) {
                window.confetti({
                    particleCount: 120,
                    spread: 100,
                    origin: {
                        x: (e.clientX || mainImage.getBoundingClientRect().left + mainImage.offsetWidth / 2) / window.innerWidth,
                        y: (e.clientY || mainImage.getBoundingClientRect().top + mainImage.offsetHeight / 2) / window.innerHeight
                    }
                });
            }
        }

        mainImage.addEventListener("mousedown", showSmileAndConfetti);
        mainImage.addEventListener("touchstart", showSmileAndConfetti);

        mainImage.addEventListener("mouseup", function () {
            mainImage.src = "Serious.png";
        });
        mainImage.addEventListener("mouseleave", function () {
            mainImage.src = "Serious.png";
        });
        mainImage.addEventListener("touchend", function () {
            mainImage.src = "Serious.png";
        });
        mainImage.addEventListener("touchcancel", function () {
            mainImage.src = "Serious.png";
        });
    }
});