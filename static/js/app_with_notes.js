// Import the data from data.js
  // use const b/c we don’t want the variable to be reassigned or reused at all 
const tableData = data;   

// Reference the HTML table using d3
  // tell JavaScript what type of element the data will be displayed in
    // tbody = table HTML tag
    // D3 = JavaScript library for sophisticated & dynamic graphics in HTML webpage
  // d3.select = tells JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

// Build the Table from data.js
  // functions are named after what they do. Building a table, so name it "buildTable"
      // data = passed as the argument
      // function = use a standard JS function instead of => function b/c we're nesting a function
function buildTable(data) {

    // Clear existing data otherwise the data users search will already be filtered when they search again.
        // tbody.html(""); = use an empty string when creating the table / create a blank canvas
        // tbody.html = references (points JS directly to) the table in the HTML page we're going to build
        // (""); = an empty string
    tbody.html("")

    // Loop through our data array, then add rows of data to the table
      // chain a for loop to our data
        // data = object that references the data being imported
        // forEach = keywords to create a for loop in JavaScript. 
        //           Every object in the array will be added to its own row in the table.
        // () = parameter that will be used as a value when the function is called
        // dataRow = argument that'll represent each row of the data as we iterate through the array
    data.forEach((dataRow) => {
        
        // Create a variable that will append a row to the table body
            // let = using to declare the row variable (not var) b/c it's limited to just this block of code
            // find the <tbody> tag within the HTML and add a table row "tr"
            // <tr> = tags used for each row in a table (each object/UFO sighting) will be wrapped in a <tr>
        let row = tbody.append("tr");

        // Loop thru data rows
            // loop through each field in the dataRow argument. 
            // these fields will become table data & wrapped in <td> tags when they're appended to the HTML table    
            // Object.values = reference one object from the array of UFO sightings 
            // (dataRow) = the argument, put values into the dataRow
            // forEach((val) = only one object per row (Put each sighting onto its own row of data.)
            // val = argument represents each item in the object, such as the location, shape, or duration
        Object.values(dataRow).forEach((val) => {

          // Append each value of the object to a cell in the table
            // let cell = create a variable to append data to a table
            // row.append("td") = append data into a table data tag <td>
          let cell = row.append("td");

          // val = the variable that holds only each value from the object.
          cell.text(val);
          }
        );
      });    