/*
 * ALL RIGHTS RESERVED.
 *
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2022年02月25日
 * 开发日志：https://kksan.top/f5404b68deeb4634b39dac0bc67ec693
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery. com
 * slideout：https://slideout.js.org
 * bootstrap：https://getbootstrap.com
 * font-awesome：https://fontawesome.com
 *
 * 版权所有，请勿删除！
 */

var storage = window.localStorage;
var data = storage.data;
var night = storage.night;
var bg = storage.bg;
var closealert = storage.closealert;
var li = $('.sidenav-btn');
var blockquote = $('.blockquote');
if (storage.bookmarks != undefined) {
    init_bookmark(storage.bookmarks);
}else{
    $.ajax({
        url: "js/bookmark.js?v="+new Date().getTime(), success: function (data) {
            init_bookmark(data);
        }
    });
}
if (storage.menus != undefined) {
    init_menu(storage.menus);
}else{
    $.ajax({
        url: "js/sidemenus.js?v="+new Date().getTime(), success: function (data) {
            init_menu(data);
        }
    });
}
if (storage.data != undefined) {
    data = data.split(',');
    // console.log('已存在localStorage的数据：' + data); //已存在localStorage的数据
    $('#state a img').attr('src', data[0]); //头图
    $('.submitButton').css('background-color', data[1]); //按钮bgc
    $('#inputText').attr('placeholder', data[2]);
    $('#form').attr('action', data[3]);
    $('#inputText').attr('name', data[4]);
    $('#Select').css('color', data[1]);
    $('.span').css('background-color', data[1]);
}

if (storage.night != undefined) {
    night = night.split(',');
    console.log(night);
    $('#main').css('background-color', night[0]); //主界面
    $('#menu').css('background-color', night[1]); //侧栏
    document.getElementById("night").innerHTML = night[2];
    li.css('background-color', night[3]);
    li.css('color', night[4]);
    blockquote.css('color', night[5]);
}

if (storage.bg != undefined) {
    bg = bg.split(',');
    $('#main').css('background-image', bg[0]);
}

// 检查是否有新版本
if (storage.closealert != undefined) {
    closealert = closealert.split(',');
    if (closealert[0] == '4.1.2') {
        $('#alert').remove();
    }
}

// rgb to hex
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }

    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// rgb to hex结束
// 搜索相关
$(function () {
    var search = {
        data: [{
            name: 'google',
            displayname: 'Google',
            icon: 'img/google-xs.png',
            searchlink: 'https://www.google.com/search',
            searchname: 'q',
            color: '#4285f4',
            placeholder: '咕噜咕噜...'
        }, {
            name: 'baidu',
            displayname: '百度',
            icon: 'img/baidu-xs.png',
            searchlink: 'https://www.baidu.com/s',
            searchname: 'wd',
            color: '#3245df',
            placeholder: '百度一下...'
        }, {
            name: 'duckduckgo',
            displayname: 'DuckDuckGo',
            icon: 'img/duckduckgo-xs.png',
            searchlink: 'https://duckduckgo.com/',
            searchname: 'q',
            color: '#dc3730',
            placeholder: '嘎嘎嘎...'
        },  {
            name: 'bing',
            displayname: 'Bing',
            icon: 'img/bing-xs.png',
            searchlink: 'https://cn.bing.com/search',
            searchname: 'q',
            color: '#00868B',
            placeholder: 'Bing搜索...'
        }, {
            name: 'yahoo',
            displayname: 'Yahoo',
            icon: 'img/yahoo-xs.png',
            searchlink: 'https://search.yahoo.com/search',
            searchname: 'p',
            color: '#5f01d1',
            placeholder: 'Yahoo~'
        }, {
            name: 'sougou',
            displayname: '搜狗',
            icon: 'img/sougou-xs.png',
            searchlink: 'https://www.sogou.com/web',
            searchname: 'query',
            color: '#f94c18',
            placeholder: '搜狗搜索...'
        }, {
            name: 'wechat',
            displayname: '搜狗微信',
            icon: 'img/wechat-xs.png',
            searchlink: 'https://weixin.sogou.com/weixin',
            searchname: 'query',
            color: '#2ca43a',
            placeholder: '搜微信文章...'
        }, {
            name: 'quark',
            displayname: '夸克',
            icon: 'img/quark-xs.png',
            searchlink: 'https://quark.sm.cn/s',
            searchname: 'q',
            color: '#6182f6',
            placeholder: '夸克搜索...'
        }, {
            name: 'taobao',
            displayname: '淘宝',
            icon: 'img/taobao-xs.png',
            searchlink: 'https://s.taobao.com/search',
            searchname: 'q',
            color: '#FF5B00',
            placeholder: '淘，我喜欢...'
        }, {
            name: 'jingdong',
            displayname: '京东',
            icon: 'img/jingdong-xs.png',
            searchlink: 'https://search.jd.com/Search',
            searchname: 'keyword',
            color: '#F30213',
            placeholder: '多，快，好，省...'
        }, {
            name: 'bilibili',
            displayname: '哔哩哔哩',
            icon: 'img/bilibili-xs.png',
            searchlink: 'https://search.bilibili.com/all',
            searchname: 'keyword',
            color: '#e47494',
            placeholder: 'b站是一个学习网站...'
        }, {
            name: 'github',
            displayname: 'GitHub',
            icon: 'img/github-xs.png',
            searchlink: 'https://github.com/search',
            searchname: 'q',
            color: '#24292e',
            placeholder: '全球最大的开源社区...'
        }, {
            name: 'toutiao',
            displayname: '今日头条',
            icon: 'img/toutiao-xs.png',
            searchlink: 'https://m.toutiao.com/search',
            searchname: 'keyword',
            color: '#ed2f28',
            placeholder: '搜今日头条...'
        }, {
            name: 'weibo',
            displayname: '微博',
            icon: 'img/weibo-xs.png',
            searchlink: 'https://s.weibo.com/weibo',
            searchname: 'q',
            color: '#e6162d',
            placeholder: '搜微博...'
        }, {
            name: 'zhihu',
            displayname: '知乎',
            icon: 'img/zhihu-xs.png',
            searchlink: 'https://www.zhihu.com/search',
            searchname: 'q',
            color: '#1087eb',
            placeholder: '我们都是有问题的人...'
        }, {
            name: 'kuaidi',
            displayname: '快递100',
            icon: 'img/kuaidi-xs.png',
            searchlink: 'https://m.kuaidi100.com/result.jsp',
            searchname: 'nu',
            color: '#317EE7',
            placeholder: '搜快递...'
        }]
    }
    for (var i = 0; i < search.data.length; i++) { //添加搜索按钮
        var addList = '<li class="folder-item2 col-xs-3 col-sm-2"> <a href="#"> <div class="folder-item-box2"> <img id="' + search.data[i].name + '" class="folder-item-img2" src="' + search.data[i].icon + '" /></div><p style="font-weight: bold;font-size: 12px;color: #393838;text-align: center;">'+search.data[i].displayname+'</p> </a> </li> '
        $('.nav ul').append(addList);
    }

    // 切换搜索引擎
    $(document).click(function (e) {
        var id = e.target.id;
        for (var i = 0; i < search.data.length; i++) {
            if (id == search.data[i].name) {
                // document.getElementById("state").innerHTML = "<a href='folder://'><img style='width:300px;' src='img/" + search.data[i].name + ".png'></a>";
                $('#state a img').attr('src', 'img/' + search.data[i].name + '.png');
                $('#submitButton').css('background-color', search.data[i].color); //按钮bg
                $('#Select').css('color', search.data[i].color); //选择器
                $('#nav').css('display', 'none');
                $('#folder').css('display', 'block');
                document.getElementById("Select").innerHTML = "<hr>书签 <img src='img/search-change.svg?v=2ae7ab8'>";
                $("#inputText").attr("placeholder", search.data[i].placeholder);
                $("#form").attr("action", search.data[i].searchlink);
                $("#inputText").attr("name", search.data[i].searchname);

                //存入用户数据
                var searchPho = $('#state a img').attr("src"); //搜索引擎头图
                var color = rgb2hex($('.submitButton').css('background-color')); //搜索按钮颜色和搜索框四边颜色
                var searchL = $('#form').attr("action"); //searchlink
                var searchN = $('#inputText').attr("name"); //searchname
                var placeholder = $('#inputText').attr('placeholder');
                storage.data = [searchPho, color, placeholder, searchL, searchN] //记录用户数据
                // console.log('新存入localStorage的数据：' + storage.data); //新存入localStorage的数据
                break;
            }
        }
    })
    // 搜索相关结束
    $('#import_bookmark').click(function () {
        var data = prompt("输入书签","");
        init_bookmark(data);
    });
    $('#import_menu').click(function () {
        var data = prompt("输入菜单","");
        init_menu(data);
    });
    // 夜间模式
    $('#night').click(function () {
        li = $('.sidenav-btn');
        if (rgb2hex($('#main').css('background-color')) == '#ffffff') {
            $('#main').css('background-color', '#2f2f33'); //主界面
            $('#menu').css('background-color', '#5C5C5C'); //侧栏
            document.getElementById("night").innerHTML = "日间模式";
            li.css({
                "background-color": "#575757",
                "color": "#DBDBDB"
            });
            blockquote.css('color', '#DBDBDB');
        } else if (rgb2hex($('#main').css('background-color')) == '#2f2f33') {
            $('#main').css('background-color', '#ffffff'); //主界面
            $('#menu').css('background-color', '#EDEDED'); //侧栏
            document.getElementById("night").innerHTML = "夜间模式";
            li.css({
                "background-color": "#E3E3E3",
                "color": "black"
            });
            blockquote.css('color', 'black');
        }
        var mainbg = rgb2hex($('#main').css('background-color'));
        var menubg = rgb2hex($('#menu').css('background-color'));
        var inner = document.getElementById("night").innerHTML;
        var libg = rgb2hex(li.css('background-color'));
        var lico = rgb2hex(li.css('color'));
        var blockquoteco = rgb2hex(blockquote.css('color'));
        // storage.night = [mainbg, menubg, inner, libg, lico, blockquoteco];
        // localStorage.clear()
    })
    // 夜间模式结束

    // 更新提示框
    // $('#closealert').click(function() {
    //         var version = '4.1.2';
    //         localStorage.closealert = [version];
    //     })
    // 更新提示框结束

})

// 显示/干掉壁纸
var width = $(document).width();
$('#bg').click(function () {
    width < 768 ? ($('#main').css('background-image') == 'none' ? ($('#main').css('background-image', 'url(img/bg-xs.jpg)')) : ($('#main').css('background-image', 'none'))) : $('#main').css('background-image') == 'none' ? ($('#main').css('background-image', 'url(img/bg.jpg)')) : ($('#main').css('background-image', 'none'));
    var background = $('#main').css('background-image');
    storage.bg = [background];
})

//检查搜索框是否为空
function check() {
    var o = document.getElementById("inputText");
    var v = o.value;
    v = v.replace(/[ ]/g, "");
    if (v == '') {
        return false;
    }
}
function init_bookmark(data){
    if(data!=undefined) {
        var bookmark = JSON.parse(data);
        $('#folder ul').empty();
        for (var i = 0; i < bookmark.length; i++) {
            if (bookmark[i].mobile !=undefined) {
                var addList = '<li class="folder-item col-xs-3 col-sm-2 visible-xs visible-sm"><a target="_blank" href="' + bookmark[i].link + '"><div class="folder-item-box"><img class="folder-item-img" style="box-shadow:' + bookmark[i].box_shadow + ' 0 14px 12px -6px" src="' + bookmark[i].icon + '" /><p>' + bookmark[i].name + '</p></div></a></li>'
            } else {
                var addList = '<li class="folder-item col-xs-3 col-sm-2"><a target="_blank" href="' + bookmark[i].link + '"><div class="folder-item-box"><img class="folder-item-img" style="box-shadow:' + bookmark[i].box_shadow + ' 0 14px 12px -8px" src="' + bookmark[i].icon + '" /><p>' + bookmark[i].name + '</p></div></a></li>'
            }
            $('#folder ul').append(addList);
        }
        storage.bookmarks = data;
    }
}
function init_menu(data){
    if(data!=undefined){
        menus = JSON.parse(data)
        var menus_html = "";
        $('#menu .side-menu').remove();
        for (var i = 0; i < menus.length; i++) {
            var item_html = "";
            for (var j = 0; j < menus[i].items.length; j++) {
                item_html += '<a target="_blank" href="' + menus[i].items[j].url + '"><li class="sidenav-btn">' + menus[i].items[j].name + '<p>' + menus[i].items[j].desc + '</p></li></a>';
            }
            var menu_html = '<blockquote class="blockquote side-menu">▎ ' + menus[i].name + '</blockquote><ul class="side-menu" >' + item_html + '</ul>';
            menus_html += menu_html;
        }
        $('#menu').prepend(menus_html);
        storage.menus = data;
    }
}
//检查搜索框是否为空结束

//title问候语
var d = new Date();
var time = d.getHours();
if (time < 24) {
    document.getElementById("title").innerHTML = "一个导航 | Good evening";
}
if (time < 18) {
    document.getElementById("title").innerHTML = "一个导航 | Good afternoon";
}
if (time < 12) {
    document.getElementById("title").innerHTML = "一个导航 | Good morning";
}
if (time < 5) {
    document.getElementById("title").innerHTML = "一个导航 | Stay up late again";
}
//title问候语结束

//导航、引擎选择器
function select() {
    $('#folder').css('display') == 'block' ? ($('#folder').css('display', 'none'), $('#nav').css('display', 'block'), document.getElementById("Select").innerHTML = "<hr>搜索引擎 <img src='img/search-change.svg'>") : ($('#nav').css('display', 'none'), $('#folder').css('display', 'block'), document.getElementById("Select").innerHTML = "<hr>书签 <img src='img/search-change.svg'>");
}

//导航、引擎选择器结束


// 搜索提示词
class searchHint {
    constructor() {
        this.search = inputText;
        this.list = list;
        this.body = document.body;
        this.init();
    };

    init() {
        this.watchInput();
    };

    watchInput() {
        this.search.onkeyup = () => {
            if (this.search.value.length == 0) {
                this.list.innerHTML = '';
                return;
            }
            const script = document.createElement('script');
            script.src = "https://www.baidu.com/su?wd=" + this.search.value + "&cb=jsonp.showMsg";
            this.body.appendChild(script);
            this.body.removeChild(script);
        }
    };

    showMsg(msg) {
        var href = $('#form').attr('action');
        var name = $('#inputText').attr('name');
        var v = $('#inputText').val();
        var str = '';
        for (var i = 0; i < msg.s.length; i++) {
            var sk = new Array();
            sk[i] = msg.s[i].replace(/\s*/g, ''); //去掉关键字空格
            str += '<a href=' + href + '?' + name + '=' + sk[i] + '><li><span>' + (i + 1) + '</span>' + msg.s[i] + '</li></a>';
        }
        this.list.innerHTML = str;
        if (str) { //有返回才显示#searchlist
            $('#searchlist').css("display", "block");
        }
        document.onkeydown = function (event) {
            if (event.keyCode == 8 && v.length == 1) {
                $('#searchlist').css("display", "none");
            }
        };
        $(document).click(function () { //点击其他地方隐藏#searchlist
            $('#searchlist').css("display", "none");
        });
    }
}

const jsonp = new searchHint();

/*
 * ALL RIGHTS RESERVED.
 *
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2022年02月25日
 * 开发日志：https://kksan.top/f5404b68deeb4634b39dac0bc67ec693
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery.com
 * slideout：https://slideout.js.org
 * bootstrap：https://getbootstrap.com
 * font-awesome：https://fontawesome.com
 *
 * 版权所有，请勿删除！
 */
