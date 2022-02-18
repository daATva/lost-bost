(function () {
  const slides = document.querySelectorAll(".fade-slider__shirt");

  const activeClass = "fade-slider__shirt--visible";

  const lessons = document.querySelector(".circle");

  lessons.addEventListener("click", function (event) {
    if (event.target.closest(".circle__black")) {
      slides[1].classList.remove(activeClass);
      slides[2].classList.remove(activeClass);
      slides[3].classList.remove(activeClass);
      slides[4].classList.remove(activeClass);
      slides[0].classList.add(activeClass);
    }
  });

  lessons.addEventListener("click", function (event) {
    if (event.target.closest(".circle__gray")) {
      slides[0].classList.remove(activeClass);
      slides[2].classList.remove(activeClass);
      slides[3].classList.remove(activeClass);
      slides[4].classList.remove(activeClass);
      slides[1].classList.add(activeClass);
    }
  });

  lessons.addEventListener("click", function (event) {
    if (event.target.closest(".circle__green")) {
      slides[0].classList.remove(activeClass);
      slides[1].classList.remove(activeClass);
      slides[3].classList.remove(activeClass);
      slides[4].classList.remove(activeClass);
      slides[2].classList.add(activeClass);
    }
  });

  lessons.addEventListener("click", function (event) {
    if (event.target.closest(".circle__blue")) {
      slides[0].classList.remove(activeClass);
      slides[1].classList.remove(activeClass);
      slides[2].classList.remove(activeClass);
      slides[4].classList.remove(activeClass);
      slides[3].classList.add(activeClass);
    }
  });

  lessons.addEventListener("click", function (event) {
    if (event.target.closest(".circle__red")) {
      console.log("Клик!");
      slides[0].classList.remove(activeClass);
      slides[1].classList.remove(activeClass);
      slides[2].classList.remove(activeClass);
      slides[3].classList.remove(activeClass);
      slides[4].classList.add(activeClass);
    }
  });

  // const handleClick = () => {
  //   console.log('Click')
  //   slides[index].classList.remove(activeClass);
  //   slides[0].classList.add(activeClass);
  // }

  // circles.forEach(button =>{
  //   button.addEventListener('click' , handleClick)
  // })

  // function showConsole() {
  //   console.log("Ура!");
  // }

  //   lessons.addEventListener("click" , function (event){
  //     if(event.target.closest('.circle__black')) {
  //       slides[index].classList.remove(activeClass);
  //       slides[0].classList.add(activeClass);
  //     }
  // });

  //   lessons.addEventListener("click" , function (event){
  //     if(event.target.closest('.circle__gray')) {
  //       slides[index].classList.remove(activeClass);
  //       slides[1].classList.add(activeClass);
  //     }
  //   });
})();
