# Сайт-портфолио

![promo-image](https://github.com/user-attachments/assets/94a5c814-142d-43bc-b64e-5721a1e1e717)

Деплой: [https://www.ternopavel.ru/](https://www.ternopavel.ru/)

## Описание

- Данный проект представляет собой трёхстраничное онлайн портфолио.
- Реализована главная страница с краткой информацией о моем стеке и перечнем моих лучших работ.
- Реализована страница "Обо мне" с подробной информацией обо мне.
- Реализована страница "Контакты" с перечисленными способами обратной связи.
- Страница выводится уже отрендеренной с данным из API (реализован SSR).
- Форма адаптивная и визуально не отличается на современных десктопных и мобильных браузерах.
- Код соответствует стандартам ES2015+

## Особенности

1. На странице "Обо мне" реализована возможность скачать мое резюме в формате *pdf.
2. На странице "Контакты" есть возможность связаться со мной через форму обратной связи.

## Технологический стек

При разработке проекта использовались следующие технологии:

- **TypeScript и React** - для разработки;
- **Next.js** - для реализации SSR;
- **NextUI** - в качестве библиотеки компонентов;
- **TailWind** - для стилизации;
- **React Hook Form и Zod** - для реализации формы и её валидации;
- **ESLint, Prettier и Husky** - для линтинга и форматирования.

## Инструкции по запуску проекта локально

1. Установите Node.js
2. "Форкните" данный репозиторий: https://github.com/PaHaNchickT/actualCV
3. Склонируйте только что созданный репозиторий: `https://github.com/<%your_github_username%>/actualCV/`
4. Перейдите в папку `actualCV`
5. Чтобы установить все зависимости, используйте `npm install`
6. Для запуска локального сервера используйте `npm run dev`
7. Проект запущен успешно!

## Руководство по скриптам

- `npm run dev` запускает локальный сервер в режиме разработки;
- `npm run start` запускает локальный сервер в режиме продакшена;
- `npm run lint` запускает линтер для проверки файлов;
- `npm run format:fix` запускает форматирование файлов;
- `npm run prepare` запускает выполнение локальных хуков husky;
- `npm run export` экспортирует приложение в статический HTML.

