//= require jquery
//= require bootstrap-sprockets
//= require bootstrap

var y = 0;
var n = 0;

/*
 * OnClick listeners for the quiz buttons. If they select more than 1 as a yes answer they are told to get tested.
 */
function yes(id) {
  y++;
  document.getElementById("n" + id).className = 'btn btn-lg btn-block btn-success';
  document.getElementById("y" + id).className = 'btn btn-lg btn-block btn-danger';
}

/*
 * Onclick for the no buttons.
 */
function no(id) {
  if (y > 1){
    y--;

  } else {
    n++;
    document.getElementById("n" + id).className = 'btn btn-lg btn-block btn-danger';
    document.getElementById("y" + id).className = 'btn btn-lg btn-block btn-success';
  }
}

/*
 * Onclick listener for the submit button. If y > 1 then a message is displayed.
 */
function submit() {
  if ((n + y).valueOf(7)) {
    console.log("it worked");
    if (y > 1) {
      document.getElementById("visible").className = 'hide';
      document.getElementById("modal-text").innerHTML = 'It is recommended that you go get tested for HIV!';
     // $('#Modal').modal("show");
    } else {
      document.getElementById("visible").className = 'hide';
      document.getElementById("modal-text").innerHTML = "It is still recommended that you go get tested for HIV, " +
        "however, you don't currently seem to be at risk for it." ;

     // $('#Modal').modal("show");

    }
  }else {
    console.log(y);
    console.log(n);
    alert("Please mark all of the answers before submitting!");
  }
}
