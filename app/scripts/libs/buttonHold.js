// **
// Setting

document.querySelectorAll('.button').forEach((elm) => {
  elm.addEventListener('click', e => e.preventDefault(), false);
});

// **
// With mouseevent: Too long...

class Button {
  constructor(elm) {
    this.isHold = false;
    this.isActive = false;
    this.button = document.querySelector(elm);
    this.timeCount = 0;
  }
  init() {
    this._hold();
  }
  _setHoldState() {
    this.isHold = this.isHold ? false : true;
  }
  _mouseDown() {
    this.button.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this._setHoldState();
      this._count();
    }, false);
  }
  _mouseUp() {
    this.button.addEventListener('mouseup', (e) => {
      e.preventDefault();
      this._setHoldState();
      this._activateControle();
    }, false);
  }
  _hold() {
    this._mouseDown();
    this._mouseUp();
  }
  _counter() {
    this.timeCount++;
  }
  _count() {
    this.timeCount = 0;
    if (this.isHold) {
      const interval = window.setInterval(() => {
        if(!this.isHold) {
          window.clearInterval(interval);
        } else if (this.timeCount === 15) {
          this.isActive = true;
          this._activateControle();
          window.clearInterval(interval);
        }
        this._counter();
      } ,50)
    }
  }
  _activateControle() {
    if (this.isHold) {
      this.button.dataset.state = 'hold';
    } else {
      this.button.dataset.state = '';
    }
  }
}
new Button('.button--mouseevent').init();

// **
// With animation event:

addListenHold = (elm) => {
  const self = document.querySelector(elm);

  self.addEventListener('animationend', (e) => {
    e.target.dataset.state = 'hold';
    e.target.style.backgroundColor = 'hsl(0, 78%, 60%)';

  }, false);

  self.addEventListener('mouseup', (e) => {
    if (e.target.dataset.state === 'hold') {
      e.target.dataset.state = '';
    }
  });
}

addListenHold('.button--anim');
addListenHold('.button--anim--style');
