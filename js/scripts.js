
$(document).ready(function(){

  $("form#blanks").submit(function(event) {

    var genderInput = $("#gender").val();
    var genderSeekingInput = $("#genderSeeking").val();
    var personalityInput = $("#personality").val();
    var bodytypeInput = $("#bodytype").val();
    var bodytypeSeekingInput = $("#bodytypeSeeking").val();
    var petInput = $("input:radio[name=pet]:checked").val();
    var hobbiesInput = $("input:radio[name=hobbies]:checked").val();
    var noteInput = $("#note").val();

    if (noteInput) {

      if (genderInput === "woman" && genderSeekingInput === "man" && personalityInput === "extrovert" && bodytypeSeekingInput === "husky") {
        $("#johng").show();
        $("#blanks").hide();
      } else if (genderInput === "man" && genderSeekingInput === "woman" && personalityInput === "extrovert" && bodytypeSeekingInput === "athletic"){
        $("#serena").show();
        $("#blanks").hide();
      } else if (genderInput === "man" && genderSeekingInput === "woman" && personalityInput === "introvert" && petInput === "dog" && hobbiesInput === "arts") {
        $("#amanda").show();
        $("#blanks").hide();
      } else {
        $("#carrot-top").show();
        $("#blanks").hide();
      }
    } else {
        alert("Please enter a note");
        $("#note").parent().addClass("has-error");
        return false;
      }
    event.preventDefault();
  });
  $("#johng button").click(function(){
    location.reload();
  });
  $("#carrot-top button").click(function(){
    location.reload();
  });
  $("#serena button").click(function(){
    location.reload();
  });
  $("#amanda button").click(function(){
    location.reload();
  });
});
