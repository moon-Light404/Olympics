<template>
  <div class="com-container">
    <div class="com-chart" ref="project8_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.project8_ref)
    },
    updataChart () {
      //  图表代码
      this.chartInstance.setOption()// 注意填写
      this.chartInstance.resize()
    }
  }
}
</script>

<style>
</style>
