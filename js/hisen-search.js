/**
 * Created by hisen on 2015/10/15.
 */

/*--------搜索公共组件-----------------------*/
var HS_search = {}

HS_search.indexShell = (function(){
    var configMap = {
        indexHtml :
        '<div class="hs-search-top">'+
        '<a class="hs-back"></a>'+
        '<input type="text" class="hs-search-txt"/>'+
        '<input type="button" class="hs-search-box" value="搜索"/>'+
        '</div>'+
        '<div class="hs-tj-search">'+
        '<p class="hs-tjTitle"><a href="./list.html">推荐</a></p>'+
        '<ul class="hs-tjBox">'+
        '<a href="./list.html"><li>美妆</li></a>'+
        '<a href="./list.html"><li>保湿霜</li></a>'+
        '<a href="./list.html"><li>蕾丝性感内衣</li></a>'+
        '<a href="./list.html"><li>唇膏</li></a>'+
        '<a href="./list.html"><li>高跟鞋</li></a>'+
        '<a href="./list.html"><li>丝巾</li></a>'+
        '<a href="./list.html"><li>潮流时尚</li></a>'+
        '<a href="./list.html"><li>唇膏</li></a>'+
        '<a href="./list.html"><li>高跟鞋</li></a>'+
        '<a href="./list.html"><li>丝巾</li></a>'+
        '<a href="./list.html"><li>潮流时尚</li></a>'+
        '</ul>'+
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
        /*--------搜索--------------------*/
        var hsSearch = (function (){
            var searchBtn = document.querySelector(".hs-right-icon");
            var back = document.querySelector(".hs-back");
            var searchBox = $("#hs-search")
            searchBtn.addEventListener("touchstart", touchStartFun);
            back.addEventListener("touchstart", touchStartBackFun);
            function touchStartFun(){
                searchBox.animate({left:0},100)
            }
            function touchStartBackFun(){
                searchBox.animate({left:100+"%"},100)
            }
        })()
    };
    return {init : init}
})()