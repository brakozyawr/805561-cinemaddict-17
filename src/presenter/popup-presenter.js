import {render} from '../render.js';

import PopupWrapperView from '../view/popup-wrapper-view.js';
import PopupFormView from '../view/popup-form-viev.js';
import PopupFilmContainerView from '../view/popup-film-container-viev.js';
import PopupCommentsContainerView from '../view/popup-comments-container-viev.js';

export default class PopupPresenter {
  PopupWrapperComponent = new  PopupWrapperView;
  PopupFormComponent = new  PopupFormView;

  renderPopup = (popupContainer, popupModel) => {
    this.popupContainer = popupContainer;
    this.popupModel = popupModel;
    this.filmContainer = this.popupModel.getDetailFilm();
    this.commentsContainer = this.popupModel.getComments();

    render(this.PopupWrapperComponent, this.popupContainer);
    render(this.PopupFormComponent, this.PopupWrapperComponent.getElement());

    render(new PopupFilmContainerView(this.filmContainer), this.PopupFormComponent.getElement());
    render(new PopupCommentsContainerView(this.filmContainer, this.commentsContainer), this.PopupFormComponent.getElement());
  };

  init = (popupContainer, popupModel) => {
    this.renderPopup(popupContainer, popupModel);
  };
}
