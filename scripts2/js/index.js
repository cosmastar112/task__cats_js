import PrepareData from './classes/PrepareData';
import $ from "jquery";

const _data = []; // контейнер для загруженных данных
app();


/** 
* Загрузить данные и отобразить
*/ 

function app() {
	loadJson("https://ghibliapi.herokuapp.com/films/")
	 .then(() => loadJson("https://ghibliapi.herokuapp.com/species"))
	 .then(() => loadJson("https://ghibliapi.herokuapp.com/people"))
	 // Ошибка загрузки информации
	 .catch(error => { console.log("Ошибка загрузки информации: " + error); })
	 // Обработка и показ данных 
	 .then(() => { console.log('End chain'); showData(_data); })
	 // Ошибка обработки информации
	 .catch(error => { console.log("Ошибка обработки информации: " + error); });
}

/** 
* Загрузка одной порции данных
* @param {String} url
*/
function loadJson(url) {
	return fetch(url)
	 .then(response => response.json())
	 // порция данных сохраняется в контейнере
	 .then(data => _data.push(data));
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

/** 
* Обработка ошибок работы приложения
*/
function showError() {
	const elem = document.getElementsByClassName('preloader');
	elem.item(0).innerHTML = "<p>Ошибка при загрузке данных :( Проверьте подключение к сети.</p>";

	// с использованием jQuery
	// $(".preloader").html("Ошибка при загрузке данных :( Проверьте подключение к сети.");
}