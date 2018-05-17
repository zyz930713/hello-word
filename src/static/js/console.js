


//左侧列表
$(function () {

    var oSideBar = $(".side_bar");
    var oSideBarContent = $(".side_bar_content");
    var oSideBarFold = $(".side_bar_fold");
    var oSideBarFoldImg = oSideBarFold.children("img");
    var aSideBarNav = $(".side_bar_nav");
    var aSideBarTitle = $(".side_bar_title");
    var aSideBarUl = $(".side_bar_nav_items");
    var aSideBarIcon = $(".side_bar_title_icon");
    var aSideBarImg = aSideBarIcon.children("img");


    var oMain =$(".viewFramework_body");
    var oMainLeft =$(".home_section_left");
    var oMainRight =$(".home_section_right");

    var oMainLeftL =$(".home_section_left_content_l");
    var oMainLeftR =$(".home_section_left_content_r");





    aSideBarNav.each(function (i,d) {
        aSideBarUl.eq(0).css("display","block");
        aSideBarTitle.eq(0).attr("class","side_bar_nav_active");
        $(this).on("click",function () {
            if (aSideBarTitle.eq(i).hasClass("side_bar_nav_active")){
                aSideBarUl.slideUp(100);
                aSideBarTitle.attr("class","side_bar_title");
                aSideBarTitle.eq(i).attr("class","side_bar_title");
                aSideBarUl.eq(i).slideUp(100);
            }
            else {
                aSideBarUl.slideUp(100);
                aSideBarTitle.attr("class","side_bar_title");
                aSideBarTitle.eq(i).attr("class","side_bar_nav_active");
                aSideBarUl.eq(i).slideDown(100);
            }
        })
    });
    //菜单缩放
    oSideBarFold.click(function () {
        if(oSideBar.hasClass("side_bar_mini")){
            oSideBarFoldImg.attr("src","../../static/img/hide-sidebar-icon.png");
            oSideBarFold.css({"width":180});
            oSideBar.removeClass("side_bar_mini");
            aSideBarNav.css("width",180);
            oMain.css({"position":"absolute","left":180});
            oMainLeft.css("width",1120);
            oMainRight.css({"position":"absolute","right":160})
        }
        else {
            oSideBarFoldImg.attr("src","../../static/img/show-sidebar-icon.png");
            oSideBarFold.css({"width":50});
            oSideBar.addClass("side_bar_mini");
            aSideBarNav.css("width",50);
            oMain.css({"position":"absolute","left":50});
            oMainLeft.css("width",1352);
            oMainRight.css({"position":"absolute","right":30})
        }

    })

});




