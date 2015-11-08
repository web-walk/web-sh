/**
 * Created by Administrator on 2015/10/12.
 */
    $(function(){
        var htmlDom = document.getElementById("hs_html")
        hsRem();
        window.onresize = hsRem;
        function hsRem(){
            var clientWidth = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
            htmlDom.style.fontSize = clientWidth * 1/24+"px";
        }

        HS_header.indexShell.init($(".hs-header"),null);
        HS_search.indexShell.init($("#hs-search"),null);
        HS_menuLeft.indexShell.init($(".hs-menu"),null);
        HS_index.banner.init($("#hs-banner"),null);
        HS_index.nav.init($(".hs-nav"),null);
        HS_index.hostModule.init($(".hs-rmtj"),null);
        HS_index.brandModule.init($(".hs-ppnz"),null);
        HS_index.adornModule.init($(".hs-mzg"),null);
        HS_index.themeModule.init($(".hs-ztg"),null);
        HS_index.guessModule.init($(".hs-cnxh"),null);

    })

