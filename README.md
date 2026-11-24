# eBay Reviews Widget — HealthyLine Outlet

Готовый виджет отзывов eBay для встраивания на сайт healthylineoutlet.com.

## 📁 Структура проекта

```
ebay-reviews-widget/
├── widget.js          # Основной файл виджета
├── data/
│   └── reviews.json   # Все отзывы (180 шт.)
├── index.html         # Демо-страница
└── README.md          # Этот файл
```

## 🚀 Как использовать на сайте

### Вариант 1: Прямое встраивание (рекомендуется)

Добавьте этот код на любую страницу вашего сайта:

```html
<!-- Контейнер для виджета -->
<div class="hlo-ebay-reviews" 
     data-layout="carousel" 
     data-src="https://YOUR_USERNAME.github.io/ebay-reviews-widget/data/reviews.json">
</div>

<!-- Подключение виджета -->
<script src="https://YOUR_USERNAME.github.io/ebay-reviews-widget/widget.js" defer></script>
```

**Замените `YOUR_USERNAME` на ваше имя пользователя GitHub.**

### Вариант 2: Локальное размещение

Скачайте файлы `widget.js` и `data/reviews.json` и загрузите на ваш сервер:

```html
<div class="hlo-ebay-reviews" 
     data-layout="carousel" 
     data-src="/path/to/reviews.json">
</div>

<script src="/path/to/widget.js" defer></script>
```

## 📝 Как обновлять отзывы

### Способ 1: Через GitHub веб-интерфейс (проще всего)

1. Откройте файл `data/reviews.json` в вашем репозитории
2. Нажмите карандаш (Edit this file)
3. Внесите изменения
4. Нажмите "Commit changes"
5. **Готово!** Изменения автоматически появятся на сайте через 1-2 минуты

### Способ 2: Через Git (для разработчиков)

```bash
# Клонируйте репозиторий
git clone https://github.com/YOUR_USERNAME/ebay-reviews-widget.git
cd ebay-reviews-widget

# Отредактируйте reviews.json
# (добавьте новые отзывы, измените существующие)

# Закоммитьте и отправьте изменения
git add data/reviews.json
git commit -m "Обновлены отзывы"
git push
```

## 🔧 Настройки виджета

### Доступные layouts

- **carousel** (по умолчанию) — Карусель с прокруткой
- **showcase** — Сетка с поиском
- **badge** — Компактный бейдж

Пример:
```html
<div class="hlo-ebay-reviews" 
     data-layout="showcase" 
     data-src="data/reviews.json">
</div>
```

### Дополнительные параметры

```html
<div class="hlo-ebay-reviews" 
     data-layout="carousel" 
     data-src="data/reviews.json"
     data-autoplay="true"
     data-theme="tinted">
</div>
```

## 📊 Структура файла reviews.json

```json
{
  "store": {
    "feedback_score": 1305,
    "positive_percentage": 100,
    "total_seller_reviews": 1077,
    "ebay_username": "healthylineoutlet",
    "ebay_profile_url": "https://www.ebay.com/usr/healthylineoutlet"
  },
  "reviews": [
    {
      "id": "1",
      "author": "customer123",
      "date": "2024-01-15",
      "rating": 5,
      "title": "Отличный продукт!",
      "text": "Очень доволен покупкой...",
      "product": {
        "name": "TAJ Mat",
        "url": "https://www.ebay.com/itm/..."
      },
      "verified": true
    }
  ]
}
```

## 🔄 Автоматическое обновление

GitHub Pages автоматически публикует изменения через 1-2 минуты после push в main/master ветку.

### Как включить GitHub Pages:

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Pages**
3. В разделе "Source" выберите **main** branch
4. Нажмите **Save**
5. Ваш виджет будет доступен по адресу: `https://YOUR_USERNAME.github.io/ebay-reviews-widget/`

## 🛡️ Защита от несанкционированного использования

Виджет включает защиту по домену — работает только на разрешенных доменах:
- localhost (для тестирования)
- healthylineoutlet.com
- *.healthylineoutlet.com

Чтобы добавить другие домены, отредактируйте массив `allowedDomains` в файле `widget.js`.

## 📈 Статистика

- **Всего отзывов:** 180
- **Серии продуктов:** TAJ, Pillow, Platinum, Mesh, Rainbow
- **Рейтинг:** 100% Positive
- **Feedback Score:** 1,305

## 🆘 Поддержка

Если у вас возникли вопросы или проблемы:
1. Проверьте что GitHub Pages включен
2. Убедитесь что пути к файлам правильные
3. Откройте консоль браузера (F12) для просмотра ошибок

## 📄 Лицензия

Этот проект создан для HealthyLine Outlet.
