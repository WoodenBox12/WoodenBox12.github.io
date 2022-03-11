function word(cname, cvalue, remove1, remove2, add1, newCookie=false, valueName="theme2") {

    if (getCookie(cname) == cvalue) {

        document.body.classList.remove(remove1);
        document.body.classList.remove(remove2);
        document.body.classList.add(add1);

        if (newCookie) {

            var newCookie = "Theme=" + valueName;

            document.cookie = newCookie;

        }

        return
    }
}

function themeLoadFromCookie() {

    word("Theme", "theme1", "theme3", "theme2", "theme1")
    word("Theme", "theme2", "theme2", "theme1", "theme2")
    word("Theme", "theme3", "theme2", "theme1", "theme3")
}

function themeChange() {


    if (getCookie("Theme") == "theme1") {

        document.body.classList.remove("theme3");
        document.body.classList.remove("theme1");
        document.body.classList.add("theme2");

        document.cookie = "Theme=theme2";
        
    }

    //word("Theme", "theme1", "theme3", "theme1", "theme2", true, "theme2")

    else if (getCookie("Theme") == "theme2") {

        document.body.classList.remove("theme1");
        document.body.classList.remove("theme2");
        document.body.classList.add("theme3");

        document.cookie = "Theme=theme3";

    }

    //word("Theme", "theme2", "theme2", "theme1", "theme3", true, "theme3")

    else if (getCookie("Theme") == "theme3") {

        document.body.classList.remove("theme3");
        document.body.classList.remove("theme2");
        document.body.classList.add("theme1");


        document.cookie = "Theme=theme1";

    }

    //word("Theme", "theme3", "theme3", "theme2", "theme1", true, "theme2")

    else {

        if (document.body.classList.contains("theme1")) {

            document.body.classList.remove("theme3");
            document.body.classList.remove("theme1");
            document.body.classList.add("theme2");

            document.cookie = "Theme=theme2";
        }

        else if (document.body.classList.contains("theme2")) {

            document.body.classList.remove("theme2");
            document.body.classList.remove("theme1");
            document.body.classList.add("theme3");

            document.cookie = "Theme=theme3";
        }

        else if (document.body.classList.contains("theme3")) {

            document.body.classList.remove("theme3");
            document.body.classList.remove("theme2");
            document.body.classList.add("theme1");

            document.cookie = "Theme=theme1";
        }
    }

    /*word("Theme", "theme1", "theme3", "theme1", "theme2", true, "theme2")
    word("Theme", "theme2", "theme2", "theme1", "theme3", true, "theme3")
    word("Theme", "theme3", "theme3", "theme2", "theme1", true, "theme1")*/
}

window.onload = themeLoadFromCookie();