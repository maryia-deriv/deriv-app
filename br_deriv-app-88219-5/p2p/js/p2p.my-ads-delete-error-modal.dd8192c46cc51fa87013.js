/*! For license information please see p2p.my-ads-delete-error-modal.dd8192c46cc51fa87013.js.LICENSE.txt */
"use strict";(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([["my-ads-delete-error-modal"],{"./src/components/modal-manager/modals/my-ads-delete-error-modal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _my_ads_delete_error_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-ads-delete-error-modal.jsx */ "./src/components/modal-manager/modals/my-ads-delete-error-modal/my-ads-delete-error-modal.jsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_my_ads_delete_error_modal_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9teS1hZHMtZGVsZXRlLWVycm9yLW1vZGFsL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9wMnAvLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9teS1hZHMtZGVsZXRlLWVycm9yLW1vZGFsL2luZGV4LmpzP2ZmNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE15QWRzRGVsZXRlRXJyb3JNb2RhbCBmcm9tICcuL215LWFkcy1kZWxldGUtZXJyb3ItbW9kYWwuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgTXlBZHNEZWxldGVFcnJvck1vZGFsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/my-ads-delete-error-modal/index.js\n')},"./src/components/modal-manager/modals/my-ads-delete-error-modal/my-ads-delete-error-modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "../../node_modules/mobx-react-lite/es/index.js");\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/i18next */ "./src/components/i18next/index.js");\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores */ "./src/stores/index.js");\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ "./src/components/modal-manager/modal-manager-context.js");\n\n\n\n\n\n\n\nvar MyAdsDeleteErrorModal = function MyAdsDeleteErrorModal() {\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_5__.useStores)(),\n    my_ads_store = _useStores.my_ads_store;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_6__.useModalManagerContext)(),\n    hideModal = _useModalManagerConte.hideModal,\n    is_modal_open = _useModalManagerConte.is_modal_open;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    className: "delete-modal",\n    has_close_icon: false,\n    is_open: is_modal_open,\n    renderTitle: function renderTitle() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n        color: "prominent",\n        "line-height": "m",\n        size: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_2__.isDesktop)() ? \'s\' : \'xs\',\n        weight: "bold"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n        i18n_default_text: "Do you want to delete this ad?"\n      }));\n    },\n    width: "440px"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, my_ads_store.delete_error_message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    primary: true,\n    large: true,\n    onClick: function onClick() {\n      return hideModal();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Ok"\n  }))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(MyAdsDeleteErrorModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9teS1hZHMtZGVsZXRlLWVycm9yLW1vZGFsL215LWFkcy1kZWxldGUtZXJyb3ItbW9kYWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3AycC8uL3NyYy9jb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWxzL215LWFkcy1kZWxldGUtZXJyb3ItbW9kYWwvbXktYWRzLWRlbGV0ZS1lcnJvci1tb2RhbC5qc3g/M2FlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGlzRGVza3RvcCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tICdDb21wb25lbnRzL2kxOG5leHQnO1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnU3RvcmVzJztcbmltcG9ydCB7IHVzZU1vZGFsTWFuYWdlckNvbnRleHQgfSBmcm9tICdDb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWwtbWFuYWdlci1jb250ZXh0JztcblxuY29uc3QgTXlBZHNEZWxldGVFcnJvck1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbXlfYWRzX3N0b3JlIH0gPSB1c2VTdG9yZXMoKTtcbiAgICBjb25zdCB7IGhpZGVNb2RhbCwgaXNfbW9kYWxfb3BlbiB9ID0gdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkZWxldGUtbW9kYWwnXG4gICAgICAgICAgICAgICAgaGFzX2Nsb3NlX2ljb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGlzX29wZW49e2lzX21vZGFsX29wZW59XG4gICAgICAgICAgICAgICAgcmVuZGVyVGl0bGU9eygpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9J3Byb21pbmVudCcgbGluZS1oZWlnaHQ9J20nIHNpemU9e2lzRGVza3RvcCgpID8gJ3MnIDogJ3hzJ30gd2VpZ2h0PSdib2xkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYWQ/JyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB3aWR0aD0nNDQwcHgnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+e215X2Fkc19zdG9yZS5kZWxldGVfZXJyb3JfbWVzc2FnZX08L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsYXJnZSBvbkNsaWNrPXsoKSA9PiBoaWRlTW9kYWwoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdPaycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKE15QWRzRGVsZXRlRXJyb3JNb2RhbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/my-ads-delete-error-modal/my-ads-delete-error-modal.jsx\n')}}]);