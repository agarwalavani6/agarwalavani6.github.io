$(document).ready(function(){
    s("#wrapper").fadeIN(1500);
});

function thatWasEasy(){
    alert("That was easy!")
}
$('#easy').on("click", thatWasEasy);
$(document).keypress(delegateKeypress);

function delegateKeypress(event){
    if(event.keyCode == 32) {
        S("#easy").trigger("click");
    }
}
 
