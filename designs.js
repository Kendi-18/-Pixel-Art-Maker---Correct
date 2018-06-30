// Select color input
// Select size input
let color;
let height;
let width;

// When size is submitted by the user
$("input[type=submit]").on("click", function(event) {
    //step 1
    event.preventDefault(); 

    //step 2 remove table if any exist
    $("table").children().remove(); 
    //$("table *").remove();

    //step 3
    //Get the values the user posted
    // and store in these variables
    height = $("#inputHeight").val();
    width = $("#inputWeight").val(); 

    //step 4
    //the call makeGrid function
    //to create the grid with the provided size
    makeGrid(); 
});


//When user clicks a cell
$("table").on("click", "td", function(event) {
    //Pick the color the user selected
    color = $("#colorPicker").val(); 

    //color the clicked cell
    //event.target().
    $(event.target).css("background", color);
});



//===== FUNCTION DECLARATIONS =====// 
function makeGrid() {
    for(let h = 0; h < height; h++){      
        $('table').append('<tr></tr>');
        for(let w = 0; w < width; w++){
            $("table tr").eq(h).append("<td></td>")
        }
    }
}


