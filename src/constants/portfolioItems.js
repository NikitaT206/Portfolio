import russianTravelImage from '../images/portfolio/1.png'
import mestoImage from '../images/portfolio/2.png'
import howToLearn from '../images/portfolio/howToLearn/howToLearn1.png'
import mestoReact from '../images/portfolio/mesto-react/mestoReact1.png'
import toDo from '../images/portfolio/toDo/toDo1.png'

export const portfolioItems = [
  {name: 'How to learn', link: 'https://nikitat206.github.io/HowToLearn/', image: howToLearn, description: 'Научиться учиться - небольшой одностраничный сайт рассказывающий о методах обучения. Стек: построение сетки при помощи flexbox и grid, добавление видео на сайт в iframe, анимации объектов с использованием @keyframes, файловая структура организована по БЭМ. ', id: 1 },
  {name: 'Russian Travel', link: 'https://nikitat206.github.io/russian-travel/', image: russianTravelImage, description: 'Путешествия по России - одностраничный сайт с интересными местами в России. Стек: сайт адаптирован под мобильные устройства, построение сетки с помощью grid, файловая структура организована по БЭМ.', id: 2},
  {name: 'Mesto', link: 'https://nikitat206.github.io/mesto/', image: mestoImage, description: 'Место - небольшое приложение позволяющее пользователю загружать карточки с картинками и описанием. Стек: сайт адаптивный, файловая структура организована по БЭМ, упакован с помощью Webpack, Babel.js, PostCSS, есть валидация форм, ООП, логика работы на ванильном JS, компонентный подход к JS с помощью классов, работа с Api, прием и сохранение данных пользователя на сервере. ', id: 3},
  {name: 'Mesto React', link: 'https://nikitat206.github.io/mesto-react-public/', image: mestoReact, description: 'Место React - Место переписанное на React. Добавлена регистрация и авторизация пользователей. Стек: работа с реакт хуками (UseState, UseRef, UseContext, UseEffect, useHistory), react-router. ', id: 4},
  {name: 'To Do', link: 'https://nikitat206.github.io/to-do/', image: toDo, description: 'To Do - список дел, небольшое приложение на React. Можно добавлять и удалять задачи, есть поиск и сортировка. Все задачи сохраняются в localstorage браузера.', id: 5},
]