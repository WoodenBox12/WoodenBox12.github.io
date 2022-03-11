function cookieLoadSegment(cname, cvalue, remove1, remove2, add1, cookieChange=false) {

    if (getCookie(cname) == cvalue) {

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

    cookieLoadSegment("Theme", "theme1", "theme3", "theme2", "theme1")
    cookieLoadSegment("Theme", "theme2", "theme2", "theme1", "theme2")
    cookieLoadSegment("Theme", "theme3", "theme2", "theme1", "theme3")
}

/*function themeChange() {


    if (getCookie("Theme") == "theme1") {

        document.body.classList.remove("theme3");
        document.body.classList.remove("theme1");
        document.body.classList.add("theme2");

        document.cookie = "Theme=theme2";

        return
        
    }

    //cookieLoadSegment("Theme", "theme1", "theme3", "theme1", "theme2", true)

    if (getCookie("Theme") == "theme2") {

        document.body.classList.remove("theme1");
        document.body.classList.remove("theme2");
        document.body.classList.add("theme3");

        document.cookie = "Theme=theme3";

        return
    }

    //cookieLoadSegment("Theme", "theme2", "theme1", "theme2", "theme3", true)

    if (getCookie("Theme") == "theme3") {

        document.body.classList.remove("theme3");
        document.body.classList.remove("theme2");
        document.body.classList.add("theme1");


        document.cookie = "Theme=theme1";

        return
    }

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
}*/

function themeChange() {

    //cookieLoadSegment("Theme", "theme1", "theme3", "theme1", "theme2", true);

    //cookieLoadSegment("Theme", "theme2", "theme1", "theme2", "theme3", true);

    //cookieLoadSegment("Theme", "theme3", "theme3", "theme2", "theme1", true);


}

window.onload = themeLoadFromCookie();