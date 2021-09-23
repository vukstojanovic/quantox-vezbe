

const questions = document.querySelectorAll(".question");
const articles = document.querySelectorAll("article");

questions.forEach((question, index) => question.addEventListener("click", () => {
    let lastClicked = question;
    articles.forEach(article => {
        if (article.children[0] != lastClicked) {
            article.classList.add("hidden");
        }
    });
    articles[index].classList.toggle("hidden");
}));













