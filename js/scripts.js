// Business Logic

function Places(place, landmarks, time, food) {
  this.place = place;
  this.landmarks = landmarks;
  this.time = time;
  this.food = food;

}





// User Logic

$(document).ready(function(){
  $('#places').submit(function(event){
    event.preventDefault();
    var complete = new Places($('#place').val(), $('#landmark').val(), $('#time').val(), $('#food').val());

    $('#output').append("<li id='title'>" + complete.place + '</li>' )
    $('#output').append('<li>' + complete.place + '</li>' )
    $('#output').append('<li>' + complete.landmarks + '</li>' )
    $('#output').append('<li>' + complete.time + '</li>' )
    $('#output').append('<li>' + complete.food + '</li>' )
  });

});
