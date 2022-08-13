<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts4_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.echarts4_ref)
    },
    updataChart () {
      // const textfontsize = this.$refs.all_ref.offsetWidth
      var years = ['3月5日', '3月6日', '3月7日', '3月8日', '3月9日', '3月10日', '3月11日', '3月12日', '3月13日']
      var jdData = [
        [
          '中国',
          '美国',
          '加拿大',
          '日本',
          '斯洛伐克',
          '德国',
          '乌克兰',
          '英国',
          '瑞典',
          '法国',
          '挪威',
          '奥地利'// 法国 挪威 奥地利
        ],
        [
          '中国',
          '乌克兰',
          '日本',
          '斯洛伐克',
          '奥地利',
          '加拿大',
          '法国',
          '英国',
          '美国',
          '挪威'
        ],
        [
          '中国',
          '乌克兰',
          '加拿大',
          '日本',
          '法国',
          '斯洛伐克',
          '德国',
          '美国',
          '奥地利',
          '英国'
        ],
        [
          '中国',
          '乌克兰',
          '加拿大',
          '日本',
          '法国',
          '斯洛伐克',
          '德国',
          '美国',
          '挪威',
          '奥地利'
        ],
        [
          '中国',
          '加拿大',
          '乌克兰',
          '法国',
          '日本',
          '斯洛伐克',
          '美国',
          '德国',
          '奥地利',
          '挪威'
        ],
        [
          '中国',
          '加拿大',
          '乌克兰',
          '法国',
          '奥地利',
          '挪威',
          '日本',
          '斯洛伐克',
          '美国',
          '德国'
        ],
        [
          '中国',
          '乌克兰',
          '加拿大',
          '法国',
          '美国',
          '奥地利',
          '日本',
          '挪威',
          '斯洛伐克',
          '德国'
        ],
        [
          '中国',
          '乌克兰',
          '加拿大',
          '法国',
          '奥地利',
          '美国',
          '德国',
          '日本',
          '挪威',
          '斯洛伐克'
        ],
        [
          '中国',
          '乌克兰',
          '加拿大',
          '法国',
          '美国',
          '奥地利',
          '德国',
          '挪威',
          '日本',
          '斯洛伐克'
        ]
      ]
      var data = [
        [
          1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          6, 3, 2, 2, 1, 1, 1, 1, 1, 1
        ],
        [
          7, 4, 4, 3, 3, 3, 1, 1, 1, 1
        ],
        [
          8, 6, 5, 3, 3, 3, 2, 2, 2, 1
        ],
        [
          10, 7, 6, 4, 3, 3, 2, 2, 2, 1
        ],
        [
          10, 7, 6, 4, 3, 3, 3, 3, 2, 2
        ],
        [
          14, 9, 7, 6, 4, 4, 4, 3, 3, 2
        ],
        [
          18, 10, 8, 6, 5, 4, 4, 4, 3, 3
        ],
        [
          18, 11, 8, 7, 6, 5, 4, 4, 4, 3
        ]
      ]

      const option = {
        baseOption: {
          backgroundColor: '#F5F5F5', //  背景颜色
          timeline: {
            data: years,
            axisType: 'category',
            autoPlay: true,
            playInterval: 1500, //  播放速度

            left: '5%',
            right: '5%',
            bottom: '0%',
            width: '90%',
            //  height: null,
            label: {
              normal: {
                textStyle: {
                  color: '#869596'
                }
              },
              emphasis: {
                textStyle: {
                  color: '#F3580B'
                }
              }
            },
            symbolSize: 10,
            lineStyle: {
              color: '#red'
            },
            checkpointStyle: {
              borderColor: '#red',
              borderWidth: 2
            },
            controlStyle: {
              showNextBtn: true,
              showPrevBtn: true,
              normal: {
                color: '#ff8800',
                borderColor: '#ff8800'
              },
              emphasis: {
                color: 'red',
                borderColor: 'red'
              }
            }
          },
          title: {
            text: '北京冬残奥会各参赛国金牌数',
            subtext: '数据来源:澎湃新闻',
            x: 'center',
            y: '3%',
            textStyle: {
              fontFamily: 'sans-serif',
              fontSize: 22,
              fontWeight: 'normal'
            },
            subtextStyle: {
              color: '#646464',
              fontFamily: 'sans-serif',
              fontSize: 16,
              fontWeight: 'normal'
            }
          },
          calculable: true,
          grid: {
            left: '10%',
            right: '5%',
            bottom: '8%',
            top: '15%',
            containLabel: true
          },
          label: {
            normal: {
              textStyle: {
                color: 'red'
              }
            }
          },
          yAxis: [
            {
              nameGap: 50,
              offset: '37',
              type: 'category',
              interval: 50,
              //  inverse: ture,//  图表倒叙或者正序排版
              data: '',
              nameTextStyle: {
                color: 'red'
              },

              axisLabel: {
                //  rotate:45,
                show: false,
                textStyle: {
                  fontSize: 32,

                  color: function (params) {
                    // 标签国家字体颜色
                    var colorarrays = [
                      '#FF0000',
                      '#884EA0',
                      '#2E86C1',
                      '#D4AC0D',
                      '#27AE60',
                      '#A6ACAF',
                      '#34495E',
                      '#1DC3B5',
                      '#EDE91C',
                      '#ED75EE',
                      '#AED6F1',
                      '#D5D8DC',
                      '#873600'
                    ]

                    //  console.log("111", Index, colorarrays[Index],params); //  打印序列

                    return colorarrays[jdData[0].indexOf(params)]
                  }
                }, // rotate:45,
                interval: 50
              },
              axisLine: {
                lineStyle: {
                  color: 'balck' // Y轴颜色
                }
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: 'balck'
                }
              }
            }
          ],
          xAxis: [
            {
              type: 'value',
              name: '',

              splitNumber: 8, //  轴线个数
              nameTextStyle: {
                color: 'balck'
              },
              axisLine: {
                lineStyle: {
                  color: '#ffa597' // X轴颜色
                }
              },
              axisLabel: {
                formatter: '{value} '
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#fedd8b'
                }
              }
            }
          ],
          series: [
            {
              name: '',
              type: 'bar',
              markLine: {
                label: {
                  normal: {
                    show: false
                  }
                },
                lineStyle: {
                  normal: {
                    color: 'red',
                    width: 3
                  }
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'right', // 数值显示在右侧
                  formatter: '{c}'
                }
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    //  build a color map as your need.
                    //  color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//  随机生成颜色
                    var colorList = [
                      '#FF0000',
                      '#884EA0',
                      '#2E86C1',
                      '#D4AC0D',
                      '#27AE60',
                      '#A6ACAF',
                      '#34495E',
                      '#1DC3B5',
                      '#EDE91C',
                      '#ED75EE',
                      '#AED6F1',
                      '#D5D8DC',
                      '#873600'
                    ]
                    // return colorList[params.dataIndex]

                    // console.log('111', params.name) //  打印序列
                    return colorList[jdData[0].indexOf(params.name)]
                  }
                }
              }
            },

            {
              name: '',
              type: 'bar',
              markLine: {
                label: {
                  normal: {
                    show: false
                  }
                },
                lineStyle: {
                  normal: {
                    color: 'red',
                    width: 3
                  }
                }
              },
              barWidth: '50%',
              barGap: '-100%',
              label: {
                normal: {
                  show: true,
                  fontSize: 16, //  标签国家字体大小
                  position: 'left', //  数值显示在右侧
                  formatter: function (p) {
                    return p.name
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    //  build a color map as your need.
                    //  color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//  随机生成颜色
                    var colorList = [
                      '#FF0000',
                      '#884EA0',
                      '#2E86C1',
                      '#D4AC0D',
                      '#27AE60',
                      '#A6ACAF',
                      '#34495E',
                      '#1DC3B5',
                      '#EDE91C',
                      '#ED75EE',
                      '#AED6F1',
                      '#D5D8DC',
                      '#873600'
                    ]
                    // return colorList[params.dataIndex]

                    // console.log("111", params.name); //  打印序列
                    return colorList[jdData[0].indexOf(params.name)]
                  }
                }
              }
            }
          ],

          animationEasingUpdate: 'quinticInOut',
          animationDurationUpdate: 1500 //  动画效果
        },

        options: []
      }
      for (var n = 0; n < years.length; n++) {
        var res = []
        //    alert(jdData.length);
        for (var j = 0; j < data[n].length; j++) {
          res.push({
            name: jdData[n][j],
            value: data[n][j]
          })
        }
        res.sort(function (a, b) {
          return a.value - b.value
        })
        var res1 = []
        var res2 = []
        //  console.log(res);
        for (var t = 0; t < res.length; t++) {
          res1[t] = res[t].name
          res2[t] = res[t].value
        }
        option.options.push({
          yAxis: {
            data: res1
          },
          series: [
            {
              data: res2
            },
            {
              data: res2
            }
          ]
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
