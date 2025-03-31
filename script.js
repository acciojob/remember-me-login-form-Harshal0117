document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const existingUserBtn = document.getElementById("existing");

    // Check if user credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserBtn.style.display = "block";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        existingUserBtn.style.display = localStorage.getItem("username") ? "block" : "none";
    });

    existingUserBtn.addEventListener("click", function () {
        alert(`Logged in as ${localStorage.getItem("username")}`);
    });
});

