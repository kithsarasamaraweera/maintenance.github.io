document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Get username and password from form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Example validation
    if (username === "admin" && password === "password") {
        // Redirect to home page
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
});
