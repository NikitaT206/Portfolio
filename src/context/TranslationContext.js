import React from 'react'

export const translations = {
  ru: {
    header: {
      home: 'Домой',
      aboutMe: 'Обо мне',
      skills: 'Скиллы',
      portfolio: 'Портфолио',
      contacts: 'Контакты'
    },

    about: {
      user: {
        name: 'Никита',
        lastName: 'Туник',
        old: (new Date().getFullYear() - 1992 + ' лет, '),
        city: 'Санкт-Петербург',
        job: 'Frontend разработчик',
      }
    },

    aboutMe: {
      title: 'Обо мне',
      description1: 'Привет, я Никита - начинающий Frontend разработчик из Санкт-Петербурга. Я интересуюсь веб-разработкой и всем что с ней связано.',
      description2: 'Я обучаюсь на курсе "Веб-разработчик" в Яндекс.Практикум.',
      description3: 'Готов реализовывать отличные проекты с замечательными людьми.',
    },

    skills: {
      title: 'Скиллы'
    },

    portfolio: {
      title: 'Портфолио'
    },

    contacts: {
      title: 'Контакты',
      text1: 'Хотите узнать больше или просто написать?',
      text2: 'Добро пожаловать!',
      buttonText: 'Отправить сообщение',
      caption: 'Поставь мне лайк на GitHub, LinkedIn, Instagram, VK',
    }
    
  },

  en: {
    header: {
      home: 'Home',
      aboutMe: 'About me',
      skills: 'Skills',
      portfolio: 'Portfolio',
      contacts: 'Contacts'
    },

    about: {
      user: {
        name: 'Nikita',
        lastName: 'Tunik',
        old: (new Date().getFullYear() - 1992 + ' years old, '),
        city: 'Saint-Petersburg',
        job: 'Web-Developer Student',
      }
    },

    aboutMe: {
      title: 'About me',
      description1: 'Hi, I m Nikita – Web-Developer student from Saint-Petersburg. I m interested in Web-Developing and everything connected with it.',
      description2: 'Im studying at courses "Frontend Web-Developing" in Yandex-Practicum.',
      description3: 'Ready to implement excellent projects with wonderful people.',
    },

    skills: {
      title: 'Skills'
    },

    portfolio: {
      title: 'Portfolio'
    },

    contacts: {
      title: 'Contacts',
      text1: 'Want to know more or just chat?',
      text2: 'You are welcome!',
      buttonText: 'Send message',
      caption: 'Like me on GitHub, LinkedIn, Instagram, VK',
    }
  },
};

export const TranslationContext = React.createContext()