$(document).ready(function () {
  $(".single-item").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    centerModel:true,
    centerPadding:'60px',
    responsive: [
      {
        breakpoint: 600,
        settings: "unlisk"
      },
    ],
  });
  setSelects();
  setArticles();
  document.getElementById("form").addEventListener("submit", onSubmit);
});
