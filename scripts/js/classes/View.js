"use strict";
/**
* Создать таблицу и заполнить данными. 
* Таблица не создаётся с нуля, её надо создать предварительно и передать в конструктор селектор класса.
* В указанную таблицу будут добавлены блоки thead и tbody, ячейки заполняются данными. 
*/

export default class View
{
	/**
	* @constructor
	* @params {Array[Object, Object,...]} data
	* @example
	* const data = [ 
	*	{
	*		"film":"Castle in the Sky",
	*		"peopleNames":[]
	*	},
	*	{
	*		"film":"Arrietty",
	*		"peopleNames":["Niya"]
	* }];
	* constructor(data, "cats__table");
	*/
	constructor(data, tableClassSelector) {
		this.data = data;
		this.tableClassSelector = tableClassSelector;

		const IS_DEV = false;
		if (IS_DEV) {
			this.data = _prepared;
		}
	}

	/**
	* Создать таблицу, заполнить данными.
	*/
	createTable() {
		// console.log(this.data);
		let table = document.getElementsByClassName(this.tableClassSelector);
		table = table[0];
		// создаю блок заголовов таблицы
		const thead = this.createThead(["ID", "Фильмы", "Кошачие"]);
		// создаю тело таблицы
		const tbody = this.createTbody();
		// прикрепляю к существующей таблице
		table.appendChild(thead);
		table.appendChild(tbody);
	}

	/**
	* Создать тело таблицы.
	* @return {Element} tbody
	*/
	createTbody() {
		const tbody = document.createElement("tbody");
		// строки
		let trs = this.createTrs(this.data.length);
		trs.map(tr => {
			tbody.appendChild(tr);
		})
		return tbody;
	}

	/**
	* Создать указанное число строк таблицы
	* @params {Number} num - число элементов данных
	* @return {Array[Element,Element,...]} trs
	*/
	createTrs(num) {
		let trs = [];
		for (let i = 0; i < num; i++) {
			trs.push(this.createTr(i));
		}
		return trs;
	}

	/**
	* Создать строку таблицы
	* @params {Number} index - индекс элемента данных
	* @return {Element} tr
	*/
	createTr(index) {
		// console.log(this.data);
		const tr = document.createElement("tr");

		// Данные в ячейках
		const ID = index + 1;
		const film = this.data[index]["film"];
		const cats = this.data[index]["peopleNames"];
		// console.log(cats);

		const tds = [ 
			this.createTd(ID), 
			this.createTd(film), 
			this.createTd(cats)
		];
		tds.map(td => {
			tr.appendChild(td);
		})

		return tr;
	}

	/**
	* Создать ячейку таблицы 
	* @params {String|Array} text - элемент данных
	* @return {Element} td
	*/
	createTd(text) {
		let td = document.createElement("td");
		// если строка состоит из нескольких элементов, то каждый элемент с новой строки
		if (Array.isArray(text) && text.length > 0) {
			for (let i = 0; i < text.length; i++) {
				let p = document.createElement("p");
				let textNode = document.createTextNode(text[i]);
				p.appendChild(textNode);
				td.appendChild(p);
			}
		} else {
			// console.log(text);
			// иначе просто добавить элемент
			let textNode = document.createTextNode(text);
			td.appendChild(textNode);
		}
		return td;
	}

	/**
	* Создать блок заголовков таблицы
	* @params {Array[String,String,...]} texts - заголовки таблицы
	* @return {Element} thead
	* @example: createThead(["Фильмы", "Кошачие"])
	*/ 
	createThead(texts) {
		const thead = document.createElement("thead");
		for(let i = 0; i < texts.length; i++) {
			let th = this.createTh(texts[i]);
			thead.appendChild(th);
		}

		return thead;
	}

	/**
	* Создать заголовок таблицы 
	* @params {String} text - заголовок таблицы
	* @return {Element} th
	* @example: createTh("Фильмы")
	*/ 
	createTh(text) {
		const th = document.createElement("th");
		let textNode = document.createTextNode(text);
		th.appendChild(textNode);
		return th;
	}

	// @params {Bool} visible
	setVisible() {
		let table = document.getElementsByClassName(this.tableClassSelector);
		table = table[0];
		// table.removeAttribute("class");
		let className = ".cats__table_visible";
		table.setAttribute("class", "cats__table " + className);
	}

}