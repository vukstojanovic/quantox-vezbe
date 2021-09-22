

const questions = document.querySelectorAll(".question");
const articles = document.querySelectorAll("article");

questions.forEach((question, index) => question.addEventListener("click", () => {
    articles.forEach(article => article.classList.add("hidden"));
    articles[index].classList.toggle("hidden");
}));













