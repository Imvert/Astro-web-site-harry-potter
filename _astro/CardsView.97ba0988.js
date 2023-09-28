/* empty css                       */import{r as d}from"./index.45a47ed6.js";var t={},m={get exports(){return t},set exports(r){t=r}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=d,f=Symbol.for("react.element"),p=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,_=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function c(r,e,n){var s,i={},a=null,l=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(l=e.ref);for(s in e)x.call(e,s)&&!v.hasOwnProperty(s)&&(i[s]=e[s]);if(r&&r.defaultProps)for(s in e=r.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:f,type:r,key:a,ref:l,props:i,_owner:_.current}}o.Fragment=p;o.jsx=c;o.jsxs=c;(function(r){r.exports=o})(m);function w({cards:r}){return t.jsx("div",{children:t.jsx("div",{className:"cardsView",children:r.map((e,n)=>n<3?t.jsx(j,{...e},n):null)})})}function j({title:r,description:e,image:n}){return t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"image",style:{backgroundImage:`url(${n})`},children:t.jsx("img",{src:"/assets/game-info-frame-a.webp",alt:""})}),t.jsx("div",{className:"title",children:r}),t.jsx("div",{className:"description",children:e})]})}export{w as default};
