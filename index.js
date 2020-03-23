$(function() {

    var myChart=echarts.init(document.getElementById('main'));
    var container = document.getElementById('excel');

    var da = [
        ['Java', 1, '降',"-0.01%"],
        ['C', 2, '升', '+2.44%'],
        ['Python', 3, '升', '+1.41%'],
        ['C++', 4, '降', '-2.58%'],
        ['C#', 5, '升', '+2.07%'],
        ['Visual Basic.Net', 6, '降', '-1.17%'],
        ['JavaScript', 7, '降', '-0.85%'],

      ];
      
      var hot = new Handsontable(container, {
        data: da,
        colHeaders:['语言名称', '排行', '升或降', '变化幅度'],
      });

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        tooltip: {},
        xAxis: {
            data: [2000,2005,2010,2015,2020]
        },
        yAxis: {},
        series: [{
            type: 'line',
            smooth:true,
            data:[6,9,8,8,7]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  });