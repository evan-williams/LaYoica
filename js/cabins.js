$(document).ready(function () {
    $(".cabins1-and-2 .photo-thumbnails img").click(event_thumbClicked_cabins12);
    $(".cabin3 .photo-thumbnails img").click(event_thumbClicked_cabin3);
    $(".cabins4-and-5 .photo-thumbnails img").click(event_thumbClicked_cabins45);
});

var event_thumbClicked_cabins12 = function (e) {
    action_thumbClicked(e, '.cabins1-and-2');
};

var event_thumbClicked_cabin3 = function (e) {
    action_thumbClicked(e, '.cabin3');
};

var event_thumbClicked_cabins45 = function (e) {
    action_thumbClicked(e, '.cabins4-and-5');
};

var action_thumbClicked = function (e, className) {
    $(className + " .photo-thumbnails img.selected").removeClass("selected");
    $(e.target).addClass("selected");
    var path = $(e.target).attr("alt");
    $(className + " .main-photo").attr("src", path);
};