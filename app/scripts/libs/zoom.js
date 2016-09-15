class Zoom {
  constructor(prop) {
    this.elm = document.querySelector('.js-glass');
    this.copy = document.querySelector('.js-glass-copy');
    this.copyChild;
    this.box;
    this._init();
  }
  _init() {
    this._copy();
    this._addZoom();
  }
  _copy() {
    let glassText = this.elm.cloneNode(true);
    glassText.classList.add('js-glass-text');
    this.copy.appendChild(glassText);
    this.copyChild = glassText;
  }
  _addZoom() {
    this.box = this.elm.getBoundingClientRect();
    this.elm.addEventListener('mousemove', (e) => {
      let posX = e.clientX - this.box.left;
      let posY = e.clientY - this.box.top;
      this.copy.style.left = `${posX - 60}px`;
      this.copy.style.top = `${posY - 60}px`;
      this.copyChild.style.left = `-${posX - 60}px`;
      this.copyChild.style.top = `-${posY - 60}px`;
    }, false)
  }
}

export default Zoom
