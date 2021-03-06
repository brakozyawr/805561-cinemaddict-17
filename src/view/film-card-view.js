import {createElement} from '../render.js';
import {humanizeDate} from '../utils';

const createFilmCardTemplate = (filmCard) => {
  const {
    //id,
    comments,
    filmInfo: {
      title,
      totalRating,
      description,
      poster,
      genre,
      runtime,
      release:{date}
    }
  } = filmCard;

  const template = 'YYYY';
  const humanizedDate = date !== null
    ? humanizeDate(date, template)
    : '';

  //или это во вью перенести?
  const fragment = new DocumentFragment();
  genre.forEach((element) => {
    const g = `<span class="film-details__genre">${element}</span>`;
    fragment.append(g);
  });
  const genres = fragment.textContent;

  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${humanizedDate}</span>
          <span class="film-card__duration">${runtime}</span>
          <span class="film-card__genre">${genres}</span>
        </p>
        <img src="./${poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <span class="film-card__comments">${comments.length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>>`
  );
};

export default class FilmCardView {
  constructor(filmCard) {
    this.filmCard = filmCard;
  }

  getTemplate() {
    return createFilmCardTemplate(this.filmCard);
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
