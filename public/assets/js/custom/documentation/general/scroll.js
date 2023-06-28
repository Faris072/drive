/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/documentation/general/scroll.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/scroll.js ***!
  \*************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralScrollDemos = function () {\n  // Private functions\n  var exampleChangePosition = function exampleChangePosition() {\n    var scroll = document.querySelector(\"#kt_scroll_change_pos\");\n    var btnTop = document.querySelector(\"#kt_scroll_change_pos_top\");\n    var btnBottom = document.querySelector(\"#kt_scroll_change_pos_bottom\");\n    btnTop.addEventListener(\"click\", function (e) {\n      scroll.scrollTop = 0;\n    });\n    btnBottom.addEventListener(\"click\", function (e) {\n      scroll.scrollTop = parseInt(scroll.scrollHeight);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleChangePosition();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralScrollDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9zY3JvbGwuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsWUFBVztFQUNsQztFQUNBLElBQUlDLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBVztJQUNuQyxJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBYjtJQUNBLElBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFiO0lBQ0EsSUFBSUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsOEJBQXZCLENBQWhCO0lBRUFDLE1BQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVUMsQ0FBVixFQUFhO01BQzFDTixNQUFNLENBQUNPLFNBQVAsR0FBbUIsQ0FBbkI7SUFDSCxDQUZEO0lBSUFILFNBQVMsQ0FBQ0MsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBVUMsQ0FBVixFQUFhO01BQzdDTixNQUFNLENBQUNPLFNBQVAsR0FBbUJDLFFBQVEsQ0FBQ1IsTUFBTSxDQUFDUyxZQUFSLENBQTNCO0lBQ0gsQ0FGRDtFQUdILENBWkQ7O0VBY0EsT0FBTztJQUNIO0lBQ0FDLElBQUksRUFBRSxnQkFBVztNQUNiWCxxQkFBcUI7SUFDeEI7RUFKRSxDQUFQO0FBTUgsQ0F0QjBCLEVBQTNCLEMsQ0F3QkE7OztBQUNBWSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7RUFDakNkLG9CQUFvQixDQUFDWSxJQUFyQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9zY3JvbGwuanM/Mjk5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUR2VuZXJhbFNjcm9sbERlbW9zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVDaGFuZ2VQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X3Njcm9sbF9jaGFuZ2VfcG9zXCIpO1xyXG4gICAgICAgIHZhciBidG5Ub3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X3Njcm9sbF9jaGFuZ2VfcG9zX3RvcFwiKTtcclxuICAgICAgICB2YXIgYnRuQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9zY3JvbGxfY2hhbmdlX3Bvc19ib3R0b21cIik7XHJcblxyXG4gICAgICAgIGJ0blRvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2Nyb2xsLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJ0bkJvdHRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2Nyb2xsLnNjcm9sbFRvcCA9IHBhcnNlSW50KHNjcm9sbC5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQ2hhbmdlUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RHZW5lcmFsU2Nyb2xsRGVtb3MuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUR2VuZXJhbFNjcm9sbERlbW9zIiwiZXhhbXBsZUNoYW5nZVBvc2l0aW9uIiwic2Nyb2xsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnRuVG9wIiwiYnRuQm90dG9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzY3JvbGxUb3AiLCJwYXJzZUludCIsInNjcm9sbEhlaWdodCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/scroll.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/scroll.js"]();
/******/ 	
/******/ })()
;