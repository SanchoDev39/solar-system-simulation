let ball = document.querySelector(".sphere");
ball.addEventListener("mouseover", () => {
    ball.style.border = "5px solid red";
    ball.style.transform = "translate(0px, 0%)";
    ball.style.transition = "all 4s ease";
});
ball.addEventListener("click", () => {
    ball.style.transform = "translate(1120px, 50%)";
});