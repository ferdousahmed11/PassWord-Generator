function generatePassword() {
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";

    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    return password;
}

document.getElementById("generate-btn").addEventListener("click", function () {
    document.getElementById("password").value = generatePassword();
});
