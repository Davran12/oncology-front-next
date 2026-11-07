Oncology Front (Next.js)

Фронтенд-часть проекта oncology-front-next, написанная на Next.js.

Технологии
Next.js 16.4.3 (App Router)
React 19.3.0
TypeScript 5
Tailwind CSS 4 (с @tailwindcss/turbopack)
Swiper 14 — слайдеры и карусели
ESLint 9 + eslint-config-next
Требования
Node.js 20 или новее
npm (или yarn / pnpm)
Установка
bash

# клонировать репозиторий или скопировать папку проекта

cd oncology-front-next

# установить зависимости

npm install
Запуск
Режим разработки
bash
npm run dev

По умолчанию сайт откроется на http://localhost:3000.

Чтобы запустить на другом порту (например, 3002):

bash
npm run dev -- -p 3002
Production-сборка
bash
npm run build
npm run start
Скрипты
Команда Описание
npm run dev Запуск сервера разработки
npm run build Сборка проекта для production
npm run start Запуск собранного production-приложения
npm run lint Проверка кода линтером ESLint
Частые проблемы
Сайт не открывается в браузере — проверьте, что в терминале нет ошибок, что npm install выполнен и что вы открываете тот же порт, на котором запущен сервер.
Порт занят — запустите на другом порту: npm run dev -- -p 3001.
Ошибки после обновления зависимостей — удалите node_modules и package-lock.json, затем снова выполните npm install.
