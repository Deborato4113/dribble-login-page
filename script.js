let togglePassword = document.getElementById("togglePassword");
let passwordField = document.getElementById("password");
togglePassword.addEventListener("click", () => {
    passwordField.type = passwordField.type === "password" ? "text" : "password";
    // if (passwordField.type === "password") {
    //     passwordField.type = "text";
    //     this.src = "https://cdn-icons-png.flaticon.com/512/709/709612.png"; // Eye Open Icon
    // } else {
    //     passwordField.type = "password";
    //     this.src = "https://cdn-icons-png.flaticon.com/512/709/709612.png"; // Eye Closed Icon
    // }
});