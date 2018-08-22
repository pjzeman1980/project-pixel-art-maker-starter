// get dom elements
const inputHeight = $('#inputHeight');
const inputWidth = $('#inputWidth')
const colorSel = $('#colorPicker');
const canvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(makeGrid);

/*
@desciption Builds the drawing grid when submit pressed
@param evt - The event that triggered the callback
*/
function makeGrid(evt) {
    /* console.log("making grid") */

    // Select size input
    const height = inputHeight.val();
    const width = inputWidth.val();
    /* console.log("height = " + height + ", width = " + width); */

    // disable default event action (page refresh)
    evt.preventDefault();

    // remove all table content
    canvas.empty();

    // create the grid by appending <tr><tr> and <td><td> based on 
    // height/width
    for (let r=0; r<height; r++) {
        // create row node and add to table
        const row = $('<tr></tr>');
        canvas.append(row);
        for (let c=0; c<width; c++) {
            // create col node and add to row
            const col = $(`<td id=cell-${r}_${c})></td>`);
            row.append(col);

            // set event listeners for the cell
            col.click(setCellColor);
        }
    }
}

/*
@desciption Sets the background color for the cell in response to a click
@param evt - The event that triggered the callback
*/
function setCellColor(evt) {
    const target = $(evt.target);
    /* console.log(target); */
    target.css('background-color', colorSel.val());
}
