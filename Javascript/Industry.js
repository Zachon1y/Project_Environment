var chartDom1 = document.getElementById('generalGraph');
var myChart1 = echarts.init(chartDom1);
var option1;

const data = {
    name: '环保行业', 
    children: [
        {
            name: '环保产品生产',
            children: [
                { name: '污染防治设备'},
                { name: '环境监测仪器仪表'},
                { name: '资源综合利用设备'},
                { name: '污染治理专用药剂和材料等'}
            ],
        },
        {
            name: '环保服务',
            children: [
                { name: '环境工程设计与施工'},
                { name: '污染治理设施运营' },
                { name: '环境监测' },
                { name: '环境咨询'}
            ]
        }
    ]
};

option1 = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'tree',
            id: 0,
            name: 'tree1',
            data: [data],
            top: '2%',
            left: '14%',
            bottom: '-2%',
            right: '26%',
            symbolSize: 7,
            edgeShape: 'polyline',
            edgeForkPosition: '43%',
            initialTreeDepth: 2,
            lineStyle: {
                width: 2
            },
            label: {
                textStyle:{
                    fontsize:"24"
                },
                backgroundColor: '#fff',
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            },
            leaves: {
                label: {
                    textStyle:{
                        fontsize:"24"
                    },
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },
            emphasis: {
                focus: 'descendant'
            },
            expandAndCollapse: true,
            animationDuration: 600,
            animationDurationUpdate: 750
        }
    ]
};

option1 && myChart1.setOption(option1);

var chartDomColumn = document.getElementById('columnParagraph');
var myChartColumn = echarts.init(chartDomColumn);
var optionColumn;

optionColumn = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: 40,
        bottom: 20
    },
    xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisLabel: { show: false ,
            fontStyle:{
                fontsize:"24"
            }
            },
        axisTick: { show: false },
        splitLine: { show: false },
        data: [
            '黑龙江',
            '福建',
            '广西',
            '重庆',
            '北京',
            '四川',
            '辽宁',
            '河北',
            '湖北',
            '上海',
            '安徽',
            '湖南',
            '河南',
            '浙江',
            '广东',
            '山东',
            '江苏'
        ]
    },
    series: [
        {
            name: '个数',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true,
                formatter: '{b}'
            },
            data: [
                5,
                7,
                7,
                8,
                9,
                9,
                10,
                14,
                14,
                16,
                19,
                22,
                25,
                30,
                37,
                38,
                78
            ]
        }
    ]
};
optionColumn && myChartColumn.setOption(optionColumn);

let chartDomRegion = document.getElementById('regionsParagraph');
let myChartRegion = echarts.init(chartDomRegion);
let optionRegion;

optionRegion = {
    xAxis: {
        type: 'category',
        data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022']
    },
    yAxis: {
        type: 'value'
    },
    series: [

        {

            data: [724, 897, 1076, 1240, 1360, 1480, 1740,2120,2470,2530,2870,2920,3450,3120,2860,2910,3020,2830,2440,1960,1670,1230,680],
            type: 'bar'
        }
    ]
};

optionRegion && myChartRegion.setOption(optionRegion);

let chartDomContribute = document.getElementById('contribution');
let myChartContribute  = echarts.init(chartDomContribute );
let optionContribute ;

optionContribute  = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        type: 'category',
        data: [ '2004', '2005', '2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '环境治理营收与GDP比值(%) ',
            data: [0.47,0.49,0.50,0.52,0.57,0.62,0.68,0.82,0.94,1.07,1.18,1.46,1.52,1.63,1.81,1.87,1.96],
            type: 'line',
            smooth: true
        },
        {
            name: '环境治理贡献率(%) ',
            data: [0.45,0.64,0.60,0.52,0.67,1.61,1.02,1.14,2.01,2.47,3.11,4.48,3.42,2.42,2.94,3.37,4.52 ],
            type: 'line',
            smooth: true
        }
    ]
};

optionContribute  && myChartContribute .setOption(optionContribute );

let chartDom = document.getElementById('employment');
let myChart = echarts.init(chartDom);
let option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['环境治理就业人口', '占全国就业人口比重']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2004', '2011', '2020'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '就业人口(万)',
            min: 0,
            max: 350,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '占全国比重',
            min: 0,
            max: 5,
            interval: 0.5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: '环境治理就业人口',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 万';
                }
            },
            data: [52.20,93.40,324.20]
        },
        {
            name: '占全国就业人口比重',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' %';
                }
            },
            data: [0.6,1.3,4.6]
        }
    ]
};

option && myChart.setOption(option);
