import {render} from './render.js';

import ProfileView from './view/profile-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import PopupView from './view/popup-view.js';
import FilmsPresenter from './presenter/films-list-presenter.js';


const haderElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const bodyElement = document.querySelector('body');
const filmsPresenter = new FilmsPresenter();

render(new ProfileView(), haderElement);
render(new FilterView(), mainElement);
render(new SortView(), mainElement);
render(new PopupView(), bodyElement);

filmsPresenter.init(mainElement);
filmsPresenter.init2();


