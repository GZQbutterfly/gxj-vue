import './main/main';
import './main/main.scss';

import './main/vconsole.log';

(function (doc, win) {
    var winWidth = win.innerWidth;
    var $htmlFontSize = 100 * winWidth / 375;
    doc.documentElement.style.fontSize = $htmlFontSize + 'px';
})(document, window);
