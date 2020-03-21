// Alexis Perumal, 3/19/20

// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/samples.json").then((incomingData) => {

    console.log("Hi!, in d3.json()")

    // function filterMovieRatings(movie) {
    //   return movie.imdbRating > 8.9;
    // }
  
    // // Use filter() to pass the function as its argument
    // var filteredMovies = incomingData.filter(filterMovieRatings);
  
    //  Check to make sure your are filtering your movies.
    console.log(incomingData);

    var individuals = incomingData.metadata.map(person => person.id);

    console.log(individuals)

    // var dropDown = d3.select("select")

    var dropdownMenu = d3.select("#selDataset");

    data = [ {
        key1: "value1",
        key2: "value2"
    }]

    var options = dropdownMenu.selectAll("option")
        .data("boo")
        .enter()
        .append("option");



    // dyn-web.com/tutorials/forms/select/option/

    // var sel = document.getElementById('selDataset');

    // var opt = document.createElement('option');

    // opt.appendChild( document.createTextNode('Porsche') );

    // opt.value = 'porsche';

    // sel.appendChild(opt);

    // console.log('Just tried to add an item.')

  
    // // Use the map method with the arrow function to return all the filtered movie titles.
    // var titles = filteredMovies.map(movies =>  movies.title);
  
    // // Use the map method with the arrow function to return all the filtered movie metascores.
    // var ratings = filteredMovies.map(movies => movies.metascore);
  
    // // Check your filtered metascores.
    // console.log(ratings);
  
    // // Create your trace.
    // var trace = {
    //   x: titles,
    //   y: ratings,
    //   type: "bar"
    // };
  
    // // Create the data array for our plot
    // var data = [trace];
  
    // // Define the plot layout
    // var layout = {
    //   title: "The highest critically acclaimed movies.",
    //   xaxis: { title: "Title" },
    //   yaxis: { title: "Metascore (Critic) Rating"}
    // };
  
    // // Plot the chart to a div tag with id "bar-plot"
    // Plotly.newPlot("bar-plot", data, layout);
  });

  // Display the default plot
// function init() {
//     var data = [{
//       values: us,
//       labels: labels,
//       type: "pie"
//     }];
  
//     var layout = {
//       height: 600,
//       width: 800
//     };
  
//     Plotly.newPlot("pie", data, layout);
//   }



// Function called by DOM changes
function getData() {
    console.log('In getData()');
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    console.log('In getData()')
    
    var dataset = dropdownMenu.property("value");


    // Initialize an empty array for the country's data
    var data = [];
  
    if (dataset == 'us') {
        data = "1";
    }
    else if (dataset == 'uk') {
        data = "2";
    }
    else if (dataset == 'canada') {
        data = "3";
    }
    // Call function to update the chart
    updatePlotly(data);
  }

  console.log("Hi!, outside d3.json()")
  //console.log(`Individuals: ${individuals}`)

//   init();


  