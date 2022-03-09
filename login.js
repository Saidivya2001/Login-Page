const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "divya@gmail.com" && password === "divs"||username==="divu@gmail.com"&&password==="divu") {
        alert("successfully logged");
        open("file:///C:/Users/DIVYA%20GANTI/OneDrive/Desktop/codes/login1.html");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
