/*
Name: 			Style Switcher Initializer
Written by: 	Sveroo Themes - (http://www.Sveroo.net)
Version: 		2.0
*/

if (typeof localStorage !== "undefined") {
    if (localStorage.getItem('Sveroo-skin.css') !== null && !document.querySelector('html').hasAttribute('data-style-switcher-options')) {

        const css = localStorage.getItem('Sveroo-skin.css'),
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);

    }

    if (localStorage.getItem('Sveroo-layout') !== null && !document.querySelector('html').hasAttribute('data-style-switcher-options')) {

        if (localStorage.getItem('Sveroo-layout') == 'boxed') {
            document.querySelector('html').className += ' ' + 'boxed';
        }

    }
}