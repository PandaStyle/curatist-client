window.doorbellOptions = {
    hideButton: true,
    container: document.getElementById('feedback-container'),
    appKey: 'QnzkAeEgdFD1Ic0zOk2X1PlRB6FapNxTUFvsfLaZijH7DjiQL2cN31BRVlGNj5tC'
};
(function(d, t) {
    var g = d.createElement(t);g.id = 'doorbellScript';g.type = 'text/javascript';g.async = true;g.src = 'https://embed.doorbell.io/button/2825?t='+(new Date().getTime());(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g);
}(document, 'script'));
