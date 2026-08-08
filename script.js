const toggleButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleButton.textContent = "☀️ Light";
        localStorage.setItem("theme","dark");
    }
    else {
        toggleButton.textContent = "🌙 Dark";
        localStorage.setItem("theme","light");
    }
});
