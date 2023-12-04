//////Masonry 
window.onload = () =>{
    const grid = document.querySelector ('.grid');

    const masonry = new Masonry(grid,{
        itemSelector: '.grid-item',
        gutter: 10,
    });

    $(".flexslider").flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        mousewheel: true,
        rtl: true
    });
};

$(document).ready(function() {
    $("#my-accordion").accordionjs();

    MicroModal.init();
    MicroModal.show('modal-1');
});

