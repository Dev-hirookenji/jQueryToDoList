$(document).ready(function () {
  $(".add").click(function () {
    var added = $("input[name=todo]").val();
    $("ul").append("<li>" + added + "</li>");
    event.preventDefault();
  });
  $(document).on("dblclick", "li", function () {
    $(this).toggleClass("strike").fadeOut("slow");
  });
});
