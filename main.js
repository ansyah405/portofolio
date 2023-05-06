function toggleDetail(e) {
  const target = $(e.target);
  if ($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }

  const item = $(target).parents(".about-exp-item");

  const detail = $(item).children(".about-exp-item-detail");

  $(detail).slideToggle();

  console.log($(item).children(".about-exp-item-detail"));
}

function onFormSubmit(e) {
  e.preventDefault();
  const email = $("#inp_email");
  const subject = $("#inp_subject");
  const message = $("#inp_message");

  if (!$(email).val()) {
    alert("email is required");
  } else if (!$(subject).val()) {
    alert("Subject is required");
  } else if (!$(message).val()) {
    alert("message is required");
  } else {
    alert("form Submitted");
    $(email).val("");
    $(subject).val("");
    $(message).val("");
  }
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
