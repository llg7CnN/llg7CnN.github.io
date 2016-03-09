$(function() {
  $("#chart").chart({
  template: "line_basic_6",
  tooltips: {
    serie1: ["a", "b", "c", "d", "e", "f"],
    serie2: ["a", "b", "c", "d", "e", "f"],
    serie3: ["a", "b", "c", "d", "e", "f"],
  },
  values: {
    serie1: [10, 73, 59, 71, 40, 44],
    serie2: [50, 59, 28, 71, 30, 22],
    serie3: [27, 41, 49, 59, 40, 30],
  },
  labels: ["C", "C++", "Scheme", "Java", "JavaScript", "Ruby"],
  defaultSeries: {
    type: "bar",
    stacked: true
  },
  series: {
    serie3: {
      type: "line",
      stacked: false,
      axis: "r"
    }
  },
 axis: {
    r: {
      max: 100,
      suffix: "%"
    }
  }
});

});

$.elycharts.templates['line_basic_6'] = {
  type: "line",
  margins: [10, 40, 40, 30],
  defaultSeries: {
    highlight: {
      newProps: {
        r: 8,
        opacity: 1
      },
      overlayProps: {
        fill: "white",
        opacity: 0.2
      }
    }
  },
  series: {
    serie1: {
      color: "90-#003000-#009000",
      tooltip: {
        frameProps: {
          stroke: "green"
        }
      }
    },
    serie2: {
      color: "90-#000060-#0000B0",
      tooltip: {
        frameProps: {
          stroke: "blue"
        }
      }
    },
    serie3: {
      color: "red",
      rounded: false,
      dot: true,
      dotProps: {
        r: 0,
        stroke: "white",
        "stroke-width": 0,
        opacity: 0
      },
      plotProps: {
        "stroke-width": 4,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }
  },
  defaultAxis: {
    labels: true
  },
  axis: {
    x: {
      labelsRotate: 45,
      labelsProps: {
        font: "12px Verdana"
      }
    }
  },
  features: {
    grid: {
      draw: true,
      forceBorder: true,
      ny: 5
    }
  },
  barMargins: 10
};

