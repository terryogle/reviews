# 📤 Как загрузить на GitHub (пошаговая инструкция)

## Шаг 1: Создайте репозиторий на GitHub

1. Зайдите на [github.com](https://github.com)
2. Нажмите **+** → **New repository**
3. Введите имя: `ebay-reviews-widget`
4. Выберите **Public** (публичный)
5. **НЕ** ставьте галочки "Add README", "Add .gitignore", "Choose a license"
6. Нажмите **Create repository**

## Шаг 2: Загрузите файлы

### Вариант A: Через веб-интерфейс (проще)

1. На странице репозитория нажмите **uploading an existing file**
2. Перетащите все файлы из папки `ebay-reviews-widget`:
   - `widget.js`
   - `index.html`
   - `README.md`
   - `.gitignore`
   - Папку `data` с файлом `reviews.json`
   - Папку `.github` с файлом `workflows/deploy.yml`
3. Нажмите **Commit changes**

### Вариант B: Через Git (для разработчиков)

```bash
# Перейдите в папку проекта
cd ebay-reviews-widget

# Инициализируйте Git
git init
git add .
git commit -m "Initial commit: eBay Reviews Widget"

# Подключите к вашему репозиторию (замените YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ebay-reviews-widget.git
git branch -M main
git push -u origin main
```

## Шаг 3: Включите GitHub Pages

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** (⚙️)
3. В левом меню выберите **Pages**
4. В разделе "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
5. Нажмите **Save**

## Шаг 4: Проверьте что всё работает

Через 1-2 минуты ваш виджет будет доступен по адресам:

- **Демо страница:** `https://YOUR_USERNAME.github.io/ebay-reviews-widget/`
- **Файл виджета:** `https://YOUR_USERNAME.github.io/ebay-reviews-widget/widget.js`
- **Отзывы:** `https://YOUR_USERNAME.github.io/ebay-reviews-widget/data/reviews.json`

## Шаг 5: Вставьте код на ваш сайт

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

**Замените `YOUR_USERNAME` на ваше имя пользователя GitHub!**

---

## 🔄 Как обновлять отзывы

### Самый простой способ (через веб-интерфейс):

1. Откройте файл `data/reviews.json` в вашем репозитории
2. Нажмите карандаш (Edit this file) ✏️
3. Внесите изменения
4. Нажмите **Commit changes**
5. **Готово!** Сайт обновится автоматически через 1-2 минуты

### Пример добавления нового отзыва:

Найдите массив `"reviews"` и добавьте новый объект в конец:

```json
{
  "id": "181",
  "author": "new_customer",
  "date": "2024-11-24",
  "rating": 5,
  "title": "Отличная покупка!",
  "text": "Очень доволен продуктом, быстрая доставка.",
  "verified": true
}
```

---

## ✅ Чек-лист после загрузки

- [ ] Репозиторий создан и публичный
- [ ] Все файлы загружены
- [ ] GitHub Pages включен в Settings
- [ ] Демо страница открывается: `https://YOUR_USERNAME.github.io/ebay-reviews-widget/`
- [ ] Код вставлен на ваш сайт
- [ ] Виджет отображается правильно

---

## 🆘 Проблемы?

### Виджет не загружается:
- Проверьте консоль браузера (F12) на наличие ошибок
- Убедитесь что путь к `widget.js` правильный
- Проверьте что GitHub Pages включен

### Отзывы не отображаются:
- Проверьте путь к `data/reviews.json`
- Убедитесь что JSON валидный (используйте [jsonlint.com](https://jsonlint.com))
- Проверьте что домен вашего сайта разрешен в виджете

### Изменения не применяются:
- Подождите 1-2 минуты (GitHub Pages кэширует)
- Очистите кэш браузера (Ctrl+Shift+R)
- Добавьте версию к URL: `widget.js?v=2`
