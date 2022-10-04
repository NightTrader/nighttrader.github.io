(function ($) {

    var options = {
        chart: {
            type: "area",
            height: 300,
            foreColor: "#fff",
            fontFamily: 'Rubik, sans-serif',
            stacked: true,
            dropShadow: {
                enabled: true,
                enabledSeries: [0],
                top: -2,
                left: 2,
                blur: 5,
                opacity: 0.06
            },
            toolbar: {
                show: false,
            }
        },
        colors: ['#7B6FFF'],
        stroke: {
            curve: "smooth",
            width: 3
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: 'Buy',
            data: generateDayWiseTimeSeries(0, 30),
        }],
        markers: {
            size: 0,
            strokeColor: "#fff",
            strokeWidth: 3,
            strokeOpacity: 1,
            fillOpacity: 1,
            hover: {
                size: 6
            }
        },
        xaxis: {
            type: "datetime",
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                offsetX: -10,
                offsetY: 0
            },
            tooltip: {
                enabled: true,
            }
        },
        grid: {
            show: false,
            padding: {
                left: -5,
                right: 5
            }
        },
        tooltip: {
            x: {
                format: "dd MMM yyyy"
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.5,
                opacityFrom: 0.5,
                opacityTo: 0.1,
                stops: [0, 100, 100]
            }
        },
    };

    var chart = new ApexCharts(
        document.querySelector("#timeline-chart"),
        options
    );

    chart.render();

    var resetCssClasses = function (activeEl) {
        var els = document.querySelectorAll("button");
        Array.prototype.forEach.call(els, function (el) {
            el.classList.remove('active');
        });

        activeEl.target.classList.add('active')
    }

    document.querySelector("#one_month").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: new Date('20 Nov 2018').getTime(),
                max: new Date('19 Dec 2018').getTime(),
            }
        })
    })

    document.querySelector("#six_months").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: new Date('20 Nov 2018').getTime(),
                max: new Date('19 May 2019').getTime(),
            }
        })
    })

    document.querySelector("#one_year").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: new Date('20 Nov 2018').getTime(),
                max: new Date('19 Nov 2019').getTime(),
            }
        })
    })

    document.querySelector("#ytd").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: new Date('20 Nov 2018').getTime(),
                max: new Date('19 Jan 2019').getTime(),
            }
        })
    })

    document.querySelector("#all").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: undefined,
                max: undefined,
            }
        })
    })

    document.querySelector("#ytd").addEventListener('click', function () {

    })


    function generateDayWiseTimeSeries(s, count) {
        var values = [[
            274, 248, 273, 48, 285, 229, 69, 51, 16, 141, 388, 325, 333, 220, 333, 376, 213, 97, 90, 255, 172, 205, 117, 16, 247, 85, 392, 66, 278, 373, 224, 37, 139, 89, 280, 150, 134, 325, 195, 279, 242, 62, 72, 239, 131, 376, 71, 231, 148, 264, 214, 300, 380, 326, 67, 150, 114, 258, 379, 176, 310, 47, 371, 29, 311, 90, 270, 173, 237, 281, 93, 33, 384, 189, 180, 379, 203, 220, 1, 299, 203, 393, 227, 381, 225, 71, 219, 312, 342, 338, 247, 293, 374, 295, 390, 320, 237, 109, 28, 45, 137, 218, 26, 24, 234, 192, 130, 302, 260, 112, 349, 84, 7, 161, 331, 179, 190, 72, 41, 108, 329, 331, 157, 43, 260, 228, 264, 229, 264, 181, 314, 397, 167, 137, 111, 386, 158, 242, 235, 126, 83, 374, 149, 395, 124, 225, 246, 16, 326, 90, 66, 167, 144, 57, 293, 137, 102, 260, 336, 129, 25, 249, 183, 263, 274, 357, 275, 335, 221, 344, 226, 5, 251, 28, 214, 67, 189, 243, 251, 112, 326, 277, 53, 262, 18, 353, 112, 96, 237, 320, 129, 309, 285, 306, 103, 214, 296, 380, 377, 389, 195, 343, 232, 136, 348, 39, 341, 148, 171, 176, 325, 380, 334, 389, 398, 288, 217, 257, 388, 17, 24, 364, 380, 269, 267, 220, 180, 227, 249, 165, 243, 2, 95, 319, 355, 327, 35, 84, 225, 260, 366, 270, 185, 148, 174, 276, 208, 175, 355, 40, 276, 348, 206, 273, 286, 363, 196, 68, 37, 136, 40, 282, 150, 293, 203, 219, 265, 328, 203, 361, 281, 188, 144, 351, 98, 31, 394, 340, 53, 367, 326, 316, 114, 358, 374, 151, 367, 167, 82, 230, 14, 98, 223, 118, 89, 279, 312, 61, 317, 38, 135, 75, 42, 338, 296, 256, 263, 381, 221, 112, 175, 77, 151, 367, 108, 337, 297, 185, 309, 286, 133, 41, 269, 358, 222, 351, 321, 302, 310, 89, 199, 309, 79, 26, 78, 290, 162, 290, 245, 88, 32, 243, 27, 206, 11, 100, 389, 317, 1, 9, 96, 9, 195, 390, 341, 20, 90, 64, 118, 262, 246, 42, 394, 93, 138, 283, 232, 208, 249, 95
        ]];
        var i = 0;
        var series = [];
        var x = new Date("19 Nov 2018").getTime();
        while (i < count) {
            series.push([x, values[s][i]]);
            x += 86400000;
            i++;
        }
        return series;
    }


})(jQuery); 