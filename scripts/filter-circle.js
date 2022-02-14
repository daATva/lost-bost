(function() {    
    const controlls = document.querySelectorAll(".circle__link");
    const activeClass = "circle_item--active";

    controlls.forEach(function(control) {
        control.addEventListener("click", function(e) {
        e.preventDefault();
        
        const filterName = control.getAttribute("data-filter");

        controlls.forEach(function(link) {
            link.closest(".circle_item").classList.remove(activeClass);
        });

        control.closest(".circle_item").classList.add(activeClass);
    });
 });
})();
