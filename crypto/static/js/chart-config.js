"use strict"; // Start of use strict

if ($('#price-rate-chart').length) {

    var ctx = document.getElementById("price-rate-chart").getContext('2d');
    var LineChartDemo = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Sep 11", "Oct 02", "Nov 25", "Dec 19", "Jan 23", "Feb 21"],
            datasets: [{
                label: '$',
                backgroundColor: "rgba(159,170,174,0)",
                borderColor: "#FAB915",
                pointColor: "#FAB915",
                data: [2000, 4500, 4000, 3400, 6800, 7661, 8000, 9000]
            }]
        },
        options: {
            steppedLine: 'after',
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 16,
                        fontFamily: 'Poppins'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        callback: function(value, index, values) {
                            return '$' + value;
                        }
                    }
                }]
            }

        }
    });
}

if ($('#hash-rate-chart').length) {

    var ctx = document.getElementById("hash-rate-chart").getContext('2d');
    var LineChartDemo = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Sep 11", "Oct 02", "Nov 25", "Dec 19", "Jan 23", "Feb 21"],
            datasets: [{
                label: '$',
                backgroundColor: "rgba(159,170,174,0)",
                borderColor: "#FAB915",
                pointColor: "#FAB915",
                data: [8, 11, 10, 9, 7, 9, 10, 12]
            }]
        },
        options: {
            steppedLine: 'before',
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 16,
                        fontFamily: 'Poppins'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        callback: function(value, index, values) {
                            return value + 'EHas/s';
                        }
                    }
                }]
            }

        }
    });
}


if ($('#btc-stats-chart').length) {

    var ctx = document.getElementById("btc-stats-chart").getContext('2d');
    var LineChartDemo = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Sep 11", "Oct 02", "Nov 25", "Dec 19", "Jan 23", "Feb 21"],
            datasets: [{
                label: '$',
                backgroundColor: "rgba(250,185,21, .4)",
                borderColor: "#FAB915",
                pointColor: "#FAB915",
                data: [8, 11, 10, 9, 7, 9, 10, 12]
            }]
        },
        options: {
            steppedLine: 'before',
            layout: {
                padding: {
                    bottom: -40
                }
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display: false,
                        padding: 0
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false,
                        padding: 0
                    }
                }]
            }

        }
    });
}


if ($('#eth-stats-chart').length) {

    var ctx = document.getElementById("eth-stats-chart").getContext('2d');
    var LineChartDemo = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Sep 11", "Oct 02", "Nov 25", "Dec 19", "Jan 23", "Feb 21"],
            datasets: [{
                label: '$',
                backgroundColor: "rgba(244,75,218, .4)",
                borderColor: "#F44BDA",
                pointColor: "#F44BDA",
                data: [2000, 4500, 4000, 3400, 6800, 7661, 8000, 9000]
            }]
        },
        options: {
            steppedLine: 'before',
            layout: {
                padding: {
                    bottom: -40
                }
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display: false,
                        padding: 0
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false,
                        padding: 0
                    }
                }]
            }

        }
    });
}


if ($('#xmr-stats-chart').length) {

    var ctx = document.getElementById("xmr-stats-chart").getContext('2d');
    var LineChartDemo = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Sep 11", "Oct 02", "Nov 25", "Dec 19", "Jan 23", "Feb 21"],
            datasets: [{
                label: '$',
                backgroundColor: "rgba(95,212,210, .4)",
                borderColor: "#5FD4D2",
                pointColor: "#5FD4D2",
                data: [6, 5, 5, 3, 2, 10, 5, 12]
            }]
        },
        options: {
            steppedLine: 'before',
            layout: {
                padding: {
                    bottom: -40
                }
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display: false,
                        padding: 0
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false,
                        padding: 0
                    }
                }]
            }

        }
    });
}

if ($('#impact-chart').length) {

    var ctx = document.getElementById("impact-chart").getContext('2d');
    var LineChartDemo = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Sep 11", "Oct 02", "Nov 25", "Dec 19", "Jan 23", "Feb 21"],
            datasets: [{
                label: '%',
                backgroundColor: "rgba(95,212,210,  0)",
                borderColor: "#067BFF",
                pointColor: "#067BFF",
                data: [6, 5, 5, 3, 2, 10, 5, 12]
            },{
                label: '%',
                backgroundColor: "rgba(95,212,210, 0)",
                borderColor: "#FF0000",
                pointColor: "#FF0000",
                data: [2, 4, 3, 1, 6, 8, 7, 5]
            }]
        },
        options: {
            steppedLine: 'before',
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "#171717",
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: '600'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "#171717",
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        callback: function(value, index, values) {
                            return value + '%';
                        }
                    }
                }]
            }

        }
    });
}



if ($('#doughnut-chart').length) {

    var ctx = document.getElementById("doughnut-chart").getContext('2d');
    var LineChartDemo = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["One", "Two", "Three"],
            datasets: [{
                label: 'Feb 21',
                backgroundColor: ["#EBA576", "#A26DB6", "#76ADEB"],
                borderColor: ["#fff", "#fff", "#fff"],
                data: [55, 100, 200]
            }]
        },
        options: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 50,
                    fontSize: 18,
                    fontFamily: 'Poppins',
                    padding: 20,
                    fontColor: '#171717'
                }
            }
        }
    });
}

