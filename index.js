function checkPassword() {
    const correctPassword = "teamo";
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
    // Evento no input de senha
    const passwordInput = document.getElementById("passwordInput");
    if (passwordInput) {
        passwordInput.addEventListener("keypress", function (event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
    }


    // Troca de imag + confetti on click
    const mainImage = document.getElementById("mainImage");
    if (mainImage) {
        function showSmileAndConfetti(e) {
            mainImage.src = "Smile.png";
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
// Modal de dica da senha
    const forgotBtn = document.getElementById("forgotBtn");
    const modalDica = document.getElementById("modalDica");
    const closeModal = document.getElementById("closeModal");
    const closeModal2 = document.getElementById("closeModal2");

    if (forgotBtn && modalDica) {
        forgotBtn.addEventListener("click", function (e) {
            e.preventDefault();
            modalDica.classList.remove("hidden");
        });
    }
    if (closeModal && modalDica) {
        closeModal.addEventListener("click", function () {
            modalDica.classList.add("hidden");
        });
    }
    if (closeModal2 && modalDica) {
        closeModal2.addEventListener("click", function () {
            modalDica.classList.add("hidden");
        });
    }
});
