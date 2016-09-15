class Puchies {
  constructor(props) {
    this.puchies = document.querySelectorAll('.puchies__puchi');
    this.resetTrigger = document.querySelector('.js-reset');
    this._init();
  }
  _init() {
    this._puchiesSet();
    this._reset();
  }
  _puchiesSet() {
    this.puchies.forEach( puchi => {
      puchi.addEventListener('click', e => {
        e.target.classList.add('puchies__puchi--pressed');
      }, false)
    })
  }
  _reset() {
    this.resetTrigger.addEventListener('click', e => {
      this.puchies.forEach (puchi => {
        puchi.classList.remove('puchies__puchi--pressed');
      });
    }, false)
  }
}

export default Puchies
