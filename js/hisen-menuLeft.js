/**
 * Created by hisen on 2015/10/15.
 */

/*---------菜单公共组件------------------*/
var HS_menuLeft = {};

HS_menuLeft.indexShell = (function(){
    var configMap = {
        indexHtml :
        '<section class="shezhi">'+
        '<ul class="nav">'+
        '<li class="cur"><a href="./index.html">首页</a></li>'+
        '<li><a href="./list.html">品牌</li></a>'+
        '<li><a href="./list.html">服饰</li></a>'+
        '<li><a href="./list.html">包包</li></a>'+
        '<li><a href="./list.html">美妆</li></a>'+
        '<li><a href="./list.html">折扣</li></a>'+
        '<li><a href="./list.html">海外精选</li></a>'+
        '<li><a href="./list.html">限时秒杀</li></a>'+
        '</ul>'+
        '<ul class="hs-nav-bottom">'+
        '<li class="user"><a href="./personal.html">个人中心</a></li>'+
        '<li class="collect"><a href="./list.html">品牌收藏</a></li>'+
        '</ul>'+
        '</section>'+
        '<div class="lokong"></div>'
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

        /*-------菜单-------*/
        var hsMenu = (function(){
            var main = document.querySelector(".hs-menu-icon");
            var shezhBox = document.querySelector(".shezhi");
            var loKong = document.querySelector(".lokong");
            var startX = 0;
            var dX = 0;
            main.addEventListener("touchstart", touchStartFun);
            loKong.addEventListener("touchend", touchStartFunloKong);
            loKong.addEventListener("touchmove", touchMoveFun);
            shezhBox.addEventListener("touchstart", touchStart);
            shezhBox.addEventListener("touchmove", touchMoveFun);
            shezhBox.addEventListener("touchend", touchEndFun);
            function touchStartFunloKong(event) {
                setTimeout(function(){
                    $('.shezh-box').animate({left:-100+"%"});
                },10)

            };
            function touchMoveFunloKong(event) {
                event.preventDefault();//禁止默认事件
            };
            function touchStartFun(event) {
                $('.shezh-box').removeClass('shezh-boxcur');
                $('.shezh-box').animate({left:0},100)

            };
            function touchStart(event){

                startX = event.touches[0].pageX;
                dX = 0;
                $('.shezh-box').removeClass('shezh-boxcur');
            };
            function touchMoveFun(event) {
                event.preventDefault();//禁止默认事件
                dX = event.touches[0].pageX - startX;
                if(dX<0){
                    $('.shezh-box').css({left:dX/3+"%"});
                };
            };
            function touchEndFun(event) {
                if(dX<-50){
                    $('.shezh-box').addClass('shezh-boxcur')
                    $('.shezh-box').css({left:-100+"%"})
                }else{
                    $('.shezh-box').addClass('shezh-boxcur')
                    $('.shezh-box').css({left:0})
                }
            };
        })()
    }
    return {init : init}
})()
