TestApp.Login = function (params) {
    function btnLogin_OnClick(e) {
        TestApp.app.UserName = loginModel.txtUserNameSettings.value();
        TestApp.app.Password = loginModel.txtPasswordSettings.value();
        var uri = TestApp.app.router.format({
            view: 'Index'
        });
        TestApp.app.navigate(uri);
    }
    var loginModel = {
        txtUserNameSettings: {
            value: ko.observable(TestApp.app.UserName)
        },
        txtPasswordSettings: {
            value: ko.observable(TestApp.app.Password),
            mode: 'password'
        },
        btnLoginSettings: {
            text: 'Login',
            clickAction: btnLogin_OnClick
        }
    };
    return loginModel;
};