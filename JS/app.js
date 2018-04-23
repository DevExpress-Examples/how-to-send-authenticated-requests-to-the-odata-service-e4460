window.TestApp = window.TestApp || {};

String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

$(function () {
    app = new DevExpress.framework.html.HtmlApplication({
        ns: TestApp,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: TestApp.config.defaultLayout,
        navigation: TestApp.config.navigation
    });
    app.UserName = '';
    app.Password = '';
    app.router.register(":view/:id", { view: "Login", id: undefined });
    app.navigate();
});
