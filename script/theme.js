function cookieLoadSegment(cvalue, remove1, remove2, add) {

    if (getCookie("Theme") == cvalue) {

        document.body.classList.remove(remove1);
        document.body.classList.remove(remove2);
        document.body.classList.add(add);
    }
}

function themeLoadFromCookie() {

    cookieLoadSegment("theme1", "theme3", "theme2", "theme1")
    cookieLoadSegment("theme2", "theme2", "theme1", "theme2")
    cookieLoadSegment("theme3", "theme2", "theme1", "theme3")

    if (getCookie("Theme") == "") {
        document.body.classList.add("theme1");
    }
}

function themeChange() {

    if (document.body.classList.contains("theme1")) {

        document.body.classList.remove("theme1");
        document.body.classList.add("theme2");
        document.cookie = "Theme=theme2";
        return
    }
    if (document.body.classList.contains("theme2")) {

        document.body.classList.remove("theme2");
        document.body.classList.add("theme3");
        document.cookie = "Theme=theme3";
        return
    }
    if (document.body.classList.contains("theme3")) {

        document.body.classList.remove("theme3");
        document.body.classList.add("theme1");
        document.cookie = "Theme=theme1";
        return
    }
}

window.onload = themeLoadFromCookie();