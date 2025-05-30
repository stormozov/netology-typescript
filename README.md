# Домашнее задание к лекции «TypeScript»

**Важно**: все задачи допустимо выполнять в одном GitHub репозитории.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: вы можете использовать преднастроенный [шаблон](https://github.com/netology-code/ajs-homeworks/blob/master/ts-template).


В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## Новые типы

### Описание

На лекции мы написали классы для книг и аудио-альбомов. Но этого недостаточно, т.к. владельцы портала решили добавить возможность поддержки продажи фильмов.

Реализуйте класс `Movie`, который позволяет отобразить информацию, указанную на скриншоте (скриншот с сайта КиноПоиск):

![](pics/avengers.png)

Удостоверьтесь, что добавление объектов вашего класса в корзину работает.

---

## Сумма покупки

### Описание

На лекции мы написали класс `Cart`, который хранит добавленные объекты и может выдавать их список.

Реализуйте в нём несколько дополнительных функций:
1. Функцию, считающую суммарную стоимость (без учёта скидки)
1. Функцию, считающую суммарную стоимость (с учётом скидки) - скидка должна быть параметром, передаваемым в эту функцию
1. Функцию, позволяющую удалять уже добавленный в корзину объект по полю `id`

Для функций обязательно:
1. Указание типов параметров
1. Указание типа возвращаемого значения (если функция ничего не возвращает, то должен быть указан тип `void`)

Напишите авто-тесты на функции - удостоверьтесь, что покрытие по строкам для тестируемых функций равно 100%.

---

## Список покупок (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Описание

Портал решил продавать не только электронные товары (такие как книги, музыка и фильмы), но и вполне себе технические гаджеты вроде смартфонов и ноутбуков.

И вот тут-то возникло следующее требование: есть товары, которые сколько бы раз вы их не добавляли в корзину, всегда там будут в единственном экземпляре (например, фильм или электронная книга), а вот смартфонов можно добавить несколько раз (соответственно, и стоимость будет как за несколько штук).

Реализуйте в своём приложении данную функциональность. Покройте необходимые функции авто-тестами.

Кроме того, не забудьте, что для таких товаров, которых может быть много, есть функция уменьшения их количества в корзине (т.е. было в корзине 4 айфона, нажали на значок `-` и стало 3).