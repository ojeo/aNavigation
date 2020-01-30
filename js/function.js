//检查文本框是否为空
function check() {
	var o = document.getElementById("inputText");
	var v = o.value;
	v = v.replace(/[ ]/g, "");
	if (v == '') {
		return false;
	}
}

//title问候语
var d = new Date()
var time = d.getHours()
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

// 夜间模式
function night() {
	var li = document.getElementsByClassName("sidenav-btn");
	var blockquote = document.getElementsByClassName("blockquote");
	if (document.bgColor == "#fff") {
		document.bgColor = "#2f2f33";
		document.getElementById("night").innerHTML = "日间模式";
		document.getElementById("mySidenav").style.backgroundColor = "#5C5C5C";
		document.getElementById("mySidenav").style.boxShadow = "10px 0 5px #5C5C5C";
		for (var i = 0; i < li.length; i++) {
			li[i].style.backgroundColor = "#575757";
			li[i].style.color = "#DBDBDB";
		}
		for (var j = 0; j < blockquote.length; j++) {
			blockquote[j].style.color = "#DBDBDB";
		}
	} else if (document.bgColor == "#2f2f33") {
		document.bgColor = "#fff";
		document.getElementById("night").innerHTML = "夜间模式";
		document.getElementById("mySidenav").style.backgroundColor = "#EDEDED";
		document.getElementById("mySidenav").style.boxShadow = "10px 0 5px #EDEDED";
		for (var i = 0; i < li.length; i++) {
			li[i].style.backgroundColor = "#E3E3E3";
			li[i].style.color = "black";
		}
		for (var j = 0; j < blockquote.length; j++) {
			blockquote[j].style.color = "black";
		}
	}
}

//导航、引擎选择器
function select() {
	if ($('#folder').css('display') == 'block') {
		$('#folder').css('display', 'none');
		$('#nav').css('display', 'block');
		document.getElementById("Select").innerHTML = "<hr>搜索引擎 <img src='img/search-change.svg?v=2ae7ab8'>";
	} else if ($('#nav').css('display') == 'block') {
		$('#nav').css('display', 'none');
		$('#folder').css('display', 'block');
		document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	}
}

// 侧栏
function Slider() {
	var width = $('#mySidenav').outerWidth(); //第一次获取#mySidenav的宽
	if (width == 0) {
		openSlider();
	}
	width = $('#mySidenav').outerWidth(); //重新获取#mySidenav的宽
	if (width > 0) {
		closeSlider();
	}
}

function openSlider() {
	var bodywidth = $('#body').outerWidth();
	if (bodywidth >= 992) {
		document.getElementById("slider").style.left = "30%";
		document.getElementById("mySidenav").style.width = "28%";
		document.getElementById("sliderImg").style.transform = "rotateY(180deg)";
	} else if (bodywidth < 992) {
		document.getElementById("slider").style.left = "83%";
		document.getElementById("mySidenav").style.width = "78%";
		document.getElementById("sliderImg").style.transform = "rotateY(180deg)";
	}
}

function closeSlider() {
	document.getElementById("slider").style.left = "10px";
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("sliderImg").style.transform = "rotateX(180deg)";
}

// 切换搜索引擎
function baidu() {
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='https://s2.ax1x.com/2020/01/27/1ugwKf.md.png'>";
	$('#submitButton').css('background-color', '#3245df');
	$('#submitButton').css('color', 'white');
	$('#Select').css('color', '#3245df');
	$('span').css('background-color', '#3245df');
	$('#nav').css('display', 'none');
	$('#folder').css('display', 'block');
	document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	$("#inputText").attr("placeholder", "百度一下...");
	$("#form").attr("action", "https://www.baidu.com/s");
	$("#inputText").attr("name", "wd");
}

function google() {
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='https://s2.ax1x.com/2020/01/27/1ugy5j.md.png'>";
	$('#submitButton').css('background-color', '#4285f4');
	$('#submitButton').css('color', 'white');
	$('#Select').css('color', '#4285f4');
	$('span').css('background-color', '#4285f4');
	$('#nav').css('display', 'none');
	$('#folder').css('display', 'block');
	document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	$("#inputText").attr("placeholder", "咕噜咕噜...");
	$("#form").attr("action", "https://www.google.com/search");
	$("#inputText").attr("name", "q");
}

function bing() {
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='https://s2.ax1x.com/2020/01/30/1l6I0K.md.png'>";
	$('#submitButton').css('background-color', '#00868B');
	$('#submitButton').css('color', 'white');
	$('#Select').css('color', '#00868B');
	$('span').css('background-color', '#00868B');
	$('#nav').css('display', 'none');
	$('#folder').css('display', 'block');
	document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	$("#inputText").attr("placeholder", "Bing搜索...");
	$("#form").attr("action", "https://cn.bing.com/search");
	$("#inputText").attr("name", "q");
}

function yahoo() {
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='https://s2.ax1x.com/2020/01/27/1ughrT.md.png'>";
	$('#submitButton').css('background-color', '#5f01d1');
	$('#submitButton').css('color', 'white');
	$('#Select').css('color', '#5f01d1');
	$('span').css('background-color', '#5f01d1');
	$('#nav').css('display', 'none');
	$('#folder').css('display', 'block');
	document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	$("#inputText").attr("placeholder", "Yahoo~");
	$("#form").attr("action", "https://search.yahoo.com/search");
	$("#inputText").attr("name", "p");
}

function sougou() {
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='https://s2.ax1x.com/2020/01/28/1KdA8U.md.png'>";
	$('#submitButton').css('background-color', '#f94c18');
	$('#submitButton').css('color', 'white');
	$('#Select').css('color', '#f94c18');
	$('span').css('background-color', '#f94c18');
	$('#nav').css('display', 'none');
	$('#folder').css('display', 'block');
	document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	$("#inputText").attr("placeholder", "搜狗搜索...");
	$("#form").attr("action", "https://www.sogou.com/web");
	$("#inputText").attr("name", "query");
}

function duckduckgo() {
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='https://s2.ax1x.com/2020/01/28/1KkFVP.md.png'>";
	$('#submitButton').css('background-color', '#de5833');
	$('#submitButton').css('color', 'white');
	$('#Select').css('color', '#de5833');
	$('span').css('background-color', '#de5833');
	$('#nav').css('display', 'none');
	$('#folder').css('display', 'block');
	document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	$("#inputText").attr("placeholder", "嘎嘎嘎...");
	$("#form").attr("action", "https://duckduckgo.com/");
	$("#inputText").attr("name", "q");
}

function magi() {
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='https://s2.ax1x.com/2020/01/27/1uTCFK.md.png'>";
	$('#submitButton').css('background-color', 'black');
	$('#submitButton').css('color', 'white');
	$('#Select').css('color', 'black');
	$('span').css('background-color', 'black');
	$('#nav').css('display', 'none');
	$('#folder').css('display', 'block');
	document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	$("#inputText").attr("placeholder", "Mag[i]...");
	$("#form").attr("action", "https://magi.com/search");
	$("#inputText").attr("name", "q");
}

function doge() {
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='https://s2.ax1x.com/2020/01/28/1Ktf3Q.md.png'>";
	$('#submitButton').css('background-color', '#ffca74');
	$('#submitButton').css('color', 'black');
	$('#Select').css('color', '#ffca74');
	$('span').css('background-color', '#ffca74');
	$('#nav').css('display', 'none');
	$('#folder').css('display', 'block');
	document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	$("#inputText").attr("placeholder", "手动狗头.jpg");
	$("#form").attr("action", "https://www.dogedoge.com/results");
	$("#inputText").attr("name", "q");
}

function wechat() {
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='https://s2.ax1x.com/2020/01/28/1KwGF0.md.png'>";
	$('#submitButton').css('background-color', '#2ca43a');
	$('#submitButton').css('color', 'white');
	$('#Select').css('color', '#2ca43a');
	$('span').css('background-color', '#2ca43a');
	$('#nav').css('display', 'none');
	$('#folder').css('display', 'block');
	document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
	$("#inputText").attr("placeholder", "搜微信文章...");
	$("#form").attr("action", "https://weixin.sogou.com/weixin");
	$("#inputText").attr("name", "query");
}