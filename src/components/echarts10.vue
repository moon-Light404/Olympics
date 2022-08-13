<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts10_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.echarts10_ref)
    },
    updataChart () {
      var nanz = ['金牌', '银牌', '铜牌']
      var nvz = ['金牌', '银牌', '铜牌']
      var hh = ['金牌', '银牌', '铜牌']
      var colorList = ['rgba(203, 67, 53,1)', 'rgba(46, 134, 193,1)', 'rgba(23, 165, 137 ,1)',
        'rgba(244, 236, 0 ,0.85)', 'rgba(167, 234, 228,0.7)', 'rgba(243, 193, 132,0.55)',
        'rgba(244, 236, 0 ,0.85)', 'rgba(167, 234, 228,0.7)', 'rgba(243, 193, 132,0.55)',
        'rgba(244, 236, 0 ,0.85)', 'rgba(167, 234, 228,0.7)', 'rgba(243, 193, 132,0.55)'
      ]
      // const textfontsize = this.$refs.echarts7_ref.offsetWidth / 100 * 36
      const option = {
        backgroundColor: '#F5F5F5',
        title: {
          text: '各性别奖牌分布',
          subtext: '数据来源：维基百科',
          itemGap: 5,
          x: 'center',
          y: '3%',
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
        },
        tooltip: {
          confine: true,
          backgroundColor: 'rgba(50,50,50,.3)',
          textStyle: {
            color: '#fff'
          },
          formatter: function (e) {
            return `${e.name}<br>${e.marker}奖牌个数 :${e.value}个`
          }
        },
        legend: {
          x: 'center',
          bottom: '10%',
          itemWidth: 15,
          itemHeight: 15,
          textStyle: {
            fontSize: 15
          }
        },
        series: [{
          name: '',
          type: 'pie',
          radius: [0, '30%'],
          center: ['53%', '50%'],
          label: {
            position: 'inner'
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 0.1,
              shadowBlur: 25,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              color: function (params) {
                return colorList[params.dataIndex]
              }
            }
          },
          selectedMode: 'single',
          data: [{
            value: 31,
            name: '女子'
          }, {
            value: 27,
            name: '男子'
          },
            {
              value: 3,
              name: '混合'
            }
          ]
        },
          {
            name: '',
            type: 'pie',
            radius: ['30%', '50%'],
            center: ['53%', '50%'],
            labelLine: {
              normal: {
                lineStyle: {
                  color: '#696969	'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 0.2,
                color: function (params) {
                  return colorList[params.dataIndex + 3]
                }
              }
            },
            label: {
              normal: {
                formatter: function (params) {
                  if (params.value !== 0) {
                    return params.data.type + ':' + params.value
                  } else {
                    return ''
                  }
                },
                show: true,
                color: '#696969	',
                fontSize: 10
              }

            },
            data: [{
              value: 6,
              name: '女子',
              type: nvz[0]
            },
              {
                value: 12,
                name: '女子',
                type: nvz[1]
              },
              {
                value: 13,
                name: '女子',
                type: nvz[2]
              },
              {
                value: 11,
                name: '男子',
                type: nanz[0]
              },
              {
                value: 7,
                name: '男子',
                type: nanz[1]
              },
              {
                value: 9,
                name: '男子',
                type: nanz[2]
              },
              {
                value: 1,
                name: '混合',
                type: hh[0]
              },
              {
                value: 1,
                name: '混合',
                type: hh[1]
              },
              {
                value: 1,
                name: '混合',
                type: hh[2]
              }
            ]
          }
        ]
      }
      window.onresize = function () {
        this.chartInstance.resize()
      }
      this.chartInstance.setOption(option)
      this.chartInstance.resize()
    }
  }
}
</script>

<style>
</style>
