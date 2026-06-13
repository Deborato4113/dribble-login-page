const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    passwordField.type =
        passwordField.type === "password"
            ? "text"
            : "password";
});