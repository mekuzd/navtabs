const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
//method 1
// about.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });

// Method 2 

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    // got the buttons on html and removed classlist from which has the class list
    // btn here is the clicked btn while btns is the unclicked button

    btns.forEach((btns) => {
      if (btn !== btns) {
        btns.classList.remove("active");
      }
    })
    // at this point i added the active classlist to the clicked button
    btn.classList.add("active");
    const id = e.target.dataset.id;
    const element = document.getElementById(id);

    // this point i added the classlist to the content div
    element.classList.add("active");

    //at this point element is the div thta us currntly clicked while articles is not being clicked
    // i then removed active class from the article
    articles.forEach(function (article) {
      if (element !== article) {
        article.classList.remove("active");
      }
    });
  })

})