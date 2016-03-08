$(function() {
    // the chart values
    var thevalues = [2, 40, 20, 16, 12, 0, 22, 9,
		     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // let's loop to build tooltips and x labels.
    var thetooltips = new Array(thevalues.length);
    var thelabels = new Array(thevalues.length);
    for (var i = 0; i < thevalues.length; i++) {
        thetooltips[i] = "<div class='label'><p class='charlab'>" + thevalues[i] + " levels</p><p class='date'>" + (i + 1) + " March</p></div>";
        thelabels[i] = i + 1;
    }

    // build the chart with 1 serie using the above template.
    $("#chart").chart({
        template: "raphael_analytics",
        tooltips: thetooltips,
        values: {
            serie1: thevalues,
        },
        labels: thelabels,
    });
});


// this is a reausable template definition. scroll down for the real chart call.
$.elycharts.templates['raphael_analytics'] = {
    type: "line",
    style: {
        "background-color": "black"
    },
    margins: [10, 15, 25, 15],
    defaultSeries: {
        rounded: 0.6,
        fill: true,
        plotProps: {
            "stroke-width": 4
        },
        dot: true,
        dotProps: {
            stroke: "#5AF",
            "stroke-width": 2,
            fill: "black"
        },
        startAnimation: { // use an animation to start plotting the chart
            active: true,
            type: "avg",
            // start from the average line.
            speed: 1000,
            // animate in 1 second.
            easing: "bounce"
        },
        highlight: {
            scaleSpeed: 0,
            // do not animate the dot scaling. instant grow.
            scaleEasing: '',
            scale: 1.5 // enlarge the dot on hover
        },
        tooltip: {
            height: 35,
            width: 80,
            padding: [3, 3],
            offset: [-15, -10],
            frameProps: {
                opacity: 0.75,
                fill: "black",
                stroke: "#CCC"

            }
        }
    },
    series: {
        serie1: {
            color: "#5AF"
        }
    },
    defaultAxis: {
        labels: true,
        labelsProps: {
            fill: "white",
            "font-size": "12px"
        },
        labelsDistance: 14
    },
    axis: {
        l: { // left axis
            labels: false // don't show labels for left axis
        }
    },
    features: {
        mousearea: {
            type: 'axis'
        },
        tooltip: {
            positionHandler: function(env, tooltipConf, mouseAreaData, suggestedX, suggestedY) {
                return [mouseAreaData.event.pageX, mouseAreaData.event.pageY, true]
            }
        },
        grid: {
            draw: true,
            // draw both x and y grids
            forceBorder: true,
            // force grid for external border
            ny: 10,
            // use 10 divisions for y grid
            nx: 10,
            // 10 divisions for x grid
            props: {
                stroke: "#505040" // color for the grid
            }
        }
    }
}

a
