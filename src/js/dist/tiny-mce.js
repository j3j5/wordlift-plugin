!function(n){var e={};function i(t){if(e[t])return e[t].exports;var c=e[t]={i:t,l:!1,exports:{}};return n[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=n,i.c=e,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)i.d(t,c,function(e){return n[e]}.bind(null,c));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="",i(i.s=120)}({111:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAnnotationElement; });\n/**\n * This file provides helper functions.\n *\n * @author David Riccitelli <david@wordlift.io>\n * @since 3.23.0\n */\n\n/**\n * Check whether the provided HTMLElement is an annotation.\n *\n * An {@link HTMLElement} is considered an annotation if it satisfies the following\n * requirements:\n *  - it has a `span` tagName.\n *  - it has an `id` attribute.\n *  - it has a `textannotation` class name.\n *\n * @since 3.23.0\n * @param {HTMLElement} el The {@link HTMLElement}.\n * @returns {boolean} True if it\'s annotation span otherwise false.\n */\nvar isAnnotationElement = function isAnnotationElement(el) {\n  return "undefined" !== typeof el && "undefined" !== typeof el.tagName && "undefined" !== typeof el.id && "undefined" !== typeof el.classList && "SPAN" === el.tagName && el.classList.contains("textannotation");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2hlbHBlcnMuanM/YTJjYyJdLCJuYW1lcyI6WyJpc0Fubm90YXRpb25FbGVtZW50IiwiZWwiLCJ0YWdOYW1lIiwiaWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7O0FBYU8sSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxFQUFFLEVBQUk7QUFDdkMsU0FDRSxnQkFBZ0IsT0FBT0EsRUFBdkIsSUFDQSxnQkFBZ0IsT0FBT0EsRUFBRSxDQUFDQyxPQUQxQixJQUVBLGdCQUFnQixPQUFPRCxFQUFFLENBQUNFLEVBRjFCLElBR0EsZ0JBQWdCLE9BQU9GLEVBQUUsQ0FBQ0csU0FIMUIsSUFJQSxXQUFXSCxFQUFFLENBQUNDLE9BSmQsSUFLQUQsRUFBRSxDQUFDRyxTQUFILENBQWFDLFFBQWIsQ0FBc0IsZ0JBQXRCLENBTkY7QUFRRCxDQVRNIiwiZmlsZSI6IjExMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmaWxlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMuXG4gKlxuICogQGF1dGhvciBEYXZpZCBSaWNjaXRlbGxpIDxkYXZpZEB3b3JkbGlmdC5pbz5cbiAqIEBzaW5jZSAzLjIzLjBcbiAqL1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIHByb3ZpZGVkIEhUTUxFbGVtZW50IGlzIGFuIGFubm90YXRpb24uXG4gKlxuICogQW4ge0BsaW5rIEhUTUxFbGVtZW50fSBpcyBjb25zaWRlcmVkIGFuIGFubm90YXRpb24gaWYgaXQgc2F0aXNmaWVzIHRoZSBmb2xsb3dpbmdcbiAqIHJlcXVpcmVtZW50czpcbiAqICAtIGl0IGhhcyBhIGBzcGFuYCB0YWdOYW1lLlxuICogIC0gaXQgaGFzIGFuIGBpZGAgYXR0cmlidXRlLlxuICogIC0gaXQgaGFzIGEgYHRleHRhbm5vdGF0aW9uYCBjbGFzcyBuYW1lLlxuICpcbiAqIEBzaW5jZSAzLjIzLjBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIFRoZSB7QGxpbmsgSFRNTEVsZW1lbnR9LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgaXQncyBhbm5vdGF0aW9uIHNwYW4gb3RoZXJ3aXNlIGZhbHNlLlxuICovXG5leHBvcnQgY29uc3QgaXNBbm5vdGF0aW9uRWxlbWVudCA9IGVsID0+IHtcbiAgcmV0dXJuIChcbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZWwgJiZcbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZWwudGFnTmFtZSAmJlxuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBlbC5pZCAmJlxuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBlbC5jbGFzc0xpc3QgJiZcbiAgICBcIlNQQU5cIiA9PT0gZWwudGFnTmFtZSAmJlxuICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcInRleHRhbm5vdGF0aW9uXCIpXG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///111\n')},120:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);\n/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(121);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * This file provides a TinyMCE plugin for integration with WordLift.\n *\n * TinyMCE is loaded in different places within WordPress. We\'re specifically\n * targeting TinyMCE used as editor in Gutenberg\'s `classic` block.\n *\n * We\'re aiming to send an `action` every time the text selection changes. The\n * action should be caught by other components in page to update the UI (namely\n * the `Add ...` button in the classification box.\n *\n * The plugin name `wl_tinymce_2` is also defined in\n * src/includes/class-wordlift-tinymce-adapter.php and *must* match.\n *\n * @author David Riccitelli <david@wordlift.io>\n * @since 3.23.0\n */\n\n/**\n * External dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n\n\nvar tinymce = global["tinymce"];\ntinymce.PluginManager.add("wl_tinymce_2", function (ed) {\n  // Capture `NodeChange` events and broadcast the selected text.\n  ed.on("NodeChange", function (e) {\n    Object(backbone__WEBPACK_IMPORTED_MODULE_0__["trigger"])(_common_constants__WEBPACK_IMPORTED_MODULE_1__[/* SELECTION_CHANGED */ "d"], {\n      selection: ed.selection.getContent({\n        format: "text"\n      })\n    }); // Fire the annotation change.\n\n    var payload = "undefined" !== typeof e && Object(_common_helpers__WEBPACK_IMPORTED_MODULE_2__[/* isAnnotationElement */ "a"])(e.element) ? // Set the payload to `{ annotationId }` if it\'s an annotation otherwise to null.\n    e.element.id : undefined;\n    Object(backbone__WEBPACK_IMPORTED_MODULE_0__["trigger"])(_common_constants__WEBPACK_IMPORTED_MODULE_1__[/* ANNOTATION_CHANGED */ "a"], payload);\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGlueS1tY2UvaW5kZXguanM/MDcyOSJdLCJuYW1lcyI6WyJ0aW55bWNlIiwiZ2xvYmFsIiwiUGx1Z2luTWFuYWdlciIsImFkZCIsImVkIiwib24iLCJlIiwidHJpZ2dlciIsIlNFTEVDVElPTl9DSEFOR0VEIiwic2VsZWN0aW9uIiwiZ2V0Q29udGVudCIsImZvcm1hdCIsInBheWxvYWQiLCJpc0Fubm90YXRpb25FbGVtZW50IiwiZWxlbWVudCIsImlkIiwidW5kZWZpbmVkIiwiQU5OT1RBVElPTl9DSEFOR0VEIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7O0FBR0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsTUFBTSxDQUFDLFNBQUQsQ0FBdEI7QUFDQUQsT0FBTyxDQUFDRSxhQUFSLENBQXNCQyxHQUF0QixDQUEwQixjQUExQixFQUEwQyxVQUFTQyxFQUFULEVBQWE7QUFDckQ7QUFDQUEsSUFBRSxDQUFDQyxFQUFILENBQU0sWUFBTixFQUFvQixVQUFBQyxDQUFDLEVBQUk7QUFDdkJDLDREQUFPLENBQUNDLDJFQUFELEVBQW9CO0FBQUVDLGVBQVMsRUFBRUwsRUFBRSxDQUFDSyxTQUFILENBQWFDLFVBQWIsQ0FBd0I7QUFBRUMsY0FBTSxFQUFFO0FBQVYsT0FBeEI7QUFBYixLQUFwQixDQUFQLENBRHVCLENBR3ZCOztBQUNBLFFBQU1DLE9BQU8sR0FDWCxnQkFBZ0IsT0FBT04sQ0FBdkIsSUFBNEJPLG1GQUFtQixDQUFDUCxDQUFDLENBQUNRLE9BQUgsQ0FBL0MsR0FDSTtBQUNBUixLQUFDLENBQUNRLE9BQUYsQ0FBVUMsRUFGZCxHQUdJQyxTQUpOO0FBS0FULDREQUFPLENBQUNVLDRFQUFELEVBQXFCTCxPQUFyQixDQUFQO0FBQ0QsR0FWRDtBQVdELENBYkQsRSIsImZpbGUiOiIxMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBwcm92aWRlcyBhIFRpbnlNQ0UgcGx1Z2luIGZvciBpbnRlZ3JhdGlvbiB3aXRoIFdvcmRMaWZ0LlxuICpcbiAqIFRpbnlNQ0UgaXMgbG9hZGVkIGluIGRpZmZlcmVudCBwbGFjZXMgd2l0aGluIFdvcmRQcmVzcy4gV2UncmUgc3BlY2lmaWNhbGx5XG4gKiB0YXJnZXRpbmcgVGlueU1DRSB1c2VkIGFzIGVkaXRvciBpbiBHdXRlbmJlcmcncyBgY2xhc3NpY2AgYmxvY2suXG4gKlxuICogV2UncmUgYWltaW5nIHRvIHNlbmQgYW4gYGFjdGlvbmAgZXZlcnkgdGltZSB0aGUgdGV4dCBzZWxlY3Rpb24gY2hhbmdlcy4gVGhlXG4gKiBhY3Rpb24gc2hvdWxkIGJlIGNhdWdodCBieSBvdGhlciBjb21wb25lbnRzIGluIHBhZ2UgdG8gdXBkYXRlIHRoZSBVSSAobmFtZWx5XG4gKiB0aGUgYEFkZCAuLi5gIGJ1dHRvbiBpbiB0aGUgY2xhc3NpZmljYXRpb24gYm94LlxuICpcbiAqIFRoZSBwbHVnaW4gbmFtZSBgd2xfdGlueW1jZV8yYCBpcyBhbHNvIGRlZmluZWQgaW5cbiAqIHNyYy9pbmNsdWRlcy9jbGFzcy13b3JkbGlmdC10aW55bWNlLWFkYXB0ZXIucGhwIGFuZCAqbXVzdCogbWF0Y2guXG4gKlxuICogQGF1dGhvciBEYXZpZCBSaWNjaXRlbGxpIDxkYXZpZEB3b3JkbGlmdC5pbz5cbiAqIEBzaW5jZSAzLjIzLjBcbiAqL1xuXG4vKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyB0cmlnZ2VyIH0gZnJvbSBcImJhY2tib25lXCI7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IEFOTk9UQVRJT05fQ0hBTkdFRCwgU0VMRUNUSU9OX0NIQU5HRUQgfSBmcm9tIFwiLi4vY29tbW9uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNBbm5vdGF0aW9uRWxlbWVudCB9IGZyb20gXCIuLi9jb21tb24vaGVscGVyc1wiO1xuXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcblxuY29uc3QgdGlueW1jZSA9IGdsb2JhbFtcInRpbnltY2VcIl07XG50aW55bWNlLlBsdWdpbk1hbmFnZXIuYWRkKFwid2xfdGlueW1jZV8yXCIsIGZ1bmN0aW9uKGVkKSB7XG4gIC8vIENhcHR1cmUgYE5vZGVDaGFuZ2VgIGV2ZW50cyBhbmQgYnJvYWRjYXN0IHRoZSBzZWxlY3RlZCB0ZXh0LlxuICBlZC5vbihcIk5vZGVDaGFuZ2VcIiwgZSA9PiB7XG4gICAgdHJpZ2dlcihTRUxFQ1RJT05fQ0hBTkdFRCwgeyBzZWxlY3Rpb246IGVkLnNlbGVjdGlvbi5nZXRDb250ZW50KHsgZm9ybWF0OiBcInRleHRcIiB9KSB9KTtcblxuICAgIC8vIEZpcmUgdGhlIGFubm90YXRpb24gY2hhbmdlLlxuICAgIGNvbnN0IHBheWxvYWQgPVxuICAgICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGUgJiYgaXNBbm5vdGF0aW9uRWxlbWVudChlLmVsZW1lbnQpXG4gICAgICAgID8gLy8gU2V0IHRoZSBwYXlsb2FkIHRvIGB7IGFubm90YXRpb25JZCB9YCBpZiBpdCdzIGFuIGFubm90YXRpb24gb3RoZXJ3aXNlIHRvIG51bGwuXG4gICAgICAgICAgZS5lbGVtZW50LmlkXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRyaWdnZXIoQU5OT1RBVElPTl9DSEFOR0VELCBwYXlsb2FkKTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///120\n')},121:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGlueS1tY2UvaW5kZXguc2Nzcz9hMzQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///121\n")},15:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SELECTION_CHANGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANNOTATION_CHANGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PLUGIN_NAMESPACE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDITOR_STORE; });\n/* unused harmony export EDITOR_ELEMENT_ID */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WORDLIFT_STORE; });\n/**\n * This file defines constants used across different files and components.\n *\n * @author David Riccitelli <david@wordlift.io>\n * @since 3.23.0\n */\n\n/**\n * WordPress\' action hook to signal that a selection has changed.\n *\n * @since 3.23.0\n * @type {string}\n */\nvar SELECTION_CHANGED = "wordlift.selectionChanged";\n/**\n * WordPress\' action hook to signal that an annotation has changed. The action\n * provides the annotation id as `{ annotationId }`. The annotation id usually\n * matches the element id that caused the action to be fired.\n *\n * @since 3.23.0\n * @type {string}\n */\n\nvar ANNOTATION_CHANGED = "wordlift.annotationChanged";\n/**\n * The plugin namespace.\n *\n * @type {string}\n */\n\nvar PLUGIN_NAMESPACE = "wordlift";\n/**\n * Define the G\'berg editor store name.\n *\n * @since 3.23.0\n * @type {string}\n */\n\nvar EDITOR_STORE = "core/editor";\n/**\n * Define the editor element id.\n *\n * @since 3.23.0\n * @type {string}\n */\n\nvar EDITOR_ELEMENT_ID = "editor";\n/**\n * Define the WordLift Store name used for {@link select} and {@link dispatch}\n * functions.\n *\n * @type {string}\n */\n\nvar WORDLIFT_STORE = "wordlift/editor";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbnN0YW50cy5qcz85YTM2Il0sIm5hbWVzIjpbIlNFTEVDVElPTl9DSEFOR0VEIiwiQU5OT1RBVElPTl9DSEFOR0VEIiwiUExVR0lOX05BTUVTUEFDRSIsIkVESVRPUl9TVE9SRSIsIkVESVRPUl9FTEVNRU5UX0lEIiwiV09SRExJRlRfU1RPUkUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7OztBQU1PLElBQU1BLGlCQUFpQixHQUFHLDJCQUExQjtBQUVQOzs7Ozs7Ozs7QUFRTyxJQUFNQyxrQkFBa0IsR0FBRyw0QkFBM0I7QUFFUDs7Ozs7O0FBS08sSUFBTUMsZ0JBQWdCLEdBQUcsVUFBekI7QUFFUDs7Ozs7OztBQU1PLElBQU1DLFlBQVksR0FBRyxhQUFyQjtBQUVQOzs7Ozs7O0FBTU8sSUFBTUMsaUJBQWlCLEdBQUcsUUFBMUI7QUFFUDs7Ozs7OztBQU1PLElBQU1DLGNBQWMsR0FBRyxpQkFBdkIiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBkZWZpbmVzIGNvbnN0YW50cyB1c2VkIGFjcm9zcyBkaWZmZXJlbnQgZmlsZXMgYW5kIGNvbXBvbmVudHMuXG4gKlxuICogQGF1dGhvciBEYXZpZCBSaWNjaXRlbGxpIDxkYXZpZEB3b3JkbGlmdC5pbz5cbiAqIEBzaW5jZSAzLjIzLjBcbiAqL1xuXG4vKipcbiAqIFdvcmRQcmVzcycgYWN0aW9uIGhvb2sgdG8gc2lnbmFsIHRoYXQgYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQuXG4gKlxuICogQHNpbmNlIDMuMjMuMFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFNFTEVDVElPTl9DSEFOR0VEID0gXCJ3b3JkbGlmdC5zZWxlY3Rpb25DaGFuZ2VkXCI7XG5cbi8qKlxuICogV29yZFByZXNzJyBhY3Rpb24gaG9vayB0byBzaWduYWwgdGhhdCBhbiBhbm5vdGF0aW9uIGhhcyBjaGFuZ2VkLiBUaGUgYWN0aW9uXG4gKiBwcm92aWRlcyB0aGUgYW5ub3RhdGlvbiBpZCBhcyBgeyBhbm5vdGF0aW9uSWQgfWAuIFRoZSBhbm5vdGF0aW9uIGlkIHVzdWFsbHlcbiAqIG1hdGNoZXMgdGhlIGVsZW1lbnQgaWQgdGhhdCBjYXVzZWQgdGhlIGFjdGlvbiB0byBiZSBmaXJlZC5cbiAqXG4gKiBAc2luY2UgMy4yMy4wXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQU5OT1RBVElPTl9DSEFOR0VEID0gXCJ3b3JkbGlmdC5hbm5vdGF0aW9uQ2hhbmdlZFwiO1xuXG4vKipcbiAqIFRoZSBwbHVnaW4gbmFtZXNwYWNlLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBQTFVHSU5fTkFNRVNQQUNFID0gXCJ3b3JkbGlmdFwiO1xuXG4vKipcbiAqIERlZmluZSB0aGUgRydiZXJnIGVkaXRvciBzdG9yZSBuYW1lLlxuICpcbiAqIEBzaW5jZSAzLjIzLjBcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFRElUT1JfU1RPUkUgPSBcImNvcmUvZWRpdG9yXCI7XG5cbi8qKlxuICogRGVmaW5lIHRoZSBlZGl0b3IgZWxlbWVudCBpZC5cbiAqXG4gKiBAc2luY2UgMy4yMy4wXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgRURJVE9SX0VMRU1FTlRfSUQgPSBcImVkaXRvclwiO1xuXG4vKipcbiAqIERlZmluZSB0aGUgV29yZExpZnQgU3RvcmUgbmFtZSB1c2VkIGZvciB7QGxpbmsgc2VsZWN0fSBhbmQge0BsaW5rIGRpc3BhdGNofVxuICogZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBXT1JETElGVF9TVE9SRSA9IFwid29yZGxpZnQvZWRpdG9yXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n')},27:function(module,exports){eval('var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function("return this")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === "object") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it\'s\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n')},33:function(module,exports){eval("module.exports = Backbone;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJCYWNrYm9uZVwiPzViYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n")}});