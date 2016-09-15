class TextSelector {
  constructor(elm, changer, container) {
    this.elm = document.querySelector(elm);
    this.changer = document.querySelector(changer);
    this.container = document.querySelector(container);
    this.state = {
      selecting: false,
      data: [],
      saveText: '',
      isModeInput: true
    };
    this.events = {
      update: new Event('update')
    };
    this._init();
  }
  _init() {
   this._eventManager();
   this._selectListener();
   this._keybordListenr();
   this._updateListenr();
   this._toggleMode();
  }
  _setState(props) {
    this.state = Object.assign(this.state, props);
    this.elm.dispatchEvent(this.events.update);
  }

  _eventManager() {
    this.events = {
      update: new Event('update')
    }
  }

  _selectListener() {
    this.elm.addEventListener('click', (e) => {
      let highlight = window.getSelection();
      if(highlight.rangeCount > 0) {
        console.log(highlight);
        let text = highlight.baseNode.data;
        if (this.state.isModeInput) {
          let wrapper = document.createElement('span');
          let formInput = document.createElement('input');
          formInput.value = highlight.getRangeAt(0).startContainer.data;
          formInput.value = highlight.baseNode.data;
          formInput.type = 'text';
          formInput.name = 'context';
          wrapper.appendChild(formInput);
          highlight.getRangeAt(0).insertNode(wrapper);

          let obj = {
            text: highlight.toString().trim(),
            rect: highlight.getRangeAt(0).getBoundingClientRect()
          }
        } else {
          let tag = document.createElement('li');
          tag.textContent = text;
          this.container.appendChild(tag);
        }


      }
    }, false);
  }

  _keybordListenr() {
    window.addEventListener('keydown', (e) => {
      if (event.defaultPrevented) {
        return;
      }
      if (e.altKey && this.state.selected) {
        console.log(e.key);
      }
    }, false);
  }

  _updateListenr() {
    this.elm.addEventListener('update', (e) => {
      console.log('update');
    }, false);
  }

  _keyAction(key) {
    if (e.shiftKey && this.state.selected) {
      textContent.slice(0, start) + textContent.slice(end, textEnd);
    }
  }

  _toggleMode() {
    this.changer.addEventListener('click', (e) => {
      e.preventDefault();
      this.state.isModeInput = this.state.isModeInput ? false : true;
    }, false);
  }
}

module.exports = TextSelector
