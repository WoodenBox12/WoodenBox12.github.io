function themeLoadFromCookie() {
    if (getCookie("Theme") == "theme1") {

        document.body.classList.remove("theme2");
        document.body.classList.add("theme1");


    }

    else if (getCookie("Theme") == "theme2") {

        document.body.classList.remove("theme1");
        document.body.classList.add("theme2");


    }

}

function themeChange() {


    if (getCookie("Theme") == "theme1") {

        document.body.classList.remove("theme1");
        document.body.classList.add("theme2");

        document.cookie = "Theme=theme2";

    }

    else if (getCookie("Theme") == "theme2") {

        document.body.classList.remove("theme2");
        document.body.classList.add("theme1");

        document.cookie = "Theme=theme1";

    }

    else {

        if (document.body.classList.contains("theme1")) {

            document.body.classList.remove("theme1");
            document.body.classList.add("theme2");

            document.cookie = "Theme=theme2";
        }

        else if (document.body.classList.contains("theme2")) {

            document.body.classList.remove("theme2");
            document.body.classList.add("theme1");

            document.cookie = "Theme=theme1";
        }
    }
}

window.onload = themeLoadFromCookie();