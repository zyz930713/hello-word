


$(document).ready(function(){

    $(function () {
        var OtopHeader = $("header");
        OtopHeader.hover(function () {
            $(this).css("background","#373d41");
        },function () {
            $(this).css("background","#135081");
        })
    });


    //输入框点击
    $(function () {
        var oInpuWrap = $(".top_header_search_container");
        var oInput = $(".top_header_search_input");

        oInput.click(function () {
            oInpuWrap.css({"width":300,"background":"#262c30","border":"1px solid #00c1de"});
        });
        $(document).click(function (event) {
            if(!oInput.is(event.target) && oInput.has(event.target).length == 0){
                oInpuWrap.css({"width":200,"background":"hsla(0, 0%, 100%, .12)","border":"none"});
            }
        });
    });

    //下划线设置
    $(function () {
       var oUl = $("#nav_list");
       var aLi = oUl.children("li");
       var oLine = oUl.children(".line");

       aLi.each(function (i,d) {
           $(this).hover(function () {
               oLine.css("width",aLi.eq(i).innerWidth());
               oLine.css("left",aLi.eq(i).position().left);
           },function () {
               oLine.css("width",0);
           })
       })
    });

    //nav下拉菜单
    $(function () {
        var productDropdown = $(".top_nav_common_dropdown_all_product");
        var LiProduct = $(".product_dropdown");
        var oUl = $("#nav_list");
        var aLi = oUl.children("li");
        var oLine = oUl.children(".line");

        LiProduct.hover(function () {
            productDropdown.slideDown();
            // alert(1)
        },function () {
            productDropdown.slideUp();
        });
        productDropdown.hover(function () {
            productDropdown.stop();
            oLine.css("width",aLi.eq(1).innerWidth());
            oLine.css("left",aLi.eq(1).position().left);
        },function () {
            productDropdown.slideUp();
            oLine.css("width",0);
        })
    });






    //计时圆圈
    $(function () {
        var aSvg = $("svg");
        var num=0;
        
        function round(num) {
            var aPath = aSvg.eq(num).children("path").eq(1);

            aPath.attr("stroke-width",10).addClass("show_path");
            setTimeout(function () {
                aPath.attr("stroke-width",0).removeClass("show_path");
            },5000);
        }

        //切换函数
        function fn1() {
            for(var i=0;i<aSvg.length;i++){
                if(i%5 == 0){
                    round(0);
                }
                else if(i%5==1){
                    setTimeout(function () {
                        round(1)
                    },5000);
                }
                else if(i%5==2){
                    setTimeout(function () {
                        round(2)
                    },10000);
                }
                else if(i%5==3){
                    setTimeout(function () {
                        round(3)
                    },15000);
                }
                else if(i%5==4){
                    setTimeout(function () {
                        round(4)
                    },20000);
                }
            }
        }
        fn1();
        var timer = setInterval(function (){
            fn1()
        },25000);

        aSvg.each(function (i,d) {
            var aPath = aSvg.eq(i).children("path").eq(1);
            aPath.click(function () {
                $("path:odd").attr("stroke-width",0);
                aPath.stop().attr("stroke-width",10);
                clearInterval(timer);
                aPath.removeClass("show_path");
                $("path").stop();
            })
        })
    });


    //图片轮播
    $(function () {
        var oScrollTab = $(".top_scroll_tab");
        var oScrollHeader = $(".top_scroll_left_header");
        var oScrollLeft = $(".top_scroll_left_header a");
        var oH1 = oScrollLeft.children("h1");
        var oP = oScrollLeft.children("p");

        var oScrollRight = $(".top_scroll_banner_row");
        var aImgWrap = oScrollRight.children(".top_scroll_right_img");
        var aImg = aImgWrap.children("img");
        
        var num = 0;
        var timer = null;

        var aSvg = $("svg");

        var arrH1 = ["517云通信狂欢节"," 运维全球90%以上主流开源及商业数据库 "," 开始使用对象存储 OSS "," 让数据库像应用一样一键上云 "," 阿里云服务产品全新升级 "];
        var arrP = ["短信套餐包低至3分/条，下单即有机会抽iPhone X"," 混合云数据库管理HDM弹性扩展发布，一键迁移阿里云 "," 全新缓存产品形态，全面突破内存对单实例数据量限制 "," 60%单实例最大性能提升，35Gbps内网带宽 "," 覆盖上云前、中、后全周期的专业技术服务 ",]
        var arrImgUrl = [["../static/img/headerImg01-03.png","../static/img/headerImg01-02.png","../static/img/headerImg01-01.png"],
            ["../static/img/headerImg02-03.png","../static/img/headerImg02-02.png","../static/img/headerImg02-01.png"],
            ["../static/img/headerImg03-03.png","../static/img/headerImg03-02.png","../static/img/headerImg03-01.png"],
            ["../static/img/headerImg04-03.png","../static/img/headerImg04-02.png","../static/img/headerImg04-01.png"],
            ["../static/img/headerImg05-03.png","../static/img/headerImg05-02.png","../static/img/headerImg05-01.png"]];
        
        //页面初始化
        function init() {
            // oScrollTab.addClass("bottom");
            oScrollHeader.css({"position":"absolute","top":100});
            oH1.html(arrH1[num]);
            oP.html(arrP[num]);
            aImg.each(function (i,d) {
                aImg.eq(i).attr("src",arrImgUrl[num][i]);
            })

        }
        init();
        
        //点击切换
        function turn() {
            aSvg.each(function (i,d) {
                var aPath = aSvg.eq(i).children("path").eq(1);
                aPath.click(function () {
                    oH1.html(arrH1[i]);
                    oP.html(arrP[i]);
                    aImg.each(function (j,d) {
                        aImg.eq(j).attr("src",arrImgUrl[i][j]);
                    })
                });
            })
        }

        //定时切换
        function autoplay() {
            timer = setInterval(function () {
                num++;
                if (!(num<arrH1.length)){
                    num = 0;
                }
                oH1.html(arrH1[num]);
                oP.html(arrP[num]);
                aImg.each(function (j,d) {
                    aImg.eq(j).attr("src",arrImgUrl[num][j]);
                })
            },5000);
            aSvg.each(function (i,d) {
                var aPath = aSvg.eq(i).children("path").eq(1);
                aPath.click(function () {
                    clearInterval(timer);
                })
            })
        }

        turn();
        autoplay()
    });


    //左侧菜单栏
    $(function () {
        var Allnav = $(".all_nav");
        var level1 = $(".dropdown_level1_nav");

        var level2 = $(".dropdown_level2_nav");
        var oProduct = level1.find("li").eq(0);

        var level3 = $(".dropdown_level2_content");
        var oProduct2 = level2.find("li").eq(0);



        var left = null;



        Allnav.hover(function () {
            level1.animate({left:0},250);
            left = level1.position().left;
        },function () {
            level1.animate({left:-200},250);
        });
        level1.hover(function () {
            $(this).stop();
            Allnav.css("background","#00c1de");
        },function () {
            $(this).animate({left:-200},250);
            Allnav.css("background","");
        });

        //二级菜单
        oProduct.hover(function () {
            level2.animate({left:200},250);
        },function () {
            level2.animate({left:-200},250);
        });

        level2.hover(function () {
            $(this).stop();
            level1.stop();
            Allnav.css("background","#00c1de");
        },function () {
            $(this).animate({left:-200},250);
            level1.animate({left:-200},250);
            Allnav.css("background","");
        });

        //三级菜单
        oProduct2.hover(function () {
            level3.animate({left:400},250);
        },function () {
            level3.animate({left:-680},250);
        });

        level3.hover(function () {
            $(this).stop();
            level1.stop();
            level2.stop();
            Allnav.css("background","#00c1de");
        },function () {
            $(this).animate({left:-680},250);
            level1.animate({left:-200},250);
            level2.animate({left:-200},250);
            Allnav.css("background","");
        });
    });





    //产品介绍标题转换
    $(function () {
        var aLi = $(".content_product_tab");
        var aLink = aLi.children("a");
        var aImg = aLink.children(".content_product_tab_icon");
        var atitle = aLink.children(".content_product_tab_name");
        var arrImg = ['../static/img/count-back-selected.png','../static/img/cdn-back-selected.png',
            '../static/img/data-back-selected.png','../static/img/internal-back-selected.png',
            '../static/img/name-back-selected.png','../static/img/safe-back-selected.png','../static/img/et-back-selected.png',
            '../static/img/bigdata-service-back-selected.png','../static/img/bigdata-use-back-selected.png','../static/img/bigdata-show-back-selected.png',
            '../static/img/safe-back-selected.png','../static/img/et-back-selected.png',
            '../static/img/bigdata-service-back-selected.png','../static/img/bigdata-use-back-selected.png','../static/img/bigdata-show-back-selected.png',
            '../static/img/safe-back-selected.png','../static/img/safe-back-selected.png','../static/img/safe-back-selected.png','../static/img/safe-back-selected.png'
        ];
        var aProduct = $(".content_product_content");
        var aTriangle = $(".indicator-triangle");
        var aTriangleLeft = aTriangle.position().left;

        var oShow = $(".content_product_show_more");
        var oShowContent = $(".content_product_layer_more");

       //初始化
        function init() {
            aLi.eq(0).addClass("tab_active");
            aProduct.eq(0).addClass("first_product");
            aTriangle.eq(0).addClass("indicator-triangle-show");
        }
        init();

        //选项转换
       aLink.each(function (i,d) {
           $(this).on("click",function () {
               if (i != 0){
                   aLi.eq(0).removeClass("tab_active");
                   aProduct.eq(0).removeClass("first_product");
                   aTriangle.eq(0).removeClass("indicator-triangle-show");
               }
               aImg.css("background","");
               atitle.css("color","");
               aProduct.removeClass("first_product");
               aImg.eq(i).css({'background-image':'url('+arrImg[i]+')','background-size':'contain'});
               atitle.eq(i).css("color","#00c1de");
               aProduct.eq(i).addClass("first_product");
               aProduct.eq(i).children().fadeOut(200);
               aProduct.eq(i).children().fadeIn(800);
               if (i>=0 && i<5){
                   aTriangle.removeClass("indicator-triangle-show");
                   aTriangle.eq(0).addClass("indicator-triangle-show");
                   if (i == 0){
                       aTriangle.eq(0).css({"position":"absolute","left":aTriangleLeft})
                   }
                   else {
                       aTriangle.eq(0).css({"position":"absolute","left":(i%5+0.6)*aTriangleLeft*2})
                   }
               }
               else if (i<10){
                   aTriangle.removeClass("indicator-triangle-show");
                   aTriangle.eq(1).addClass("indicator-triangle-show");
                   if (i == 5){
                       aTriangle.eq(1).css({"position":"absolute","left":aTriangleLeft})
                   }
                   else {
                       aTriangle.eq(1).css({"position":"absolute","left":(i%5+0.6)*aTriangleLeft*2})
                   }
               }
               else if (i<15){
                   aTriangle.removeClass("indicator-triangle-show");
                   aTriangle.eq(2).addClass("indicator-triangle-show");
                   if (i == 10){
                       aTriangle.eq(2).css({"position":"absolute","left":aTriangleLeft})
                   }
                   else {
                       aTriangle.eq(2).css({"position":"absolute","left":(i%5+0.6)*aTriangleLeft*2})
                   }
               }
               else {
                   aTriangle.removeClass("indicator-triangle-show");
                   aTriangle.eq(3).addClass("indicator-triangle-show");
                   if (i == 15){
                       aTriangle.eq(3).css({"position":"absolute","left":aTriangleLeft})
                   }
                   else {
                       aTriangle.css({"position":"absolute","left":(i%5+0.6)*aTriangleLeft*2})
                   }

               }

           })
       });

       //显示隐藏选项单
        oShow.on({"click":function () {
                oShowContent.slideToggle("500");
                if ($(this).html() == "查看全部") {
                    $(this).html("收起")
                }else {
                    $(this).html("查看全部")
                }

            }});
    });








    
    //解决方案展示图片背景文字转换
    $(function () {
        var oUl = $(".content_total_solution_container_content");
        var aLi = $(".container_content_item") ;
        var oBg = $(".bg");
        var oImgWrap = $(".item-img-panel");
        var aImg1 = $(".img1");
        var aImg2 = $(".img2");
        var oLine = $(".item-line");
        var oH3 = $(".item-title");
        var oP = $(".item-desc");
        var oSpan = $(".item-link");
        var aPanel = $(".content_total_solution_panel");
        var arrow1 = $(".arrow_left");
        var arrowImg1 = arrow1.children("img");
        var arrow2 = $(".arrow_right");
        var arrowImg2 = arrow2.children("img");



        var h3positiontop = oH3.position().top;
        var h3positionleft = oH3.position().left;

        var oLinepositiontop = oLine.position().top;
        var oLinepositionleft = oLine.position().left;

        var img2positiontop = aImg2.position().top;
        var img2positionleft = aImg2.position().left;

        var oPpositiontop = oP.position().top;
        var oPpositionleft = oP.position().left;

        var oSpanpositiontop = oSpan.position().top;
        var oSpanpositionleft = oSpan.position().left;



        aLi.each(function () {
            $(this).on("mouseover",function () {
                oBg.css("background","#161a1d");
                oBg.eq($(this).index()).css("background","#00C1DE");
                oLine.eq($(this).index()).css("opacity","0");
                oLine.eq($(this).index()).css({"position":"absolute","top":oLinepositiontop-40,"left":h3positionleft+136});
                oH3.eq($(this).index()).css({"position":"absolute","top":h3positiontop-60,"left":h3positionleft+78});
                aImg1.eq($(this).index()).css("opacity","0");
                aImg2.eq($(this).index()).css("opacity","1");
                aImg2.eq($(this).index()).css({"position":"absolute","top":img2positiontop-40});
                aImg1.eq($(this).index()).css({"position":"absolute","top":img2positiontop-40});

                oP.eq($(this).index()).css({"opacity":"1"});
                oP.eq($(this).index()).css({"position":"absolute","top":oPpositiontop-50});

                oSpan.eq($(this).index()).css({"opacity":"1"});
                oSpan.eq($(this).index()).css({"position":"relative","top":oPpositiontop-70});


                //左右箭头显示
                aPanel.css("display","block");

            });

            $(this).on("mouseout",function (){
                oLine.eq($(this).index()).css({"position":"absolute","top":oLinepositiontop,"left":h3positionleft+136});
                oLine.eq($(this).index()).css("opacity","1");
                oBg.eq($(this).index()).css("background","#161a1d");
                oH3.eq($(this).index()).css({"position":"absolute","top":h3positiontop,"left":h3positionleft+78});
                aImg2.eq($(this).index()).css({"position":"absolute","top":img2positiontop});
                aImg1.eq($(this).index()).css({"position":"absolute","top":img2positiontop});
                aImg1.eq($(this).index()).css("opacity","1");
                aImg2.eq($(this).index()).css("opacity","0");

                oP.eq($(this).index()).css("opacity","0");
                oP.eq($(this).index()).css({"position":"absolute","top":oPpositiontop});

                oSpan.eq($(this).index()).css("opacity","0");
                oSpan.eq($(this).index()).css({"position":"relative","top":oPpositiontop});

                //左右箭头隐藏
                aPanel.css("display","none");
            })
        });

        //左右键高亮显示
        aPanel.each(function () {
            $(this).on("mouseover",function () {
                aPanel.css("display","block");
            })
        });

        arrow1.hover(function () {
            arrowImg1.css("opacity",1)},function () {
                arrowImg1.css("opacity",0.7)
        });
        arrow2.hover(function () {
            arrowImg2.css("opacity",1)},function () {
            arrowImg2.css("opacity",0.7)
        });

        //左右键改变图片位置
        arrow1.click(function () {
            if (oUl.position().left >= -3200){
                oUl.animate({left:"-=1440"},400);
            }
            else if(oUl.position().left >= -4680) {
                oUl.animate({left:"-=280"},400);
            }
            else {
                oUl.animate({left:"-3168"});
            }

        });
        arrow2.click(function () {
            if (oUl.position().left < -488){
                oUl.animate({left:"+=1440"},400)
            }
            else if(oUl.position().left< -288) {
                oUl.animate({left:"+=280"},400)
            }
            else {
                oUl.animate({left:"-3168"});
            }
        })
    });

    //鼠标滑动图片大小改变
    $(function () {
        var aLink = $(".introduce_item_link");
        var aImgWrap = $(".introduce_item_img_wrap");
        var aImg = aImgWrap.children("img");

        $.each(aLink,function (i,d) {
            $(this).hover(function () {
                aImg.removeClass("introduce_item_img_wrap_img_hover");
                aImg.eq(i).addClass("introduce_item_img_wrap_img_hover");
            },function () {
                aImg.removeClass("introduce_item_img_wrap_img_hover");
            })
        })
    });

    //固定导航的显示与隐藏
    $(function () {
        var oButton = $(".help_button");
        var oPanel = $(".help_panel");
        var oPanelUl = oPanel.children("ul");
        var oToTop = $("#J_gotoTop");
        var oClose = $(".help_close");



        oButton.hover(function () {
            oPanel.css({"opacity":1});
            oPanelUl.css("opacity",1);
            oPanel.css("visibility","visible")
        },function () {
            oPanel.hover(function () {
                oPanel.css({"opacity":1});
                oPanelUl.css("opacity",1);
            },function () {
                oPanel.css("opacity",0);
                oPanelUl.css("opacity",0);
                oPanel.css("visibility","hidden")
            });
        });

        oClose.click(function () {
            oPanel.css("opacity",0);
            oPanelUl.css("opacity",0);
        });

        //回到顶部
        $(window).scroll(function () {
            var this_scrollTop = $(this).scrollTop();
            if (this_scrollTop > 800){
                oToTop.css("display","block");
            }
            else {
                oToTop.css("display","none");
            }
        })
    })
});
