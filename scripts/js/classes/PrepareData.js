"use strict";

export default class PrepareData 
{
	constructor(filmsData, speciesData, peopleData, specieName) {
		this.filmsData = filmsData;
		this.speciesData = speciesData;
		this.peopleData = peopleData;
		this.specieName = specieName;

		const IS_DEV = false;
		if (IS_DEV) {
			this.filmsData = _films;
			this.speciesData = _species;
			this.peopleData = _people;
			this.specieName = "Cat";
		}
	}

	get() {

		const result = this.getFimsWithPeopleNames(
			this.filmsData, this.speciesData, this.peopleData, this.specieName);
		return result;
	}

	/**
	* Получить список фильмов, где каждому фильму соответствует список имен.
	* Список имён содержит имена представителей вида, которые играли в фильме.
	*
	* На вход: 
	* 	@param filmsData = [ {}, {} ... ] - данные по фильмам
	* 	@param speciesData = [ {}, {} ... ] - данные по видам
	* 	@param peopleData = [ {}, {} ... ] - данные по представителям видов
	* 	@param specieName = string - имя вида, по которому нужно произвести поиск
	* На выход:
	*	@return [ {}, {}, ... ] - список объектов, где каждый объект - название фильма + список имен представителей вида
	*
	* Пример выходной информации: 
	*	[
	*	  { Имя фильма1, [ Список имён1 представителей вида ] },
	*	  { Имя фильма2, [ Список имён2 представителей вида ] },
	*	  ...
	*	]
	*/
	getFimsWithPeopleNames(filmsData, speciesData, peopleData, specieName) {
		// return 1;
		// console.log(filmData);
		const self = this;

		// список объектов
		// const list = filmsData.map(function(filmData) {
		const list = filmsData.map(function(filmData) {
			const names = self.getPeopleNamesInFilm(filmData, specieName);
			const filmWithNames = self.setNamesList(filmData, names);
			return filmWithNames;
		});

		return list;
	}

	/**
	* Получить список имён представителей вида для фильма.
	* Список содержит имена представителей вида, которые играли в фильме.
	*
	* На вход: 
	* 	@param filmData = [] - данные по фильму
	* 	@param specieName = string - название вида
	* На выход:
	*	@return [] - список имён представителей вида
	*
	* Пример выходной информации: 
	* @return [ Список имён представителей вида ]
	*/
	getPeopleNamesInFilm(filmData, specieName) {
		let names = [];
		// указанный вид играл в фильме?
		const isPlay = this.isSpeciePlayInFilm(filmData, specieName)
		if (isPlay) {
			const urlFilm = this.getFilmUrl(filmData);
			// кто из представителей указанного вида снимался в фильме?
			const peoplesUrlsBySpecie = this.getPeoplesUrls(specieName);
			// URL представителей вида
			const peopleUrlsInFilm = this.getPeopleUrlsInFilm(urlFilm, peoplesUrlsBySpecie);
			// имена представителей вида
			names = this.getPeopleNames(peopleUrlsInFilm);
		}

		return names;
	}

	/**
	* Получить список URL представителей вида для фильма.
	*
	* На вход: 
	* 	@param urlFilm = [] - URL фильма
	* 	@param peoplesUrlsBySpecie = [] - список URL представителей вида 
	* На выход:
	*	@return [] - список URL представителей вида, которые снимались в фильме
	*/
	getPeopleUrlsInFilm(urlFilm, peoplesUrlsBySpecie) {
		const self = this;
		const peoplesUrls = peoplesUrlsBySpecie.filter(function(peopleUrl) {
			const peopleData = self.getPeopleData(peopleUrl);
			const filmsWithPeople = self.getPeopleFilms(peopleData);

			// return (filmsWithPeople.includes(urlFilm));
			return (filmsWithPeople.indexOf(urlFilm) !== -1);

		});
		return peoplesUrls;
	}

	/**
	* Проверить снимались ли в фильме представители вида.
	*
	* На вход: 
	* 	@param filmData = [] - данные по фильму
	* 	@param specieName = string - название вида
	* На выход:
	*	@return boolean - true если снимались, иначе false
	*/
	isSpeciePlayInFilm(filmData, specieName) {
		const filmUrl = this.getFilmUrl(filmData);
		const metaObjectSpecie = this.getSpecieMetaObject(specieName)
		const metaObjectFilms = this.getMetaObjectFilms(metaObjectSpecie);
		// console.log(metaObjectFilms);

		// if ( metaObjectFilms.includes(filmUrl) ) {
		if ( metaObjectFilms.indexOf(filmUrl) !== -1 ) {
			return true
		}

		return false;
	}

	/**
	* Получить объект метаинформации вида.
	*
	* На вход: 
	* 	@param specieName = string - название вида
	* На выход:
	*	@return {} - метаобъект вида (из API species)
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
	* 	@param metaObjectSpecie = {} - метаобъект вида (из API species)
	* На выход:
	*	@return string - Url метаобъекта вида
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
	* 	@param filmData = {} - данные по фильму
	* На выход:
	*	@return [ string, string ... ] - список видов
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
	}

	/**
	* Получить url фильма.
	*
	* На вход: 
	* 	@param filmData = [] - данные по фильму
	* На выход:
	*	@return string - url фильма
	*/
	getFilmUrl(filmData) {
		return filmData["url"]; 
	}

	/**
	* Получить список фильмов, в которых играли представители вида
	*
	* На вход: 
	* 	@param metaObjectSpecie = {} - объект представителей вида
	* На выход:
	*	@return [ string, string ... ] - список Url фильмов
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
	* 	@param specieName = string - название вида
	* На выход:
	*	@return [ string, string, ... ] - список url
	*
	* Пример выходной информации: 
	*	[
	*		"URL1 представителя вида",
	*		"URL2 представителя вида",
	*		...
	*	]
	*/
	getPeoplesUrls(specieName) {
		const specieMetaObject = this.getSpecieMetaObject(specieName);
		return specieMetaObject["people"];
	}

	/**
	* Получить данные представителя вида.
	*
	* На вход: 
	* 	@param peopleUrl = string - url представителя вида
	* На выход:
	*	@return {} - объект с данными из API people
	*/
	getPeopleData(peopleUrl) {
		const result = this.peopleData.filter(function(people) {
			return (people["url"] === peopleUrl);
		});
		return result.pop();
	}

	/**
	* Получить фильмы, в которых снимался представитель вида.
	*
	* На вход: 
	* 	@param peopleData = {} - объект представителя вида
	* На выход:
	*	@return [ string, string, ... ] - список URL фильмов
	*/
	getPeopleFilms(peopleData) {
		return peopleData["films"];
	}

	/**
	* Получить имя представителя вида.
	*
	* На вход: 
	* 	@param peopleData = {} - объект представителя вида
	* На выход:
	*	@return string - имя представителя вида
	*/
	getPeopleName(peopleData) {
		return peopleData["name"];
	}

	/**
	* Получить название фильма.
	*
	* На вход: 
	* 	@param filmData = [] - данные по фильму
	* На выход:
	*	@return string - название фильма
	*/
	getFilmTitle(filmData) {
		return filmData["title"];
	}

	/**
	* Получить имена представителей вида.
	*
	* На вход: 
	* 	@param peopleUrls = [] - список Url представителей вида
	* На выход:
	*	@return [] - список имён представителей вида
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
	* Создать объект-связь вида: { Имя фильма, [ Список имён представителей вида, которые играли в фильме ] }
	* Свойство film объекта - название фильма
	* Свойство peopleNames объекта - список имёна представителей вида, которые играли в фильме
	*
	* На вход: 
	* 	@param filmData = {} - данные о фильме
	* 	@param names = [] - список имён представителей вида
	* На выход:
	*	@return {}
	*/
	setNamesList(filmData, names) {
		const list = 
		{ 
			film: this.getFilmTitle(filmData),
			peopleNames: names
		}
		return list;
	}

}