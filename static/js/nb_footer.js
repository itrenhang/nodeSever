/*  nb_footer.js
 *  @Author: renhang
 *  @Date: 2018-10-17
 *  @Last Modified by: renhang
 *  @Last Modified time: 2018-10-17
 * 
 *  依赖JQ
 */


;
(function ($) {
    let css = `
    <style>
        .footer {
            width: 100%;
            background: #EEF0F4;
            padding-bottom: 20px;
        }
        .footer-c {
            max-width: 1176px;
            min-height: 60px;
            margin: 0 auto;
            display: flex;
        }
        .foorer_t {
            padding-top: 60px;
            width: 100%;
            display: flex;
            color: #fff;
            justify-content: space-between;
            padding-bottom:20px;
            border-bottom:1px solid #DAE0E8;
        }
        .foorer_t h5 {
            margin-bottom: 20px;
            color:#4A4A4A;
        }
        .foorer_t1 {
            padding: 60px 10px 0;
            width: 100%;
            color: #fff;
        }
        .foorer_t ul,
        .foorer_t1 ul {
            font-size: 14px;
            color: #666666;
        }
        .foorer_t ul a,
        .foorer_t1 ul a {
            font-size: 14px;
            color: #787776;
            text-decoration: none;
        }
        .foorer_t ul li,
        .foorer_t1 ul li {
            line-height: 30px;
        }
        .footer-b {
            margin-top: 20px;
            padding-top: 10px;
            width: 100%;
        }
        .footer-b h6 {
            max-width: 1176px;
            margin: 0 auto;
            text-align: center;
            color: #7A7C7E;
        }

        .footer-phone {
            display: inline-block;
            padding: 10px 20px;
            background: #3d3d3d;
            color: #d7d7d7;
            text-align: center;
        }
        .footerPhone .footerPhone-content .footerPhone_list{
            display: block;
            
        }
        .footerPhone .footerPhone-content .footerPhone_list .list_text2{
            text-align: center;
            margin-top: 20px;
        }
        .footerPhone .footerPhone-content .footerPhone_list .list_text2 .code{
            margin: 0 auto;
        }
        .footerPhone .footerPhone-content .footerPhone_list .list_text3{
            margin-bottom: 50px;
            
        }
        .footerPhone .footerPhone-content .footerPhone_list .list_text3 a{
            display: block;
            margin:35px 0 15px;
        }
        .footerPhone .footerPhone-content .footerPhone_list .list_text3 a:hover{
            color:#000;
        }
        .footerPhone .footerPhone-content .footerPhone_list .p2{
            color: #A1948D;
            margin-top: 20px;
            font-size: 16px;
        }
        .footerPhone .footerPhone-content .footerPhone_list .a1{
            background:#9B9B9B;
            box-shadow:0px 8px 0px 0px rgba(206,208,222,0.42);
            border-radius:10px;
            display: flex;
            height: 50px;
            align-items: center;
            width: 61vw;
            margin: auto;
        }
        .footerPhone .footerPhone-content .footerPhone_list .a1 img{
            width: 20px;
            height: 20px;
            margin:0 10px;
        }
        .footerPhone .footerPhone-content .footerPhone_list .a1 p{
            flex: 1;
            height: 50px;
            line-height: 50px;
            background: #F0F2F8;
            border-radius:0 10px 10px 0;
            color: #9B9B9B;
        }
        .footerPhone{
            display: none;
        }
        @media screen and (max-width: 768px) {
            .foorer_t {
                display: none !important;
            }
            .footerPhone{
                display: block;
            }
            .phoneFooter{
                font-size:15px;
                line-height:55px;
                height: 55px;
                text-align: center;
                background: #F0F2F8;
                color: #C5C5C5;
            }
            .footer{
                display: none;
            }
        }

        @media screen and (min-width: 768px) {
            .foorer_t1 {
                display: none !important;
            }
        }
        .phoneExamApp .phoneBody-diy{
            width: calc(100% - 40px);
            background:rgba(255,255,255,1);
            box-shadow:0px 20px 40px 0px rgba(182,198,225,0.3);
            border-radius:10px;
            margin: 15px 20px;
            padding: 30px 15px;
        }
        .phoneExamApp .phone-list-div2{
            position: relative;
            
        }
        .phoneExamApp .phone-list-div2 img{
            position: absolute;
            top: 25px;
            margin-top: 0 !important;
        }
        .phoneExamApp .phone-list-div{
            padding:25px 0;
            border-bottom: 1px solid #eaedf1;
            
        }
        .phoneExamApp .phone-list-div .textDiv{
            width: 68%;
        }
        .phoneExamApp .phone-list-div div{
            display: inline-block;
            vertical-align:middle;
            width: 30%;
            
        }
        .phoneExamApp .phone-list-div div h2{
            letter-spacing:2px;
            font-size: 2rem;
            margin-bottom: 10px;
        }
        .phoneExamApp .phone-list-div div span{
            font-size: 14px;
            color: #A1948D;
        }
        .phoneExamApp .phone-list-div img{
            width: 64px;
            vertical-align:middle;
            margin:-15px 0 0 0;
        }

        .phoneExamApp .phoneBtnBottom{
            background: #fff;
            border-color: #fff;
            border-radius: 30px;
            font-size: 1.8rem;
            color: #FF7530;
            cursor: pointer;
            width: 63%;
            margin:15px auto 0;
            padding:14px 0;
            position: absolute;
            bottom: 20px;
            left: 18.5%;
            text-align: center;
        }
        .phoneExamApp .phoneBanner{
            text-align: center;
            position: relative;
            
        }

        .phoneExamApp .phoneBanner .bannerDiv{
            position: relative;
            width: 100%;
            padding: calc(10% + 57px) 10% 10%;
        }
        .phoneExamApp .phoneBanner .phoneBtn{
            background: #ffdf3a;
            border-color: #ffdf3a;
            border-radius: 30px;
            font-size: 1.8rem;
            color: #4a4a4a;
            cursor: pointer;
            width: 63%;
            margin:15px auto 0;
            padding:14px 0;
            letter-spacing:5px;
        }
    </style> 
`;
    $('head').append(css);
    $.fn.nbFooter = function (options) {
        //将调用时候传过来的参数和default参数合并
        options = $.extend({}, $.fn.nbFooter.defaults, options || {});
        let target = $(this);
        // 清除target 内容
        target.empty();
        // 创建容器
        var option = $('<div class="nb_footer"></div>');
        target.append(option);
        let dom = `
            <footer>
                <div class="footerPhone">
                    <div class="footerPhone-content">
                        <div class="footerPhone_list">
                            <div class="list_text list_text2">
                                <a class="a1" style="background: #ff7025;box-shadow: 0 8px 0 0 #ff6220;" href="tel:400-960-2199"><img
                                        src="/static/img/website2/Shape.png" alt="">
                                    <p class="p1" style="background: #FF8444;color:#fff;">400-960-2199</p>
                                </a>
                                <p class="p2">工作日 09:00-18:00</p>
                            </div>
                            <div class="list_text list_text2 list_text3">
                                <a href="javascript:;"><img src="/static/img/website2/weixin.png" alt=""> 学科公众号</a>
                                <img class="code" src="/static/img/website2/Bitmap@3x2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="phoneFooter">
                        ©2011-2018 北京乐步教育有限公司
                    </div>
                </div>
                <div class="footer">
                    <div class="footer-c">
                        <div class="foorer_t">
                            <!--  -->
                            <div>
                                <h5>产品中心</h5>
                                <ul>
                                    <li>
                                        <a href="/wuli.html">NB物理实验</a>
                                    </li>
                                    <li>
                                        <a href="/huaxue.html">NB化学实验</a>
                                    </li>
                                    <li>
                                        <a href="/shengwu.html">NB生物实验</a>
                                    </li>
                                    <li>
                                        <a href="/xiaoke.html">NB小学科学实验</a>
                                    </li>
                                    <li>
                                        <a href="/physics.html">NB物理教学</a>
                                    </li>
                                    <li>
                                        <a href="/xiaoke_edu.html">NB小学科学教学</a>
                                    </li>
                                </ul>
                            </div>
                            <!--  -->
                            <div>
                                <h5>解决方案</h5>
                                <ul>
                                    <!-- <li>教师教学应用场景解决方案</li>
                                <li>区、县级平台对接整合解决方案</li>
                                <li>校园虚拟实验应用解决方案</li> -->
                                    <li>
                                        <a href="/fangan">全部解决方案</a>
                                    </li>
                                </ul>
                            </div>
                            <!--  -->
                            <!--  -->
                            <div>
                                <h5>成功案例</h5>
                                <ul>
                                    <!-- <li>企业案例</li>
                                <li>学校案例</li> -->
                                    <li>
                                        <a href="/anli">全部案例</a>
                                    </li>
                                    <li>
                                        <a href="/buy">申请接入</a>
                                    </li>
                                </ul>
                            </div>
                            <!--  -->
                            <!--  -->
                            <div>
                                <h5>帮助中心</h5>
                                <ul>
                                    <li>
                                        <a href="http://help.nobook.com.cn/index.php?m=index&f=index">使用手册</a>
                                    </li>
                                    <li>
                                        <a href="http://forum.nobook.com.cn/forum.php?mod=forumdisplay&fid=169">视频中心</a>
                                    </li>
                                    <!-- <li>常见问题</li> -->
                                </ul>
                            </div>
                            <!--  -->
                            <!--  -->
                            <div>
                                <h5>关于我们</h5>
                                <ul>
                                    <li>
                                        <a href="/about">公司介绍</a>
                                    </li>
                                    <!-- <li><a href="/about">发展历程</a></li> -->
                                    <!-- <li>荣誉资质</li> -->
                                </ul>
                            </div>
                            <!--  -->
                            <!--<div style="width:1px;background:#717273"></div>-->
                            <!--  -->
                            <div style="max-width:180px;">
                                <h5>联系方式</h5>
                                <ul>
                                    <li>服务热线:400-960-2199(工作时间:9:00-18:00)</li>
                                    <li>Email:support@nobook.com.cn</li>
                                    <li>地址:北京市海淀区中关村大街18号中关村互联网教育创新中心9层942室</li>
                                    <li>乘车路线:地铁4号线中关村站C口出</li>
                                </ul>
                            </div>
                            <!--  -->
                            <!--  -->
                            <div>
                                <h5>合作咨询</h5>
                                <img style="width:120px;height:120px;" src="/static/img/website/code.jpg" alt="">
                            </div>
                            <!--  -->
                        </div>
                        <div class="foorer_t1">
                            <!--  -->
                            <div>
                                <h5>关于我们</h5>
                                <ul style="display:flex;justify-content:space-between;">
                                    <li>公司介绍</li>
                                    <li>发展历程</li>
                                    <li>荣誉资质</li>
                                </ul>
                            </div>
                            <!--  -->
                            <!--  -->
                            <div style="display:flex;justify-content:space-between">
                                <div style="max-width:180px;">
                                    <h5>联系方式</h5>
                                    <ul>
                                        <li>Email:support@nobook.com</li>
                                        <li>地址:北京市海淀区中关村大街18号中关村互联网教育创新中心9层942室</li>
                                        <li>乘车路线:地铁4号线中关村站C口出</li>
                                    </ul>
                                </div>
                                <!--  -->
                                <!--  -->
                                <div>
                                    <h5>合作咨询</h5>
                                    <img style="width:120px;height:120px;" src="/static/img/website/code.jpg" alt="">
                                </div>
                            </div>
                            <!--  -->
                            <div style="display:flex;justify-content:center;">
                                <p class="footer-phone">咨询热线:400-960-2199(工作时间:9:00-18:00)</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-b">
                        <h6>©2011-2018 北京乐步教育有限公司</h6>
                    </div>
                </div>
            </footer>
        `;
        $(option).append(dom);
    }

    $.fn.nbFooter.defaults = {
        newCurrentPage: 1,
        total: 30,
        pageSize: 10,
    };
})($)