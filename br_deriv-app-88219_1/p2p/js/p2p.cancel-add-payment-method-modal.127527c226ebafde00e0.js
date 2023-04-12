/*! For license information please see p2p.cancel-add-payment-method-modal.127527c226ebafde00e0.js.LICENSE.txt */
"use strict";(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([["cancel-add-payment-method-modal"],{"./src/components/modal-manager/modals/cancel-add-payment-method-modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "../../node_modules/mobx-react-lite/es/index.js");\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Stores */ "./src/stores/index.js");\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/i18next */ "./src/components/i18next/index.js");\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ "./src/components/modal-manager/modal-manager-context.js");\n\n\n\n\n\n\nvar CancelAddPaymentMethodModal = function CancelAddPaymentMethodModal(_ref) {\n  var onCancel = _ref.onCancel,\n    should_hide_all_modals_on_cancel = _ref.should_hide_all_modals_on_cancel;\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_3__.useStores)(),\n    my_ads_store = _useStores.my_ads_store,\n    my_profile_store = _useStores.my_profile_store;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_5__.useModalManagerContext)(),\n    hideModal = _useModalManagerConte.hideModal,\n    is_modal_open = _useModalManagerConte.is_modal_open;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    has_close_icon: false,\n    is_open: is_modal_open,\n    small: true,\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      color: "prominent",\n      size: "s",\n      weight: "bold"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n      i18n_default_text: "Cancel adding this payment method?"\n    }))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    color: "prominent",\n    size: "xs"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "If you choose to cancel, the details you\\u2019ve entered will be lost."\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    large: true,\n    onClick: function onClick() {\n      my_profile_store.hideAddPaymentMethodForm();\n      my_profile_store.setSelectedPaymentMethod(\'\');\n      my_ads_store.setShouldShowAddPaymentMethod(false);\n      onCancel === null || onCancel === void 0 ? void 0 : onCancel();\n      hideModal({\n        should_save_form_history: false,\n        should_hide_all_modals: should_hide_all_modals_on_cancel !== null && should_hide_all_modals_on_cancel !== void 0 ? should_hide_all_modals_on_cancel : false\n      });\n    },\n    secondary: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Cancel"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    large: true,\n    onClick: function onClick() {\n      hideModal({\n        should_save_form_history: true\n      });\n    },\n    primary: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Go back"\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(CancelAddPaymentMethodModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9jYW5jZWwtYWRkLXBheW1lbnQtbWV0aG9kLW1vZGFsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFLQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3AycC8uL3NyYy9jb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWxzL2NhbmNlbC1hZGQtcGF5bWVudC1tZXRob2QtbW9kYWwuanN4PzJmZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgeyB1c2VTdG9yZXMgfSBmcm9tICdTdG9yZXMnO1xuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tICdDb21wb25lbnRzL2kxOG5leHQnO1xuaW1wb3J0IHsgdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCB9IGZyb20gJ0NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbC1tYW5hZ2VyLWNvbnRleHQnO1xuXG5jb25zdCBDYW5jZWxBZGRQYXltZW50TWV0aG9kTW9kYWwgPSAoeyBvbkNhbmNlbCwgc2hvdWxkX2hpZGVfYWxsX21vZGFsc19vbl9jYW5jZWwgfSkgPT4ge1xuICAgIGNvbnN0IHsgbXlfYWRzX3N0b3JlLCBteV9wcm9maWxlX3N0b3JlIH0gPSB1c2VTdG9yZXMoKTtcbiAgICBjb25zdCB7IGhpZGVNb2RhbCwgaXNfbW9kYWxfb3BlbiB9ID0gdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBoYXNfY2xvc2VfaWNvbj17ZmFsc2V9XG4gICAgICAgICAgICBpc19vcGVuPXtpc19tb2RhbF9vcGVufVxuICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj0ncHJvbWluZW50JyBzaXplPSdzJyB3ZWlnaHQ9J2JvbGQnPlxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J0NhbmNlbCBhZGRpbmcgdGhpcyBwYXltZW50IG1ldGhvZD8nIC8+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj0ncHJvbWluZW50JyBzaXplPSd4cyc+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nSWYgeW91IGNob29zZSB0byBjYW5jZWwsIHRoZSBkZXRhaWxzIHlvdeKAmXZlIGVudGVyZWQgd2lsbCBiZSBsb3N0LicgLz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlfcHJvZmlsZV9zdG9yZS5oaWRlQWRkUGF5bWVudE1ldGhvZEZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15X3Byb2ZpbGVfc3RvcmUuc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15X2Fkc19zdG9yZS5zZXRTaG91bGRTaG93QWRkUGF5bWVudE1ldGhvZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD8uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZF9zYXZlX2Zvcm1faGlzdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkX2hpZGVfYWxsX21vZGFsczogc2hvdWxkX2hpZGVfYWxsX21vZGFsc19vbl9jYW5jZWwgPz8gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J0NhbmNlbCcgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkX3NhdmVfZm9ybV9oaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nR28gYmFjaycgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihDYW5jZWxBZGRQYXltZW50TWV0aG9kTW9kYWwpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/cancel-add-payment-method-modal.jsx\n')}}]);