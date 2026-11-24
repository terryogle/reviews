# Verified Reviews Widget — HealthyLine Outlet

Виджет отзывов: один JS-файл, Shadow DOM (не конфликтует со стилями темы), без плагинов и подписок.
Отзывы — в `data/reviews.json` (55 записей).

## Что в архиве

```
widget.js                 ← основной виджет (читает data/reviews.json рядом с собой)
widget-standalone.js      ← то же самое, но отзывы вшиты ВНУТРЬ файла (один файл, без папки data)
data/reviews.json         ← сами отзывы
index.html                ← демо-страница со всеми тремя режимами
.nojekyll                 ← чтобы GitHub Pages не трогал файлы через Jekyll
.github/workflows/deploy.yml ← автодеплой на GitHub Pages
```

## Установка (3 шага)

### 1. Загрузить файлы в репозиторий

Распаковать архив и перетащить **содержимое** (не саму папку) в репозиторий через
**Add file → Upload files → Commit changes**. Папку `.github` и файл `.nojekyll` тоже нужно
загрузить — если браузер их не показывает, включи отображение скрытых файлов.

### 2. Включить GitHub Pages

**Settings → Pages → Build and deployment → Source: `GitHub Actions`** (не «Deploy from a branch»).

После этого заработает и деплой, и адрес:
- демо: `https://terryogle.github.io/reviews/`
- скрипт: `https://terryogle.github.io/reviews/widget.js`

### 3. Вставить на сайт (Elementor → виджет «HTML»)

```html
<div class="hlo-ebay-reviews" data-layout="carousel" data-limit="12"></div>
<script src="https://terryogle.github.io/reviews/widget.js" defer></script>
```

Совсем без контейнера (режим по умолчанию — carousel):

```html
<script src="https://terryogle.github.io/reviews/widget.js" defer></script>
```

## Пока Pages не включён — можно через jsDelivr

```html
<script src="https://cdn.jsdelivr.net/gh/terryogle/reviews@main/widget.js?v=3" defer></script>
```

`?v=3` — обязательный «сбиватель кэша»: jsDelivr держит файл на edge до 12 часов,
а браузер посетителя — до 7 дней (`max-age=604800`). Меняй `v` после каждой правки
или сбрасывай кэш вручную: https://www.jsdelivr.com/tools/purge

## Режимы и параметры

```html
<div class="hlo-ebay-reviews"
     data-layout="carousel"   <!-- carousel | showcase | badge -->
     data-limit="12"          <!-- сколько отзывов выводить -->
     data-theme="tinted"      <!-- tinted | light -->
     data-autoplay="true"     <!-- автопрокрутка карусели -->
     data-product="auto"      <!-- приоритет отзывов по модели (страница товара) -->
     data-seo="true"          <!-- Schema.org AggregateRating в <head> -->
     data-src="...json"></div><!-- свой файл отзывов -->
```

Те же параметры можно передать в URL скрипта: `widget.js?layout=badge&theme=light&autoplay=false`.

## Вариант «один файл» — widget-standalone.js

Если не хочется держать рядом `data/`, используй `widget-standalone.js`: отзывы вшиты внутрь,
никаких запросов и CORS. Минус — при обновлении отзывов нужно пересобрать файл.

```html
<script src="https://terryogle.github.io/reviews/widget-standalone.js" defer></script>
```

## Что изменено относительно исходной версии

- логотип eBay (SVG) убран полностью, вместо него нейтральный вордмарк **Reviews**;
- пилюли-фильтры (`All Stories`, `Pain Relief & Sleep`, `Like-New Condition`, `Fast Shipping`,
  `Matched to Models`) удалены из карусели;
- отображение отзывов, модальное окно, поиск по отзывам, фото покупателей — без изменений.

## Обновление отзывов

Открой `data/reviews.json` в репозитории → карандаш (Edit) → правки → Commit.
Дальше либо Pages обновится за минуту, либо жми purge на jsDelivr (см. выше).
