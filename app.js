// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('body').css('background', 'red');

alert(3e43434);


let height = 10;
let width = 5;

makeGrid();



function makeGrid() {
   for(let row = 0; row < height; row++) {
       $('table').append("<tr></tr>");

        for(let cell = 0; cell < width; cell++)
            $("table tr").eq(row).append("<td></td>"); 
    }
}
