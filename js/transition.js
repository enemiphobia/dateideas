window.transitionToPage = function(href) {

    // changes redirect based on current domain
    if (window.location.origin.substring(0, window.location.origin.length-5) == "http://127.0.0.1") {
        href = window.location.origin + href.substring(10);
    }

    console.log(href);

    window.location.href = href;
}