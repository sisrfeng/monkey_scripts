// ==UserScript==
    // @name         必应搜索_双栏显示
    // @namespace    leo_180
    // @version      1.0.0
    // @description  双栏显示必应搜索结果，改自：https://greasyfork.org/zh-CN/scripts/27825-双栏显示搜索结果

    // @include     *://*.bing.com/search?*
    // @include     *://*.google.com/search?*
    // @include     *://*.google.com.hk/search?*
    // @include     *://*.baidu.com/search?*

    // @updateURL
    // @author       leo_180
// ==/UserScript==

// 缩进在js里只是为了好看
// @namespace:  类似于Java的包名，用来区分相同名称的脚本，一般写成作者名字或者网址就可以了
// @grant
    // 如果不指定
        // 油猴会默认添加几个最常用的API

    // 指定脚本运行所需权限
    // 如果脚本拥有相应的权限
        // 就可以调用油猴扩展提供的API与浏览器进行交互
    // 如果设置为none
        // 则不使用沙箱环境
        // 脚本会直接运行在网页的环境中
        // 这时候无法使用大部分油猴扩展的API

(function() {
  'use strict';
    var my_element = document.createElement('style');

    // https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
    var fontStr = ':not([class*=icon]):not([class*=fa]):not([class*=logo]):not(i):not(strong):not(button){font-family:"font-family: system-ui"!important}';
    // var fontStr = ':not([class*=icon]):not([class*=fa]):not([class*=logo]):not(i):not(strong):not(button){font-family:"Times New Roman, FangSong, Microsoft sans serif, Consolas"!important}';

  if( document.URL.indexOf('bing.com')!==-1  ) {
       my_element.innerHTML='body{overflow-y: scroll!important;background-color: #f1f2f3!important;}.b_underSearchbox{padding-left:4em!important;}#b_opalpers,#b_content{padding: 0px 0px 1em 0px!important;},#b_results>.b_msg{display: none!important;}#b_results{width: 93%!important;padding-left: 4%!important;}#b_results>.b_ans,#b_results>.b_algo{display: block!important;width: 48%!important;min-width: 560px!important;min-height: 116px!important;float: left!important;margin: .4%!important;padding: 8px 5px 3px!important;table-layout: fixed!important;border-collapse: separate!important;overflow: hidden!important;box-shadow: 0 2px 3px 0 rgba(0,0,0,.1), 0 0 0 1px rgba(0,0,0,.05);box-shadow-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,.1), 0 0 0 1px rgba(0,0,0,.05)}.b_rs{margin: 0 auto!important;}'
    }

  if( document.URL.indexOf('google.com.hk')!==-1  ) {
       my_element.innerHTML='body{overflow-y: scroll!important;background-color: #f1f2f3!important;}.b_underSearchbox{padding-left:4em!important;}#b_opalpers,#b_content{padding: 0px 0px 1em 0px!important;},#b_results>.b_msg{display: none!important;}#b_results{width: 93%!important;padding-left: 4%!important;}#b_results>.b_ans,#b_results>.b_algo{display: block!important;width: 48%!important;min-width: 560px!important;min-height: 116px!important;float: left!important;margin: .4%!important;padding: 8px 5px 3px!important;table-layout: fixed!important;border-collapse: separate!important;overflow: hidden!important;box-shadow: 0 2px 3px 0 rgba(0,0,0,.1), 0 0 0 1px rgba(0,0,0,.05);box-shadow-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,.1), 0 0 0 1px rgba(0,0,0,.05)}.b_rs{margin: 0 auto!important;}'
    }



// my_element.innerHTML += fontStr
document.documentElement.appendChild(my_element);
document.getElementById("b_tween").style.padding="10px 10em 0 6em";
// The em and ex units depend on the font and may be different for each element in the document. The em is simply the font size. In an element with a 2in font, 1em thus means 2in. Expressing sizes, such as margins and paddings, in em means they are related to the font size, and if the user has a big font (e.g., on a big screen) or a small font (e.g., on a handheld device), the sizes will be in proportion. Declarations such as text-indent: 1.5em and margin: 1em are extremely common in CSS.

})();


