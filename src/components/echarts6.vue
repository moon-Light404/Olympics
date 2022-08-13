<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts6_ref"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      charInstance: null
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
      this.charInstance = this.$echarts.init(this.$refs.echarts6_ref)
    },
    updataChart () {
      // const textfontsize = this.$refs.echarts6_ref.offsetWidth / 100 * 36
			var labelData = ['第一名', '第二名', '第三名', '第四名', '第五名']
			var manData = [{
					value: 1153,
					name: '羽生结弦'
				},
				{
					value: 739,
					name: '方塔娜'
				},
				{
					value: 435,
					name: '宇野昌磨'
				},
				{
					value: 432,
					name: '梅德韦杰娃'
				},
				{
					value: 405,
					name: '扎吉托娃'
				}
			]
			var womanData = [{
					value: -6085,
					name: '武大靖'
				},
				{
					value: -5629,
					name: '范可新'
				},
				{
					value: -3163,
					name: '曲春雨'
				},
				{
					value: -2146,
					name: '李靳宇'
				},
				{
					value: -1393,
					name: '张昊'
				}
			]
			const option = {
				title: {
          text: '中国运动员与国外运动员热度排行榜',
          subtext: '数据来源：网易新闻',
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
				},
				backgroundColor: '#F5F5F5',
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					},
					formatter: function (a) {
						var v = a[0]
						return v.seriesName + '<br/>' + v.marker + v.name + '：' + Math.abs(v.value) + '万次'
					}
				},
				xAxis: [{
					type: 'value',
					min: -6100,
					max: 0,
					gridIndex: 0,
					axisTick: {
						show: false,
						inside: false
					},
					axisLabel: {
						show: false
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#000'
						}
					},
					splitLine: {
						show: false
					}
				}, {
					type: 'value',
					gridIndex: 1,
					min: 0,
					max: 1200,
					axisTick: {
						show: false
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#000'
						}
					},
					axisLabel: {
						show: false
					},
					splitLine: {
						show: false
					}
				}],
				yAxis: [{
					type: 'category',
					inverse: true,
					data: labelData,
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#000'
						}
					}
				}, {
					type: 'category',
					gridIndex: 1,
					inverse: true,
					data: labelData,
					axisTick: {
						show: false
					},
					axisLabel: {
            fontSize: 15
          },
					axisLine: {
						show: false
					}
				}],
				grid: [{
					show: false,
					left: '10%',
					top: '12%',
					bottom: '1%',
					containLabel: true,
					width: '40%'
				}, {
					show: false,
					left: '52%',
					top: '12%',
					bottom: '1%',
					width: '40%',
					containLabel: true
				}],
				color: ['#2FACFA', '#F5A623'],
				series: [{
						name: '中国运动员热度',
						type: 'bar',
						barWidth: 25,
						gridIndex: 0,
						itemStyle: {
							normal: {
								show: true,
								color: '#5de3e1',
								barBorderRadius: 12,
								borderWidth: 0,
								borderColor: '#333',
								label: {
									show: true,
									position: 'left',
									formatter: function (v) {
										return (v.value * -1)
									}
								}
							}
						},
						data: womanData
					},
					{
						name: '国外运动员热度',
						type: 'bar',
						barWidth: 25,
						xAxisIndex: 1,
						yAxisIndex: 1,
						itemStyle: {
							normal: {
								show: true,
								color: '#8A3EEB',
								barBorderRadius: 12,
								borderWidth: 0,
								borderColor: '#333',
								label: {
									show: true,
									position: 'right',
									formatter: function (v) {
										return v.value
									}
								}
							}
						},
						data: manData
					}
				]
			}
      this.charInstance.setOption(option)
      this.charInstance.resize()
    }
  }
}
</script>

<style>
</style>
