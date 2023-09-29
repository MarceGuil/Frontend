function login() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const data = {
        email: emailInput.value,
        password: passwordInput.value,
    };
    fetch('http://127.0.0.1:5000/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => {
        if (response.status == 200) {
            return response.json().then(data => {
                console.log(data);
                localStorage.setItem("user", JSON.stringify(data));
                window.location.href = "principal.html";

                emailInput.value = "";
                passwordInput.value = "";
            });
        } else {
            return response.json().then(data => {
                console.log(data);
            });
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    login();
});