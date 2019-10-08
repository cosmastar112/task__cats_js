1. Получить список имён кошек, которые участвовали в фильмах
На вход: данные по фильмам, данные по видам, данные по представителям видов
Нв выход: список объектов, в каждом из которых отражена связь между фильмом и кошками, которые в нём участвовали
Пример выходной информации: 
{
  Имя фильма1, Список имён кошек1,
  Имя фильма2, Список имён кошек2,
  ...
}

Для этого:

------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------

1.1 Нахожу список имён кошек для каждого фильма:
На вход: список фильмов
На выход: список фильмов, где каждому фильму соответствует список кошек

Пример входной информации: 
[
  { фильм1 },
  { фильм2 },
  ...
]

Пример выходной информации: 
[
  { Имя фильма1, [Список имён кошек1] },
  { Имя фильма2, [Список имён кошек2] },
    ...
]

Для этого:

Выполняю для каждого фильма в списке
  Беру фильм, проверяю есть ли в нем кошки (1.1.5)
  Если есть, то ищу список имен кошек (1.1.1)
  Если нет, оставляю список пустым
  Добавляю в результирующий список запись о фильме и кошках (1.1.7)

1.1.1 Нахожу список имен кошек для фильма
На вход: фильм
На выход: список имён кошек

Пример входной информации: 
фильм

Пример выходной информации: 
{ имя фильма, [Список имён кошек] }

Для этого: 

Беру фильм
Нахожу URL этого фильма (1.1.6)
Беру список URL кошек, которые участвовали в фильмах (свойство "people" объекта с метаинформацией о кошках (1.1.2) ) (1.1.3)
Выполняю для каждого URL кошки в списке
  Беру URL кошки
  Нахожу в данных по представителям видов объект кошки (совпадение по свойству "url") (1.1.4)
  Беру список фильмов этой кошки
    Если в списке фильмов есть фильм, по которому производится поиск
      Запоминаю имя кошки (поле "name")
      Обновляю список имен кошек
    Если нет, то 
      Обновляю список имен кошек
      Перехожу к следующей кошке

1.1.2 Нахожу объект с метаинформацией о кошках
На вход: данные по видам
На выход: объект с метаинформацией о кошках

Для этого:
Взять данные по видам
Найти объект, у которого свойство name = "Cat"

1.1.3 Найти список URL кошек, которые участвовали в фильмах
На вход: объект с метаинформацией о кошках
На выход: список URL кошек

Для этого:
Беру объект с метаинформацией о кошках
Беру свойство "people" этого объекта

1.1.4 Нахожу объект кошки
На вход: URL кошки
На выход: объект кошки

Для этого:
Взять URL кошки
Взять данные по представителям видов
Найти среди них объект, у которого свойство URL совпадает с URL кошки

1.1.5 Проверить есть ли в фильме кошки
На вход: фильм
На выход: true - если в фильме есть кошки, false - если нет

Для этого:
Взять URL фильма (1.1.6)
Найти объект с метаинформацией о кошках (1.1.2)
Проверить свойство "films" объекта с метаинформацией о кошках на наличие в нем URL фильма
Если есть - вернуть true
Иначе - false

ВЕРСИЯ2 Для этого :
Найти объект с метаинформацией о кошках (1.1.2)
Взять URL этого вида (свойство "url" объект с метаинформацией о кошках)
Определить какие виды играли в фильме (взять свойство "species" фильма)
Проверить наличие URL вида кошек в списке видов, которые играли в фильме
Если есть - вернуть true
Иначе - false

1.1.6 Вернуть URL фильма
На вход: фильм
На выход: URL фильма

Для этого:
Вернуть свойство "url" фильма

1.1.7 Добавляю в результирующий список запись о фильме и кошках
На вход: фильм, список имён кошек
На выход: { имя фильма, [Список имён кошек] }

Для этого:
Взять фильм
Найти название фильма (1.1.8)
Создать объект, у которого есть свойство "film" - название фильма и "catNames" - имена кошек
Вернуть объект

1.1.8 Вернуть название фильма
На вход: фильм
На выход: название фильма

Для этого:
Вернуть свойство "title" фильма

------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------

ТЕСТ1:
(внутри 1.1)
Выполняю для каждого фильма в списке
  Беру фильм, проверяю есть ли в нем кошки (попадаю внутрь 1.1.5)

    фильм = 
    {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        "https://ghibliapi.herokuapp.com/people/"
      ],
      "species": [
        "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
      ],
      "locations": [
        "https://ghibliapi.herokuapp.com/locations/"
      ],
      "vehicles": [
        "https://ghibliapi.herokuapp.com/vehicles/"
      ],
      "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
    }

    Беру URL этого фильма (1.1.6)
    URL фильма = "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"

    Найхожу объект с метаинформацией о кошках (поадаю внутрь 1.1.2)

    объект с метаинформацией о кошках =
    {
      "id": "603428ba-8a86-4b0b-a9f1-65df6abef3d3",
      "name": "Cat",
      "classification": "Mammal",
      "eye_colors": "Brown, Black, Yellow, White, Emerald, Blue, Green",
      "hair_colors": "White, Black, Brown, Beige, Grey, Yellow",
      "url": "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
      "people": [
        "https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
        "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
        "https://ghibliapi.herokuapp.com/people/89026b3a-abc4-4053-ab1a-c6d2eea68faa",
        "https://ghibliapi.herokuapp.com/people/6b3facea-ea33-47b1-96ce-3fc737b119b8",
        "https://ghibliapi.herokuapp.com/people/3042818d-a8bb-4cba-8180-c19249822d57",
        "https://ghibliapi.herokuapp.com/people/58d1973f-f247-47d7-9358-e56cb0d2b5a6",
        "https://ghibliapi.herokuapp.com/people/a3d8e70f-46a0-4e5a-b850-db01620d6b92",
        "https://ghibliapi.herokuapp.com/people/fc196c4f-0201-4ed2-9add-c6403f7c4d32",
        "https://ghibliapi.herokuapp.com/people/466bc926-2024-4653-ac63-fe52f2dc8c7b"
      ],
      "films": [
        "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        "https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81",
        "https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6"
      ]
    }
    Проверить свойство "films" объекта с метаинформацией о кошках на наличие в нем URL фильма
    в "films" нет фильма, у которого URL = URL фильма
    Возвращаю false
  Оставляю список пустым

  ПЕРЕХОЖУ К СЛЕДУЮЩЕМУ ФИЛЬМУ



------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------

ТЕСТ2 (незакончен):

Беру список фильмов
Нахожу список имён кошек для каждого фильма:
Беру фильм
фильм = 
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      "https://ghibliapi.herokuapp.com/people/"
    ],
    "species": [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
    ],
    "locations": [
      "https://ghibliapi.herokuapp.com/locations/"
    ],
    "vehicles": [
      "https://ghibliapi.herokuapp.com/vehicles/"
    ],
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
  }
Нахожу URL этого фильма:
URL фильма = "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
Беру список URL кошек, которые участвовали в фильмах
Нахожу объект с метаинформацией о кошках
объект с метаинформацией о кошках =
  {
    "id": "603428ba-8a86-4b0b-a9f1-65df6abef3d3",
    "name": "Cat",
    "classification": "Mammal",
    "eye_colors": "Brown, Black, Yellow, White, Emerald, Blue, Green",
    "hair_colors": "White, Black, Brown, Beige, Grey, Yellow",
    "url": "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
    "people": [
      "https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
      "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
      "https://ghibliapi.herokuapp.com/people/89026b3a-abc4-4053-ab1a-c6d2eea68faa",
      "https://ghibliapi.herokuapp.com/people/6b3facea-ea33-47b1-96ce-3fc737b119b8",
      "https://ghibliapi.herokuapp.com/people/3042818d-a8bb-4cba-8180-c19249822d57",
      "https://ghibliapi.herokuapp.com/people/58d1973f-f247-47d7-9358-e56cb0d2b5a6",
      "https://ghibliapi.herokuapp.com/people/a3d8e70f-46a0-4e5a-b850-db01620d6b92",
      "https://ghibliapi.herokuapp.com/people/fc196c4f-0201-4ed2-9add-c6403f7c4d32",
      "https://ghibliapi.herokuapp.com/people/466bc926-2024-4653-ac63-fe52f2dc8c7b"
    ],
    "films": [
      "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
      "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
      "https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81",
      "https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6"
    ]
  }
Нахожу список URL кошек, которые участвовали в фильмах
список URL кошек = 
  [
    "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    "https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81",
    "https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6"
  ]
Выполняю для каждого URL кошки в списке
  Беру URL кошки
  URL кошки = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
  Нахожу в данных по представителям видов объект кошки
  объект кошки = 
  Проверяю список фильмов этой кошки
    Если в списке фильмов есть фильм, по которому производится поиск, запоминаю имя кошки (поле "name")
    Если нет, то кошка не участвовала фильме

------------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------

Нахожу объект, хранящий список кошек и фильмов, в которых они участвовали

объекта с метаинформацией о кошках = 
{
  "id": "603428ba-8a86-4b0b-a9f1-65df6abef3d3",
  "name": "Cat",
  "classification": "Mammal",
  "eye_colors": "Brown, Black, Yellow, White, Emerald, Blue, Green",
  "hair_colors": "White, Black, Brown, Beige, Grey, Yellow",
  "url": "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
  "people": [
    "https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
    "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
    "https://ghibliapi.herokuapp.com/people/89026b3a-abc4-4053-ab1a-c6d2eea68faa",
    "https://ghibliapi.herokuapp.com/people/6b3facea-ea33-47b1-96ce-3fc737b119b8",
    "https://ghibliapi.herokuapp.com/people/3042818d-a8bb-4cba-8180-c19249822d57",
    "https://ghibliapi.herokuapp.com/people/58d1973f-f247-47d7-9358-e56cb0d2b5a6",
    "https://ghibliapi.herokuapp.com/people/a3d8e70f-46a0-4e5a-b850-db01620d6b92",
    "https://ghibliapi.herokuapp.com/people/fc196c4f-0201-4ed2-9add-c6403f7c4d32",
    "https://ghibliapi.herokuapp.com/people/466bc926-2024-4653-ac63-fe52f2dc8c7b"
  ],
  "films": [
    "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    "https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81",
    "https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6"
  ]
}

2. Из этого объекта получаю список фильмов, в которых участвовали кошки (свойство "films")

список идентификаторов (ИД) фильмов с кошками = 
[
  "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
  "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
  "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
  "https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81",
  "https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6"
]

3. Для каждого ИД фильма выполняю процедуру поиска имен кошек, которые в нем участвовали

На вход: ИД фильма
На выход: список имен кошек

3.1 Беру ИД фильма из этого списка

ИД фильма, в котором есть кошки = https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49

3.2 Определяю какие кошки есть в этом фильме. 
На вход: ИД фильма
На выход: список ИД кошек, у которых в поле "films" связанного объекта из API People есть ИД фильма

Для этого: 
3.2.1 Беру список кошек (свойство "people" объекта из п.1)

список кошек = 
[
    "https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
    "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
    "https://ghibliapi.herokuapp.com/people/89026b3a-abc4-4053-ab1a-c6d2eea68faa",
    "https://ghibliapi.herokuapp.com/people/6b3facea-ea33-47b1-96ce-3fc737b119b8",
    "https://ghibliapi.herokuapp.com/people/3042818d-a8bb-4cba-8180-c19249822d57",
    "https://ghibliapi.herokuapp.com/people/58d1973f-f247-47d7-9358-e56cb0d2b5a6",
    "https://ghibliapi.herokuapp.com/people/a3d8e70f-46a0-4e5a-b850-db01620d6b92",
    "https://ghibliapi.herokuapp.com/people/fc196c4f-0201-4ed2-9add-c6403f7c4d32",
    "https://ghibliapi.herokuapp.com/people/466bc926-2024-4653-ac63-fe52f2dc8c7b"
]

3.2.2 Для всех кошек из списка определить их участие в фильме:
На вход: ИД фильма, ИД кошки
На выход: имя кошки

3.2.2.1 Беру ИД кошки из списка

ИД кошки = "https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec"

4.3 Нахожу объект этой кошки в API People. Для этого:
Ищу объект, у которого поле "url" равно кошке в п. 4.2.

объект кошки в API People = 
{
  "id": "7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
  "name": "Jiji",
  "gender": "Male",
  "age": "NA",
  "eye_color": "Black",
  "hair_color": "Black",
  "films": [
    "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e"
  ],
  "species": "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
  "url": "https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec"
},

4.4. Беру поле name этого объекта

имя = "name": "Jiji"

