<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts11_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.echarts11_ref)
    },
    updataChart () {
      // const textfontsize = this.$refs.echarts7_ref.offsetWidth / 100 * 36
      const option = {
        title: {
          text: '中国代表团多枚奖牌获得者',
          subtext: '数据来源：维基百科',
          itemGap: 5,
          x: 'center',
          y: '1%',
          textStyle: {
            fontFamily: 'sans-serif',
            fontSize: 15,
            fontWeight: 'normal'
          },
          subtextStyle: {
            color: '#646464',
            fontFamily: 'sans-serif',
            fontSize: 13,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        dataZoom: [
          {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 50
          }
        ],
        legend: {
          show: true,
          data: ['金牌', '银牌', '铜牌'],
          x: '90%',
          y: '10%'
        },
        backgroundColor: '#F3F1F1',
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: ['张梦秋', '郑鹏', '朱大庆', '刘思彤', '杨洪琼', '刘梦涛', '毛忠武', '单怡霖', '张雯静', '梁景怡', '纪立家', '王晨阳', '刘子旭', '武中伟', '蔡佳云', '王跃', '赵志清', '李盼盼', '朱永钢']
        },
        series: [
          {
            name: '金牌',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [3, 2, 0, 0, 3, 2, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            color: '#F4D424'
          },
          {
            name: '银牌',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [2, 2, 3, 3, 0, 0, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            color: '#D7F7F4'
          },
          {
            name: '铜牌',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [0, 0, 1, 1, 0, 1, 0, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2],
            color: '#F4B285'
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
