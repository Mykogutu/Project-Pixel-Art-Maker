// Select color input


// Select size input


var height, color, width;

// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid();
})
function makeGrid() {
    $('tr').remove();
    for(var i = 1; i <= height; i++){
        $('table').append('<tr></tr>');
        for(var j = 1; j<= width; j++){
            $('tr:last').append('<td></td>');
        }
    }
//    Selecting color
$('td').click(function pickColor(){
    color = $('#colorPicker').val();
    $(event.target).css('background-color', color);
})

}
});
