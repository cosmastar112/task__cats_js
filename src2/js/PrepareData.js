class PrepareData 
{
	constructor(filmsData, speciesData, peoplesData, specieName) {
		this.filmsData = filmsData;
		this.speciesData = speciesData;
		this.peoplesData = peoplesData;
		this.specieName = specieName;
		
		const IS_DEV = true;
		if (IS_DEV) {
			this.filmsData = _films;
			this.speciesData = _species;
			this.peoplesData = _people;
			this.specieName = "Cat";
		}
	}

	get() {

		const result = this.getFimsWithPeoplesNames(
			this.filmsData, this.speciesData, this.peoplesData, this.specieName);
		return result;
		
	}

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
	getFimsWithPeoplesNames(filmsData, speciesData, peoplesData, specieName) {
		// return 1;
		// console.log(filmData);
		const self = this;

		// список объектов
		const list = filmsData.map(function(filmData) {
			return self.getPeopleNamesInFilm(filmData, specieName);
		});
		return list;

	}

	/**
	* Получить список имён представителей вида для фильма.
	* Список содержит имена представителей вида, которые играли в фильме.
	*
	* На вход: 
	*	- данные по фильму
	* 	@param filmData = []
	*	- название вида
	* 	@param specieName = string
	*
	* На выход:
	*	- объект, где каждый объект - имя фильма + список имён представителей вида
	*	@return {}
	*
	* Пример выходной информации: 
	* @return { Имя фильма, [ Список имён представителей вида ] }
	*/
	getPeopleNamesInFilm(filmData, specieName) {
		const self = this;

		const isPlay = this.isSpeciePlayInFilm(filmData, specieName)

		if (isPlay) {
			const urlFilm = this.getFilmUrl(filmData);
			const peoplesOfSpecie = this.getPeoplesOfSpecie(specieName);

			const peopleUrls = peoplesOfSpecie.filter(function(peopleUrl) {
				const peopleData = self.getPeopleData(peopleUrl);
				const filmsWithPeople = self.getPeopleFilms(peopleData)

				return (filmsWithPeople.includes(urlFilm));

			});

			const names = this.getPeopleNames(peopleUrls);

			return this.setListPeopleNamesInFilm(filmData, names);

		}

		return this.setListPeopleNamesInFilm(filmData, []);

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

		const filmUrl = this.getFilmUrl(filmData);
		const metaObjectSpecie = this.getSpecieMetaObject(specieName)
		const metaObjectFilms = this.getMetaObjectFilms(metaObjectSpecie);
		// console.log(metaObjectFilms);

		if ( metaObjectFilms.includes(filmUrl) ) {
			return true
		}

		return false;
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
		// console.log(this.speciesData);
		const specieMetaObject = this.speciesData.filter(function(specieData) {
			return specieData.name === specieName;
		});
		return specieMetaObject.pop();
	}

	/**
	* Получить Url метаобъекта вида.
	*
	* На вход: 
	*	- метаобъект вида (из API species)
	* 	@param metaObjectSpecie = {}
	*
	* На выход:
	*	- Url метаобъекта вида
	*	@return string
	*
	*/
	getMetaObjectUrl(metaObjectSpecie) {
		// console.log(metaObjectSpecie);
		return metaObjectSpecie["url"];
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
		// console.log(filmData);
		return filmData["species"];
		// вернуть свойство "species" объекта filmData
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
		return filmData["url"]; 
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
		const specieMetaObject = this.getSpecieMetaObject(specieName);
		return specieMetaObject["people"];
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
		const result = this.peoplesData.filter(function(people) {
			return (people["url"] === peopleUrl);
		});
		return result.pop();
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
		return peopleData["films"];
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
		return peopleData["name"];
		// вернуть свойство "name" объекта peopleData
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
		return filmData["title"];
	}

	/**
	* Получить имена представителей вида.
	*
	* На вход: 
	*	- список Url представителей вида
	* 	@param peopleUrls = []
	*
	* На выход:
	*	- список имён представителей вида
	*	@return []
	*/
	getPeopleNames(peopleUrls) {
		const self = this;
		const names = peopleUrls.map(function(peopleName) {
			const peopleData = self.getPeopleData(peopleName);
			return self.getPeopleName(peopleData);
		});
		return names;
	}

	/**
	* Создать объект, являющийся результатом работы функции getPeopleNamesInFilm()
	* Связь вида: { Имя фильма, [ Список имён представителей вида, которые играли в фильме ] }

	* Поле film объекта - название фильма
	* Поле peopleNames объекта - список имёна представителей вида, которые играли в фильме
	*
	* На вход: 
	*	- данные о фильме
	* 	@param filmData = {}
	*	- список имён представителей вида
	* 	@param names = []
	*
	* На выход:
	*	@return {}
	*/
	setListPeopleNamesInFilm(filmData, names) {
		const list = 
		{ 
			film: this.getFilmTitle(filmData),
			peopleNames: names
		}
		return list;
	}

}

