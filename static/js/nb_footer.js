/*  nb_header.js
 *  @Author: renhang
 *  @Date: 2018-10-17
 *  @Last Modified by: renhang
 *  @Last Modified time: 2018-10-17
 * 
 *  依赖JQ
 */

;
(function ($) {
    $.fn.nbFooter = function (options) {
        //将调用时候传过来的参数和default参数合并
        options = $.extend({}, $.fn.nbFooter.defaults, options || {});
        let target = $(this);
        // 清除target 内容
        target.empty();
        // 创建容器
        var option = $('<div class="nb-footer"></div>');
        target.append(option);
        let dom = `
            <footer class="container-fluid panel-footer no-border-top nb-footer">
                <div class="container">
                    <div class="row text-left footer-wrapper">
                        <ul class="col-sm-3 list-unstyled nav nav-stacked footer-menu">
                            <li class="list-title"><span>产品中心</span></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/wuli.html">NB物理实验</a></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/huaxue.html">NB化学实验</a></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/shengwu.html">NB生物实验</a></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/xiaoke.html">NB小科实验</a></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/xiaoke_edu.html">NB小科教学</a></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/wulistudent.html">NB物理实验学生端</a></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/huaxuestudent.html">NB化学实验学生端</a></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/nb_huaxue_fenzi.html">NB化学分子模型</a></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/optics-3d.html">NB 3D光学</a></li>
                            <li><a href="{{ config('common_config.url.www_nb_url') }}/physics.html">NB物理教学平台</a></li>
                            <li><a href="{{ config('common_config.url.protocol').'://exam-inc.'.config('common_config.url.nb_host') }}">NB物理实验加试</a></li>
                            <li><a href="{{ config('common_config.url.protocol').'://school.'.config('common_config.url.nb_host').'/nb' }}">NB校园资源版</a></li>
                        </ul>
                        <ul class="col-sm-3 list-unstyled nav nav-stacked footer-menu">
                            <li class="list-title"><span>解决方案</span></li>
                            <li><a href="/fangan">整体解决方案</a></li>
                        
                        </ul>
                        <ul class="col-sm-3 list-unstyled nav nav-stacked footer-menu">
                            <li class="list-title"><span>联系方式</span></li>
                            <li>服务时间:</li>
                            <li>400-960-2199（工作: 9:00-18:00）</li>
                            <li>Email</li>
                            <li>support@nobook.com.cn</li>
                        </ul>
                        <ul class="col-sm-3 list-unstyled nav nav-stacked footer-menu">
                            <li class="list-title"><span>合作咨询</span></li>
                            <li><img width="120" height="120" src="/static/img/website/code.jpg"></li>
                        </ul>
                    </div>
                </div>
                <div style="font-size: 12px;color: #999;width: 100%;text-align:center">
                    © 2011-2018 nobook.com , All Rights Reserved  京ICP备09046562号-4
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