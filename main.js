// Select ul titles
const h3 = $("h3");

// Add Event listener
h3.click(function () {
  const ul = $(this).next();
  if (window.innerWidth <= 768) {
    // Add class for clicked h3
    $(this).toggleClass("expanded");
    ul.slideToggle(500);
  }
});

const err = new Error("test");
q