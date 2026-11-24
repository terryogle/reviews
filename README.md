# eBay Reviews Widget — HealthyLine Outlet

Виджет отзывов eBay для встраивания на сайт.

## 📦 Что внутри

- `widget.js` — виджет (1 файл)
- `data/reviews.json` — 180 отзывов
- `index.html` — демо страница

## 🚀 Как использовать

### 1. Вставь на сайт:

```html
<div class="hlo-ebay-reviews" 
     data-layout="carousel" 
     data-src="https://YOUR_USERNAME.github.io/ebay-reviews-clean/data/reviews.json">
</div>

<script src="https://YOUR_USERNAME.github.io/ebay-reviews-clean/widget.js" defer></script>
```

Замени `YOUR_USERNAME` на своё имя пользователя GitHub.

### 2. Включи GitHub Pages:
- Settings → Pages → Source: main branch → Save

## ✏️ Как обновлять отзывы

1. Открой `data/reviews.json` в репозитории
2. Нажми карандаш (Edit)
3. Добавь/измени отзывы
4. Commit changes
5. Сайт обновится через 1-2 минуты
