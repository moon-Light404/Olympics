<template>
  <div class="com-container">
    <div class="com-chart" ref="cloud_ref"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title1: null,
        title2: null,
        title3: null,
        title4: null,
        title5: null,
        title6: null,
        title7: null,
        title8: null,
        title9: null,
        title10: null,
        title11: null,
        title12: null,

        url1: null,
        url2: null,
        url3: null,
        url4: null,
        url5: null,
        url6: null,
        url7: null,
        url8: null,
        url9: null,
        url10: null,
        url11: null,
        url12: null,
        chartInstance: null
      }
    },
    destroyed () {
      window.removeEventListener('resize', this.updataChart)
    },
    mounted () {
      this.initChart()
      this.updataChart()
      this.getData()
      window.addEventListener('resize', this.updataChart)
      this.updataChart()
    },
    methods: {
      async getData () {
        const {
          data: ret
        } = await this.$http.get('http://127.0.0.1:5000/getMsg')
        const data = ret
        this.title1 = data.title[0]
        this.title2 = data.title[1]
        this.title3 = data.title[2]
        this.title4 = data.title[3]
        this.title5 = data.title[4]
        this.title6 = data.title[5]
        this.title7 = data.title[6]
        this.title8 = data.title[7]
        this.title9 = data.title[8]
        this.title10 = data.title[9]
        this.title11 = data.title[10]
        this.title12 = data.title[11]

        this.url1 = data.url[0]
        this.url2 = data.url[1]
        this.url3 = data.url[2]
        this.url4 = data.url[3]
        this.url5 = data.url[4]
        this.url6 = data.url[5]
        this.url7 = data.url[6]
        this.url8 = data.url[7]
        this.url9 = data.url[8]
        this.url10 = data.url[9]
        this.url11 = data.url[10]
        this.url12 = data.url[11]
      },
      initChart () {
        this.chartInstance = this.$echarts.init(this.$refs.cloud_ref)
      },
      async updataChart () {
        const {
          data: ret
        } = await this.$http.get('http://127.0.0.1:5000/getMsg')
        const data = ret
        this.title1 = data.title[0]
        this.title2 = data.title[1]
        this.title3 = data.title[2]
        this.title4 = data.title[3]
        this.title5 = data.title[4]
        this.title6 = data.title[5]
        this.title7 = data.title[6]
        this.title8 = data.title[7]
        this.title9 = data.title[8]
        this.title10 = data.title[9]
        this.title11 = data.title[10]
        this.title12 = data.title[11]

        this.url1 = data.url[0]
        this.url2 = data.url[1]
        this.url3 = data.url[2]
        this.url4 = data.url[3]
        this.url5 = data.url[4]
        this.url6 = data.url[5]
        this.url7 = data.url[6]
        this.url8 = data.url[7]
        this.url9 = data.url[8]
        this.url10 = data.url[9]
        this.url11 = data.url[10]
        this.url12 = data.url[11]
        this.chartInstance.on('click', function (params) {
          window.open(params.data.url)
        })
        var colorList = [
            '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
            '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
            '#0780cf', '#50c48f'
          ]
        const option = {
          title: {
            text: '热点新闻词云图',
            subtext: '数据来源：搜狗百科',
            itemGap: 5,
            x: 'center',
            y: '2%',
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
          backgroundColor: '#F5FFFA',
          tooltip: {
            confine: true,
            formatter: function (param) {
                        return param.marker + ' ' + param.name
                    }
          },
          series: [{
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 500,
              edgeLength: 10
            },
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [{
              name: this.title1,
              url: this.url1,
              symbolSize: 48,
              itemStyle: {
                normal: {
                  color: colorList[0]
                }
              }
            }, {
              name: this.title2,
              url: this.url2,
              symbolSize: 73,
              itemStyle: {
                normal: {
                  color: colorList[1]
                }
              }
            }, {
              name: this.title3,
              url: this.url3,
              symbolSize: 67,
              itemStyle: {
                normal: {
                  color: colorList[2]
                }
              }
            }, {
              name: this.title4,
              url: this.url4,
              symbolSize: 50,
              itemStyle: {
                normal: {
                  color: colorList[3]
                }
              }
            }, {
              name: this.title5,
              url: this.url5,
              symbolSize: 88,
              itemStyle: {
                normal: {
                  color: colorList[4]
                }
              }
            }, {
              name: this.title6,
              url: this.url6,
              symbolSize: 55,
              itemStyle: {
                normal: {
                  color: colorList[5]
                }
              }
            }, {
              name: this.title7,
              url: this.url7,
              symbolSize: 70,
              itemStyle: {
                normal: {
                  color: colorList[6]
                }
              }
            }, {
              name: this.title8,
              url: this.url8,
              symbolSize: 67,
              itemStyle: {
                normal: {
                  color: colorList[7]
                }
              }
            }, {
              name: this.title9,
              url: this.url9,
              symbolSize: 47,
              itemStyle: {
                normal: {
                  color: colorList[8]
                }
              }
            }, {
              name: this.title10,
              url: this.url10,
              symbolSize: 82,
              itemStyle: {
                normal: {
                  color: colorList[9]
                }
              }
            }, {
              name: this.title11,
              url: this.url11,
              symbolSize: 59,
              itemStyle: {
                normal: {
                  color: colorList[10]
                }
              }
            }, {
              name: this.title12,
              url: this.url12,
              symbolSize: 90,
              itemStyle: {
                normal: {
                  color: colorList[11]
                }
              }
            }]
          }]
        }
        this.chartInstance.setOption(option)
      }
    }
  }
</script>

<style>
</style>
