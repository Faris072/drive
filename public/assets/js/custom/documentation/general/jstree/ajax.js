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

/***/ "./resources/assets/core/js/custom/documentation/general/jstree/ajax.js":
/*!******************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/jstree/ajax.js ***!
  \******************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTJSTreeAjax = function () {\n  // Private functions\n  var exampleAjax = function exampleAjax() {\n    $(\"#kt_docs_jstree_ajax\").jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        },\n        // so that create works\n        \"check_callback\": true,\n        'data': {\n          'url': function url(node) {\n            return 'https://preview.keenthemes.com/api/jstree/ajax_data.php'; // Demo API endpoint -- Replace this URL with your set endpoint\n          },\n          'data': function data(node) {\n            return {\n              'parent': node.id\n            };\n          }\n        }\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-primary\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-primary\"\n        }\n      },\n      \"state\": {\n        \"key\": \"demo3\"\n      },\n      \"plugins\": [\"dnd\", \"state\", \"types\"]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAjax();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeAjax.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qc3RyZWUvYWpheC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxZQUFZLEdBQUcsWUFBVztFQUMxQjtFQUNBLElBQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVc7SUFDekJDLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCQyxNQUExQixDQUFpQztNQUM3QixRQUFRO1FBQ0osVUFBVTtVQUNOLGNBQWM7UUFEUixDQUROO1FBSUo7UUFDQSxrQkFBa0IsSUFMZDtRQU1KLFFBQVE7VUFDSixPQUFPLGFBQVNDLElBQVQsRUFBZTtZQUNsQixPQUFPLHlEQUFQLENBRGtCLENBQ2dEO1VBQ3JFLENBSEc7VUFJSixRQUFRLGNBQVNBLElBQVQsRUFBZTtZQUNuQixPQUFPO2NBQ0gsVUFBVUEsSUFBSSxDQUFDQztZQURaLENBQVA7VUFHSDtRQVJHO01BTkosQ0FEcUI7TUFrQjdCLFNBQVM7UUFDTCxXQUFXO1VBQ1AsUUFBUTtRQURELENBRE47UUFJTCxRQUFRO1VBQ0osUUFBUTtRQURKO01BSkgsQ0FsQm9CO01BMEI3QixTQUFTO1FBQ0wsT0FBTztNQURGLENBMUJvQjtNQTZCN0IsV0FBVyxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLE9BQWpCO0lBN0JrQixDQUFqQztFQStCSCxDQWhDRDs7RUFrQ0EsT0FBTztJQUNIO0lBQ0FDLElBQUksRUFBRSxnQkFBVztNQUNiTCxXQUFXO0lBQ2Q7RUFKRSxDQUFQO0FBTUgsQ0ExQ2tCLEVBQW5CLEMsQ0E0Q0E7OztBQUNBTSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7RUFDakNSLFlBQVksQ0FBQ00sSUFBYjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qc3RyZWUvYWpheC5qcz9lYjZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RKU1RyZWVBamF4ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVBamF4ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIiNrdF9kb2NzX2pzdHJlZV9hamF4XCIpLmpzdHJlZSh7XHJcbiAgICAgICAgICAgIFwiY29yZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInRoZW1lc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNwb25zaXZlXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gc28gdGhhdCBjcmVhdGUgd29ya3NcclxuICAgICAgICAgICAgICAgIFwiY2hlY2tfY2FsbGJhY2tcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdkYXRhJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICd1cmwnOiBmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9wcmV2aWV3LmtlZW50aGVtZXMuY29tL2FwaS9qc3RyZWUvYWpheF9kYXRhLnBocCc7IC8vIERlbW8gQVBJIGVuZHBvaW50IC0tIFJlcGxhY2UgdGhpcyBVUkwgd2l0aCB5b3VyIHNldCBlbmRwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGFyZW50Jzogbm9kZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ0eXBlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImZhIGZhLWZvbGRlciB0ZXh0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZmlsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtZmlsZSAgdGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcImRlbW8zXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwbHVnaW5zXCI6IFtcImRuZFwiLCBcInN0YXRlXCIsIFwidHlwZXNcIl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZXhhbXBsZUFqYXgoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RKU1RyZWVBamF4LmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEpTVHJlZUFqYXgiLCJleGFtcGxlQWpheCIsIiQiLCJqc3RyZWUiLCJub2RlIiwiaWQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/jstree/ajax.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/jstree/ajax.js"]();
/******/ 	
/******/ })()
;