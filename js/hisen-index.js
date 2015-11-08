/**
 * Created by hisen on 2015/10/15.
 */

/*---------首页模块------------------*/
var HS_index = {};

/*--------banner--轮播图---------------------*/
HS_index.banner = (function(){
    var configMap = {
        indexHtml :
        '<ul>'+
        '<li><a href="./list2.html"><img src="images/banner01.jpg"></a></li>'+
        '<li><a href="./list2.html"><img src="images/banner02.jpg"></a></li>'+
        '<li><a href="./list2.html"><img src="images/banner03.jpg"></a></li>'+
        '<li><a href="./list2.html"><img src="images/banner04.jpg"></a></li>'+
        '</ul>'
    }
    var init,createDOM,bindEvent;
    init=function(container,data){
        createDOM(container)
    }
    createDOM = function(container){
        container.html( configMap.indexHtml );
        bindEvent();
    };
    bindEvent = function(){
    }
    return {init : init}
})()



/*--------nav--导航---------------------*/
HS_index.nav = (function(){
    var configMap = {
        indexHtml :
        '<ul>'+
        '<li><a href="./list.html"></a><span>分类</span></li>'+
        '<li><a href="./list.html"></a><span>逼格</span></li>'+
        '<li><a href="./list.html"></a><span>每日推荐</span></li>'+
        '<li><a href="./list.html"></a><span>新发现</span></li>'+
        '<li><a href="./list.html"></a><span>吧啦</span></li>'+
        '<li><a href="./list.html"></a><span>主题馆</span></li>'+
        '<li><a href="./list.html"></a><span>品质馆</span></li>'+
        '<li><a href="./list.html"></a><span>特色</span></li>'+
        '<li><a href="./list.html"></a><span>签到</span></li>'+
        '<li><a href="./personal.html"></a><span>我的嗨森</span></li>'+
        '</ul>'
    }
    var init,createDOM,bindEvent;
    init=function(container,data){
        createDOM(container)
    }
    createDOM = function(container){
        container.html( configMap.indexHtml );
        bindEvent();
    };
    bindEvent = function(){
    }
    return {init : init}
})();

/*---------热门推荐-----------------------*/
HS_index.hostModule = (function(){
    var configMap = {
        indexHtml :
        '<title class="hs-street-title hs-title">热门推荐</title>'+
        '<div class="hs-advertisement">'+
        '<div class="hs-advertisement-left">'+
        '<a href="./list.html"><img src="images/rmtj/01.jpg"></a>'+
        '</div>'+
        '<div class="hs-advertisement-right">'+
        '<div class="advertisement-top">'+
        '<img src="images/rmtj/02.jpg">'+
        '</div>'+
        '<div class="advertisement-top advertisement-bottom">'+
        '<a href="./list.html"><img src="images/rmtj/03.jpg"></a>'+
        '</div>'+
        '</div>'+
        '<div class="hs-advertisement-left">'+
        '<div class="advertisement-top">'+
        '<a href="./list.html"><img src="images/rmtj/02.jpg"></a>'+
        '</div>'+
        '<div class="advertisement-top advertisement-bottom">'+
        '<a href="./list.html"><img src="images/rmtj/03.jpg"></a>'+
        '</div>'+
        '</div>'+
        '<div class="hs-advertisement-right">'+
        '<a href="./list.html"><img src="images/rmtj/01.jpg"></a>'+
        '</div>'+
        '</div>'
    }
    var init,createDOM,bindEvent;
    init=function(container,data){
        createDOM(container)
    }
    createDOM = function(container){
        container.html( configMap.indexHtml );
        bindEvent();
    };
    bindEvent = function(){
    }
    return {init : init}
})();

/*---------品牌女装-----------------------*/
HS_index.brandModule = (function(){
    var configMap = {
        indexHtml :
        '<title class="hs-street-title hs-title">品牌女装</title>'+
        '<div class="hs-advertisement">'+
        '<div class="hs-advertisement-left">'+
        '<div class="advertisement-top">'+
        '<a href="./list.html"><img src="images/rmtj/02.jpg"></a>'+
        '</div>'+
        '<div class="advertisement-top advertisement-bottom">'+
        '<a href="./list.html"><img src="images/rmtj/03.jpg"></a>'+
        '</div>'+
        '</div>'+
        '<div class="hs-advertisement-right">'+
        '<a href="./list.html"><img src="images/rmtj/01.jpg"></a>'+
        '</div>'+
        '</div>'
    }
    var init,createDOM,bindEvent;
    init=function(container,data){
        createDOM(container)
    }
    createDOM = function(container){
        container.html( configMap.indexHtml );
        bindEvent();
    };
    bindEvent = function(){
    }
    return {init : init}
})();

/*---------美妆馆---------------------------------*/
HS_index.adornModule = (function(){
    var configMap = {
        indexHtml :
        '<title class="hs-street-title hs-title">美妆馆</title>'+
        '<div class="hs-advertisement">'+
        '<div class="hs-advertisement-left">'+
        '<div class="advertisement-top">'+
        '<a href="./list.html"><img src="images/rmtj/02.jpg"></a>'+
        '</div>'+
        '<div class="advertisement-top advertisement-bottom">'+
        '<a href="./list.html"><img src="images/rmtj/03.jpg"></a>'+
        '</div>'+
        '</div>'+
        '<div class="hs-advertisement-right">'+
        '<div class="advertisement-top">'+
        '<a href="./list.html"><img src="images/rmtj/02.jpg"></a>'+
        '</div>'+
        '<div class="advertisement-top advertisement-bottom">'+
        '<a href="./list.html"><img src="images/rmtj/03.jpg"></a>'+
        '</div>'+
        '</div>'+
        '<div class="hs-advertisement-left">'+
        '<div class="advertisement-top">'+
        '<a href="./list.html"><img src="images/rmtj/02.jpg"></a>'+
        '</div>'+
        '<div class="advertisement-top advertisement-bottom">'+
        '<a href="./list.html"><img src="images/rmtj/03.jpg"></a>'+
        '</div>'+
        '</div>'+
        '<div class="hs-advertisement-right">'+
        '<div class="advertisement-top">'+
        '<a href="./list.html"><img src="images/rmtj/02.jpg"></a>'+
        '</div>'+
        '<div class="advertisement-top advertisement-bottom">'+
        '<a href="./list.html"><img src="images/rmtj/03.jpg"></a>'+
        '</div>'+
        '</div>'+
        '</div>'
    }
    var init,createDOM,bindEvent;
    init=function(container,data){
        createDOM(container)
    }
    createDOM = function(container){
        container.html( configMap.indexHtml );
        bindEvent();
    };
    bindEvent = function(){
    }
    return {init : init}
})();

/*---------主题馆---------------------------------*/
HS_index.themeModule = (function(){
    var configMap = {
        indexHtml :
        '<title class="hs-street-title hs-title">主题馆</title>'+
        '<div class="hs-advertisement">'+
        '<div class="hs-advertisement-left">'+
        '<div class="advertisement-top">'+
        '<a href="./list.html"><img src="images/rmtj/02.jpg"></a>'+
        '</div>'+
        '<div class="advertisement-top advertisement-bottom">'+
        '<a href="./list.html"><img src="images/rmtj/03.jpg"></a>'+
        '</div>'+
        '</div>'+
        '<div class="hs-advertisement-right">'+
        '<div class="advertisement-top">'+
        '<a href="./list.html"><img src="images/rmtj/02.jpg"></a>'+
        '</div>'+
        '<div class="advertisement-top advertisement-bottom">'+
        '<a href="./list.html"><img src="images/rmtj/03.jpg"></a>'+
        '</div>'+
        '</div>'+
        '</div>'
    }
    var init,createDOM,bindEvent;
    init=function(container,data){
        createDOM(container)
    }
    createDOM = function(container){
        container.html( configMap.indexHtml );
        bindEvent();
    };
    bindEvent = function(){
    }
    return {init : init}
})();

/*---------猜你喜欢---------------------------------*/
HS_index.guessModule = (function(){
    var configMap = {
        indexHtml :
        '<title class="hs-street-title hs-title">热门推荐</title>'+
        '<div class="hs-advertisement">'+
        '<div class="hs-advertisement-left">'+
        '<a href="./list.html"><img src="images/rmtj/01.jpg"></a>'+
        '</div>'+
        '<div class="hs-advertisement-left">'+
        '<a href="./list.html"><img src="images/rmtj/01.jpg"></a>'+
        '</div>'+
        '<div class="hs-advertisement-left">'+
        '<a href="./list.html"><img src="images/rmtj/01.jpg"></a>'+
        '</div>'+
        '<div class="hs-advertisement-left">'+
        '<a href="./list.html"><img src="images/rmtj/01.jpg"></a>'+
        '</div>'+
        '<div class="hs-advertisement-left">'+
        '<a href="./list.html"><img src="images/rmtj/01.jpg"></a>'+
        '</div>'+
        '<div class="hs-advertisement-left">'+
        '<a href="./list.html"><img src="images/rmtj/01.jpg"></a>'+
        '</div>'+
        '</div>'
    }
    var init,createDOM,bindEvent;
    init=function(container,data){
        createDOM(container)
    }
    createDOM = function(container){
        container.html( configMap.indexHtml );
        bindEvent();
    };
    bindEvent = function(){
    }
    return {init : init}
})();

