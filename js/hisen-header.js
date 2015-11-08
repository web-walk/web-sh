/**
 * Created by hisen on 2015/10/15.
 */

/*---------头部公共组件------------------*/
var HS_header = {};

HS_header.indexShell = (function(){
    var configMap = {
        indexHtml :
        '<span class="hs-menu-icon" id="hs-menu-icon"></span>'+
        '<div class="hs-header-box">'+
        '<h1 class="logo"></h1>'+
        '</div>'+
        '<span class="hs-right-icon"></span>'
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



