<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts9_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.echarts9_ref)
    },
    updataChart () {
      // const textfontsize = this.$refs.echarts7_ref.offsetWidth / 100 * 36
      const option = {
        title: {
          text: '中国代表团参赛席位',
          subtext: '数据来源：维基百科',
          itemGap: 5,
          x: 'center',
          y: '1%',
          textStyle: {
            fontFamily: 'sans-serif',
            fontSize: 15,
            fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          backgroundColor: '#F3F1F1',
          legend: {
            left: 'center',
            top: 'bottom',
            data: [
              '高山滑雪',
              '冬季两项',
              '越野滑雪',
              '轮椅冰壶',
              '雪橇曲棍球',
              '单板滑雪'
            ]
          },
          toolbox: {
            show: true,
            feature: {
              // mark: { show: true },
              // dataView: { show: true, readOnly: false },
              // restore: { show: true },
              // saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: '参赛席位',
              type: 'pie',
              radius: [60, 90],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 5
              },
              data: [
                { value: 22, name: '高山滑雪', color: '#F9F923' },
                { value: 21, name: '冬季两项', color: '#F9F923' },
                { value: 32, name: '越野滑雪', color: '#F9F923' },
                { value: 5, name: '轮椅冰壶', color: '#F9F923' },
                { value: 18, name: '雪橇曲棍球', color: '#F9F923' },
                { value: 18, name: '单板滑雪', color: '#F9F923' }
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
