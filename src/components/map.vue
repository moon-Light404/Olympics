<template>
  <div class="com-container">
    <div class="com-chart" ref="map_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.map_ref)
    },
    updataChart () {
      // const size = this.$refs.map_ref.offsetWidth / 100 * 3.6
      var data = [{
              time: '第一届',
              data: [{
                name: '瑞典',
                value: [9.5016, 46.295, '瑞典'],
                year: '1976年',
                address: '恩舍尔兹维克',
                countries: '16个',
                events: '53项',
                athletes: '53人',
                link: 'https://baike.sogou.com/v526256.htm?fromTitle=%E7%AC%AC%E4%B8%80%E5%B1%8A%E5%A5%A5%E8%BF%90%E4%BC%9A',
                years: '第一届冬残奥会'
              }]
            }, {
              time: '第二届',
              data: [{
                name: '挪威',
                value: [9.5016, 46.295, '挪威'],
                year: '1980年',
                address: '耶卢',
                countries: '18个',
                events: '63项',
                athletes: '299人',
                link: 'https://baike.sogou.com/v543284.htm?fromTitle=%E7%AC%AC2%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第二届冬残奥会'
              }]
            }, {
              time: '第三届',
              data: [{
                name: '奥地利',
                value: [6, 46.295, '奥地利'],
                year: '1984年',
                address: '因斯布鲁克',
                countries: '22个',
                events: '66项',
                athletes: '419人',
                link: 'https://baike.sogou.com/v543280.htm?fromTitle=%E7%AC%AC3%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第三届冬残奥会'
              }]
            }, {
              time: '第四届',
              data: [{
                name: '奥地利',
                value: [9.5016, 46.295, '奥地利'],
                year: '1988年',
                address: '因斯布鲁克',
                countries: '22个',
                events: '68项',
                athletes: '377人',
                link: 'https://baike.sogou.com/v39872.htm?fromTitle=%E7%AC%AC%E5%9B%9B%E5%B1%8A%E5%86%AC%E5%AD%A3%E5%A5%A5%E8%BF%90%E4%BC%9A%EF%BC%881936%E5%B9%B4%EF%BC%89',
                years: '第四届冬残奥会'
              }]
            }, {
              time: '第五届',
              data: [{
                name: '法国',
                value: [9.5016, 46.295, '法国'],
                year: '1992年',
                address: '蒂涅-阿尔贝维尔',
                countries: '24个',
                events: '79项',
                athletes: '365人',
                link: 'https://baike.sogou.com/v143010637.htm?fromTitle=%E7%AC%AC%E4%BA%94%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第五届冬残奥会'
              }]
            }, {
              time: '第六届',
              data: [{
                name: '挪威',
                value: [9.5016, 46.295, '挪威'],
                year: '1994年',
                address: '利勒哈默尔',
                countries: '31个',
                events: '73项',
                athletes: '471人',
                link: 'https://baike.sogou.com/v543260.htm?fromTitle=%E7%AC%AC6%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第六届冬残奥会'
              }]
            }, {
              time: '第七届',
              data: [{
                name: '日本',
                value: [9.5016, 46.295, '日本'],
                year: '1998年',
                address: '长野',
                countries: '31个',
                events: '64项',
                athletes: '562人',
                link: 'https://baike.sogou.com/v69090254.htm?fromTitle=%E7%AC%AC7%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第七届冬残奥会'
              }]
            }, {
              time: '第八届',
              data: [{
                name: '美国',
                value: [9.5016, 46.295, '美国'],
                year: '2002年',
                address: '盐湖城',
                countries: '36个',
                events: '61项',
                athletes: '416人',
                link: 'https://baike.sogou.com/v128509450.htm?fromTitle=%E7%AC%AC8%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第八届冬残奥会'
              }]
            }, {
              time: '第九届',
              data: [{
                name: '意大利',
                value: [9.5016, 46.295, '意大利'],
                year: '2006年',
                address: '都灵',
                countries: '38个',
                events: '58项',
                athletes: '474人',
                link: 'http://www.olympic.cn/games/winter/dongjiaoyunhuiliebiao/2007/1011/25209.html',
                years: '第九届冬残奥会'
              }]
            }, {
              time: '第十届',
              data: [{
                name: '加拿大',
                value: [9.5016, 46.295, '加拿大'],
                year: '2010年',
                address: '温哥华-威士拿',
                countries: '44个',
                events: '64项',
                athletes: '502人',
                link: 'https://baike.sogou.com/v76159.htm?fromTitle=%E7%AC%AC10%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第十届冬残奥会'
              }]
            }, {
              time: '第十一届',
              data: [{
                name: '俄罗斯',
                value: [9.5016, 46.295, '俄罗斯'],
                year: '2014年',
                address: '索契',
                countries: '45个',
                events: '72项',
                athletes: '550人',
                link: 'https://baike.sogou.com/v543215.htm?fromTitle=%E7%AC%AC11%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第十一届冬残奥会'
              }]
            }, {
              time: '第十二届',
              data: [{
                name: '韩国',
                value: [9.5016, 46.295, '韩国'],
                year: '2018年',
                address: '平昌',
                countries: '49个',
                events: '80项',
                athletes: '569人',
                link: 'https://baike.sogou.com/v143774871.htm?fromTitle=%E7%AC%AC12%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第十二届冬残奥会'
              }]
            }, {
              time: '第十三届',
              data: [{
                name: '中国',
                value: [9.5016, 46.295, '中国'],
                year: '2022年',
                address: '北京',
                countries: '46个',
                events: '81项',
                athletes: '1072人',
                link: 'https://baike.sogou.com/v10780174.htm?fromTitle=%E7%AC%AC13%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A',
                years: '第十三届冬奥会'
              }]
            }]
           const option = {
              baseOption: {
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'quinticInOut',
                timeline: {
                  axisType: 'category',
                  autoPlay: true,
                  playInterval: 2000,
                  left: 'center',
                  bottom: '2%',
                  width: '95%',
                  label: {
                    normal: {
                      textStyle: {
                        color: '#696969'
                      }
                    },
                    position: 'top'
                  },
                  lineStyle: {
                    color: '#696969'
                  },
                  symbolSize: 10,
                  checkpointStyle: {
                    borderColor: '#8df4f4',
                    color: '#53D9FF',
                    borderWidth: 5
                  },
                  controlStyle: {
                    itemSize: 25,
                    itemGap: 2,
                    normal: {
                      borderColor: '#696969'
                    }
                  },
                  data: data.map(function (ele) {
                    return ele.time
                  })
                },
                backgroundColor: '#F5F5F5',
                title: {
                  text: '冬残奥发展史',
                  subtext: '数据来源：维基百科',
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
                tooltip: {
                  trigger: 'item',
                  type: 'line',
                  triggerOn: 'none',
                  formatter: function (params) {
                    if (params.data) {
                      return '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;' + params.data.years + '<br><br>' +
                        params
                        .marker + '举办时间：' + params.data.year + '<br><br>' + params.marker + '举办地点：' + params
                        .data.value[2] + '—' + params.data.address + '<br><br>' + params.marker +
                        '代表国家/地区数：' +
                        params.data.countries + '<br><br>' + params.marker + '比赛项目：' + params.data.events +
                        '<br><br>' + params.marker + '参赛人数：' + params.data.athletes
                    }
                  }
                },
                series: [{
                  id: 'map',
                  type: 'map',
                  mapType: 'world',
                  zoom: 1.23,
                  roam: true,
                  nameMap: {
                    Afghanistan: '阿富汗',
                    Singapore: '新加坡',
                    Angola: '安哥拉',
                    Albania: '阿尔巴尼亚',
                    'United Arab Emirates': '阿联酋',
                    Argentina: '阿根廷',
                    Armenia: '亚美尼亚',
                    'French Southern and Antarctic Lands': '法属南半球和南极领地',
                    Australia: '澳大利亚',
                    Austria: '奥地利',
                    Azerbaijan: '阿塞拜疆',
                    Burundi: '布隆迪',
                    Belgium: '比利时',
                    Benin: '贝宁',
                    'Burkina Faso': '布基纳法索',
                    Bangladesh: '孟加拉国',
                    Bulgaria: '保加利亚',
                    'The Bahamas': '巴哈马',
                    'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
                    Belarus: '白俄罗斯',
                    Belize: '伯利兹',
                    Bermuda: '百慕大',
                    Bolivia: '玻利维亚',
                    Brazil: '巴西',
                    Brunei: '文莱',
                    Bhutan: '不丹',
                    Botswana: '博茨瓦纳',
                    'Central African Republic': '中非共和国',
                    Canada: '加拿大',
                    Switzerland: '瑞士',
                    Chile: '智利',
                    China: '中国',
                    'Ivory Coast': '象牙海岸',
                    Cameroon: '喀麦隆',
                    'Democratic Republic of the Congo': '刚果民主共和国',
                    'Republic of the Congo': '刚果共和国',
                    Colombia: '哥伦比亚',
                    'Costa Rica': '哥斯达黎加',
                    Cuba: '古巴',
                    'Northern Cyprus': '北塞浦路斯',
                    Cyprus: '塞浦路斯',
                    'Czech Republic': '捷克共和国',
                    Germany: '德国',
                    Djibouti: '吉布提',
                    Denmark: '丹麦',
                    'Dominican Republic': '多明尼加共和国',
                    Algeria: '阿尔及利亚',
                    Ecuador: '厄瓜多尔',
                    Egypt: '埃及',
                    Eritrea: '厄立特里亚',
                    Spain: '西班牙',
                    Estonia: '爱沙尼亚',
                    Ethiopia: '埃塞俄比亚',
                    Finland: '芬兰',
                    Fiji: '斐',
                    'Falkland Islands': '福克兰群岛',
                    France: '法国',
                    Gabon: '加蓬',
                    'United Kingdom': '英国',
                    Georgia: '格鲁吉亚',
                    Ghana: '加纳',
                    Guinea: '几内亚',
                    Gambia: '冈比亚',
                    'Guinea Bissau': '几内亚比绍',
                    Greece: '希腊',
                    Greenland: '格陵兰',
                    Guatemala: '危地马拉',
                    'French Guiana': '法属圭亚那',
                    Guyana: '圭亚那',
                    Honduras: '洪都拉斯',
                    Croatia: '克罗地亚',
                    Haiti: '海地',
                    Hungary: '匈牙利',
                    Indonesia: '印度尼西亚',
                    India: '印度',
                    Ireland: '爱尔兰',
                    Iran: '伊朗',
                    Iraq: '伊拉克',
                    Iceland: '冰岛',
                    Israel: '以色列',
                    Italy: '意大利',
                    Jamaica: '牙买加',
                    Jordan: '约旦',
                    Japan: '日本',
                    Kazakhstan: '哈萨克斯坦',
                    Kenya: '肯尼亚',
                    Kyrgyzstan: '吉尔吉斯斯坦',
                    Cambodia: '柬埔寨',
                    Kosovo: '科索沃',
                    Kuwait: '科威特',
                    Laos: '老挝',
                    Lebanon: '黎巴嫩',
                    Liberia: '利比里亚',
                    Libya: '利比亚',
                    'Sri Lanka': '斯里兰卡',
                    Lesotho: '莱索托',
                    Lithuania: '立陶宛',
                    Luxembourg: '卢森堡',
                    Latvia: '拉脱维亚',
                    Morocco: '摩洛哥',
                    Moldova: '摩尔多瓦',
                    Madagascar: '马达加斯加',
                    Mexico: '墨西哥',
                    Macedonia: '马其顿',
                    Mali: '马里',
                    Myanmar: '缅甸',
                    Montenegro: '黑山',
                    Mongolia: '蒙古',
                    Mozambique: '莫桑比克',
                    Mauritania: '毛里塔尼亚',
                    Malawi: '马拉维',
                    Malaysia: '马来西亚',
                    Namibia: '纳米比亚',
                    'New Caledonia': '新喀里多尼亚',
                    Niger: '尼日尔',
                    Nigeria: '尼日利亚',
                    Nicaragua: '尼加拉瓜',
                    Netherlands: '荷兰',
                    Norway: '挪威',
                    Nepal: '尼泊尔',
                    'New Zealand': '新西兰',
                    Oman: '阿曼',
                    Pakistan: '巴基斯坦',
                    Panama: '巴拿马',
                    Peru: '秘鲁',
                    Philippines: '菲律宾',
                    'Papua New Guinea': '巴布亚新几内亚',
                    Poland: '波兰',
                    'Puerto Rico': '波多黎各',
                    'North Korea': '北朝鲜',
                    Portugal: '葡萄牙',
                    Paraguay: '巴拉圭',
                    Qatar: '卡塔尔',
                    Romania: '罗马尼亚',
                    Russia: '俄罗斯',
                    Rwanda: '卢旺达',
                    'Western Sahara': '西撒哈拉',
                    'Saudi Arabia': '沙特阿拉伯',
                    Sudan: '苏丹',
                    'South Sudan': '南苏丹',
                    Senegal: '塞内加尔',
                    'Solomon Islands': '所罗门群岛',
                    'Sierra Leone': '塞拉利昂',
                    'El Salvador': '萨尔瓦多',
                    Somaliland: '索马里兰',
                    Somalia: '索马里',
                    'Republic of Serbia': '塞尔维亚',
                    Suriname: '苏里南',
                    Slovakia: '斯洛伐克',
                    Slovenia: '斯洛文尼亚',
                    Sweden: '瑞典',
                    Swaziland: '斯威士兰',
                    Syria: '叙利亚',
                    Chad: '乍得',
                    Togo: '多哥',
                    Thailand: '泰国',
                    Tajikistan: '塔吉克斯坦',
                    Turkmenistan: '土库曼斯坦',
                    'East Timor': '东帝汶',
                    'Trinidad and Tobago': '特里尼达和多巴哥',
                    Tunisia: '突尼斯',
                    Turkey: '土耳其',
                    'United Republic of Tanzania': '坦桑尼亚',
                    Uganda: '乌干达',
                    Ukraine: '乌克兰',
                    Uruguay: '乌拉圭',
                    'United States': '美国',
                    Uzbekistan: '乌兹别克斯坦',
                    Venezuela: '委内瑞拉',
                    Vietnam: '越南',
                    Vanuatu: '瓦努阿图',
                    'West Bank': '西岸',
                    Yemen: '也门',
                    'South Africa': '南非',
                    Zambia: '赞比亚',
                    Korea: '韩国',
                    Tanzania: '坦桑尼亚',
                    Zimbabwe: '津巴布韦',
                    Congo: '刚果',
                    'Central African Rep.': '中非',
                    Serbia: '塞尔维亚',
                    'Bosnia and Herz.': '波黑',
                    'Czech Rep.': '捷克',
                    'W. Sahara': '西撒哈拉',
                    'Lao PDR': '老挝',
                    'Dem.Rep.Korea': '朝鲜',
                    'Falkland Is.': '福克兰群岛',
                    'Timor-Leste': '东帝汶',
                    'Solomon Is.': '所罗门群岛',
                    Palestine: '巴勒斯坦',
                    'N. Cyprus': '北塞浦路斯',
                    Aland: '奥兰群岛',
                    'Fr. S. Antarctic Lands': '法属南半球和南极陆地',
                    Mauritius: '毛里求斯',
                    Comoros: '科摩罗',
                    'Eq. Guinea': '赤道几内亚',
                    'Guinea-Bissau': '几内亚比绍',
                    'Dominican Rep.': '多米尼加',
                    'Saint Lucia': '圣卢西亚',
                    Dominica: '多米尼克',
                    'Antigua and Barb.': '安提瓜和巴布达',
                    'U.S. Virgin Is.': '美国原始岛屿',
                    Montserrat: '蒙塞拉特',
                    Grenada: '格林纳达',
                    Barbados: '巴巴多斯',
                    Samoa: '萨摩亚',
                    Bahamas: '巴哈马',
                    'Cayman Is.': '开曼群岛',
                    'Faeroe Is.': '法罗群岛',
                    'IsIe of Man': '马恩岛',
                    Malta: '马耳他共和国',
                    Jersey: '泽西',
                    'Cape Verde': '佛得角共和国',
                    'Turks and Caicos Is.': '特克斯和凯科斯群岛',
                    'St. Vin. and Gren.': '圣文森特和格林纳丁斯'
                  },
                  itemStyle: {
                    normal: {
                      areaColor: '#F0FFFF',
                      borderColor: '#87CEFA',
                      borderWidth: 0.8
                    },
                    emphasis: {
                      areaColor: '#D3D3D3'
                    }
                  },
                  label: {
                    emphasis: { //  对应的鼠标悬浮效果
                      show: true,
                      textStyle: {
                        color: '#FF0000'
                      }
                    }
                  },
                  data: []
                }]
              },
              options: []
            }
            for (var i = 0; i < data.length; i++) {
              //  计
              option.options.push({
                visualMap: [{
                  show: false,
                  dimension: 0,
                  left: '25%',
                  // min: data[i].data[9].value[0],
                  // max: data[i].data[0].value[0],
                  inRange: {
                    color: ['#808080', '#F93F16']
                  }
                }],
                series: [{
                  data: data[i].data
                }]
              })
            }
            this.chartInstance.setOption(option)
            // const mTime =
            setInterval(() => {
              this.chartInstance.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: 0
              })
            }, 1000)
            this.chartInstance.on('click', function (param) {
              if (param.data.link) {
                window.open(param.data.link)
              }
            })
      // this.chartInstance.setOption(option)
      this.chartInstance.resize()
    }
  }
}
</script>

<style>
</style>
