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

/***/ "./resources/assets/core/js/custom/documentation/forms/formrepeater/basic.js":
/*!***********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/forms/formrepeater/basic.js ***!
  \***********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormRepeaterBasic = function () {\n  // Private functions\n  var example1 = function example1() {\n    $('#kt_docs_repeater_basic').repeater({\n      initEmpty: false,\n      defaultValues: {\n        'text-input': 'foo'\n      },\n      show: function show() {\n        $(this).slideDown();\n      },\n      hide: function hide(deleteElement) {\n        $(this).slideUp(deleteElement);\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormRepeaterBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvZm9ybXJlcGVhdGVyL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLG1CQUFtQixHQUFHLFlBQVk7RUFDbEM7RUFDQSxJQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0lBQ3ZCQyxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsUUFBN0IsQ0FBc0M7TUFDbENDLFNBQVMsRUFBRSxLQUR1QjtNQUdsQ0MsYUFBYSxFQUFFO1FBQ1gsY0FBYztNQURILENBSG1CO01BT2xDQyxJQUFJLEVBQUUsZ0JBQVk7UUFDZEosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxTQUFSO01BQ0gsQ0FUaUM7TUFXbENDLElBQUksRUFBRSxjQUFVQyxhQUFWLEVBQXlCO1FBQzNCUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLE9BQVIsQ0FBZ0JELGFBQWhCO01BQ0g7SUFiaUMsQ0FBdEM7RUFlSCxDQWhCRDs7RUFrQkEsT0FBTztJQUNIO0lBQ0FFLElBQUksRUFBRSxnQkFBWTtNQUNkVixRQUFRO0lBQ1g7RUFKRSxDQUFQO0FBTUgsQ0ExQnlCLEVBQTFCLEMsQ0E0QkE7OztBQUNBVyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7RUFDbENiLG1CQUFtQixDQUFDVyxJQUFwQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvZm9ybXJlcGVhdGVyL2Jhc2ljLmpzPzUyYWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZvcm1SZXBlYXRlckJhc2ljID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcja3RfZG9jc19yZXBlYXRlcl9iYXNpYycpLnJlcGVhdGVyKHtcclxuICAgICAgICAgICAgaW5pdEVtcHR5OiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgICAgICAgICAgICd0ZXh0LWlucHV0JzogJ2ZvbydcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBoaWRlOiBmdW5jdGlvbiAoZGVsZXRlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZVVwKGRlbGV0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlMSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGb3JtUmVwZWF0ZXJCYXNpYy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGb3JtUmVwZWF0ZXJCYXNpYyIsImV4YW1wbGUxIiwiJCIsInJlcGVhdGVyIiwiaW5pdEVtcHR5IiwiZGVmYXVsdFZhbHVlcyIsInNob3ciLCJzbGlkZURvd24iLCJoaWRlIiwiZGVsZXRlRWxlbWVudCIsInNsaWRlVXAiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/forms/formrepeater/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/forms/formrepeater/basic.js"]();
/******/ 	
/******/ })()
;