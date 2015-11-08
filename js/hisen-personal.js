var Hisen_personal = {

}
Hisen_personal.all=(function(){
    var config={
        main_html:
        '<div class="per-header" id="per_header"></div>'
        +'<div class="per-content">'
            +'<div class="per-headimg" id="per_headimg">'
            +'</div>'
            +'<div class="per-current" id="per_current">'
            +'</div>'
            +'<div class="per-menu" id="per_menu">'
            +'</div>'
            +'<div class="per-like" id="per_like">'
            +'</div>'
            +'<div class="per-footer">账号管理</div>'
        +'</div>'
    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        config.data = data;
        createDom();
        bindEvent();
    };
    createDom=function(){
        var $container = config.$container;
        var data = config.data;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);

    }
    bindEvent=function(){

    }
    return {init : init}
}());
Hisen_personal.top=(function(){
    var config={
        main_html:
        '<span class="per-back"></span>'
        +'<div>我的嗨森</div>'
        +'<span class="per-mark"></span>'
    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        config.data = data;
        createDom();
        bindEvent();
    };
    createDom=function(){
        var $container = config.$container;
        var data = config.data;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);

    }
    bindEvent=function(){

    }
    return {init : init}
}());
Hisen_personal.banner=(function(){
    var config={
        main_html:
        '<span class="per-headpng"></span>'
        +'<p>fengmengna7410</p>'
        +'<p>铜牌用户</p>'
    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        config.data = data;
        createDom();
        bindEvent();
    };
    createDom=function(){
        var $container = config.$container;
        var data = config.data;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);

    }
    bindEvent=function(){

    }
    return {init : init}
}());
Hisen_personal.ing=(function(){
    var config={
        main_html:
        '<ul>'
        +'<li>'
        +'<a href="">'
        +'<p>0</p>'
        +'<p>代付款</p>'
        +'</a>'
        +'</li>'
        +'<li>'
        +'<a href="">'
        +'<p>0</p>'
        +'<p>代确认收货</p>'
        +'</a>'
        +'</li>'
        +'</ul>'
    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        config.data = data;
        createDom();
        bindEvent();
    };
    createDom=function(){
        var $container = config.$container;
        var data = config.data;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);
    }
    bindEvent=function(){

    }
    return {init : init}
}());
Hisen_personal.service=(function(){
    var config={
        main_html:
        '<ul>'
        +'<li>'
        +'<a href="">全部订单</a>'
        +'</li>'
        +'<li>'
        +'<a href="">我的钱包</a>'
        +'</li>'
        +'<li>'
        +'<a href="">全部订单</a>'
        +'</li>'
        +'<li>'
        +'<a href="">全部订单</a>'
        +'</li>'
        +'<li>'
        +'<a href="">全部订单</a>'
        +'</li>'
        +'<li>'
        +'<a href="">全部订单</a>'
        +'</li>'
        +'<li>'
        +'<a href="">全部订单</a>'
        +'</li>'
        +'<li>'
        +'<a href="">全部订单</a>'
        +'</li>'
        +'</ul>'
    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        config.data = data;
        createDom();
        bindEvent();
    };
    createDom=function(){
        var $container = config.$container;
        var data = config.data;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);
    }
    bindEvent=function(){

    }
    return {init : init}
}());
Hisen_personal.like=(function(){
    var config={
        main_html:
        '<h2>猜你喜欢</h2>'
        +'<div>'
        +'<ul>'
        +'<li>'
        +'<a href="">'
        +'<img src="images/img-like1.jpg" alt=""/>'
        +'<p>福临门水晶米 大米5kg</p>'
        +'<p>￥29.9</p>'
        +'</a>'
        +'</li>'
        +'<li>'
        +'<a href="">'
        +'   <img src="images/img-like2.jpg" alt=""/>'
        +'   <p>罗马仕（ROMOSS）</p>'
        +'<p>￥29.9</p>'
        +'</a>'
        +'</li>'
        +'<li>'
        +'<a href="">'
        +'   <img src="images/img-like3.jpg" alt=""/>'
        +'   <p>福临门水晶米 大米5kg</p>'
        +'<p>￥29.9</p>'
        +'</a>'
        +'</li>'
        +'<li>'
        +'<a href="">'
        +'   <img src="images/img-like4.jpg" alt=""/>'
        +'   <p>福临门水晶米 大米5kg</p>'
        +'<p>￥29.9</p>'
        +'</a>'
        +'</li>'
        +'<li>'
        +'<a href="">'
        +'    <img src="images/img-like5.jpg" alt=""/>'
        +'    <p>罗马仕（ROMOSS）超智能移动电源充电宝</p>'
        +'<p>￥29.9</p>'
        +'</a>'
        +'</li>'
        +'<li>'
        +'<a href="">'
        +'    <img src="images/img-like6.jpg" alt=""/>'
        +'    <p>福临门水晶米 大米5kg</p>'
        +'<p>￥29.9</p>'
        +'</a>'
        +'</li>'
        +'</ul>'
        +'</div>'
    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        config.data = data;
        createDom();
        bindEvent();
    };
    createDom=function(){
        var $container = config.$container;
        var data = config.data;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);

    }
    bindEvent=function(){

    }
    return {init : init}
}());