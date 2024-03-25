function togglePassword(item) {
    item.parentElement.querySelector("input").type = item.parentElement.querySelector("input").type == "password" ? "text" : "password";
    item.querySelector("i").classList.toggle("bi-eye-slash-fill");
    item.querySelector("i").classList.toggle("bi-eye-fill");
}