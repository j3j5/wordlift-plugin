!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=230)}({0:function(e,t){e.exports=window.React},106:function(e,t,n){},107:function(e,t,n){},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(15),o=n.n(r),i=n(26),s=n(24),a=function(e){return null===e};function c(e,t,n){void 0===t&&(t=s.a),o()(Object(i.a)(t)||a(t),"Expected payloadCreator to be a function, undefined or null");var r=a(t)||t===s.a?s.a:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e instanceof Error?e:t.apply(void 0,[e].concat(r))},c=Object(i.a)(n),u=e.toString(),d=function(){var t=r.apply(void 0,arguments),o={type:e};return t instanceof Error&&(o.error=!0),void 0!==t&&(o.payload=t),c&&(o.meta=n.apply(void 0,arguments)),o};return d.toString=function(){return u},d}},116:function(e,t,n){"use strict";var r=n(31),o=n(45),i=n(74);class s{constructor(e,t){this.editor=e,this.highlightHandler=t,this.faqItems=[],this.addQuestionText=this.editor.translate("Add Question"),this.addAnswerText=this.editor.translate("Add Answer"),this.addQuestionOrAnswerText=this.editor.translate("Add Question / Answer"),Object(r.on)(o.c,e=>{this.faqItems=e})}setButtonTextBasedOnSelectedText(e,t,n){i.a.isQuestion(e)?(t.innerText=this.addQuestionText,n.setAttribute("aria-label",this.addQuestionText)):(t.innerText=this.addAnswerText,n.setAttribute("aria-label",this.addAnswerText))}disableButton(e,t){e.classList.add("mce-disabled"),t.disabled=!0}enableButton(e,t){e.classList.remove("mce-disabled"),t.disabled=!1}static shouldDisableButton(e,t){if(0===e.length||void 0===e)return!0;return 0===t.filter(e=>""===e.answer).length&&!i.a.isQuestion(e)}changeButtonStateOnSelectedText(){const e=this.editor,t=e.selection.getContent({format:"text"}),n=document.getElementById("wl-faq-toolbar-button");if(null===n)return;const r=n.getElementsByTagName("button")[0];s.shouldDisableButton(t,this.faqItems)?this.disableButton(n,r):this.enableButton(n,r);const o=e.getBody().getAttribute("contenteditable");"false"!==o&&!1!==o||this.disableButton(n,r),this.setButtonTextBasedOnSelectedText(t,r,n)}changeToolBarButtonStateBasedOnTextSelected(){const e=this.editor;e.on("NodeChange",e=>{this.changeButtonStateOnSelectedText()}),e.on("selectionchange",e=>{this.changeButtonStateOnSelectedText()})}addButtonToToolBar(){const e=this.editor,t=this;e.addButton("wl-faq-toolbar-button",{text:"Add Question or Answer",id:"wl-faq-toolbar-button",onclick:function(){const n=e.selection.getContent({format:"text"}),i=e.selection.getContent({format:"html"});t.highlightHandler.saveSelection(),Object(r.trigger)(o.a,{selectedText:n,selectedHTML:i})}}),this.changeToolBarButtonStateBasedOnTextSelected()}}t.a=s},117:function(e,t,n){"use strict";t.a=class{constructor(){}performTextHighlighting(){this._throwFunctionNotImplementedError("doTextHighlighting()")}showFloatingActionButton(){this._throwFunctionNotImplementedError("showFloatingActionButton()")}initialize(){this.performTextHighlighting(),this.showFloatingActionButton()}_throwFunctionNotImplementedError(e){throw new Error(e+" should be implemented by the parent class ")}}},12:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},123:function(e,t,n){"use strict";var r=n(31),o=n(45),i=n(54),s=n(77);var a=class{constructor(e){this.range=e,this.nodesShouldNotBeHighlighted=[],this.nodesToBeHighlighted=[],this.nodesToBeAddedOnStartContainer=[],this.nodesToBeAddedOnEndContainer=[],this.processRange(e)}getProcessedRange(){return{nodesToBeHighlighted:this.nodesToBeHighlighted,nodesShouldNotBeHighlighted:this.nodesShouldNotBeHighlighted}}ifTextContentNotEmptyPushNode(e,t,n=!1){""!==e.textContent&&(n?this.nodesToBeHighlighted.push(e):this.nodesShouldNotBeHighlighted.push(e),t.push(e))}splitToTwoNodesByOffset(e,t){return{startNode:document.createTextNode(e.slice(0,t)),endNode:document.createTextNode(e.slice(t,e.length))}}processRange(e){if(e.startContainer===e.endContainer){const{startNode:t,middleNode:n,endNode:r}=this.createTextNodesFromRange(e);this.ifTextContentNotEmptyPushNode(t,this.nodesToBeAddedOnStartContainer),this.nodesToBeAddedOnStartContainer.push(n),this.nodesToBeHighlighted.push(n),this.ifTextContentNotEmptyPushNode(r,this.nodesToBeAddedOnStartContainer)}else{let{startNode:t,endNode:n}=this.splitToTwoNodesByOffset(e.startContainer.textContent,e.startOffset);this.ifTextContentNotEmptyPushNode(t,this.nodesToBeAddedOnStartContainer),this.ifTextContentNotEmptyPushNode(n,this.nodesToBeAddedOnStartContainer,!0);let r=this.splitToTwoNodesByOffset(e.endContainer.textContent,e.endOffset);this.ifTextContentNotEmptyPushNode(r.startNode,this.nodesToBeAddedOnEndContainer,!0),this.ifTextContentNotEmptyPushNode(r.endNode,this.nodesToBeAddedOnEndContainer)}this.appendCreatedNodesToParentElement(e.startContainer.parentElement,e.startContainer,this.nodesToBeAddedOnStartContainer),this.appendCreatedNodesToParentElement(e.endContainer.parentElement,e.endContainer,this.nodesToBeAddedOnEndContainer)}appendCreatedNodesToParentElement(e,t,n){for(let r of n)e.insertBefore(r,t);t.textContent=""}createTextNodesFromRange(e){const t=e.startContainer.textContent;return{startNode:document.createTextNode(t.slice(0,e.startOffset)),middleNode:document.createTextNode(t.slice(e.startOffset,e.endOffset)),endNode:document.createTextNode(t.slice(e.endOffset,t.length))}}};class c{constructor(e){this.editor=e,this.selection=null,i.c.registerAllElements(),Object(r.on)(o.b,e=>{this.highlightSelectedText(e.text,e.isQuestion,e.id)}),Object(r.on)(o.d,({id:e,type:t})=>{let n=this.editor.getContent();n=s.a.removeHighlightingBasedOnType(e,t,n),this.editor.setContent(n)})}saveSelection(){this.selection=this.editor.selection}static getTagBasedOnHighlightedText(e){return e?i.b:i.a}highlightSelectedText(e,t,n){if(null===this.selection)return;const r=c.getTagBasedOnHighlightedText(t),o=this.selection.getRng(),i=new a(o).getProcessedRange();let u=Array.from(this.selection.getNode().childNodes);s.a.highlightNodesByRange(u,r,n.toString(),o,i),o.collapse()}}t.a=c},13:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r);n(70);const i=({children:e,className:t=""})=>o.a.createElement("div",{className:"wl-col "+t},e)},15:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,s,a){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,s,a],d=0;(c=new Error(t.replace(/%s/g,(function(){return u[d++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},17:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"j",(function(){return i})),n.d(t,"m",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"i",(function(){return d})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"n",(function(){return b}));const r="REQUEST_FAQ_ADD_NEW_QUESTION",o="REQUEST_GET_FAQ_ITEMS",i="UPDATE_FAQ_ITEMS",s="UPDATE_QUESTION_ON_INPUT_CHANGE",a="QUESTION_SELECTED_BY_USER",c="CLOSE_EDIT_SCREEN",u="REQUEST_UPDATE_FAQ_ITEMS",d="UPDATE_FAQ_ITEM",l="UPDATE_MODAL_STATUS",f="UPDATE_NOTIFICATION_AREA",p="RESET_TYPED_QUESTION",h="ANSWER_SELECTED_BY_USER",m="REQUEST_DELETE_FAQ_ITEMS",b="UPDATE_REQUEST_IN_PROGRESS"},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),i=(n(69),n(33));const s=({children:e,className:t="",fullWidth:n=!1,rowLayout:r=!1})=>{const s=Object(i.a)({"wl-container--full-width":n,"wl-container--row-layout":r});return o.a.createElement("div",{className:"wl-container "+s+" "+t},e)}},19:function(e,t,n){"use strict";e.exports=n(44)},2:function(e,t,n){e.exports=n(42)()},22:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},230:function(e,t,n){"use strict";n.r(t),function(e){var t=n(116),r=n(123),o=n(117);const i=e.tinymce;class s extends o.a{constructor(){super(),this.editor=null,this.highlightHandler=null;const e=this;i.PluginManager.add("wl_faq_tinymce",(function(t){e.editor=t,e.initialize()}))}performTextHighlighting(){this.highlightHandler=new r.a(this.editor)}showFloatingActionButton(){new t.a(this.editor,this.highlightHandler).addButtonToToolBar()}initialize(){this.performTextHighlighting(),this.showFloatingActionButton()}}new s}.call(this,n(22))},24:function(e,t,n){"use strict";t.a=function(e){return e}},26:function(e,t,n){"use strict";t.a=function(e){return"function"==typeof e}},27:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},30:function(e,t,n){"use strict";(function(e,r){var o,i=n(39);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var s=Object(i.a)(o);t.a=s}).call(this,n(22),n(55)(e))},31:function(e,t){e.exports=Backbone},32:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return a})),n.d(t,"j",(function(){return c})),n.d(t,"m",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return h})),n.d(t,"h",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var r=n(11),o=n(17);const i=Object(r.a)(o.e),s=Object(r.a)(o.f),a=Object(r.a)(o.d),c=Object(r.a)(o.j),u=Object(r.a)(o.m),d=Object(r.a)(o.c),l=Object(r.a)(o.b),f=(Object(r.a)(o.g),Object(r.a)(o.i)),p=Object(r.a)(o.k),h=Object(r.a)(o.l),m=Object(r.a)(o.h),b=Object(r.a)(o.a),y=Object(r.a)(o.n)},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>{let t="";for(let n of Object.keys(e))e[n]&&(t+=" "+n);return t.trim()}},36:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return m}));var r=n(0),o=n.n(r),i=n(7),s=(n(106),n(18)),a=n(13),c=n(48);var u=({updateHandler:e,deleteHandler:t})=>o.a.createElement(s.a,{fullWidth:!0},o.a.createElement(a.a,{className:"wl-col--width-40 wl-col--low-padding"},o.a.createElement(c.a,{text:"delete",className:"wl-action-button--delete wl-action-button--normal",onClickHandler:t})),o.a.createElement(a.a,{className:"wl-col--width-10"}),o.a.createElement(a.a,{className:"wl-col--width-40 wl-col--low-padding"},o.a.createElement(c.a,{text:"update",className:"wl-action-button--update wl-action-button--primary",onClickHandler:e}))),d=n(2),l=n.n(d),f=n(32),p=(n(107),n(72));const h={ANSWER:"ANSWER",QUESTION:"QUESTION"},m=50;class b extends o.a.Component{constructor(e){super(e),this.state={textAreaValue:this.props.value},this.changeValueOnUserType=this.changeValueOnUserType.bind(this),this.updateFaqEditItem=this.updateFaqEditItem.bind(this),this.deleteFaqItem=this.deleteFaqItem.bind(this)}updateFaqEditItem(){const e=Object(f.i)({id:this.props.id,type:this.props.type,value:this.state.textAreaValue});this.props.dispatch(e)}deleteFaqItem(){this.setState({textAreaValue:""}),this.props.dispatch(Object(f.f)({id:this.props.id,type:this.props.type.toLowerCase()}))}changeValueOnUserType(e){this.setState({textAreaValue:e.target.value})}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"wl-faq-edit-item--title"},this.props.title),o.a.createElement("br",null),o.a.createElement(s.a,null,o.a.createElement(a.a,{className:"wl-col--width-100 wl-col--less-padding"},o.a.createElement("textarea",{className:"wl-faq-edit-item--textarea",rows:3,value:this.state.textAreaValue,onChange:e=>{this.changeValueOnUserType(e)}}),Object(p.b)(this.props.type,this.state.textAreaValue),Object(p.c)(this.props.type,this.state.textAreaValue))),o.a.createElement(u,{updateHandler:this.updateFaqEditItem,deleteHandler:this.deleteFaqItem}))}}b.propTypes={type:l.a.string,id:l.a.string};t.b=Object(i.b)()(b)},38:function(e,t,n){"use strict";var r=n(19),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return r.isMemo(e)?s:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=s;var u=Object.defineProperty,d=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var o=p(n);o&&o!==h&&e(t,o,r)}var s=d(n);l&&(s=s.concat(l(n)));for(var a=c(t),m=c(n),b=0;b<s.length;++b){var y=s[b];if(!(i[y]||r&&r[y]||m&&m[y]||a&&a[y])){var g=f(n,y);try{u(t,y,g)}catch(e){}}}}return t}},39:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},42:function(e,t,n){"use strict";var r=n(43);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},43:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},44:function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,E=r?Symbol.for("react.responder"):60118,T=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case f:case s:case c:case a:case h:return e;default:switch(e=e&&e.$$typeof){case d:case p:case y:case b:case u:return e;default:return t}}case i:return t}}}function O(e){return w(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=d,t.ContextProvider=u,t.Element=o,t.ForwardRef=p,t.Fragment=s,t.Lazy=y,t.Memo=b,t.Portal=i,t.Profiler=c,t.StrictMode=a,t.Suspense=h,t.isAsyncMode=function(e){return O(e)||w(e)===l},t.isConcurrentMode=O,t.isContextConsumer=function(e){return w(e)===d},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===s},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===b},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===c||e===a||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===b||e.$$typeof===u||e.$$typeof===d||e.$$typeof===p||e.$$typeof===v||e.$$typeof===E||e.$$typeof===T||e.$$typeof===g)},t.typeOf=w},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return s}));const r="FAQ_EVENT_HANDLER_SELECTION_CHANGED",o="FAQ_ITEMS_CHANGED",i="FAQ_HIGHLIGHT_TEXT",s="FAQ_ITEM_DELETED"},48:function(e,t,n){"use strict";var r=n(0),o=n.n(r);n(81);t.a=({className:e="",text:t,onClickHandler:n})=>o.a.createElement("button",{onClick:n,className:"wl-action-button "+e,type:"button"},t)},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));const r="wl-faq-question",o="wl-faq-answer";class i extends HTMLElement{constructor(){super()}}class s extends HTMLElement{constructor(){super()}}class a{static registerFaqQuestionElement(){void 0===customElements.get(r)&&customElements.define(r,i,{extends:"div"})}static registerFaqAnswerElement(){void 0===customElements.get(o)&&customElements.define(o,s,{extends:"div"})}static registerAllElements(){a.registerFaqQuestionElement(),a.registerFaqAnswerElement()}}t.c=a},55:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},69:function(e,t,n){},7:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return ee}));var o=n(0),i=n.n(o),s=n(2),a=n.n(s),c=a.a.shape({trySubscribe:a.a.func.isRequired,tryUnsubscribe:a.a.func.isRequired,notifyNestedSubs:a.a.func.isRequired,isSubscribed:a.a.func.isRequired}),u=a.a.shape({subscribe:a.a.func.isRequired,dispatch:a.a.func.isRequired,getState:a.a.func.isRequired});i.a.forwardRef;var d=function(e){var t;void 0===e&&(e="store");var n=e+"Subscription",i=function(t){r(s,t);var i=s.prototype;function s(n,r){var o;return(o=t.call(this,n,r)||this)[e]=n.store,o}return i.getChildContext=function(){var t;return(t={})[e]=this[e],t[n]=null,t},i.render=function(){return o.Children.only(this.props.children)},s}(o.Component);return i.propTypes={store:u.isRequired,children:a.a.element.isRequired},i.childContextTypes=((t={})[e]=u.isRequired,t[n]=c,t),i}(),l=n(27),f=n(9),p=n(12),h=n(38),m=n.n(h),b=n(15),y=n.n(b),g=n(19),v={notify:function(){}};var E=function(){function e(e,t,n){this.store=e,this.parentSub=t,this.onStateChange=n,this.unsubscribe=null,this.listeners=v}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){var e,t;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=(e=[],t=[],{clear:function(){t=null,e=null},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},get:function(){return t},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&null!==e&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}))},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=v)},e}(),T=void 0!==i.a.forwardRef,w=0,O={};function S(){}function N(e,t){var n,i;void 0===t&&(t={});var s=t,a=s.getDisplayName,d=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,h=s.methodName,b=void 0===h?"connectAdvanced":h,v=s.renderCountProp,N=void 0===v?void 0:v,C=s.shouldHandleStateChanges,x=void 0===C||C,P=s.storeKey,j=void 0===P?"store":P,A=s.withRef,_=void 0!==A&&A,B=Object(p.a)(s,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),I=j+"Subscription",R=w++,H=((n={})[j]=u,n[I]=c,n),q=((i={})[I]=c,i);return function(t){y()(Object(g.isValidElementType)(t),"You must pass a component to the function returned by "+b+". Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",i=d(n),s=Object(f.a)({},B,{getDisplayName:d,methodName:b,renderCountProp:N,shouldHandleStateChanges:x,storeKey:j,withRef:_,displayName:i,wrappedComponentName:n,WrappedComponent:t}),a=function(n){function a(e,t){var r;return(r=n.call(this,e,t)||this).version=R,r.state={},r.renderCount=0,r.store=e[j]||t[j],r.propsMode=Boolean(e[j]),r.setWrappedInstance=r.setWrappedInstance.bind(Object(l.a)(Object(l.a)(r))),y()(r.store,'Could not find "'+j+'" in either the context or props of "'+i+'". Either wrap the root component in a <Provider>, or explicitly pass "'+j+'" as a prop to "'+i+'".'),r.initSelector(),r.initSubscription(),r}r(a,n);var c=a.prototype;return c.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return(e={})[I]=t||this.context[I],e},c.componentDidMount=function(){x&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},c.componentWillReceiveProps=function(e){this.selector.run(e)},c.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},c.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=S,this.store=null,this.selector.run=S,this.selector.shouldComponentUpdate=!1},c.getWrappedInstance=function(){return y()(_,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+b+"() call."),this.wrappedInstance},c.setWrappedInstance=function(e){this.wrappedInstance=e},c.initSelector=function(){var t=e(this.store.dispatch,s);this.selector=function(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}(t,this.store),this.selector.run(this.props)},c.initSubscription=function(){if(x){var e=(this.propsMode?this.props:this.context)[I];this.subscription=new E(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},c.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(O)):this.notifyNestedSubs()},c.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},c.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},c.addExtraProps=function(e){if(!(_||N||this.propsMode&&this.subscription))return e;var t=Object(f.a)({},e);return _&&(t.ref=this.setWrappedInstance),N&&(t[N]=this.renderCount++),this.propsMode&&this.subscription&&(t[I]=this.subscription),t},c.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return Object(o.createElement)(t,this.addExtraProps(e.props))},a}(o.Component);return T&&(a.prototype.UNSAFE_componentWillReceiveProps=a.prototype.componentWillReceiveProps,delete a.prototype.componentWillReceiveProps),a.WrappedComponent=t,a.displayName=i,a.childContextTypes=q,a.contextTypes=H,a.propTypes=H,m()(a,t)}}var C=Object.prototype.hasOwnProperty;function x(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function P(e,t){if(x(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!C.call(t,n[o])||!x(e[n[o]],t[n[o]]))return!1;return!0}var j=n(8);function A(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function _(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function B(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=_(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=_(o),o=r(t,n)),o},r}}var I=[function(e){return"function"==typeof e?B(e):void 0},function(e){return e?void 0:A((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?A((function(t){return Object(j.b)(e,t)})):void 0}];var R=[function(e){return"function"==typeof e?B(e):void 0},function(e){return e?void 0:A((function(){return{}}))}];function H(e,t,n){return Object(f.a)({},n,e,t)}var q=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,s=!1;return function(t,n,a){var c=e(t,n,a);return s?o&&i(c,r)||(r=c):(s=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return H}}];function F(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function M(e,t,n,r,o){var i,s,a,c,u,d=o.areStatesEqual,l=o.areOwnPropsEqual,f=o.areStatePropsEqual,p=!1;function h(o,p){var h,m,b=!l(p,s),y=!d(o,i);return i=o,s=p,b&&y?(a=e(i,s),t.dependsOnOwnProps&&(c=t(r,s)),u=n(a,c,s)):b?(e.dependsOnOwnProps&&(a=e(i,s)),t.dependsOnOwnProps&&(c=t(r,s)),u=n(a,c,s)):y?(h=e(i,s),m=!f(h,a),a=h,m&&(u=n(a,c,s)),u):u}return function(o,d){return p?h(o,d):(a=e(i=o,s=d),c=t(r,s),u=n(a,c,s),p=!0,u)}}function D(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=Object(p.a)(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),s=n(e,i),a=r(e,i),c=o(e,i);return(i.pure?M:F)(s,a,c,e,i)}function U(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function L(e,t){return e===t}var Q,W,$,k,V,G,Y,z,K,X,J,Z,ee=($=(W=void 0===Q?{}:Q).connectHOC,k=void 0===$?N:$,V=W.mapStateToPropsFactories,G=void 0===V?R:V,Y=W.mapDispatchToPropsFactories,z=void 0===Y?I:Y,K=W.mergePropsFactories,X=void 0===K?q:K,J=W.selectorFactory,Z=void 0===J?D:J,function(e,t,n,r){void 0===r&&(r={});var o=r,i=o.pure,s=void 0===i||i,a=o.areStatesEqual,c=void 0===a?L:a,u=o.areOwnPropsEqual,d=void 0===u?P:u,l=o.areStatePropsEqual,h=void 0===l?P:l,m=o.areMergedPropsEqual,b=void 0===m?P:m,y=Object(p.a)(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),g=U(e,G,"mapStateToProps"),v=U(t,z,"mapDispatchToProps"),E=U(n,X,"mergeProps");return k(Z,Object(f.a)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:g,initMapDispatchToProps:v,initMergeProps:E,pure:s,areStatesEqual:c,areOwnPropsEqual:d,areStatePropsEqual:h,areMergedPropsEqual:b},y))})},70:function(e,t,n){},72:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c}));var r=n(0),o=n.n(r),i=n(36);const s=["h1","h2","h3","h4","h5","h6","br","ol","ul","li","a","p","div","b","strong","i","em"];function a(t,n){const{invalidWordCountMessage:r}=e._wlFaqSettings;if(t!==i.c.ANSWER||0===n.length)return o.a.createElement(o.a.Fragment,null);const s=n.match(/\S+/g);if(null===s||0===s.length)return o.a.createElement(o.a.Fragment,null);const a=s.length,c=r.replace("{ANSWER_WORD_COUNT_WARNING_LIMIT}",i.a);return a<=i.a?o.a.createElement(o.a.Fragment,null):o.a.createElement("p",{className:"wl-faq-edit-item--warning"},o.a.createElement("span",{className:"dashicons dashicons-warning"}),c)}function c(t,n){const{invalidTagMessage:r}=e._wlFaqSettings;if(t!==i.c.ANSWER||0===n.length)return o.a.createElement(o.a.Fragment,null);const a=function(e){const t=e.match(/<\/?\w+/gim);if(null===t)return!1;const n=t.map(e=>e.replace("<","").replace("/","").toLowerCase().replace(" ",""));return[...new Set(n)].filter(e=>!s.includes(e)).map(e=>"<"+e+">")}(n);if(!1===a||0===a.length)return o.a.createElement(o.a.Fragment,null);{const e=a.join(","),t=r.replace("{INVALID_TAGS}",e);return o.a.createElement("p",{className:"wl-faq-edit-item--danger"},o.a.createElement("span",{className:"dashicons dashicons-no-alt"})," ",t)}}}).call(this,n(22))},74:function(e,t,n){"use strict";t.a=class{static isQuestion(e){return e.trim().endsWith("?")}}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(36),o=n(54);class i{static highlightHTML(e,t,n){const r=document.createElement("div");return r.innerHTML=e,i.highlightNodes(r,t,n),r.innerHTML}static removeHighlightingTagsByClassName(e,t,n){const r=document.createElement("div");r.innerHTML=e;const o=r.querySelectorAll(`${t}[class="${n}"]`);for(let e of o){const t=Array.prototype.slice.call(e.childNodes);for(let n of t)e.parentElement.insertBefore(n,e);e.remove()}return r.innerHTML}static highlightNodesByRange(e,t,n,r,o){for(let s of e)if(0===s.childNodes.length&&s.nodeType===Node.TEXT_NODE&&""!==s.textContent.trim()){if(o.nodesToBeHighlighted.includes(s)||!o.nodesShouldNotBeHighlighted.includes(s)&&r.intersectsNode(s)){const e=document.createElement(t);e.classList=[n],e.textContent=s.textContent,s.parentElement.replaceChild(e,s)}}else i.highlightNodesByRange(s.childNodes,t,n,r,o)}static highlightNodes(e,t,n){for(let r of e.childNodes)if(0===r.childNodes.length&&r.nodeType===Node.TEXT_NODE&&""!==r.textContent.trim()){const e=document.createElement(t);e.classList=[n],e.textContent=r.textContent,r.parentElement.replaceChild(e,r)}else i.highlightNodes(r,t,n)}static removeHighlightingBasedOnType(e,t,n){return t.toLowerCase()===r.c.QUESTION.toLowerCase()?(n=i.removeHighlightingTagsByClassName(n,o.b,e),n=i.removeHighlightingTagsByClassName(n,o.a,e)):t.toLowerCase()===r.c.ANSWER.toLowerCase()&&(n=i.removeHighlightingTagsByClassName(n,o.a,e)),n}}},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return a}));var r=n(30),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,u=t,d=[],l=d,f=!1;function p(){l===d&&(l=d.slice())}function h(){if(f)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function m(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(f)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),l.push(e),function(){if(t){if(f)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=l.indexOf(e);l.splice(n,1),d=null}}}function b(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(f)throw new Error("Reducers may not dispatch actions.");try{f=!0,u=c(u,e)}finally{f=!1}for(var t=d=l,n=0;n<t.length;n++){(0,t[n])()}return e}function y(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,b({type:i.REPLACE})}function g(){var e,t=m;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return b({type:i.INIT}),(o={dispatch:b,subscribe:m,getState:h,replaceReducer:y})[r.a]=g,o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var s,a=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var r=!1,o={},i=0;i<a.length;i++){var u=a[i],d=n[u],l=e[u],f=d(l,t);if(void 0===f){var p=c(u,t);throw new Error(p)}o[u]=f,r=r||f!==l}return(r=r||a.length!==Object.keys(e).length)?o:e}}function d(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t){if("function"==typeof e)return d(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=d(o,t))}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return h({},n,{dispatch:r=m.apply(void 0,i)(n.dispatch)})}}}},81:function(e,t,n){},9:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}});