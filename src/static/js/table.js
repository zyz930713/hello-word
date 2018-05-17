


//自定义列表项
$(function () {

    var oGrid = $(".grid_section");
    var aTh = oGrid.find("th");
    var oTr = aTh.parent("tr");

    var oSure = $(".beSure");

    var oForm = $(".form-horizontal");
    var aLabel = oForm.find("label");
    var aTab = aLabel.children("span");
    var aCheck = aLabel.children("input");
    var arrTabs = ["负载均衡ID/名称","可用区","网络类型","状态","网络类型","端口/健康检查/后端服务器","标签","实例规格","网络类型","网络类型","操作"];
    var arrTh = ["","<th class=\"list_zone\">可用区</th>",
        "<th class='list_network_type'><div class=\"grid_section_dropdown\"><a class='grid_section_dropdown_toggle'><span class=\"ng_scope dropdown_title_1\">网络类型</span><span class=\"ng_binding dropdown_title_2\">(全部)</span><span class=\"caret\"></span></a><ul class=\"dropdown_menu search_console_table_list\"><li><a><span>(全部)</span></a></li><li><a><span>(专有网络)</span></a></li><li><a><span>(经典网络)</span></a></li></ul></div></th>",
        "<th class=\"list-instance-status\">状态</th>",
        "<th class='list_network_type'><div class=\"grid_section_dropdown\"><a class='grid_section_dropdown_toggle'><span class=\"ng_scope dropdown_title_1\">网络类型</span><span class=\"ng_binding dropdown_title_2\">(全部)</span><span class=\"caret\"></span></a><ul class=\"dropdown_menu search_console_table_list\"><li><a><span>(全部)</span></a></li><li><a><span>(专有网络)</span></a></li><li><a><span>(经典网络)</span></a></li></ul></div></th>",
        "","<th class=\"list-tag\">标签</th>","<th class=\"list_spec\">实例规格</th>",
        "<th class='list_network_type'><div class=\"grid_section_dropdown\"><a class='grid_section_dropdown_toggle'><span class=\"ng_scope dropdown_title_1\">网络类型</span><span class=\"ng_binding dropdown_title_2\">(全部)</span><span class=\"caret\"></span></a><ul class=\"dropdown_menu search_console_table_list\"><li><a><span>(全部)</span></a></li><li><a><span>(专有网络)</span></a></li><li><a><span>(经典网络)</span></a></li></ul></div></th>",
        "<th class='list_network_type'><div class=\"grid_section_dropdown\"><a class='grid_section_dropdown_toggle'><span class=\"ng_scope dropdown_title_1\">网络类型</span><span class=\"ng_binding dropdown_title_2\">(全部)</span><span class=\"caret\"></span></a><ul class=\"dropdown_menu search_console_table_list\"><li><a><span>(全部)</span></a></li><li><a><span>(专有网络)</span></a></li><li><a><span>(经典网络)</span></a></li></ul></div></th>",
        ""
    ];

    var num = null;


    function init() {
        aCheck.each(function (i,d) {
            if(this.checked == true){
                oTr.append(arrTh[i]);
            }
        });
        aTab.each(function (i,d) {
            aTab.eq(i).html(arrTabs[i]);
        });
    }
    init();


    aCheck.each(function (i,d) {
        $(this).click(function () {
            num = i;
        })
    });


    oSure.on("click",function () {
        if(aCheck[num].checked == true){
            alert(1);
            oTr.append(arrTh[num]);
        }
        else {
            alert(num);
            aTh.eq(4).remove();
        }

        $("#myModal").modal("hide");
    })


});






//点击显示隐藏列表菜单
$(function () {

    var aDropDown = $(".grid_section_dropdown_toggle");
    var aDropDownMenu = $(".search_console_table_list");
    var aDropTitle1 = aDropDown.children(".dropdown_title_1");
    var aDropTitle2 = aDropDown.children(".dropdown_title_2");
    var aLis = aDropDownMenu.children("li");
    var aDropDownMenuText = aLis.find("span");
    var num = 0;
    var oYes = "<span class='yes'><img src='../../static/img/table_yes_icon.png' alt=''></span>";

    function init() {
        aLis.eq(0).prepend(oYes);
        aLis.eq(3).prepend(oYes);
        aLis.eq(6).prepend(oYes);
    }
    init();

    aLis.each(function (i,d) {
        var text = aDropDownMenuText.eq(i).text();
        $(this).click(function () {
            $(" .yes").empty();
            $(this).prepend(oYes);
            aDropDownMenu.hide();
            aDropTitle1.css("color","#999");
            aDropTitle2.css("color","#999");
            if(i<3){
               num = 0;
               aDropTitle2.eq(num).html(text);
            }
            else if(i<6){
                num = 1;
                aDropTitle2.eq(num).html(text);
            }
            else {
                num = 2;
                aDropTitle2.eq(num).html(text);
            }
        })
    });


    aDropDown.each(function (i,d) {
        $(this).click(function () {
            if (aDropDownMenu.eq(i).css("display") == "none"){
                aDropDownMenu.hide();
                aDropDownMenu.eq(i).show();

                aDropTitle1.css("color","#999");
                aDropTitle2.css("color","#999");
                aDropTitle1.eq(i).css("color","#000");
                aDropTitle2.eq(i).css("color","#000");
            }
            else {
                aDropDownMenu.eq(i).hide();
                aDropTitle1.css("color","#999");
                aDropTitle2.css("color","#999");
            }
        });
    });
    $(document).click(function (event) {
        if(!aDropDown.is(event.target) && aDropDown.has(event.target).length == 0){
            aDropDownMenu.hide();
            aDropTitle1.css("color","#999");
            aDropTitle2.css("color","#999");
        }
    })
});







//左侧菜单调整宽度
$(function () {
    var oSideBar = $(".side_bar");
    var oSideBarFold = $(".side_bar_fold");
    var oMain =$(".home_section_main");

    oSideBarFold.click(function () {
        if(oSideBar.hasClass("side_bar_mini")){
            oMain.css("width",1464)
        }
        else {
            oMain.css("width",1334)
        }
    })
});



