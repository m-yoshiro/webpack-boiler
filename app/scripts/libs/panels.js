class Panels {
  constructor() {
    this.panels = document.querySelectorAll('.js-panel');
    this._init();
    this.categories = ['banana', 'apple', 'susi'];
  }
  _init() {
    this._setting();
  }
  _remove() {
    Array.from(this.panels).map(elm => elm.classList.remove('js-active'));
  }
  _filter(category) {
    let filterPanels = Array.from(this.panels).filter( panel => panel.dataset.category === category);
    filterPanels.map(elm => elm.classList.toggle('js-active'));
  }
  _setting() {
    let panels = Array.from(this.panels);
    panels.map((panel) => {
      panel.addEventListener('mouseover', e => {
        const category = e.target.dataset.category;
        this._filter(category);
      }, false);
      panel.addEventListener('mouseout', e => this._remove(), false)
      panel.addEventListener('click', e => {
        this._remove();
        let category = e.target.dataset.category;
        const pos = this.categories.indexOf(category);
        console.log(pos);
        let nextPos = function() {
          if(pos < this.categories.length - 1) {
            return pos + 1;
          } else {
            return 0;
          }
        }.bind(this);
        e.target.dataset.category = e.target.textContent = this.categories[nextPos()];
        this._filter(this.categories[nextPos()]);
      }, false)
    }, this)
  }

}

export default Panels
