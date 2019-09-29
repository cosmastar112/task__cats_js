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

    Нахожу объект с метаинформацией о кошках (попадаю внутрь 1.1.2)

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
  Добавляю в результирующий список запись о фильме и кошках (попадаю внутрь 1.1.7)
    название фильма = "Castle in the Sky"
    Возвращаю запись о фильме и кошках = { "Castle in the Sky", [] }
  Добавляю в результирующий список запись, получаю:
  результирующий список = 
  [ 
    { "Castle in the Sky", [] }
  ]

  ПЕРЕХОЖУ К СЛЕДУЮЩЕМУ ФИЛЬМУ

    Беру фильм, проверяю есть ли в нем кошки (попадаю внутрь 1.1.5)
    фильм = 
    {
      "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
      "title": "Grave of the Fireflies",
      "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      "director": "Isao Takahata",
      "producer": "Toru Hara",
      "release_date": "1988",
      "rt_score": "97",
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
      "url": "https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a"
    }

    (ВАРИАНТ2 1.1.5)
    
    Нахожу объект с метаинформацией о кошках (попадаю внутрь 1.1.2)
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

    URL вида = "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3"
    Определяю какие виды играли в фильме
    виды, которые играли в фильме = 
    [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
    ]

    Проверить наличие URL вида кошек в списке видов, которые играли в фильме
    Совпадения нет - возвращаю false
    Оставляю список пустым
    Добавляю в результирующий список запись о фильме и кошках (попадаю внутрь 1.1.7)
      название фильма = "Grave of the Fireflies"
      Возвращаю запись о фильме и кошках = { "Grave of the Fireflies", [] }
    Добавляю в результирующий список запись, получаю:
    результирующий список = 
    [ 
      { "Castle in the Sky", [] },
      { "Grave of the Fireflies", [] }
    ]

    ПЕРЕХОЖУ К СЛЕДУЮЩЕМУ ФИЛЬМУ

    Беру фильм, проверяю есть ли в нем кошки (попадаю внутрь 1.1.5)
      фильм = 
        {
          "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
          "title": "My Neighbor Totoro",
          "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
          "director": "Hayao Miyazaki",
          "producer": "Hayao Miyazaki",
          "release_date": "1988",
          "rt_score": "93",
          "people": [
            "https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
            "https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
            "https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
            "https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d",
            "https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f",
            "https://ghibliapi.herokuapp.com/people/591524bc-04fe-4e60-8d61-2425e42ffb2a",
            "https://ghibliapi.herokuapp.com/people/c491755a-407d-4d6e-b58a-240ec78b5061",
            "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
            "https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
            "https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a"
          ],
          "species": [
            "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
            "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
            "https://ghibliapi.herokuapp.com/species/74b7f547-1577-4430-806c-c358c8b6bcf5"
          ],
          "locations": [
            "https://ghibliapi.herokuapp.com/locations/"
          ],
          "vehicles": [
            "https://ghibliapi.herokuapp.com/vehicles/"
          ],
          "url": "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
        }


        Нахожу объект с метаинформацией о кошках (попадаю внутрь 1.1.2)
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

        URL вида = "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3"
        Определяю какие виды играли в фильме
        виды, которые играли в фильме = 
        [
          "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
          "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
          "https://ghibliapi.herokuapp.com/species/74b7f547-1577-4430-806c-c358c8b6bcf5"
        ]

        Проверяю наличие URL вида кошек в списке видов, которые играли в фильме
        Есть - возвращаю true

        Ищу список имен кошек (попадаю внутрь 1.1.1)

          Создаю список имен кошек для фильма

          Беру фильм
          Нахожу URL этого фильма (свойство "url" объекта фильма)
          URL фильма = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
          Беру список URL кошек, которые участвовали в фильмах =
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

          Выполняю для каждого URL кошки в списке
            Беру URL кошки = "https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec"
            Нахожу в данных по представителям видов объект кошки = 
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
            }
            Беру список фильмов этой кошки = 
            [
              "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e"
            ]

            URL фильма нет в списке фильмов этой кошки
            Обновляю список имен кошек
            Перехожу к следующей кошке

            Беру URL кошки = "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106"
            Нахожу в данных по представителям видов объект кошки = 
            {
              "id": "f467e18e-3694-409f-bdb3-be891ade1106",
              "name": "Catbus",
              "gender": "Male",
              "age": "NA",
              "eye_color": "Yellow",
              "hair_color": "Brown",
              "films": [
                "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
              ],
              "species": "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
              "url": "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106"
            }
            Беру список фильмов этой кошки = 
              [
                "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
              ]

            URL фильма есть в списке фильмов этой кошки
            Запоминаю имя кошки = "Catbus"
            Обновляю список имен кошек
            Перехожу к следующей кошке
            ....
            Возвращаю список имен кошек