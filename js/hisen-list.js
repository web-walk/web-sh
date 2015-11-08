/**
 * Created by ZM on 2015/10/15.
 */
var HS_list = {}


//初始化
HS_list.listShell = (function(){
    var configMap = {
        listHtml :
        '<header id="hs-header" class="hs-header"></header>'+
        '<section id="hs-search"></section>'+
        '<section class="hs-menu shezh-box"></section>'+
        '<div class="list-carousel"></div>'+
        '<section class="list-mainnav"></section>'+
        '<section class="list-produce list-produce1"></section>'+
        '<section class="list-produce list-produce2">' +
        '</section>'
    }
    initModule = function ( container) {
        createDOM( container)
    };
    createDOM = function(container){
        container.html( configMap.listHtml );
    };

    return { initModule : initModule };
})();

//轮播图
HS_list.listBanner = (function(){
    var bannerConfigMap = {
        bannerHtml :
        '<ul>'+
        '<li><a href="javascript:;"><img src="images/banner-00.jpg" alt=""></a></li>'+
        '<li><a href="javascript:;"><img src="images/banner-01.jpg" alt=""></a></li>'+
        '<li><a href="javascript:;"><img src="images/banner-02.jpg" alt=""></a></li>'+
        '<li><a href="javascript:;"><img src="images/banner-03.jpg" alt=""></a></li>'+
        '<li><a href="javascript:;"><img src="images/banner-04.jpg" alt=""></a></li>'+
        '</ul>'+
        '<ol>'+
        '<li class="list-cur"></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '</ol>'
    };
    bannerModule = function(place,data){
        bannerDOM(place,data)
        listBind();
    };
    bannerDOM = function(place,data){
        place.html(bannerConfigMap.bannerHtml)
    };
    listBind = function(){
        //得到轮播图盒子
        var carousel = document.querySelector(".list-carousel");
        //所有图片
        var lis = carousel.querySelectorAll("li");
        //得到小圆点
        var circls = carousel.querySelectorAll("ol li");
        //小圆点盒子
        var circlsList = carousel.querySelector("ol");

        //三个监听
        carousel.addEventListener("touchstart",touchstartHandler);
        carousel.addEventListener("touchmove",touchmoveHandler);
        carousel.addEventListener("touchend",touchendHandler);

        var startX;

        //3张图片的数组（实际上是对象，因为对象有属性名，比较直观）。小火车。这个小火车永远只有3张图片
        //分别是要动的左、中、右
        var picArr = {
            leftPic : lis[4],
            centerPic : lis[0],
            rightPic : lis[1],
            nowimg : 0, 	//当前显示的图片编号
            turnRight : function(){
                //向右边成功滑动
                this.nowimg --;
                if(this.nowimg < 0){
                    this.nowimg = 4;
                }
                //右滑动
                this.rightPic = this.centerPic;
                this.centerPic = this.leftPic;
                //然后增加一项。
                if(this.nowimg >= 1){
                    this.leftPic = lis[this.nowimg - 1];
                }else{
                    this.leftPic = lis[4];
                }
            },
            turnLeft : function(){
                this.nowimg ++;
                if(this.nowimg > 4){
                    this.nowimg = 0;
                }
                //左滑动
                this.leftPic = this.centerPic;
                this.centerPic =this.rightPic;
                //然后增加一项。
                if(this.nowimg <= 3){
                    this.rightPic = lis[this.nowimg + 1];
                }else{
                    this.rightPic = lis[0];
                }
            },
            goIndex : function(num){
                console.log(num);
                //比较
                if(num > this.nowimg){
                    this.nowimg = num;
                    setCercles(this.nowimg);
                    //中间，右图 要移动
                    //准备好右图
                    this.rightPic = lis[num];
                    //让右图就位
                    carousel.className = "list-carousel";	//去掉过渡
                    this.rightPic.style.transform = "translateX(100%)";
                    //移动
                    var self = this;
                    setTimeout(function(){
                        carousel.className = "list-carousel tr";
                        self.rightPic.style.transform = "translateX(0)";
                        self.centerPic.style.transform = "translateX(-100%)";

                        self.leftPic = self.centerPic;
                        self.centerPic = self.rightPic;
                    }, 1);
                }else if(num < this.nowimg){
                    //中间，左图 要移动
                    this.nowimg = num;
                    //调用函数
                    setCercles(this.nowimg);

                    //中间，左图 要移动
                    //准备好左图
                    this.leftPic = lis[num];
                    //让左图就位
                    carousel.className = "list-carousel";	//去掉过渡
                    this.leftPic.style.transform = "translateX(-100%)";
                    //移动
                    var self = this;
                    setTimeout(function(){
                        carousel.className = "list-carousel tr";
                        self.leftPic.style.transform = "translateX(0)";
                        self.centerPic.style.transform = "translateX(100%)";

                        self.rightPic = self.centerPic;
                        self.centerPic = self.leftPic;
                    }, 1);
                }
            }
        };

        function setCercles(num){
            //小圆点的cur
            for(var i = 0 ; i < circls.length ; i++){
                circls[i].className = "";
            }
            circls[num].className = "list-cur";
        }

        //开始触摸
        function touchstartHandler(event){
            //如果触摸区域是小圆点区域，那么就直接返回，什么也不做
            if(event.target.parentNode == circlsList){
                return;
            }
            //清除轮播图的过渡效果
            carousel.className = "list-carousel"; //去掉tr类
            //到正确位置
            picArr["rightPic"].style.transform = "translateX(100%)";
            //记录开始位置
            startX = event.touches[0].pageX;
        }

        //触摸移动
        function touchmoveHandler(event){
            event.preventDefault();
            if(event.target.parentNode == circlsList){
                return;
            }
            var dX = event.touches[0].pageX - startX;

            //每次滑动的时候，永远都是3张图片在运动
            //左边的图片，都是以-320为基准，反映增量
            //中间的图片，都是以0为基准，反映增量
            //右边的图片，都是以320为基准，反映增量
            picArr["leftPic"].style.transform = "translateX(" + (-320 +  dX) + "px)";
            picArr["centerPic"].style.transform = "translateX(" + dX + "px)";
            picArr["rightPic"].style.transform = "translateX(" + (320 +  dX) + "px)";
        }

        //触摸结束
        function touchendHandler(event){
            console.log(event.target.parentNode);
            if(event.target.parentNode == circlsList){
                return;
            }
            //要判定是否滑动成功
            var tempX = event.changedTouches[0].pageX - startX;
            if(tempX >= 100){
                //让他们用过渡的动画形式
                carousel.className = "list-carousel tr";

                //调用函数
                picArr.turnRight();

                //让他们归位
                picArr["centerPic"].style.transform = "translateX(0)";
                picArr["rightPic"].style.transform = "translateX(100%)";
            }else if(tempX <= -100){
                //让他们用过渡的动画形式
                carousel.className = "list-carousel tr";

                //调用函数
                picArr.turnLeft();

                //让他们归位
                picArr["leftPic"].style.transform = "translateX(-100%)";
                picArr["centerPic"].style.transform = "translateX(0)";
            }else{
                //没有成功滑动
                //让他们用过渡的动画形式
                carousel.className = "list-carousel tr";
                //让他们归位
                picArr["leftPic"].style.transform = "translateX(-100%)";
                picArr["centerPic"].style.transform = "translateX(0)";
                picArr["rightPic"].style.transform = "translateX(100%)";
            }

            setCercles(picArr.nowimg);
        }

        //小圆点的监听，触摸事件
        for(var i = 0 ; i < circls.length ; i++){
            circls[i].index = i;
            circls[i].addEventListener("touchstart",function(){
                picArr.goIndex(this.index);
            });
        }
    };
    return { bannerModule : bannerModule };
})();


//小导航
HS_list.listNav = (function(){
    var navConfigMap = {
        navHtml :
        '<a href="list2.html">'+
        '<div class="list-left list-play">'+
        '<h3>签到有礼</h3>'+
        '<p>玩游戏拿奖品</p>'+
        '<img src="images/sec-00.jpg" alt=""/>'+
        '</div>'+
        '</a>'+
        '<div class="list-right list-r">'+
        '<a href="list2.html">'+
        '<div class="list-top list-free">'+
        '<h3>免费试用</h3>'+
        '<p>大牌正品0门槛申请</p>'+
        '<img src="images/sec-01.jpg" alt=""/>'+
        '</div>'+
        '</a>'+
        '<div class="list-bottom">'+
        '<a href="list2.html">'+
        '<div class="list-left list-new">'+
        '<h3>新品首发</h3>'+
        '<p>肌肤能量</p>'+
        '<img src="images/sec-02.jpg" alt=""/>'+
        '</div>'+
        '</a>'+
        '<a href="list2.html">'+
        '<div class="list-right list-master">'+
        '<h3>会员专享</h3>'+
        '<p>积分兑好礼</p>'+
        '<img src="images/sec-03.jpg" alt=""/>'+
        '</div>'+
        '</a>'+
        '</div>'+
        '</div>'
    };
    navModule = function(place,data){
        navDOM(place,data)
    };
    navDOM = function(place,data){

        place.html(navConfigMap.navHtml)
    };
    return { navModule : navModule };
})();


//天天抢吧
HS_list.listQiangba = (function(){
    var qiangbaConfigMap = {
        qiangbaHtml :
        '<div class="list-pti"><h2>天天抢吧</h2><span>据本场结束还有 12：00：00</span></div>'+
        '<div class="list-pnei">'+
        '<img src="images/produce10.jpg" alt=""/>'+
        '<p>伊丽莎白雅顿（ElizabethArden）经典润泽唇膏SPF15 3.7g（又名：经典润泽护唇膏） 唇膏 保湿滋润</p>'+
        '<p class="price">￥23<span>￥128</span></p>'+
        '<button>马上抢购</button>'+
        '</div>'+
        '<div class="list-pnei">'+
        '<img src="images/produce11.jpg" alt=""/>'+
        '<p>丽得姿美蒂优VC润白（亮颜润肤）面膜 10片(保湿补水滋润 睡眠 亮肤 护肤品）</p>'+
        '<p class="price">￥26<span>￥139</span></p>'+
        '<button>马上抢购</button>'+
        '</div>'+
        '<div class="list-pnei">'+
        '<img src="images/produce12.jpg" alt=""/>'+
        '<p>自然乐园 NATURE REPUBLIC 芦荟保湿清洁套组（芦荟胶300ml+芦荟洁面乳150ml）补水保湿 洗面奶</p>'+
        '<p class="price">￥67<span>￥168</span></p>'+
        '<button>马上抢购</button>'+
        '</div>'+
        '<div class="list-pnei">'+
        '<img src="images/produce13.jpg" alt=""/>'+
        '<p>花印水漾润透补水面膜220g(保湿补水滋润 ）（又名花印水漾润颜补水面膜220g）</p>'+
        '<p class="price">￥66<span>￥345</span></p>'+
        '<button>马上抢购</button>'+
        '</div>'+
        '<div class="list-pnei">'+
        '<img src="images/produce14.jpg" alt=""/>'+
        '<p>丽得姿（LEADERS）强化补水亮白12片特惠套装（领先补水*3+领先维C*3+PL补水*6）</p>'+
        '<p class="price">￥45<span>￥134</span></p>'+
        '<button>马上抢购</button>'+
        '</div>'+
        '<div class="list-pnei">'+
        '<img src="images/produce15.jpg" alt=""/>'+
        '<p>千纤草 丝瓜水250ml（爽肤水 化妆水 润肤水）</p>'+
        '<p class="price">￥20.99<span>￥128</span></p>'+
        '<button>马上抢购</button>'+
        '</div>'+
        '<div class="list-pnei">'+
        '<img src="images/produce18.jpg" alt=""/>'+
        '<p>吾尊锋能量喷雾精华水50ml（补水保湿 控油提亮 谢霆锋推荐）</p>'+
        '<p class="price">￥45<span>￥168</span></p>'+
        '<button>马上抢购</button>'+
        '</div>'+
        '<div class="list-pnei">'+
        '<img src="images/produce19.jpg" alt=""/>'+
        '<p>伊蒂之屋（ETUDE HOUSE）伊蒂之屋睛彩自然眉笔 #03 棕褐色(防水、不晕染、持久)</p>'+
        '<p class="price">￥20.9<span>￥98</span></p>'+
        '<button>马上抢购</button>'+
        '</div>'
    };
    qiangbaModule = function(place,data){
        qiangbaDOM(place,data)
    };
    qiangbaDOM = function(place,data){
        place.html(qiangbaConfigMap.qiangbaHtml)
    };
    return { qiangbaModule : qiangbaModule };
})();


//精选热销
HS_list.listHot = (function(){
    var hotConfigMap = {
        hotHtml :
        '<div class="list-pti"><h2>精选热销</h2></div>'+
        '<nav>'+
        '<ul>'+
        '<li><a href="javascript:;" class="cur">面膜</a></li>'+
        '<li><a href="javascript:;">防晒</a></li>'+
        '<li><a href="javascript:;">护肤套装</a></li>'+
        '<li><a href="javascript:;">乳液</a></li>'+
        '<li><a href="javascript:;">面部精华</a></li>'+
        '<li><a href="javascript:;">爽肤水</a></li>'+
        '<li><a href="javascript:;">眼霜</a></li>'+
        '<li><a href="javascript:;">洁面</a></li>'+
        '<li><a href="javascript:;">BB霜</a></li>'+
        '<li><a href="javascript:;">口红</a></li>'+
        '<li><a href="javascript:;">身体乳</a></li>'+
        '<li><a href="javascript:;">精油</a></li>'+
        '<li><a href="javascript:;">男士护肤</a></li>'+
        '<li><a href="javascript:;">香水</a></li>'+
        '</ul>'+
        '</nav>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce1.jpg" alt=""/>'+
        '<p>博斯（BOSS）精品男用淡香水 50ML</p>'+
        '<p class="price">￥20<span>￥68</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce2.jpg" alt=""/>'+
        '<p>光芮（GLO&amp;RAY）唇爱原色唇膏   缪斯 612</p>'+
        '<p class="price">￥23.45<span>￥90.8</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce3.jpg" alt=""/>'+
        '<p>>纯贞薰衣草手工皂固体洗面奶 清爽控油洁面皂 </p>'+
        '<p class="price">￥20<span>￥138</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce4.jpg" alt=""/>'+
        '<p>朵拉朵尚高纯度甘油150ml马拉西亚进口</p>'+
        '<p class="price">￥19.9<span>￥138</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce6.jpg" alt=""/>'+
        '<p>家威保险 保管箱/柜办公家用 电子密码锁 25NWX</p>'+
        '<p class="price">￥29.9<span>￥132</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce7.jpg" alt=""/>'+
        '<p>山东东阿镇固本堂新品传统阿胶糕300g 阿胶糕即食</p>'+
        '<p class="price">￥30<span>￥138</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce8.jpg" alt=""/>'+
        '<p>活石 3.5通耐摔合金版遥控飞机 2.4G 天际蓝</p>'+
        '<p class="price">￥49.9<span>￥88</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce9.jpg" alt=""/>'+
        '<p>木衍 小叶紫檀佛珠手串手链 男女款 高油性高密度rUUwrS </p>'+
        '<p class="price">￥30<span>￥138</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce.jpg" alt=""/>'+
        '<p>柏汉森 手机壳手机套金属保护边框 适用于苹果6s</p>'+
        '<p class="price">￥29<span>￥238</span></p>'+
        '</div>'+
        '<div class="list-pneirong">'+
        '<img src="images/produce5.jpg" alt=""/>'+
        '<p>南极人男袜纯棉 袜子女士纯棉加厚保暖袜子女士中筒袜 </p>'+
        '<p class="price">￥59.99<span>￥145</span></p>'+
        '</div>'
    };
    hotModule = function(place,data){
        hotDOM(place,data);
        hotBind();
    };
    hotDOM = function(place,data){
        place.html(hotConfigMap.hotHtml)
    };
    hotBind = function(){
        //得到各种元素
        var nav = document.querySelector("nav");
        var navul = document.querySelector("nav ul");
        var navullis = document.querySelectorAll("nav ul li");

        var navW = parseInt(window.getComputedStyle(nav , null)['width']);


        //宽度
        navul.style.width = navullis.length * 82 +"px";


        //console.log(navW);

        nav.addEventListener("touchstart",touchstartHandler);
        nav.addEventListener("touchmove",touchmoveHandler);
        nav.addEventListener("touchend",touchendHandler);


        var startX;
        var nowX = 0;
        var dX;

        var lastTwoPoint = [0,0];

        //开始滑动
        function touchstartHandler(event){
            navul.style.webkitTransition = "none";	//去掉过渡
            navul.style.transition = "none";	//去掉过渡
            startX = event.touches[0].pageX;	//记录起点
        }

        //滑动过程
        function touchmoveHandler(event){
            event.preventDefault();
            dX = event.touches[0].pageX - startX;	//差值

            //反映差值
            navul.style.webkitTransform = "translateX(" + (nowX + dX) + "px)";
            navul.style.transform = "translateX(" + (nowX + dX) + "px)";

            //记录最后两点的x值
            lastTwoPoint.shift();
            lastTwoPoint.push(event.touches[0].pageX);
        }

        //结束滑动
        function touchendHandler(event){
            nowX += dX;

            //多走最后两点路程的5倍路程
            nowX += (lastTwoPoint[1] - lastTwoPoint[0]) * 5;
            if(nowX > 0){
                nowX = 0;
            }

            if(nowX < -parseInt(navul.style.width) + navW){
                nowX = -parseInt(navul.style.width) + navW;
            }

            console.log(-parseInt(navul.style.width) + navW)
            //过渡时间
            //非线性衰减（canvas学习）
            var t = Math.sqrt(Math.abs(lastTwoPoint[1] - lastTwoPoint[0])) / 10;

            navul.style.webkitTransition = "all " + t + "s cubic-bezier(0.1, 0.85, 0.25, 1) 0s";
            navul.style.transition = "all " + t + "s cubic-bezier(0.1, 0.85, 0.25, 1) 0s";

            //反映多走的5倍路程：
            navul.style.webkitTransform = "translateX(" + nowX + "px)";
            navul.style.transform = "translateX(" + nowX + "px)";
        }
    };
    return { hotModule : hotModule };
})();