import TextSelector from './libs/textSelectors';
import Puchies from './libs/puchi';
import Zoom from './libs/zoom';
import Panels from './libs/panels';

module.exports = function () {
  window.onload = function () {
    new TextSelector('.js-textSelector', '.js-change-mode', '.tags');
    new Puchies();
    new Zoom();
    new Panels();
  }
}
