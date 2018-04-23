TestApp.Login = function (params) {
    function btnLogin_OnClick(e) {
        app.UserName = loginModel.txtUserNameSettings.value();
        app.Password = loginModel.txtPasswordSettings.value();
        var uri = app.router.format({
            view: 'Index'
        });
        app.navigate(uri);
    }
    var loginModel = {
        txtUserNameSettings: {
            value: ko.observable(app.UserName)
        },
        txtPasswordSettings: {
            value: ko.observable(app.Password),
            mode: 'password'
        },
        btnLoginSettings: {
            text: 'Login',
            clickAction: btnLogin_OnClick
        }
    };
    return loginModel;
};