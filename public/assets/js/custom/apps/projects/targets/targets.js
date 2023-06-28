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

/***/ "./resources/assets/core/js/custom/apps/projects/targets/targets.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/core/js/custom/apps/projects/targets/targets.js ***!
  \**************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTProjectTargets = function () {\n  var initDatatable = function initDatatable() {\n    var table = document.getElementById('kt_profile_overview_table'); // set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[1].innerHTML, \"MMM D, YYYY\").format();\n      dateRow[1].setAttribute('data-order', realDate);\n    }); // init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      \"paging\": false\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initDatatable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectTargets.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2FwcHMvcHJvamVjdHMvdGFyZ2V0cy90YXJnZXRzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGdCQUFnQixHQUFHLFlBQVk7RUFFL0IsSUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFZO0lBQzVCLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLDJCQUF4QixDQUFkLENBRDRCLENBRzVCOztJQUNBLElBQU1DLFNBQVMsR0FBR0gsS0FBSyxDQUFDSSxnQkFBTixDQUF1QixVQUF2QixDQUFsQjtJQUNBRCxTQUFTLENBQUNFLE9BQVYsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO01BQ3JCLElBQU1DLE9BQU8sR0FBR0QsR0FBRyxDQUFDRixnQkFBSixDQUFxQixJQUFyQixDQUFoQjtNQUNBLElBQU1JLFFBQVEsR0FBR0MsTUFBTSxDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFNBQVosRUFBdUIsYUFBdkIsQ0FBTixDQUE0Q0MsTUFBNUMsRUFBakI7TUFDQUosT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxZQUFYLENBQXdCLFlBQXhCLEVBQXNDSixRQUF0QztJQUNILENBSkQsRUFMNEIsQ0FXNUI7O0lBQ0EsSUFBTUssU0FBUyxHQUFHQyxDQUFDLENBQUNkLEtBQUQsQ0FBRCxDQUFTZSxTQUFULENBQW1CO01BQ2pDLFFBQVEsS0FEeUI7TUFFakMsU0FBUyxFQUZ3QjtNQUdqQyxVQUFVO0lBSHVCLENBQW5CLENBQWxCO0VBTUgsQ0FsQkQsQ0FGK0IsQ0FzQi9COzs7RUFDQSxPQUFPO0lBQ0hDLElBQUksRUFBRSxnQkFBWTtNQUNkakIsYUFBYTtJQUNoQjtFQUhFLENBQVA7QUFLSCxDQTVCc0IsRUFBdkIsQyxDQStCQTs7O0FBQ0FrQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7RUFDakNwQixnQkFBZ0IsQ0FBQ2tCLElBQWpCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vYXBwcy9wcm9qZWN0cy90YXJnZXRzL3RhcmdldHMuanM/YWZkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUUHJvamVjdFRhcmdldHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGluaXREYXRhdGFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfcHJvZmlsZV9vdmVydmlld190YWJsZScpO1xyXG5cclxuICAgICAgICAvLyBzZXQgZGF0ZSBkYXRhIG9yZGVyXHJcbiAgICAgICAgY29uc3QgdGFibGVSb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcclxuICAgICAgICB0YWJsZVJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlUm93ID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWxEYXRlID0gbW9tZW50KGRhdGVSb3dbMV0uaW5uZXJIVE1MLCBcIk1NTSBELCBZWVlZXCIpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICBkYXRlUm93WzFdLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIHJlYWxEYXRlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaW5pdCBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbyBvbiBkYXRhdGFibGVzOiBodHRwczovL2RhdGF0YWJsZXMubmV0L21hbnVhbC9cclxuICAgICAgICBjb25zdCBkYXRhdGFibGUgPSAkKHRhYmxlKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBcImluZm9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxyXG4gICAgICAgICAgICBcInBhZ2luZ1wiOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbml0RGF0YXRhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KCk7XHJcblxyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUUHJvamVjdFRhcmdldHMuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUUHJvamVjdFRhcmdldHMiLCJpbml0RGF0YXRhYmxlIiwidGFibGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGFibGVSb3dzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyb3ciLCJkYXRlUm93IiwicmVhbERhdGUiLCJtb21lbnQiLCJpbm5lckhUTUwiLCJmb3JtYXQiLCJzZXRBdHRyaWJ1dGUiLCJkYXRhdGFibGUiLCIkIiwiRGF0YVRhYmxlIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/apps/projects/targets/targets.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/apps/projects/targets/targets.js"]();
/******/ 	
/******/ })()
;