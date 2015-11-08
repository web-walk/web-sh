/**
 * Created by ZM on 2015/10/15.
 */
var HS_list = (function () {
    initModule = function ($container) {
        initModule($container);
    };
    return { initModule: initModule };
})();

//初始化
HS_list.listwoShell = (function(){
    var configMap = {
        listwoHtml :
        '<header id="hs-header" class="hs-header"></header>'+
        '<section class="hs-menu shezh-box"></section>'+
        '<section id="sx"></section>'+
        '<div class="list-top"></div>'+
        '<div class="list-biaoqian"></div>'+
        '<section class="list-produce"></section>'
    }
    initModule = function ( $container) {
        createDOM( $container)
    };
    createDOM = function($container){
        $container.html( configMap.listwoHtml );
    };

    return { initModule : initModule };
})();

//顶部 筛选
HS_list.listChoose = (function(){
    var chooseConfigMap = {
        chooseHtml :
        '<div class="arrowBtn shaixuan">筛选</div>'+
        '<div class="menu menue">'+
        '<h3>品牌</h3>'+
        '<ul>'+
        '<li class="cur">御泥坊</li>'+
        '<li>小护士</li>'+
        '<li>百雀羚</li>'+
        '<li>韩后</li>'+
        '</ul>'+
        '<h3>类别</h3>'+
        '<ul>'+
        '<li class="cur">面膜</li>'+
        '<li>护手霜</li>'+
        '<li>精油</li>'+
        '<li>爽肤水</li>'+
        '</ul>'+
        '<h3>价格</h3>'+
        '<ul>'+
        '<li class="cur">御泥坊</li>'+
        '<li>小护士</li>'+
        '<li>百雀羚</li>'+
        '<li>韩后</li>'+
        '</ul>'+
        '<h3>商品类型</h3>'+
        '<ul>'+
        '<li class="cur">包邮</li>'+
        '<li>折扣</li>'+
        '<li>旺旺在线</li>'+
        '</ul>'+
        '<h3>店铺类型</h3>'+
        '<ul>'+
        '<li class="cur">旗舰店</li>'+
        '<li>专卖店</li>'+
        '<li>专营店</li>'+
        '</ul>'+
        '<p class="shumu">有 <span> 678879 </span> 件商品</p>'+
        '<button class="button">完 成</button>'+
        '</div>'
    };
    chooseModule = function(place,data){
        chooseDOM(place,data);
        chooseBind();
    };
    chooseDOM = function(place,data){
        place.html(chooseConfigMap.chooseHtml)
    };
    chooseBind = function(){
        // 筛选按钮
        $(".arrowBtn").on("touchstart",function(){
            $(".menu").removeClass("menue")
            $(".arrowBtn").addClass("zhuan");
        });


        // 菜单部分
        var uls = document.querySelectorAll(".menu ul");
        for(var i=0;i<uls.length;i++){
            var lis = uls[i].querySelectorAll("li");
            for(var i=0;i<lis.length;i++){
                $(".menu ul li").on("touchstart",function(){
                    for(var i=0;i<lis.length;i++){
                        $(this).parent().children().removeClass("cur");
                    }
                    $(this).addClass("cur");

                })
            }

        }

        // 完成按钮
        $(".button").on("touchstart",function(){
            $(".menu").addClass("menue")
            $(".arrowBtn").removeClass("zhuan");
        });
    };
    return { chooseModule : chooseModule };
})();


//导航
HS_list.listTop = (function(){
    var topConfigMap = {
        topHtml :
        '<ul>'+
        '<li class="cur">综合</li>'+
        '<li>销量</li>'+
        '<li>价格</li>'+
        '<li id="btn">大图</li>'+
        '</ul>'
    };
    topModule = function(place,data){
        topDOM(place,data)
    };
    topDOM = function(place,data){
        place.html(topConfigMap.topHtml)
    };
    return { topModule : topModule };
})();


//选择标签
HS_list.listXuanze = (function(){
    var xuanzeConfigMap = {
        xuanzeHtml :
        '<ul>'+
        '<li>面膜贴</li>'+
        '<li>日本</li>'+
        '<li>护肤套装</li>'+
        '<li>乳液</li>'+
        '<li>精华</li>'+
        '<li>佰草集</li>'+
        '<li>收缩毛孔</li>'+
        '<li>玉兰油</li>'+
        '</ul>'
    };
    xuanzeModule = function(place,data){
        xuanzeDOM(place,data)
    };
    xuanzeDOM = function(place,data){
        place.html(xuanzeConfigMap.xuanzeHtml)
    };
    return {xuanzeModule : xuanzeModule };
})();


//产品列表
HS_list.listProduce = (function(){
    var produceConfigMap = {
        produceHtml :
        '<div class="list-pneirong">'+
        '<img src="images/produce.jpg" alt=""/>'+
        '<p>伊丽莎白雅顿（berden）经典润泽唇膏</p>'+
        '<p class="price">￥30<span>￥365</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
            '<img src="images/produce1.jpg" alt=""/>'+
        '<p>丽得姿美蒂优VC润白（亮颜润肤）面膜 10片</p>'+
        '<p class="price">￥19.9<span>￥120</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
            '<img src="images/produce2.jpg" alt=""/>'+
        '<p>自然乐园 NATURE REPUBLIC 芦荟保湿清洁套组</p>'+
        '<p class="price">￥28<span>￥208</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
            '<img src="images/produce3.jpg" alt=""/>'+
        '<p>花印水漾润透补水面膜220g(保湿补水滋润 ）</p>'+
        '<p class="price">￥21<span>￥120</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
            '<img src="images/produce4.jpg" alt=""/>'+
        '<p>丽得姿（LEADERS）强化补水亮白12片特惠套装</p>'+
        '<p class="price">￥20<span>￥158</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
            '<img src="images/produce5.jpg" alt=""/>'+
        '<p>千纤草 丝瓜水250ml（爽肤水 化妆水 润肤水）</p>'+
        '<p class="price">￥45<span>￥168</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
            '<img src="images/produce6.jpg" alt=""/>'+
        '<p>吾尊锋能量喷雾精华水50ml（补水保湿 控油提亮）</p>'+
        '<p class="price">￥26<span>￥98</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
            '<img src="images/produce7.jpg" alt=""/>'+
        '<p>朵拉朵尚高纯度甘油150ml马拉西亚进口</p>'+
        '<p class="price">￥20<span>￥138</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
            '<img src="images/produce8.jpg" alt=""/>'+
        '<p>伊蒂之屋（ETUDE HOUSE）伊蒂之屋睛彩自然眉笔</p>'+
        '<p class="price">￥70<span>￥318</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
            '<img src="images/produce9.jpg" alt=""/>'+
        '<p>纯贞薰衣草手工皂固体洗面奶 清爽控油洁面皂</p>'+
        '<p class="price">￥50<span>￥218</span></p>'+
        '</div>'
    };
    produceModule = function(place,data){
        produceDOM(place,data);
        produceBind();
    };
    produceDOM = function(place,data){
        place.html(produceConfigMap.produceHtml)
    };
    produceBind = function(){
        var qiehuan = document.querySelector("#btn");
        var produce = document.querySelector(".list-produce");
        //所有图片
        var divs = produce.querySelectorAll("div");
        //三个监听
        qiehuan.addEventListener("touchstart",touchstartHandler);

        //开始触摸
        function touchstartHandler(event){
            for(var i= 0;i<divs.length;i++){
                if(divs[i].className == "list-pneirong"){
                    divs[i].className = "list-pnei"
                    this.innerHTML = "列表"
                }else{
                    divs[i].className = "list-pneirong"
                    this.innerHTML = "大图"
                }
            }
        }
    };
    return {produceModule : produceModule };
})();
