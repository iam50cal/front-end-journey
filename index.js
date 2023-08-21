const more = document.getElementById("more");
const less = document.getElementById("less")
const article1 = document.getElementById("article1")
const article2 = document.getElementById("article2")
const article3 = document.getElementById("article3")

article1.style.display = "none"
article2.style.display = "none"
article3.style.display = "none"
less.style.display = "none"

function expandArticle() {
    if (article1.style.display === "none") {
        article1.style.display = "block";
        article2.style.display = "block";
        article3.style.display = "block";
        more.style.display = "none"
        less.style.display = "block"
    } else if (article1.style.display === "block") {
        article1.style.display = "none";
        article2.style.display = "none";
        article3.style.display = "none";
        less.style.display = "none"
        more.style.display = "block"
    }
}

more.addEventListener('click',expandArticle);
less.addEventListener("click", expandArticle)
