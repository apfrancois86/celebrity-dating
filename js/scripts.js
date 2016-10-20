
$(document).ready(function(){

  $("form#blanks").submit(function(event) {


    var genderInput = $("#gender").val();
    var genderSeekingInput = $("#genderSeeking").val();
    var personalityInput = $("#personality").val();
    var bodytypeInput = $("#bodytype").val();
    var bodytypeSeekingInput = $("#bodytypeSeeking").val();
    var petInput = $("input:radio[namej=pet]:checked").val();
    var hobbiesInput = $("input:radio[namej=hobbies]:checked").val();

    if (genderInput === "woman" && genderSeekingInput === "man" && personalityInput === "extrovert" && bodytypeSeekingInput === "husky") {
      $("#johng").show();
    }

    event.preventDefault();
  });
});
