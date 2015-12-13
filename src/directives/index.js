Vue.directive('img', function(url) {
    debugger;
    console.log("DSSFDSFDSFS");
    var img = new Image();
    img.src = url;

    img.onload = function() {
        this.el.src = url;
        $(this.el)
            .css('opacity', 0)
            .animate({ opacity: 1 }, 1000)
    }.bind(this);
});
