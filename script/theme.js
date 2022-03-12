function cookieLoadSegment(cvalue, remove1, remove2, add) {

    if (getCookie("Theme") == cvalue) {

        document.body.classList.remove(remove1);
        document.body.classList.remove(remove2);
        document.body.classList.add(add);
    }
}

function classLoadSegment(cvalue, remove1, remove2, add1, cookieChange = false) {

    if (document.body.classList.contains(cvalue)) {

        document.body.classList.remove(remove1);
        document.body.classList.remove(remove2);
        document.body.classList.add(add1);

        if (cookieChange) {

            var workkk = "Theme=" + add1;

            document.cookie = workkk;

        }

        return
    }
}

function themeLoadFromCookie() {

    cookieLoadSegment("theme1", "theme3", "theme2", "theme1")
    cookieLoadSegment("theme2", "theme2", "theme1", "theme2")
    cookieLoadSegment("theme3", "theme2", "theme1", "theme3")
}

function themeChange() {

    if (getCookie("Theme") == "theme1") {

        document.body.classList.remove("theme1");
        document.body.classList.add("theme2");
        document.cookie = "Theme=theme2";
        return
        
    }
    if (getCookie("Theme") == "theme2") {

        document.body.classList.remove("theme2");
        document.body.classList.add("theme3");
        document.cookie = "Theme=theme3";
        return
    }

    if (getCookie("Theme") == "theme3") {

        document.body.classList.remove("theme3");
        document.body.classList.add("theme1");
        document.cookie = "Theme=theme1";
        return
    }

    else {

        if (document.body.classList.contains("theme1")) {

            document.body.classList.remove("theme1");
            document.body.classList.add("theme2");
            document.cookie = "Theme=theme2";
        }
        else if (document.body.classList.contains("theme2")) {

            document.body.classList.remove("theme2");
            document.body.classList.add("theme3");
            document.cookie = "Theme=theme3";
        }
        else if (document.body.classList.contains("theme3")) {

            document.body.classList.remove("theme3");
            document.body.classList.add("theme1");
            document.cookie = "Theme=theme1";
        }
    }
}

window.onload = themeLoadFromCookie();