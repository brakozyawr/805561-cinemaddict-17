import {render} from '../render.js';

import FilmsContainer from '../view/films-container-viev.js';
import FilmslistView from '../view/films-list-view.js';
import FilmslistContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';


export default class FilmsPresenter {
  filmsComponent = new FilmsContainer();
  filmsListComponent = new FilmslistView();
  filmsListContainerComponent = new FilmslistContainerView();
  filmsListComponentExtra = new FilmslistView();
  filmsListContainerExtraComponent = new FilmslistContainerView();


  renderMainFilmsContainer = (filmsContainer) => {
    this.filmsContainer = filmsContainer;
    render(this.filmsComponent, this.filmsContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsListContainerComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsListComponent.getElement());
  };

  renderExtraFilmsContainer = () => {
    render(this.filmsListComponentExtra, this.filmsComponent.getElement());
    render(this.filmsListContainerExtraComponent, this.filmsListComponentExtra.getElement());

    this.filmsListComponentExtra.element.classList.add('films-list--extra');// уберу в следующей домашке

    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(), this.filmsListContainerExtraComponent.getElement());
    }
  };

  init = (filmsContainer) => {
    this.renderMainFilmsContainer(filmsContainer);
    this.renderExtraFilmsContainer();
  };
}


