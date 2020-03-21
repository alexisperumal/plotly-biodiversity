// Alexis Perumal, 3/20/20
// Starter code from Kevin (tutor), 3/20/20

function buildMetadata(sample) {
    d3.json("data/samples.json").then((data) => {
        var metadata = data.metadata;
        // Filter the data for the object with the desired sample number
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        // Use d3 to select the panel with id of `#sample-metadata`
        var PANEL = d3.select("#sample-metadata");

        // Use `.html("") to clear any existing metadata
        PANEL.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.


        // BONUS: Build the Gauge Chart

    });
}

function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        console.log("results")
        console.log(resultArray)
        console.log("what is the size of the array?")
        console.log(resultArray.length)

        var result = resultArray[0];
        console.log(result)

        // Todo: Instead of just grabbing the first 10, get those
        // with the highest frequency in the population.
        let otu_array = result.otu_ids.slice(0,10).forEach(item => item.toString());
        let otu_values = result.sample_values.slice(0,10);
        console.log(`OTU Array: ${otu_array}`);
        console.log(`OTU Values: ${otu_values}`);

        console.log(`In buildCharts(), ${sample}`)

        var data = [{
            type:'bar',
            x: otu_values,
            // y: ['giraffes', 'orangutans', 'monkeys'],
            y: otu_array,
            orientation: 'h'
        }]

        var layout = {
          title: `Most occuring OTU in subject #${sample}`
        //   xaxis: {
        //     range: [startDate, endDate],
        //     type: "date"
        //   },
        //   yaxis: {
        //     autorange: true,
        //     type: "linear"
        //   }
        };
    
        // Plotly.newPlot("bar", data, layout);
        Plotly.newPlot("bar", data, layout);


    });
}

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    d3.json("data/samples.json").then((data) => {
        var sampleNames = data.names;

        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        // Use the first sample from the list to build the initial plots
        var firstSample = sampleNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);
    });
}

function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
}

// Initialize the dashboard
init();