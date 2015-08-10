var selectorText = '.text';
var selectorMenu = '.menu';
var selectorFooter = '.footer';
var selectorAnalytics = '.analytics';

$(document).ready(function () {
    insertMenu();
    insertFooter();
    insertAnalytics();
});

var insertMenu = function () {
    var language = "es";
    if($('nav.menu').hasClass("english")) {
        language = "en";
    }
    
    $.get('/bits/menu_' + language + '.htm', null, function (result) {
        var $menu = $(selectorMenu);
        $menu.html(result);
        setActiveLink($menu);
    });
};

var insertFooter = function () {
    $.get('/bits/footer.htm', null, function (result) {
        var $footer = $(selectorFooter);
        $footer.html(result);
    });
};

var setActiveLink = function ($menu) {
    var page = $('body').attr('class');
    $menu.find('li.active').removeClass('active');
    $menu.find('[data-path=' + page + ']').addClass('active');
};

var insertAnalytics = function () {
    $.get('/bits/analytics.htm', null, function (result) {
        var $analytics = $(selectorAnalytics);
        $analytics.html(result);
    });
};
