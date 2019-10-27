// const urls = [
// 	"https://ghibliapi.herokuapp.com/films/",
// 	"https://ghibliapi.herokuapp.com/species",
// 	"https://ghibliapi.herokuapp.com/people"
// ];

// Обработка и показ полученных данных
// function showData(data) {
// 	console.log('showData');
// 	console.log(data);
// 	return;
// 	// передаю данные для обработки
// 	const filmsData = data[0]; 
// 	const speciesData = data[1]; 
// 	const peopleData = data[2]; 
// 	const specieName = "Cat";

// 	const prepareData = new PrepareData(filmsData, speciesData, peopleData, specieName);
// 	console.log(prepareData.get());
// }	

// Индикация ошибки в работе приложения
// function showError() {
// 	const elem = document.getElementsByClassName('preloader');
// 	elem.item(0).innerHTML = "<p>Ошибка при загрузке данных :( Проверьте подключение к сети.</p>";

// 	// с использованием jQuery
// 	// $(".preloader").html("Ошибка при загрузке данных :( Проверьте подключение к сети.");
// }

// let _data = [];

// Полная запись загрузки данных
// let promise = fetch("http://yii2/basic/web/index.php?r=cats/films");
// 	promise
// 		.then(response => response.json())
// 		.then(data => { console.log(data); _data.push(data); }) 
// 		.then(data => fetch("http://yii2/basic/web/index.php?r=cats/species"))
// 		.then(response => response.json())
// 		.then(data => { console.log(data); _data.push(data); }) 
// 		.then(data => fetch("http://yii2/basic/web/index.php?r=cats/people"))
// 		.then(response => response.json())
// 		.then(data => { console.log(data); _data.push(data); }) 
// 		// Ошибка загрузки информации
// 		.catch(error => { console.log(error); showError(); })
// 		// Показать таблицу
// 		.then(d => { console.log('End chain'); console.log(_data); showData(_data); })
// 		// Ошибка обработки информации
// 		.catch(error => { console.log(error); });


// Загрузка одной порции данных
// function loadJson(url) {
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => _data.push(data));
// }

// Сокращенная запись загрузки данных
// loadJson("http://yii2/basic/web/index.php?r=cats/films")
//  .then(() => loadJson("http://yii2/basic/web/index.php?r=cats/species"))
//  .then(() => loadJson("http://yii2/basic/web/index.php?r=cats/people"))
//  // Ошибка загрузки информации
//  .catch(error => { console.log(error); })
//  // Обработка и показ данных 
//  .then(d => { 
//  	console.log('End chain'); showData(_data); 
//  })
//  // Ошибка обработки информации
//  .catch(error => { console.log(error); });
