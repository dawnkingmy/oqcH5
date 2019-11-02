//计算后样式兼容
var $style = function(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currsentStyle[attr] || 0;
}

//页面卷曲兼容
var $scroll = function() {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var left = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    return { top, left }
}