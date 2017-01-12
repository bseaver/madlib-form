$(document).ready(function() {
  function andWords(oldWords, newWord) {
    if (!oldWords) {
      oldWords = "";
    }
    if (newWord) {
      if (oldWords) {
        oldWords += " and ";
      }
      oldWords += newWord;
    }
    return oldWords;
  };


  $("#madForm").submit(function(event) {
    // Get entered name or insert our default
    var myName = $("#inputName").val();
    if (!myName.trim()) {
      myName = "Who-knows-who";
    }
    $("#insertName").text(myName);

    // Get person type
    var myPersonType = $(".optionsPerson:checked").val();
    var myPersonTypeArray = myPersonType.split("|");
    $("#insertPersonType").text(myPersonTypeArray[0]);
    $("#insertPersonTypePossessive").text(myPersonTypeArray[1]);

    // Get type of story
    var myCommunicationType = $("#communicationType").val().toLowerCase();
    $("#insertCommunicationType").text(myCommunicationType);

    // Get way(s) of attending or listening
    // Use andWords() function to concatenate and separate word
    var oneAttendingType, myAttendingTypes;
    // Harken?
    oneAttendingType = $("#checkboxHarken:checked").val();
    myAttendingTypes = andWords(myAttendingTypes, oneAttendingType);
    // Listen
    oneAttendingType = $("#checkboxListen:checked").val();
    myAttendingTypes = andWords(myAttendingTypes, oneAttendingType);
    // Attend?
    oneAttendingType = $("#checkboxAttend:checked").val();
    myAttendingTypes = andWords(myAttendingTypes, oneAttendingType);
    // Neither? Make them swoon...
    if (!myAttendingTypes) {
      myAttendingTypes = "swoon";
    }
    $("#insertAttendingType").text(myAttendingTypes);

    // Get who is barely getting fed
    var whoFed = $(".optionsWhoFed:checked").val();
    $("#insertWhoFed").text(whoFed);

    // Reveal the Mad lib
    $("#themeSong").removeClass("hidden");

    // Prevent page from refreshing
    event.preventDefault();
  }); // End #madForm submit

}); // End JavaScript
