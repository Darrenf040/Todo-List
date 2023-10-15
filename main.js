/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\nconst t = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nt.todoInputFields();\nt.createTask();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\n    constructor(dueDate, description, priority){\n        const allTasks = document.querySelectorAll(\".task-container\");\n        this.title = `task${allTasks.length + 1}`;\n        this.dueDate = dueDate;\n        this.description = description;\n        this.priority = priority;\n    }\n    todoInputFields(){\n        const todoBtn = document.querySelector(\".todo-btn\");\n        //show the input fields after clicking add todo\n        todoBtn.addEventListener(\"click\", todoDialog);\n    } \n    createTask(){        \n        const modal = document.querySelector(\".todo-dialog\");\n        const confirm = document.querySelector(\".add-task\");\n\n        //when user hits confirm do these actions \n        confirm.addEventListener(\"click\", () => {\n            //save the input values after submit\n            const inputValues = getInputValues();\n            const title = inputValues[0];\n            const date = inputValues[1];\n            const description = inputValues[2]\n            const priority = inputValues[3];\n\n            //create instances of the task container after each submit\n            this.cardContainer = taskContainer(); \n            //elements of the new container instance\n            const titleElement = this.cardContainer.querySelector(\".todo-title\");\n            const dateElement = this.cardContainer.querySelector(\".due-date\");\n            \n            //create an instances of the class\n            const t = new Todo(date,description,priority);\n            //add priority name as the class name for css styling\n            this.cardContainer.classList.add(t.priority);\n\n            //returns true when user doesnt enter a title name\n            if(title == ''){ \n                modal.close();\n                //set default title name using constructor default value\n                titleElement.textContent = t.title;\n                dateElement.textContent = t.dueDate;\n                taskCard(this.cardContainer);\n            }\n            else{\n                modal.close();\n                //overite default title value with user input title\n                t.title = title;\n\n                //change the elements text for each instance using \n                //'t' class instance property values \n                titleElement.textContent = t.title;\n                dateElement.textContent = t.dueDate;\n                taskCard(this.cardContainer);\n            }\n        })//event listener\n    }\n\n}\nfunction todoDialog(){\n    const modal = document.querySelector(\".todo-dialog\");\n    modal.show();\n}\nfunction getInputValues(){\n    let inputVals = [];\n    //select every input element and get their value\n    const titleVal = document.getElementById(\"title\").value;\n    const dateVal = document.getElementById(\"date\").value;\n    const descriptionVal = document.getElementById(\"description\").value;\n    const priorityVal = document.getElementById(\"priority\").value;\n\n    //add the input values to an array\n    inputVals.push(titleVal,dateVal,descriptionVal,priorityVal);\n\n    return inputVals;\n}\nfunction taskContainer(){\n    const taskContainer = document.createElement(\"div\");\n    taskContainer.classList.add(\"task-container\")\n\n    taskContainer.innerHTML = `<div>\n    <h1 class=\"todo-title\"></h1>\n</div>\n<div class=\"todo-container-btns\">\n    <div>\n        <p class=\"due-date\"></p>\n    </div>\n    <button type=\"button\">Details</button>\n    <input type=\"checkbox\">\n</div>`;\nreturn taskContainer;\n}\nfunction taskCard(currentTaskContent){\n    const content = document.querySelector(\".content\");\n    content.append(currentTaskContent);\n}\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;