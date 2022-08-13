<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts5_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.echarts5_ref)
    },
    updataChart () {
      const textfontsize = this.$refs.echarts5_ref.offsetWidth / 100 * 36
      var gshx = ['滑降', '大回转', '超级大回转', '回转', '全能']
      var djlx = ['短距离', '中距离', '长距离']
      var xqqgq = ['雪橇曲棍球']
      var yyhx = ['短距离自由技术', '短距离', '中距离自由技术', '中距离', '长距离自由技术', '长距离']
      var dbhx = ['坡面回转', '障碍追逐']
      var lybh = ['轮椅冰壶']
      var colorList = ['rgba(205, 97, 85,1)', 'rgba(175, 122, 197,1)', 'rgba(84, 153, 199,1)', 'rgba(72, 201, 176,1)', 'rgba(244, 208, 63,1)', 'rgba(93, 109, 126,1)',
        'rgba(205, 97, 85,0.85)', 'rgba(205, 97, 85,0.7)', 'rgba(205, 97, 85,0.55)', 'rgba(205, 97, 85,0.4)', 'rgba(205, 97, 85,0.25)',
        'rgba(175, 122, 197,0.8)', 'rgba(175, 122, 197,0.6)', 'rgba(175, 122, 197,0.4)',
        'rgba(84, 153, 199,0.7)',
        'rgba(72, 201, 176,0.85)', 'rgba(72, 201, 176,0.7)', 'rgba(72, 201, 176,0.55)', 'rgba(72, 201, 176,0.4)', 'rgba(72, 201, 176,0.25)', 'rgba(72, 201, 176,0.15)',
        'rgba(244, 208, 63,0.8)', 'rgba(244, 208, 63,0.6)',
        'rgba(93, 109, 126,0.6)'
      ]
      const option = {
        backgroundColor: '#F5F5F5',
        title: {
          text: '北京冬残奥会比赛大小项目分布',
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
            return `${e.name}<br>${e.marker}项目个数 :${e.value}个`
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
                shadowBlur: textfontsize - 5,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            selectedMode: 'single',
            data: [{
                value: 30,
                name: '高山滑雪'
              }, {
                value: 18,
                name: '冬季两项'
              },
              {
                value: 1,
                name: '雪橇曲棍球'
              }, {
                value: 18,
                name: '越野滑雪'
              }, {
                value: 8,
                name: '单板滑雪'
              }, {
                value: 1,
                name: '轮椅冰壶'
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
                  return colorList[params.dataIndex + 6]
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
                name: '高山滑雪',
                type: gshx[0]
              },
              {
                value: 6,
                name: '高山滑雪',
                type: gshx[1]
              },
              {
                value: 6,
                name: '高山滑雪',
                type: gshx[2]
              },
              {
                value: 6,
                name: '高山滑雪',
                type: gshx[3]
              },
              {
                value: 6,
                name: '高山滑雪',
                type: gshx[4]
              },
              {
                value: 6,
                name: '冬季两项',
                type: djlx[0]
              },
              {
                value: 6,
                name: '冬季两项',
                type: djlx[1]
              },
              {
                value: 6,
                name: '冬季两项',
                type: djlx[2]
              },
              {
                value: 1,
                name: '雪橇曲棍球',
                type: xqqgq[0]
              },
              {
                value: 4,
                name: '越野滑雪',
                type: yyhx[0]
              },
              {
                value: 2,
                name: '越野滑雪',
                type: yyhx[1]
              },
              {
                value: 4,
                name: '越野滑雪',
                type: yyhx[2]
              },
              {
                value: 2,
                name: '越野滑雪',
                type: yyhx[3]
              },
              {
                value: 4,
                name: '越野滑雪',
                type: yyhx[4]
              },
              {
                value: 2,
                name: '越野滑雪',
                type: yyhx[5]
              },
              {
                value: 4,
                name: '单板滑雪',
                type: dbhx[0]
              },
              {
                value: 4,
                name: '单板滑雪',
                type: dbhx[1]
              },
              {
                value: 1,
                name: '轮椅冰壶',
                type: lybh[0]
              }
            ]
          }
        ]
      }
      this.chartInstance.setOption(option)
      this.chartInstance.resize()
    }
  }
}
</script>

<style>
</style>
