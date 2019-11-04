import PrepareData from './classes/PrepareData';
import $ from "jquery";

// API загрузки данных
const urls = [
	"https://ghibliapi.herokuapp.com/films/",
	"https://ghibliapi.herokuapp.com/species/",
	"https://ghibliapi.herokuapp.com/people/"
];

// Обработка данных после загрузки
load(urls)
	.then(data => { 
		console.log("Fetch finished");
		console.log(data);
		// showData(data);
	})
	.catch(error => {
		console.log('Error while loading data:' + error);
		showError();
	});

/**
* Загрузка (последовательная) данных.
* @params {Array [String, String, String]} - массив из трёх ссылок.
* @return {Promise}
*/
function load(urls) {
	let _data = [];		// контейнер для хранения данных
	return new Promise(function(resolve, reject) {
		loadJson(urls[0])
			.then(response1 => { 
				console.log(response1);
		 		// порция данных сохраняется в контейнере
				_data.push(response1);
				return loadJson(urls[1]);
			})
			.then((response2) => { 
				console.log(response2);
		 		// порция данных сохраняется в контейнере
				_data.push(response2);
				return loadJson(urls[2]); 
			})
			.then((response3) => { 
				console.log(response3);
		 		// порция данных сохраняется в контейнере
				_data.push(response3);
				resolve(_data);
			})
			.catch(error => { 
				reject(error);  
			});
	})
}

/** 
* Загрузка одной порции данных
* @param {String} url
*/
function loadJson(url) {
	return fetch(url)
	 .then(response => response.json());
}

/** 
* Обработка ошибок работы приложения
*/
function showError() {
	const elem = document.getElementsByClassName('preloader');
	elem.item(0).innerHTML = "<p>Произошла ошибка при загрузке данных. Данные не будут отображены.</p>";
}

/** 
* Обработка и показ полученных данных
* @param {Array} data - контейнер, хранящий загруженные данные
*/
function showData(data) {
	console.log('showData');
	console.log(data);
	return;
	// передаю данные для обработки
	const filmsData = data[0]; 
	const speciesData = data[1]; 
	const peopleData = data[2]; 
	const specieName = "Cat";

	const prepareData = new PrepareData(filmsData, speciesData, peopleData, specieName);
	console.log(prepareData.get());

	// TODO: создать таблицу и заполнить данными
	// View.render(prepareData.get());
}