import PrepareData from './classes/PrepareData';
import View from './classes/View';
import { FILMS_URL, SPECIES_URL, PEOPLE_URL } from './classes/Consts';
// import $ from "jquery";

// Обработчик нажатия кнопки
// Загрузка, обработка и отображение данных
// Управление кнопкой и preloader'ом
function show() {	
	setPreloaderVisible(true);	// показывать preloader пока идет загрузка данных
	this.remove(); // удалить кнопку "Показать"

	load()
		.then(data => { 
			// console.log("Fetch finished");
			// console.log(data);
			setPreloaderVisible(false);  // убрать preloader когда загрузка данных завершена
			const preparedData = prepareData(data);	// подготовка данных перед отображением
			showData(preparedData);	// представление данных
		})
		.catch(error => {
			console.log('Error:' + error);
			showError();
		});
}

/**
* Загрузка (последовательная) данных.
* @return {Promise}
*/
function load() {
	let _data = [];		// контейнер для хранения данных
	return new Promise(function(resolve, reject) {
		loadJson(FILMS_URL)
			.then(response1 => { 
				// console.log(response1);
		 		// порция данных сохраняется в контейнере
				_data.push(response1);
				return loadJson(SPECIES_URL);
			})
			.then((response2) => { 
				// console.log(response2);
		 		// порция данных сохраняется в контейнере
				_data.push(response2);
				return loadJson(PEOPLE_URL); 
			})
			.then((response3) => { 
				// console.log(response3);
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
* @return {Promise}
*/
function loadJson(url) {
	return fetch(url)
	 .then(response => response.json());
}

/** 
* Обработка данных после загрузки.
* @params data {Array[films,species,people]}
*/
function prepareData(data) {
	// передаю данные для обработки
	const films = data[0]; 
	const species = data[1]; 
	const people = data[2]; 
	const specieName = "Cat";

	const dataHandler = new PrepareData(films, species, people, specieName);
	const preparedData = dataHandler.get();
	return preparedData;
}

/** 
* Отображение данных после обработки.
* @params {Array[Object,Object,...]} data
*/
function showData(data) {
	const view = new View(data, "cats__table");  // представление данных
	view.createTable(); // создать таблицу
	view.setVisible(true); // показать таблицу
}

/** 
* Показать на странице ошибку работы приложения.
*/
function showError() {
	const elem = document.getElementsByClassName('preloader');
	elem.item(0).innerHTML = "<p>Произошла ошибка при загрузке данных. Данные не будут отображены.</p>";
}

// Показать/скрыть preloader
// @example: setPreloaderVisible(false|true);
function setPreloaderVisible(visible) {
	let preloader = document.getElementsByClassName("preloader");
	preloader = preloader[0];

	let className = "preloader__visible_true";
	if (!visible) {
		className = "preloader__visible_false";
	}

	preloader.setAttribute("class", "preloader " + className);
}


// ----------------------------------------------------------------------
// Обработчик нажатия кнопки "Показать"
// Обработчик устаналивается после загрузки документа
// Точка входа
window.onload = setButtonHandler;
// ----------------------------------------------------------------------
function setButtonHandler() {
	const btn = document.getElementById("cats__btn_show_table");
	btn.onclick = show;		// --> Обработчик нажатия кнопки
}