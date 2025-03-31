$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", function () {
    const header = $("header");
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1)");
    }

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });
    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal(".dish", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal("", {
    origin: "right",
    duration: 1000,
    distance: "20%",
  });
});
function toggleAvaliacoes() {
  const ocult = document.getElementById("ocult");
  const btnOcult = document.getElementById("btn_ocult");

  // Verificando o valor de display do elemento oculto
  if (ocult.style.display === "none" || ocult.style.display === "") {
    ocult.style.display = "flex";
    btnOcult.innerText = "Ver menos..."; // Mudar texto do botão
  } else {
    ocult.style.display = "none";
    btnOcult.innerText = "Ver mais avaliações..."; // Voltar o texto para "Ver mais"
  }
}
