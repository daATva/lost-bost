(function () {
  const slides = document.querySelectorAll(".fade-slider__shirt");

  const activeClass = "fade-slider__shirt--visible";

  const lessons = document.querySelector(".circle");


  function clearList(){
    slides[1].classList.remove(activeClass);
    slides[2].classList.remove(activeClass);
    slides[3].classList.remove(activeClass);
    slides[4].classList.remove(activeClass);
    slides[0].classList.remove(activeClass);
  }


  lessons.addEventListener("click", function(event) {
    clearList();
    console.log(444)
    if (targetClass.includes("circle__black")) {
      slides[0].classList.add(activeClass);
    } else if (targetClass.includes("circle__gray")) {
      slides[1].classList.add(activeClass);
    } else if (targetClass.includes("circle__green")) {
      slides[2].classList.add(activeClass);
    } else if (targetClass.includes("circle__blue")) {
      slides[3].classList.add(activeClass);
    } else if (targetClass.includes("circle__red")) {
      console.log("Клик!");
      slides[4].classList.add(activeClass);
    }
  });

})();
