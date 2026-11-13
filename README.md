🩺 Oncology Front

Современный фронтенд на Next.js и React.

🧰 Технологии
Категория Инструмент Версия
Фреймворк Next.js 16.4.3
UI React 19.3.0
Язык TypeScript 5
Стили Tailwind CSS 4
Слайдеры Swiper 14.3
Линтер ESLint + eslint-config-next 9
📋 Требования
Node.js 20 или новее
npm (или yarn / pnpm)
🚀 Быстрый старт

1. Перейдите в папку проекта

bash
cd oncology-front-next

2. Установите зависимости

bash
npm install

3. Запустите сервер разработки

bash
npm run dev

Откройте http://localhost:3000 в браузере 🎉

💡 Совет: чтобы запустить на другом порту, например 3002:

bash
npm run dev -- -p 3002
🏗️ Production-сборка
bash
npm run build
npm run start
📜 Скрипты
Команда Описание
npm run dev 🔥 Запуск сервера разработки
npm run build 📦 Сборка проекта для production
npm run start ▶️ Запуск собранного приложения
npm run lint 🔍 Проверка кода линтером ESLint
🛠️ Решение проблем
Сайт не открывается в браузере
Проверьте, что в терминале нет ошибок
Убедитесь, что выполнен npm install
Откройте именно тот порт, на котором запущен сервер
Порт уже занят

Запустите проект на другом порту:

bash
npm run dev -- -p 3001
Ошибки после обновления зависимостей

Удалите node_modules и package-lock.json, затем установите заново:

bash
rm -rf node_modules package-lock.json
npm install
