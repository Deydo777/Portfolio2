document.addEventListener("DOMContentLoaded", function () {
    // Set timeout agar animasi terlihat lebih smooth
    setTimeout(() => {
        document.querySelector(".progress-line.html span").style.width = "90%";
        document.querySelector(".progress-line.css span").style.width = "85%";
        document.querySelector(".progress-line.javascript span").style.width = "75%";
        document.querySelector(".progress-line.python span").style.width = "80%";
        document.querySelector(".progress-line.react span").style.width = "70%";
    }, 500);
});
