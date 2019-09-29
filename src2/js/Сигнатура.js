------------------------------------------------------------------------
------------------------------------------------------------------------

/**
* Получить список фильмов, где каждому фильму соответствует список имен.
* Список имён содержит имена представителей вида, которые играли в фильме.
*
* На вход: 
*	- данные по фильмам
* 	@param filmsData = [ {}, {} ... ]
*	- данные по видам
* 	@param speciesData = [ {}, {} ... ]
*	- данные по представителям видов
* 	@param peoplesData = [ {}, {} ... ]
*	- имя вида, по которому нужно произвести поиск
* 	@param specieName = string
*
* На выход:
*	- список объектов, где каждый объект - имя фильма + список имен представителей вида
*	@return [ {}, {}, ... ]
*
* Пример выходной информации: 
*	[
*	  { Имя фильма1, [ Список имён1 представителей вида ] },
*	  { Имя фильма2, [ Список имён2 представителей вида ] },
*	  ...
*	]
*/
specieName = "Cat"
getFimsWithPeoplesNames(filmsData, speciesData, peoplesData, specieName) {
	// список объектов
	list = []

	Для каждого фильма as filmData в filmsData:
		listNamesInFilm = getPeopleNamesInFilm(filmData, specieName)
		добавить listNamesInFilm в list

	Вернуть list
}

/**
* Получить список имён представителей вида для фильма.
* Список содержит имена представителей вида, которые играли в фильме.
*
* На вход: 
*	- данные по фильму
* 	@param filmData = []
*
* На выход:
*	- объект, где каждый объект - имя фильма + список имён представителей вида
*	@return {}
*
* Пример выходной информации: 
* @return { Имя фильма, [ Список имён представителей вида ] }
*/
getPeopleNamesInFilm(filmData, specieName) {

	peopleNames = [];

	isPlay = isSpeciePlayInFilm(filmData, specieName)
	if (isPlay) {
		urlFilm = getFilmUrl(filmData)
		peoplesOfSpecie = getPeoplesOfSpecie(specieName)

		Для каждого peopleUrl в peoplesOfSpecie:
			peopleData = getPeopleData(peopleUrl)
			filmsWithPeople = getPeopleFilms(peopleData)

			if ( в filmsWithPeople есть urlFilm ) {
				peopleName = getPeopleName(peopleData)
				Добавить в peopleNames peopleName
			}

	}

	listCatNamesInFilm = 
	{ 
		name: getFilmTitle(),
		peopleNames: peopleNames
	}

	return listCatNamesInFilm;

}

/**
* Проверить снимались ли в фильме представители вида.
*
* На вход: 
*	- данные по фильму
* 	@param filmData = []
*	- название вида
* 	@param specieName = string
*
* На выход:
*	- true если снимались, иначе false
*	@return boolean
*/
isSpeciePlayInFilm(filmData, specieName) {

	filmUrl = getFilmUrl(filmData);
	metaObjectSpecie = getSpecieMetaObject(specieName)
	metaObjectFilms = getMetaObjectFilms(metaObjectSpecie);

	if ( metaObjectFilms.includes(filmUrl) ) {
		return true
	}

	return false;
}

/**
* Получить url фильма.
*
* На вход: 
*	- данные по фильму
* 	@param filmData = []
*
* На выход:
*	- url фильма
*	@return string 
*/
getFilmUrl(filmData) {
	вернуть свойство "url" объекта filmData
}

/**
* Получить название фильма.
*
* На вход: 
*	- данные по фильму
* 	@param filmData = []
*
* На выход:
*	- название фильма
*	@return string 
*/
getFilmTitle(filmData) {
	вернуть свойство "title" объекта filmData
}

/**
* Получить список url представителей вида, которые участвовали в фильмах (не важно в каких).
*
* На вход: 
*	- название вида
* 	@param specieName = string
*
* На выход:
*	- список url
*	@return [ string, string, ... ]
*
* Пример выходной информации: 
*	[
*		"URL1 представителя вида",
*		"URL2 представителя вида",
*		...
*	]
* @return { Имя фильма, [ Список имён представителей вида ] }
*/
getPeoplesOfSpecie(specieName) {
	specieMetaObject = getSpecieMetaObject(specieName)
	Вернуть свойство "people" объекта specieMetaObject
}

/**
* Получить данные представителя вида.
*
* На вход: 
*	- url представителя вида
* 	@param peopleUrl = string
*
* На выход:
*	- объект с данными из API people
*	@return {}
*/
getPeopleData(peopleUrl) {
	вернуть такой объект из peoplesData, у которого свойство url = peopleUrl
}

/**
* Получить имя представителя вида.
*
* На вход: 
*	- объект представителя вида
* 	@param peopleData = {}
*
* На выход:
*	- имя представителя вида
*	@return string
*/
getPeopleName(peopleData) {
	вернуть свойство "name" объекта peopleData
}

/**
* Получить фильмы, в которых снимался представитель вида.
*
* На вход: 
*	- объект представителя вида
* 	@param peopleData = {}
*
* На выход:
*	- список URL фильмов
*	@return [ string, string, ... ]
*/
getPeopleFilms(peopleData) {
	вернуть свойство "films" объекта peopleData
}

/**
* Получить объект метаинформации вида.
*
* На вход: 
*	- название вида
* 	@param specieName = string
*
* На выход:
*	- метаобъект вида (из API species)
*	@return {}
*/
getSpecieMetaObject(specieName) {
	Искать в speciesData такой объект, у которого свойство name = specieName
	вернуть найденный объект
}

/**
* Получить Url метаобъекта вида.
*
* На вход: 
*	- метаобъект вида (из API species)
* 	@param metaObjectSpecie = {}
*
* На выход:
*	- Url вида
*	@return string
*
*/
getMetaObjectUrl(metaObjectSpecie) {
	Вернуть свойство "url" объекта metaObjectSpecie
}

/**
* Получить список видов, которые играли в фильме.
*
* На вход: 
*	- данные по фильму
* 	@param filmData = {}
*
* На выход:
*	- список видов
*	@return [ string, string ... ]
*
* Пример выходной информации: 
*	[
*		URL вида1,
*		URL вида2,
*		...
*	]
*/
getSpeciesInFilm(filmData) {
	вернуть свойство "species" объекта filmData
}

/**
* Получить список фильмов, в которых играли представители вида
*
* На вход: 
*	- объект представителей вида
* 	@param metaObjectSpecie = {}
*
* На выход:
*	- список Url фильмов
*	@return [ string, string ... ]
*
* Пример выходной информации: 
*	[
*		URL фильма1,
*		URL фильма2,
*		...
*	]
*/
getMetaObjectFilms(metaObjectSpecie) {
	return metaObjectSpecie["films"];
}