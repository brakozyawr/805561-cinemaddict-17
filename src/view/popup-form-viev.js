import {createElement} from '../render.js';

const createPopupFormTemplate = () => (
  '<form class="film-details__inner" action="" method="get"></form>'
);

export default class PopupFormView {
  getTemplate() {
    return createPopupFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
