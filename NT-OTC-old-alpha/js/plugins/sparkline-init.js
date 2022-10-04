(function ($) {

    $(".sparkline8").sparkline([79, 72, 29, 6, 52, 32, 73, 40, 14, 75, 77, 39, 9, 15, 10], {
        type: "line",
        width: "200px",
        height: "25",
        lineColor: "rgb(255,255,255)",
        fillColor: "rgba(255,255,255, .1)",
        minSpotColor: "rgb(255,255,255)",
        maxSpotColor: "rgb(255,255,255)",
        highlightLineColor: "rgb(255,255,255)",
        highlightSpotColor: "rgb(255,255,255)"
    });

    $("#sparkline11").sparkline([27, 73], {
        type: "pie",
        height: "170",
        resize: !0,
        sliceColors: ["rgba(255,255,255, 0.2)", "rgba(255, 255, 255, 0.75)"]
    });

})(jQuery); 