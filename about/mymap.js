var markdata = [
    {latLng: [31.22, 121.48], name: '上海'},
    {latLng: [25.04, 102.73], name: '昆明 - 2012 Summer'},
    {latLng: [26.86, 100.25], name: '丽江 - 2012 Summer'},
    {latLng: [39.92, 116.46], name: '北京'},
    {latLng: [30.67, 104.06], name: '成都 - 2013'},
    {latLng: [31.86, 117.27], name: '合肥 - 2016~2019'},
    {latLng: [23.16, 113.23], name: '广州 - 2015 Summer'},
    {latLng: [32.04, 118.78], name: '南京'},
    {latLng: [31.59, 120.29], name: '无锡 - 2017 Spring'},
    {latLng: [30.26, 120.19], name: '杭州'},
    {latLng: [29.86, 121.56], name: '宁波'},
    {latLng: [28.01, 120.65], name: '温州'},
    {latLng: [28.14, 120.94], name: '乐清'},
    {latLng: [28.67, 121.44], name: '椒江'},
    {latLng: [28.80, 121.13], name: '临海'},
    {latLng: [28.36, 121.36], name: '温岭 - Hometown'},
    {latLng: [28.14, 121.23], name: '玉环'},
    {latLng: [29.12, 119.64], name: '金华'},
    {latLng: [29.97, 122.30], name: '普陀 - 2016'},
    {latLng: [28.45, 119.92], name: '丽水'},
    {latLng: [24.46, 118.10], name: '厦门 - 2014 Summer'},
    {latLng: [34.27, 108.95], name: '西安 - 2012~2016'},
    {latLng: [37.87, 112.53], name: '太原 - 2013'},
    {latLng: [36.34, 101.44], name: '西宁 - 2016 Spring'},
    {latLng: [38.12, 100.13], name: '祁连 - 2016 Spring'},
    {latLng: [36.01, 101.28], name: '贵德 - 2016 Spring'},
    {latLng: [39.53, 116.70], name: '廊坊 - 2017'}
];

var eventdata = [
    {id: 'CN-63', event: '毕业旅行！', url: '/2016/05/16/2016-05-16-qinghai/'}
];

var regdata = {
    "CN-11": 0, // 北京
    "CN-13": 0, // 河北
    "CN-14": 0, // 山西
    "CN-31": 0, // 上海
    "CN-32": 0, // 江苏
    "CN-33": 0, // 浙江
    "CN-34": 0, // 安徽
    "CN-35": 0, // 福建
    "CN-44": 0, // 广东
    "CN-51": 0, // 四川
    "CN-53": 0, // 云南
    "CN-61": 0, // 陕西
    "CN-63": 0, // 青海
    //"CN-22": 1, // 吉林
    //"CN-23": 1, // 黑龙江
    //"CN-54": 1, // 西藏
    //"CN-18": 1  // 台湾
};

$('#map').vectorMap({
    map: 'cn_merc_en',
    backgroundColor: 'transparent',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    //--- 标记
    markerStyle: {
        initial: {
            fill: '#fd8888',
            stroke: '#fff'
        }
    },
    markers: markdata,
    //--- 改变地区颜色
    series: {
        regions: [{
            values: regdata,
            //scale: ['#FFDD00','#87CEEB'],
            scale: ['#FFDD00'],
            normalizeFunction: 'polynomial'
        }]
    },
    //--- 改变标签
    onRegionTipShow: function(e, el, code){
        $.each(eventdata, function(i, items){
            if ((items.id == code) && (items.event != '')){
                el.html(el.html() + ' - ' + items.event);
            }
        })
    },
    //--- 打开页面
    onRegionClick: function(event, code){
        $.each(eventdata, function(i, items){
            if ((items.id == code) && (items.url != '')){
                if (confirm('是否打开链接？')) window.open(items.url);
            }
        });
    },
});