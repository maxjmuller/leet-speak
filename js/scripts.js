var translate = function(text){
  if (!text) {
    return promptForInput;
  }
  else {
    // replaceE(text);
    // var text = text.replace("e","3");
    return replaceE(text);
  }

};
var promptForInput = function(){
  var textPrompt = "Please enter text or a phrase.";
  alert(textPrompt);
  return textPrompt;
};

var replaceE = function(text){
  return text.replace("e","3");

};


$(document).ready(function() {
  $("form#leetspeak").submit(function(event) {
    var text = $("input#text").val();
    var translation = translate(text);

    $(".text").text(text);
    $(".translation").text(translation);
    $("#translation").show();
    event.preventDefault();
  });
});
