window.TestApp = $.extend(true, window.TestApp, {
    "config": {
        "defaultLayout": "navbar",
        "navigation": [
            {
                title: "Index",
                action: "#Index",
                icon: "home"
            },
            {
                title: "Login",
                action: "#Login",
                icon: "user"
            },
            {
                title: "About",
                action: "#About",
                icon: "info"
            }
        ]
    }
});