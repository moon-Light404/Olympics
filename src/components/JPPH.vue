<template>
  <div class="com-container">
    <div class="com-chart" ref="jpph"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.updataChart)
  },
  mounted () {
    this.initChart()
    this.updataChart()
    window.addEventListener('resize', this.updataChart)
    this.updataChart()
  },
  methods: {
  initChart () {
    this.chartInstance = this.$echarts.init(this.$refs.jpph)
  },
  updataChart () {
	const textfontsize = this.$refs.jpph.offsetWidth / 600
	// console.log(textfontsize)
    var years = ['第一届', '第二届', '第三届', '第四届', '第五届', '第六届', '第七届', '第八届', '第九届', '第十届', '第十一届', '第十二届', '第十三届'
    ]
    var jdData = [
        ['奥地利', '西德', '芬兰', '瑞典', '瑞士', '挪威', '法国', '加拿大', '捷克斯洛伐克'],
        ['挪威', '芬兰', '奥地利', '西德', '瑞典', '瑞士', '美国', '加拿大', '法国', '捷克斯洛伐克'],
        ['奥地利', '挪威', '瑞士', '美国', '芬兰', '西德', '瑞典', '加拿大', '波兰', '英国'],
        ['挪威', '奥地利', '西德', '美国', '芬兰', '瑞士', '瑞典', '法国', '加拿大', '意大利'],
        ['美国', '德国', '独联体', '奥地利', '法国', '瑞士', '芬兰', '挪威', '加拿大', '捷克斯洛伐克'],
        ['挪威', '德国', '美国', '奥地利', '法国', '俄罗斯', '芬兰', '瑞士', '意大利', '波兰'],
        ['德国', '日本', '挪威', '美国', '奥地利', '俄罗斯', '瑞士', '法国', '芬兰', '加拿大'],
        ['美国', '德国', '奥地利', '俄罗斯', '挪威', '法国', '加拿大', '瑞士', '乌克兰', '意大利'],
        ['俄罗斯', '乌克兰', '德国', '法国', '奥地利', '加拿大', '美国', '日本', '白俄罗斯', '意大利'],
        ['俄罗斯', '德国', '加拿大', '乌克兰', '美国', '斯洛伐克', '奥地利', '日本', '白俄罗斯', '意大利'],
        ['俄罗斯', '乌克兰', '美国', '加拿大', '德国', '法国', '奥地利', '斯洛伐克', '日本', '英国'],
        ['美国', '加拿大', '中立残疾人奥林匹克运动员', '乌克兰', '法国', '德国', '白俄罗斯', '斯洛伐克', '日本', '荷兰'],
        ['中国', '乌克兰', '加拿大', '美国', '德国', '奥地利', '法国', '挪威', '日本', '斯洛伐克']
    ]
    var data = [
        [35, 28, 22, 20, 12, 12, 5, 4, 3],
        [54, 34, 22, 17, 16, 9, 6, 6, 3, 1],
        [70, 41, 37, 35, 34, 34, 14, 14, 13, 10],
        [60, 44, 30, 30, 25, 23, 15, 13, 13, 9],
        [45, 38, 21, 20, 19, 15, 14, 14, 12, 6],
        [64, 64, 43, 35, 31, 30, 25, 16, 13, 10],
        [44, 41, 40, 34, 34, 31, 23, 22, 19, 15],
        [43, 33, 29, 21, 19, 19, 15, 12, 12, 9],
        [33, 25, 18, 15, 14, 13, 12, 9, 9, 8],
        [38, 24, 19, 19, 13, 11, 11, 11, 9, 7],
        [80, 25, 18, 16, 15, 12, 11, 7, 6, 6],
        [36, 28, 24, 22, 20, 19, 12, 11, 10, 7],
        [61, 29, 25, 20, 19, 13, 12, 7, 7, 6]
    ]
    const option = {
        baseOption: {
        backgroundColor: '#F5F5F5',
            timeline: {
                data: years,
                axisType: 'category',
                autoPlay: true,
                playInterval: 2200,
                left: 'center',
                right: '15%',
                bottom: textfontsize + 2,
                width: '95%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#5F3818'
                        }
                    }
                },
                symbolSize: 6,
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    itemSize: 19,
                    itemGap: 3,
                    normal: {
                        color: '#FFA500',
                        borderColor: '#FFA500'
                    },
                    emphasis: {
                        color: '#FFA500',
                        borderColor: '#FFA500'
                    }
                }
            },
            title: [{
                text: '',
                right: '5%',
                bottom: '15%',
                textStyle: {
                    fontSize: 25,
                    color: '#696969'
                }
            }, {
                text: '历届金牌排行榜',
                subtext: '数据来源：维基百科',
                itemGap: 5,
                x: 'center',
                y: '1%',
                textStyle: {
                  fontFamily: 'sans-serif',
                  fontSize: 21,
                  fontWeight: 'normal'
                },
                subtextStyle: {
                  color: '#646464',
                  fontFamily: 'sans-serif',
                  fontSize: 15,
                  fontWeight: 'normal'
                }
            }],
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            grid: {
                left: '4%',
                right: '3%',
                bottom: '12%',
                top: '10%',
                containLabel: true
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: [{
                offset: '10',
                type: 'category',
                data: '',
                nameTextStyle: {
                    color: ''
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 10 + textfontsize
                    }
                }
            }],
            xAxis: [{
                type: 'value',
                splitNumber: 8,
                axisLabel: {
                    formatter: '{value} '
                },
                splitLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            }],
            series: [{
                type: 'bar',
                barWidth: '50%',
                barBorderRadius: [0, 20, 20, 0],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#21EBE3', '#eea2a4', '#f5b971', '#916CFE', '#aacfcf', '#d291bc', '#ffa5b0',
                                '#fedd8b', '#EB5E21', '#a6dcef', '#c3bed4', '#495a80',
                                '#9966cc', '#bdb76a', '#eee8ab', '#a35015',
                                '#04dd98', '#d9b3e6', '#b6c3fc', '#315dbc'
                            ]
                            return colorList[params.dataIndex]
                        }
                    }
                }
            }],
            animationDurationUpdate: 2000,
            animationEasingUpdate: 'quinticInOut'
        },
        options: []
    }
    for (var n = 0; n < years.length; n++) {
        var res = []
        for (var j = 0; j < data[n].length; j++) {
            res.push({
                name: jdData[n][j],
                value: data[n][j]
            })
        }
        res.sort(function (a, b) {
            return b.value - a.value
        }).slice(0, 6)
        res.sort(function (a, b) {
            return a.value - b.value
        })
        var res1 = []
        var res2 = []
        for (var t = 0; t < res.length; t++) {
            res1[t] = res[t].name
            res2[t] = res[t].value
        }
        option.options.push({
            title: {
                text: years[n]
            },
            yAxis: {
                data: res1
            },
            series: [{
                data: res2
            }]
        })
      }
    this.chartInstance.setOption(option)
    this.chartInstance.resize()
  }
 }
}

</script>

<style>

</style>
