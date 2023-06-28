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

/***/ "./resources/assets/core/js/custom/authentication/reset-password/new-password.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/authentication/reset-password/new-password.js ***!
  \***************************************************************************************/
/***/ (() => {

eval(" // Class Definition\n\nvar KTAuthNewPassword = function () {\n  // Elements\n  var form;\n  var submitButton;\n  var validator;\n  var passwordMeter;\n\n  var handleForm = function handleForm(e) {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'password': {\n          validators: {\n            notEmpty: {\n              message: 'The password is required'\n            },\n            callback: {\n              message: 'Please enter valid password',\n              callback: function callback(input) {\n                if (input.value.length > 0) {\n                  return validatePassword();\n                }\n              }\n            }\n          }\n        },\n        'confirm-password': {\n          validators: {\n            notEmpty: {\n              message: 'The password confirmation is required'\n            },\n            identical: {\n              compare: function compare() {\n                return form.querySelector('[name=\"password\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            }\n          }\n        },\n        'toc': {\n          validators: {\n            notEmpty: {\n              message: 'You must accept the terms and conditions'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger({\n          event: {\n            password: false\n          }\n        }),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          // comment to enable invalid state icons\n          eleValidClass: '' // comment to enable valid state icons\n\n        })\n      }\n    });\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validator.revalidateField('password');\n      validator.validate().then(function (status) {\n        if (status == 'Valid') {\n          // Show loading indication\n          submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n          submitButton.disabled = true; // Simulate ajax request\n\n          setTimeout(function () {\n            // Hide loading indication\n            submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n            submitButton.disabled = false; // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            Swal.fire({\n              text: \"You have successfully reset your password!\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            }).then(function (result) {\n              if (result.isConfirmed) {\n                form.querySelector('[name=\"password\"]').value = \"\";\n                form.querySelector('[name=\"confirm-password\"]').value = \"\";\n                passwordMeter.reset(); // reset password meter\n                //form.submit();\n\n                var redirectUrl = form.getAttribute('data-kt-redirect-url');\n\n                if (redirectUrl) {\n                  location.href = redirectUrl;\n                }\n              }\n            });\n          }, 1500);\n        } else {\n          // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n          Swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n    form.querySelector('input[name=\"password\"]').addEventListener('input', function () {\n      if (this.value.length > 0) {\n        validator.updateFieldStatus('password', 'NotValidated');\n      }\n    });\n  };\n\n  var validatePassword = function validatePassword() {\n    return passwordMeter.getScore() === 100;\n  }; // Public Functions\n\n\n  return {\n    // public functions\n    init: function init() {\n      form = document.querySelector('#kt_new_password_form');\n      submitButton = document.querySelector('#kt_new_password_submit');\n      passwordMeter = KTPasswordMeter.getInstance(form.querySelector('[data-kt-password-meter=\"true\"]'));\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAuthNewPassword.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL25ldy1wYXNzd29yZC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBRyxZQUFXO0VBQy9CO0VBQ0EsSUFBSUMsSUFBSjtFQUNBLElBQUlDLFlBQUo7RUFDQSxJQUFJQyxTQUFKO0VBQ0EsSUFBSUMsYUFBSjs7RUFFQSxJQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFTQyxDQUFULEVBQVk7SUFDekI7SUFDQUgsU0FBUyxHQUFHSSxjQUFjLENBQUNDLGNBQWYsQ0FDakJQLElBRGlCLEVBRWpCO01BQ0NRLE1BQU0sRUFBRTtRQUNRLFlBQVk7VUFDUkMsVUFBVSxFQUFFO1lBQ1JDLFFBQVEsRUFBRTtjQUNOQyxPQUFPLEVBQUU7WUFESCxDQURGO1lBSVJDLFFBQVEsRUFBRTtjQUNORCxPQUFPLEVBQUUsNkJBREg7Y0FFTkMsUUFBUSxFQUFFLGtCQUFTQyxLQUFULEVBQWdCO2dCQUN0QixJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixDQUF6QixFQUE0QjtrQkFDeEIsT0FBT0MsZ0JBQWdCLEVBQXZCO2dCQUNIO2NBQ0o7WUFOSztVQUpGO1FBREosQ0FEcEI7UUFnQlEsb0JBQW9CO1VBQ2hCUCxVQUFVLEVBQUU7WUFDUkMsUUFBUSxFQUFFO2NBQ05DLE9BQU8sRUFBRTtZQURILENBREY7WUFJUk0sU0FBUyxFQUFFO2NBQ1BDLE9BQU8sRUFBRSxtQkFBVztnQkFDaEIsT0FBT2xCLElBQUksQ0FBQ21CLGFBQUwsQ0FBbUIsbUJBQW5CLEVBQXdDTCxLQUEvQztjQUNILENBSE07Y0FJUEgsT0FBTyxFQUFFO1lBSkY7VUFKSDtRQURJLENBaEI1QjtRQTZCUSxPQUFPO1VBQ0hGLFVBQVUsRUFBRTtZQUNSQyxRQUFRLEVBQUU7Y0FDTkMsT0FBTyxFQUFFO1lBREg7VUFERjtRQURUO01BN0JmLENBRFQ7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RCxRQUFkLE9BQTZCLEdBQXRDO0VBQ0gsQ0FGRCxDQWxJK0IsQ0FzSS9COzs7RUFDQSxPQUFPO0lBQ0g7SUFDQUMsSUFBSSxFQUFFLGdCQUFXO01BQ2J6RCxJQUFJLEdBQUcwRCxRQUFRLENBQUN2QyxhQUFULENBQXVCLHVCQUF2QixDQUFQO01BQ0FsQixZQUFZLEdBQUd5RCxRQUFRLENBQUN2QyxhQUFULENBQXVCLHlCQUF2QixDQUFmO01BQ0FoQixhQUFhLEdBQUd3RCxlQUFlLENBQUNDLFdBQWhCLENBQTRCNUQsSUFBSSxDQUFDbUIsYUFBTCxDQUFtQixpQ0FBbkIsQ0FBNUIsQ0FBaEI7TUFFQWYsVUFBVTtJQUNiO0VBUkUsQ0FBUDtBQVVILENBakp1QixFQUF4QixDLENBbUpBOzs7QUFDQXlELE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztFQUNqQy9ELGlCQUFpQixDQUFDMEQsSUFBbEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9uZXctcGFzc3dvcmQuanM/NTJkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIERlZmluaXRpb25cclxudmFyIEtUQXV0aE5ld1Bhc3N3b3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBFbGVtZW50c1xyXG4gICAgdmFyIGZvcm07XHJcbiAgICB2YXIgc3VibWl0QnV0dG9uO1xyXG4gICAgdmFyIHZhbGlkYXRvcjtcclxuICAgIHZhciBwYXNzd29yZE1ldGVyO1xyXG5cclxuICAgIHZhciBoYW5kbGVGb3JtID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXHJcbiAgICAgICAgdmFsaWRhdG9yID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXHJcblx0XHRcdGZvcm0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmaWVsZHM6IHtcdFx0XHRcdFx0IFxyXG4gICAgICAgICAgICAgICAgICAgICdwYXNzd29yZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBhc3N3b3JkIGlzIHJlcXVpcmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB2YWxpZCBwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdjb25maXJtLXBhc3N3b3JkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgcGFzc3dvcmQgY29uZmlybWF0aW9uIGlzIHJlcXVpcmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWNhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3N3b3JkXCJdJykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybSBhcmUgbm90IHRoZSBzYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAndG9jJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdZb3UgbXVzdCBhY2NlcHQgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cGx1Z2luczoge1xyXG5cdFx0XHRcdFx0dHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcblx0XHRcdFx0XHRib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVJbnZhbGlkQ2xhc3M6ICcnLCAgLy8gY29tbWVudCB0byBlbmFibGUgaW52YWxpZCBzdGF0ZSBpY29uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJyAvLyBjb21tZW50IHRvIGVuYWJsZSB2YWxpZCBzdGF0ZSBpY29uc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YWxpZGF0b3IucmV2YWxpZGF0ZUZpZWxkKCdwYXNzd29yZCcpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbihzdGF0dXMpIHtcclxuXHRcdCAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBhamF4IHJlcXVlc3RcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGxvYWRpbmcgaW5kaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbWVzc2FnZSBwb3B1cC4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSByZXNldCB5b3VyIHBhc3N3b3JkIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWx1ZT0gXCJcIjsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29uZmlybS1wYXNzd29yZFwiXScpLnZhbHVlPSBcIlwiOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIucmVzZXQoKTsgIC8vIHJlc2V0IHBhc3N3b3JkIG1ldGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3JtLnN1Ym1pdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3RVcmwgPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1yZWRpcmVjdC11cmwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7ICAgXHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3IgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xyXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0ICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwYXNzd29yZFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci51cGRhdGVGaWVsZFN0YXR1cygncGFzc3dvcmQnLCAnTm90VmFsaWRhdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdmFsaWRhdGVQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAgKHBhc3N3b3JkTWV0ZXIuZ2V0U2NvcmUoKSA9PT0gMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9uZXdfcGFzc3dvcmRfZm9ybScpO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfbmV3X3Bhc3N3b3JkX3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICBwYXNzd29yZE1ldGVyID0gS1RQYXNzd29yZE1ldGVyLmdldEluc3RhbmNlKGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEta3QtcGFzc3dvcmQtbWV0ZXI9XCJ0cnVlXCJdJykpO1xyXG5cclxuICAgICAgICAgICAgaGFuZGxlRm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEF1dGhOZXdQYXNzd29yZC5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RBdXRoTmV3UGFzc3dvcmQiLCJmb3JtIiwic3VibWl0QnV0dG9uIiwidmFsaWRhdG9yIiwicGFzc3dvcmRNZXRlciIsImhhbmRsZUZvcm0iLCJlIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJjYWxsYmFjayIsImlucHV0IiwidmFsdWUiLCJsZW5ndGgiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiaWRlbnRpY2FsIiwiY29tcGFyZSIsInF1ZXJ5U2VsZWN0b3IiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJldmVudCIsInBhc3N3b3JkIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiZWxlSW52YWxpZENsYXNzIiwiZWxlVmFsaWRDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInJldmFsaWRhdGVGaWVsZCIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJyZXNldCIsInJlZGlyZWN0VXJsIiwiZ2V0QXR0cmlidXRlIiwibG9jYXRpb24iLCJocmVmIiwidXBkYXRlRmllbGRTdGF0dXMiLCJnZXRTY29yZSIsImluaXQiLCJkb2N1bWVudCIsIktUUGFzc3dvcmRNZXRlciIsImdldEluc3RhbmNlIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/authentication/reset-password/new-password.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/authentication/reset-password/new-password.js"]();
/******/ 	
/******/ })()
;