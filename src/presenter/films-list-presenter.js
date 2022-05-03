import {render} from '../render.js';

import FilmsContainer from '../view/films-container-viev.js';
import FilmslistView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';


export default class FilmsPresenter {
  filmsComponent = new FilmsContainer();
  filmsListComponent = new FilmslistView();
  filmsListComponentExtra = new FilmslistView();

  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;
    render(this.filmsComponent, this.filmsContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());

    const filmsListContainer = this.filmsListComponent.element.querySelector('.films-list__container');
    for (let i = 0; i < 5; i++) {
      //render(new FilmCardView(), this.filmsListComponent.getElement());
      render(new FilmCardView(), filmsListContainer);
    }

    render(new ShowMoreButtonView(), this.filmsListComponent.getElement());
  };

  init2 = () => {
    render(this.filmsListComponentExtra, this.filmsComponent.getElement());
    this.filmsListComponentExtra.element.classList.add('films-list--extra');
    const filmsListExtraContainer = this.filmsListComponentExtra.element.querySelector('.films-list__container');
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(), filmsListExtraContainer);
    }
  };
}


