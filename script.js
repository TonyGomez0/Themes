function theme(color) {
  $("img").css("border-color", color);
  $("h1").css("background-color", color);
  $("p").css("color", color);}

$(".blue-theme").click(function() {
  theme("blue");
});

$(".green-theme").click(function() {
  theme("green");
});

$(".red-theme").click(function() {
  theme("red");
});