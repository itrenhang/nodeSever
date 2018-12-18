/*  nb_header.js
 *  @Author: renhang
 *  @Date: 2018-10-17
 *  @Last Modified by: renhang
 *  @Last Modified time: 2018-10-17
 * 
 *  依赖JQ
 */
let css = `
    <style>
    .nb-nav,.navbar-default{
        background:#fff;
    }
    .nb-nav .dropdown-menu{
        min-width: 0;
        width: 100%;
        margin-top: -4px;
        border-color: #e95527;
        border-top: 0;
    }

    .nb-right-nav .dropdown{
        margin-right: 15px;
    }
    .nb-nav .dropdown-toggle{
        background: none!important;
        display: block;
        padding: 0 15px;
        height: 35px;
        line-height: 35px;
        margin-top: 5px;
        min-width: 96px;
    }
    .nb-nav-product .dropdown-toggle{
        min-width: 120px;
    }
    .nb-nav .dropdown-menu>li:hover a,
    .nav .open .dropdown-toggle{
        color: #e95527!important;
    }
    .nav .open>a:hover,
    .dropdown-toggle:hover{
        background: none!important;
        color: #e95527;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
    }

    .open .dropdown-toggle,
    .open a.dropdown-toggle:hover,
    .nav .open>a{
        background: #fff!important;
    }
    .open a.dropdown-toggle:hover{
        background: transparent!important;
    }
    .nav .open>a{
        border: 1px solid #e95527!important;
        -webkit-border-radius: 0!important;
        -moz-border-radius: 0!important;
        border-radius: 0!important;
    }
    .list_nav2{
        display: none!important;
    }
    .nb-nav .logo,.nb-nav .reg-log{
        padding: 10px 0;
    }
    .nb-nav .nav-item{
        padding: 10px 0;
    }
    .list_nav:hover .dropdown-toggle{
        background: transparent!important;
    }
    .nb-nav .list_nav .dropdown-menu{
        border-color: transparent;
        border-radius: 10px;
        top: 68px;
        left: -290px;
        width: 950px;
        box-shadow: 0px 2px 6px rgba(0,0,0,0.35);
        
        
    }
    .nb-nav .list_nav .dropdown-menu::after{
        content: '';
        position: absolute;
        top: -6px;
        left: 354px;
        width: 16px;
        height: 16px;
        background: #fff;
        transform: rotate(45deg);
        box-shadow: -3px -3px 9px -3px rgba(0,0,0,0.35);
    }
    .nb-nav .list_nav .dropdown-menu .nav_menu{
        display: flex;
        padding:2px 20px 20px 30px;
        
    }
    .nb-nav .list_nav .dropdown-menu .nav_menu li{
        width: 170px;
        margin-right: 10px;
        
    }
    .nb-nav .list_nav .dropdown-menu .nav_menu li h3{
        font-size: 18px;
        line-height: 44px;
        border-bottom: 1px solid #D7D7D7;
        color: #000;
        margin-bottom: 8px;
    }
    .nb-nav .list_nav .dropdown-menu .nav_menu li ul{
        line-height: 30px;
        
    }
    .nb-nav .list_nav .dropdown-menu .nav_menu li ul li:hover a{
        color: #e95527;
    }
    .nb-nav .list_nav.open a{
        border: none!important;
    }
    .open .dropdown-toggle,
    .open a.dropdown-toggle:hover,

    .navbar-collapse.in{
        overflow: hidden;
    }
    @media (max-width: 767px) {
        .list_nav2{
            display: block!important;
        }
        .list_nav1{
            display: none!important;
        }
    }
    .nav-pills>li+li{
        margin:0;
    }
    a{
        color:#000;
    }
    .login:hover{
        border:none;
    }
    .nb-index{
        display:inline-block;
    }
    </style> 
`;
$('head').append(css);;
(function ($) {
    $.fn.nbHeader = function (options) {
        //将调用时候传过来的参数和default参数合并
        options = $.extend({}, $.fn.nbHeader.defaults, options || {});
        let target = $(this);
        // 清除target 内容
        target.empty();
        // 创建容器
        var option = $('<div class="nb-header"></div>');
        target.append(option);
        let dom = `
            <header class="container-fluid nb-nav" style="z-index: 16">
                <nav class="container navbar-default">
                    <div class="row no-margin-right">
                        <div class="col-sm-2 logo">
                            <a href="/"><img class="nb-index" src="/static/img/logo.png" ></a>
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="col-sm-10 no-padding-right">
                            <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav nav-pills navbar-right">
                                    <li class="nav-item"><a href="/">首页</a></li>

                                    <li class="nav-item dropdown hover-dropdown list_nav list_nav1">
                                        <a class="dropdown-toggle" href="javascript:;" style="line-height: normal; padding-left: 25px; padding-right: 25px;">&nbsp;&nbsp;全部产品<span class="caret"></span>&nbsp;&nbsp;</a>
                                        <div class="dropdown-menu list-unstyled" role="menu" style="padding-left:0">
                                            <ul class="nav_menu">
                                                <li>
                                                    <h3>物理</h3>
                                                    <ul>
                                                        <li><a href="{{ config('common_config.url.www_nb_url') }}/wuli.html">NB物理实验</a></li>
                                                        <li><a href="{{ config('common_config.url.www_nb_url') }}/wulijiaofu.html">NB物理精品课程</a></li>
                                                        <li><a href="{{ config('common_config.url.www_nb_url') }}/wulistudent.html">NB物理实验学生端</a></li>

                                                        <li><a href="{{ config('common_config.url.www_nb_url') }}/physics.html">NB物理教学平台</a></li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <h3>化学</h3>
                                                    <ul>
                                                        <li><a href="{{ config('common_config.url.www_nb_url') }}/huaxue.html">NB化学实验</a></li>
                                                        <li><a href="{{ config('common_config.url.www_nb_url') }}/huaxuestudent.html">NB化学实验学生端</a></li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <h3>生物</h3>
                                                    <ul>
                                                        <li><a href="{{ config('common_config.url.www_nb_url') }}/shengwu.html">NB生物实验</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <h3>小学科学</h3>
                                                    <ul>
                                                        <li><a href="{{ config('common_config.url.www_nb_url') }}/xiaoke.html">NB小科实验</a></li>
                                                        <li><a href="{{ config('common_config.url.www_nb_url') }}/xiaoke_edu.html">NB小科教学</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <h3>教学资源</h3>
                                                    <ul>
                                                        <li><a href="{{ config('common_config.url.protocol').'://school.'.config('common_config.url.nb_host').'/nb' }}">NB校园资源版</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown hover-dropdown list_nav2">
                                        <a class="dropdown-toggle" href="javascript:;" style="line-height: normal; padding-left: 25px; padding-right: 25px;">&nbsp;&nbsp;全部产品<span class="caret"></span>&nbsp;&nbsp;</a>
                                        <ul class="dropdown-menu list-unstyled" role="menu" style="padding-left:0">
                                            <li><a href="{{ config('common_config.url.www_nb_url') }}/wuli.html">NB物理实验</a></li>
                                            <li><a href="{{ config('common_config.url.www_nb_url') }}/wulijiaofu.html">NB物理精品课程</a></li>
                                            <li><a href="{{ config('common_config.url.www_nb_url') }}/huaxue.html">NB化学实验</a></li>
                                            <li><a href="{{ config('common_config.url.www_nb_url') }}/shengwu.html">NB生物实验</a></li>
                                            <li><a href="{{ config('common_config.url.www_nb_url') }}/xiaoke.html">NB小科实验</a></li>
                                            <li><a href="{{ config('common_config.url.www_nb_url') }}/xiaoke_edu.html">NB小科教学</a></li>
                                            <li><a href="{{ config('common_config.url.www_nb_url') }}/wulistudent.html">NB物理实验学生端</a></li>
                                            <li><a href="{{ config('common_config.url.www_nb_url') }}/huaxuestudent.html">NB化学实验学生端</a></li>


                                            <li><a href="{{ config('common_config.url.www_nb_url') }}/physics.html">NB物理教学平台</a></li>

                                            <li><a href="{{ config('common_config.url.protocol').'://school.'.config('common_config.url.nb_host').'/nb' }}">NB校园资源版</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a href="https://event.nobook.com/">活动</a></li>
                                    <li class="nav-item"><a href="/fangan">解决方案</a></li>
                                    <li class="nav-item"><a href="/anli">案例</a></li>
                                    <li class="nav-item"><a href="http://forum.nobook.com.cn" target="_blank">社区</a></li>
                                    <li class="nav-item"><a href="/news">媒体报道</a></li>
                                    <li class="nav-item"><a href="/about">关于我们</a></li>
                                    <li class="reg-log">
                                        <div class="" id="no-login">
                                            <a id="nb_loginbtn" class="btn btn-primary register" href="{{ route('login') }}">登录</a>
                                            <a class="btn btn-danger login" href="{{ route('reg') }}">免费注册</a>
                                        </div>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>      
        `;
        // <div class="dropdown hover-dropdown" id="is-login">
        //                                     <a class="dropdown-toggle" id="username" href="javascript:;" style="cursor: pointer; margin-top: 3px; padding-left: 25px; padding-right: 25px;"><span id="unames">{{ $userinfo->username }}</span><span class="caret"></span></a>
        //                                     <ul class="clearfix list-unstyled dropdown-menu">
        //                                         <li><a href="{{ route('account') }}">个人中心</a></li>
        //                                         <li><a href="{{ route('logout') }}" id="login-out">退出</a></li>
        //                                     </ul>
        //                                 </div>
        $(option).append(dom);
        var hoverDropdown = $('.hover-dropdown');
        hoverDropdown.on('mouseenter', function() {
            $(this).find('.dropdown-menu').show();
            $(this).addClass('open');
        });
        hoverDropdown.on('mouseleave', function() {
            $(this).find('.dropdown-menu').hide();
            $(this).removeClass('open');
        });
    }

    $.fn.nbHeader.defaults = {
        newCurrentPage: 1,
        total: 30,
        pageSize: 10,
    };
})($)