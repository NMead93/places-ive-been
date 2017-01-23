// Business Logic

function Places(place) {
  this.place = place;

}





// User Logic

$(document).ready(function(){
  $('#places').submit(function(event){
    event.preventDefault();
    Places.place = $("#place").val();

    $('#output').append('<li>' + Places.place + '</li>' )

  });

});
