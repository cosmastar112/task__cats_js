function func(e) {

	/* Получаю данные */
	const urls = new Array(
		"https://ghibliapi.herokuapp.com/films/",
		"https://ghibliapi.herokuapp.com/species",
		"https://ghibliapi.herokuapp.com/people/",
	);

	let list = new Array();
	urls.forEach(function(url, n) {
		list.push(
			fetch(url).then(response => {
				return response.json();				
			})
		);
	});

	Promise
		.all(list)
		.then(response => {
				return parseData(response);
			})
		.catch(err => {
			console.log(err);
		});
	/* Получаю данные _конец*/

	// Запуск с тестовыми данными /*
	// parseData([_films, _species, _people]);
	function parseData(results) {
		// нахожу фильмы с кошками
		const filmsWithCats = getFilmsWithCats(results);

		// извлекаю информацию о фильмах
		let films = new Array();
		results[0].map(function(film) {
			let currentfilm = { 
				"title": film.title, 
				"description": film.description, 
				"release_date": film.release_date, 
				"cats": null  /* имена кошек подставляю ниже */
			};

			// для тех фильмов, где есть кошки, добавляю имена кошек
			filmsWithCats.forEach(function(el) {
				if (el.film === film.url) {
					currentfilm.cats = el.catNames;
				}
			});
			// фильмы с именами кошек
			films.push(currentfilm);
		});

		showData(films);	//отображаю данные
	}

	/*
	* Заполнить и отобразить таблицу с данными.
	*/
	function showData(results) {		
		$(".preloader").html('');
		$(".films").html('');

		// заполняю таблицу с помощью jquery
		let tbody = $("<tbody>");
		let thead = $("<thead>");
		// заголовки таблицы
		const theads = ["#", "Наименование", "Описание", "Год выпуска", "Кошки" ];
		theads.forEach (function(theadName) {
			let th = $("<th>", {
				text: theadName,
			});
			thead.append(th);
		});

		// добавляю строки
		for (let trN = 0; trN < results.length; trN++) {
			// добавляю ячейки
			let tr = $("<tr>");
			// заполняю ячейки информацией
			let tdArr = setTableFields([ 
				trN + 1, 					/* id */ 
				results[trN].title,   		/* Название */
				results[trN].description,   /* Описание */
				results[trN].release_date,  /* Дата выхода */
				results[trN].cats,  		/* Имена кошек */
			]);
			tdArr.forEach(function(td) {
				tr.append(td);
			});
			tbody.append(tr);
		}

		$(".films").append(thead);
		$(".films").append(tbody);

	}

}

$( window ).on("load", func);

/**
 * Находит кошек, которые участвовали в фильмах.
 * @param {Array} films - массив объектов.
 * @return - объект-связь "Фильм"->["ИменаКошек"]
 *   { 
 *	  {Array} catNames - имена кошек, 
 *	  {String} film - url фильма 
 *   }
*/
function getFilmsWithCats(data) {
	// объект с name="Cat" из api species
	const catSpeciesObj = findCatSpeciesObject(data[1]);
	// объекты из api people только вида (species) Cat
	const onlyCats = filterPeopleBySpecies(data[2], catSpeciesObj.url);
	let catNames = null;

	let rels = new Array();
	catSpeciesObj.films.forEach(function(film) {
		rels.push({ 
			"catNames": findCatNames(onlyCats, film), 
			"film": film 
		});
	});

	return rels;
}

/**
 * Находит объект Cat, в котором хранятся записи о связанных фильмах.
 * @param {Array} result - массив объектов.
 * @return {Object} объект у которого поле name = "Cat"
*/
function findCatSpeciesObject(result) {
	let objCat = null;
	result.forEach(function(cat) {
		if (cat.name === "Cat") {
			objCat = cat;
			return;
		}
	})
	return objCat;
}

/**
 * Возвращает массив, содержащий только кошек.
 * @param {Array} data - массив объектов http://.../people
 * @param {String} speciesUrl - url кошек
 * @return {Array} filtered - массив объектов
*/
function filterPeopleBySpecies(data, speciesUrl) {
	// console.log(data);
	let filtered = new Array();
	data.forEach(function(el) {
		if (el.species === speciesUrl) {
			// console.log(el);
			filtered.push(el);
		}
	});
	return filtered;
}

/**
 * Возвращает массив с именами кошек, которые были в фильме.
 * @param {Array} data - массив с объектами кошек из people api.
 * @param {String} film - id фильма.
 * @return {Array} result - массив имен кошек
*/
function findCatNames(data, film) {
	let result = new Array();
	// проверить каждую кошку
	data.forEach(function(el) {
		const films = el.films;
		films.forEach(function(elFilm) { // на предмет совпадения искомого фильма со фильмами из списка, в которых кошка была
			if (elFilm === film) {
				// console.log(el);
				result.push(el.name); // имя кошки
				return;
			}
		});
	});
	return result;
}

/**
 * Возвращает массив элементов <td>, заполненных соответствующей информацией.
 * @param {Array} values - массив значений для заполнения ячеек.
 * Заполнение будет выполнено в указаном порядке. 
 * Например: если будет передан [1, 2, 3], то в первую ячейку строки будет помещено значение 1, во вторую - 2 и т.д...
 * @return {Array} tdArr - массив объектов <td>, которые будут прикреплены к <tr>
*/
function setTableFields(values) {
	let tdArr = new Array();
	// заполняю ячейки
	for (let tdN = 0; tdN < values.length; tdN++) {
		tdArr.push($("<td>", {
			text: values[tdN],
		}));
	}

	return tdArr;
}