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

/***/ "./resources/assets/core/js/custom/utilities/modals/create-project/files.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/utilities/modals/create-project/files.js ***!
  \**********************************************************************************/
/***/ ((module) => {

eval(" // Class definition\n\nvar KTModalCreateProjectFiles = function () {\n  // Variables\n  var nextButton;\n  var previousButton;\n  var form;\n  var stepper; // Private functions\n\n  var initForm = function initForm() {\n    // Project logo\n    // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage\n    var myDropzone = new Dropzone(\"#kt_modal_create_project_files_upload\", {\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    });\n  };\n\n  var handleForm = function handleForm() {\n    nextButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Disable button to avoid multiple click \n\n      nextButton.disabled = true; // Show loading indication\n\n      nextButton.setAttribute('data-kt-indicator', 'on'); // Simulate form submission\n\n      setTimeout(function () {\n        // Hide loading indication\n        nextButton.removeAttribute('data-kt-indicator'); // Enable button\n\n        nextButton.disabled = false; // Go to next step\n\n        stepper.goNext();\n      }, 1500);\n    });\n    previousButton.addEventListener('click', function () {\n      stepper.goPrevious();\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      form = KTModalCreateProject.getForm();\n      stepper = KTModalCreateProject.getStepperObj();\n      nextButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"files-next\"]');\n      previousButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"files-previous\"]');\n      initForm();\n      handleForm();\n    }\n  };\n}(); // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  window.KTModalCreateProjectFiles = module.exports = KTModalCreateProjectFiles;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL3V0aWxpdGllcy9tb2RhbHMvY3JlYXRlLXByb2plY3QvZmlsZXMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEseUJBQXlCLEdBQUcsWUFBWTtFQUMzQztFQUNBLElBQUlDLFVBQUo7RUFDQSxJQUFJQyxjQUFKO0VBQ0EsSUFBSUMsSUFBSjtFQUNBLElBQUlDLE9BQUosQ0FMMkMsQ0FPM0M7O0VBQ0EsSUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBVztJQUN6QjtJQUNBO0lBQ0EsSUFBSUMsVUFBVSxHQUFHLElBQUlDLFFBQUosQ0FBYSx1Q0FBYixFQUFzRDtNQUN0RUMsR0FBRyxFQUFFLHlDQURpRTtNQUN0QjtNQUN2Q0MsU0FBUyxFQUFFLE1BRmtEO01BRTFDO01BQ25CQyxRQUFRLEVBQUUsRUFIbUQ7TUFJN0RDLFdBQVcsRUFBRSxFQUpnRDtNQUk1QztNQUNqQkMsY0FBYyxFQUFFLElBTDZDO01BTTdEQyxNQUFNLEVBQUUsZ0JBQVNDLElBQVQsRUFBZUMsSUFBZixFQUFxQjtRQUN6QixJQUFJRCxJQUFJLENBQUNFLElBQUwsSUFBYSxrQkFBakIsRUFBcUM7VUFDakNELElBQUksQ0FBQyxrQkFBRCxDQUFKO1FBQ0gsQ0FGRCxNQUVPO1VBQ0hBLElBQUk7UUFDUDtNQUNKO0lBWjRELENBQXRELENBQWpCO0VBY0EsQ0FqQkQ7O0VBbUJBLElBQUlFLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7SUFDM0JoQixVQUFVLENBQUNpQixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFVQyxDQUFWLEVBQWE7TUFDakQ7TUFDQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRmlELENBSWpEOztNQUNBbkIsVUFBVSxDQUFDb0IsUUFBWCxHQUFzQixJQUF0QixDQUxpRCxDQU9qRDs7TUFDQXBCLFVBQVUsQ0FBQ3FCLFlBQVgsQ0FBd0IsbUJBQXhCLEVBQTZDLElBQTdDLEVBUmlELENBVWpEOztNQUNBQyxVQUFVLENBQUMsWUFBVztRQUNyQjtRQUNBdEIsVUFBVSxDQUFDdUIsZUFBWCxDQUEyQixtQkFBM0IsRUFGcUIsQ0FJckI7O1FBQ0F2QixVQUFVLENBQUNvQixRQUFYLEdBQXNCLEtBQXRCLENBTHFCLENBT3JCOztRQUNBakIsT0FBTyxDQUFDcUIsTUFBUjtNQUNBLENBVFMsRUFTUCxJQVRPLENBQVY7SUFVQSxDQXJCRDtJQXVCQXZCLGNBQWMsQ0FBQ2dCLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQVk7TUFDcERkLE9BQU8sQ0FBQ3NCLFVBQVI7SUFDQSxDQUZEO0VBR0EsQ0EzQkQ7O0VBNkJBLE9BQU87SUFDTjtJQUNBQyxJQUFJLEVBQUUsZ0JBQVk7TUFDakJ4QixJQUFJLEdBQUd5QixvQkFBb0IsQ0FBQ0MsT0FBckIsRUFBUDtNQUNBekIsT0FBTyxHQUFHd0Isb0JBQW9CLENBQUNFLGFBQXJCLEVBQVY7TUFDQTdCLFVBQVUsR0FBRzJCLG9CQUFvQixDQUFDRyxVQUFyQixHQUFrQ0MsYUFBbEMsQ0FBZ0QsZ0NBQWhELENBQWI7TUFDQTlCLGNBQWMsR0FBRzBCLG9CQUFvQixDQUFDRyxVQUFyQixHQUFrQ0MsYUFBbEMsQ0FBZ0Qsb0NBQWhELENBQWpCO01BRUEzQixRQUFRO01BQ1JZLFVBQVU7SUFDVjtFQVZLLENBQVA7QUFZQSxDQXBFK0IsRUFBaEMsQyxDQXNFQTs7O0FBQ0EsSUFBSSxTQUFpQyxPQUFPZ0IsTUFBTSxDQUFDQyxPQUFkLEtBQTBCLFdBQS9ELEVBQTRFO0VBQzNFQyxNQUFNLENBQUNuQyx5QkFBUCxHQUFtQ2lDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxDLHlCQUFwRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS91dGlsaXRpZXMvbW9kYWxzL2NyZWF0ZS1wcm9qZWN0L2ZpbGVzLmpzPzFjZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVE1vZGFsQ3JlYXRlUHJvamVjdEZpbGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdC8vIFZhcmlhYmxlc1xyXG5cdHZhciBuZXh0QnV0dG9uO1xyXG5cdHZhciBwcmV2aW91c0J1dHRvbjtcclxuXHR2YXIgZm9ybTtcclxuXHR2YXIgc3RlcHBlcjtcclxuXHJcblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHR2YXIgaW5pdEZvcm0gPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIFByb2plY3QgbG9nb1xyXG5cdFx0Ly8gRm9yIG1vcmUgaW5mbyBhYm91dCBEcm9wem9uZSBwbHVnaW4gdmlzaXQ6ICBodHRwczovL3d3dy5kcm9wem9uZWpzLmNvbS8jdXNhZ2VcclxuXHRcdHZhciBteURyb3B6b25lID0gbmV3IERyb3B6b25lKFwiI2t0X21vZGFsX2NyZWF0ZV9wcm9qZWN0X2ZpbGVzX3VwbG9hZFwiLCB7IFxyXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9rZWVudGhlbWVzLmNvbS9zY3JpcHRzL3ZvaWQucGhwXCIsIC8vIFNldCB0aGUgdXJsIGZvciB5b3VyIHVwbG9hZCBzY3JpcHQgbG9jYXRpb25cclxuICAgICAgICAgICAgcGFyYW1OYW1lOiBcImZpbGVcIiwgLy8gVGhlIG5hbWUgdGhhdCB3aWxsIGJlIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGZpbGVcclxuICAgICAgICAgICAgbWF4RmlsZXM6IDEwLFxyXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMTAsIC8vIE1CXHJcbiAgICAgICAgICAgIGFkZFJlbW92ZUxpbmtzOiB0cnVlLFxyXG4gICAgICAgICAgICBhY2NlcHQ6IGZ1bmN0aW9uKGZpbGUsIGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT0gXCJqdXN0aW5iaWViZXIuanBnXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKFwiTmFoYSwgeW91IGRvbid0LlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblx0XHR9KTsgIFxyXG5cdH1cclxuXHJcblx0dmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbigpIHtcclxuXHRcdG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHQvLyBQcmV2ZW50IGRlZmF1bHQgYnV0dG9uIGFjdGlvblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHQvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcclxuXHRcdFx0bmV4dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHQvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxyXG5cdFx0XHRuZXh0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcclxuXHJcblx0XHRcdC8vIFNpbXVsYXRlIGZvcm0gc3VibWlzc2lvblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIEhpZGUgbG9hZGluZyBpbmRpY2F0aW9uXHJcblx0XHRcdFx0bmV4dEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XHJcblxyXG5cdFx0XHRcdC8vIEVuYWJsZSBidXR0b25cclxuXHRcdFx0XHRuZXh0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gR28gdG8gbmV4dCBzdGVwXHJcblx0XHRcdFx0c3RlcHBlci5nb05leHQoKTtcclxuXHRcdFx0fSwgMTUwMCk7IFx0XHRcclxuXHRcdH0pO1xyXG5cclxuXHRcdHByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRzdGVwcGVyLmdvUHJldmlvdXMoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIFB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Zm9ybSA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldEZvcm0oKTtcclxuXHRcdFx0c3RlcHBlciA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldFN0ZXBwZXJPYmooKTtcclxuXHRcdFx0bmV4dEJ1dHRvbiA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldFN0ZXBwZXIoKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiZmlsZXMtbmV4dFwiXScpO1xyXG5cdFx0XHRwcmV2aW91c0J1dHRvbiA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldFN0ZXBwZXIoKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiZmlsZXMtcHJldmlvdXNcIl0nKTtcclxuXHJcblx0XHRcdGluaXRGb3JtKCk7XHJcblx0XHRcdGhhbmRsZUZvcm0oKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBXZWJwYWNrIHN1cHBvcnRcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHR3aW5kb3cuS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcyA9IG1vZHVsZS5leHBvcnRzID0gS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcztcclxufVxyXG4iXSwibmFtZXMiOlsiS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcyIsIm5leHRCdXR0b24iLCJwcmV2aW91c0J1dHRvbiIsImZvcm0iLCJzdGVwcGVyIiwiaW5pdEZvcm0iLCJteURyb3B6b25lIiwiRHJvcHpvbmUiLCJ1cmwiLCJwYXJhbU5hbWUiLCJtYXhGaWxlcyIsIm1heEZpbGVzaXplIiwiYWRkUmVtb3ZlTGlua3MiLCJhY2NlcHQiLCJmaWxlIiwiZG9uZSIsIm5hbWUiLCJoYW5kbGVGb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVkIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsImdvTmV4dCIsImdvUHJldmlvdXMiLCJpbml0IiwiS1RNb2RhbENyZWF0ZVByb2plY3QiLCJnZXRGb3JtIiwiZ2V0U3RlcHBlck9iaiIsImdldFN0ZXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/utilities/modals/create-project/files.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/core/js/custom/utilities/modals/create-project/files.js");
/******/ 	
/******/ })()
;