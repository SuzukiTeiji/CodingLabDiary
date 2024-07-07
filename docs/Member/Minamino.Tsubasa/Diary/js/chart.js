// パックマンに似ているグラフ
document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('packman', {
        chart: {
            type: 'pie',
            startAngle: -90, // 開始角度を設定して黄色部分を右真横に配置
            
        },
        title: {
            text: 'パックマンに似ているかどうかの投票結果'
        },
        series: [{
            name: '投票数',
            colorByPoint: true,
            data: data_packman
        }],
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                },
                startAngle: 80,
                endAngle: -270,
                center: ['50%', '50%'],
                size: '100%'
            }
        }
    });
});
// ピラミッドに見えるグラフ
document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('pyramid', {
        chart: {
            type: 'pie',
            startAngle: 270 // 開始角度を設定してピラミッドの形に配置
        },
        title: {
            text: 'ピラミッドに見えるグラフ'
        },
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: data_pyramid
        }],
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                },
                startAngle: -120,
                endAngle: 250,
                center: ['50%', '50%'],
                size: '100%'
            }
        }
    });
});
// どれだけ日本は日本であるかグラフ
document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('japan', {
        chart: {
            type: 'pie',
            backgroundColor: 'white', // 背景を白に設定
            plotBackgroundColor: 'white',
            plotBorderWidth: null,
            plotShadow: false,
        },
        title: {
            text: 'どれだけ日本は日本であるか'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: data_japan,
            size: '100%',
            innerSize: '0%', // 内側の円をなくす
            center: ['50%', '50%']
        }]
    });
});
// フランスを好きな理由
document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('france', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'フランスを好きな理由'
        },
        xAxis: {
            categories: data_france.map(item => item.name),
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '好きな人の総数',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' units'
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: '',
            data: data_france
        }]
    });
});

