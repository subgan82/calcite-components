System.register(["./p-6f0a681a.system.js","./p-5f9f59ee.system.js","./p-f46ce193.system.js"],(function(e){"use strict";var t,i,r,c,a,n,l,o,s;return{setters:[function(e){t=e.r;i=e.c;r=e.h;c=e.H;a=e.g},function(e){n=e.n;l=e.c;o=e.g},function(e){s=e.g}],execute:function(){var d;(function(e){e["Single"]="single";e["Multi"]="multi";e["Children"]="children";e["MultiChildren"]="multi-children"})(d||(d={}));var h=":host([hidden]){display:none}:host{display:block;outline:none}";var u=e("calcite_tree",function(){function e(e){t(this,e);this.lines=false;this.scale="m";this.selectionMode=d.Single;this.root=true;this.calciteTreeSelect=i(this,"calciteTreeSelect",7)}e.prototype.componentWillUpdate=function(){};e.prototype.componentWillRender=function(){var e=this.el.parentElement.closest("calcite-tree");this.lines=e?e.lines:this.lines;this.scale=e?e.scale:this.scale;this.selectionMode=e?e.selectionMode:this.selectionMode;this.root=e?false:true};e.prototype.render=function(){return r(c,{tabindex:this.root?"1":undefined,"aria-role":this.root?"tree":undefined,"aria-multiselectable":this.selectionMode===d.Multi||this.selectionMode===d.MultiChildren},r("slot",null))};e.prototype.onFocus=function(){if(this.root){var e=this.el.querySelector("calcite-tree-item[selected]");var t=this.el.querySelector("calcite-tree-item");(e||t).focus()}};e.prototype.onClick=function(e){var t=e.target;var i=n(t.querySelectorAll("calcite-tree-item"));var r=this.selectionMode!==null&&(!t.hasChildren||t.hasChildren&&(this.selectionMode===d.Children||this.selectionMode===d.MultiChildren));var c=e.detail.modifyCurrentSelection&&(this.selectionMode===d.Multi||this.selectionMode===d.MultiChildren);var a=this.selectionMode===d.MultiChildren||this.selectionMode===d.Children;var l=!c&&((this.selectionMode===d.Single||this.selectionMode===d.Multi)&&i.length<=0||this.selectionMode===d.Children||this.selectionMode===d.MultiChildren);var o=this.selectionMode===d.Children||this.selectionMode===d.MultiChildren;if(this.root){var s=[];if(r){s.push(t)}if(a){i.forEach((function(e){s.push(e)}))}if(l){var h=n(this.el.querySelectorAll("calcite-tree-item[selected]"));h.forEach((function(e){if(!s.includes(e)){e.selected=false}}))}if(o&&!e.detail.forceToggle){t.expanded=true}if(c){window.getSelection().removeAllRanges()}if(c&&t.selected||a&&e.detail.forceToggle){s.forEach((function(e){e.selected=false}))}else{s.forEach((function(e){e.selected=true}))}}if(this.root){e.preventDefault();e.stopPropagation()}this.calciteTreeSelect.emit({selected:n(this.el.querySelectorAll("calcite-tree-item")).filter((function(e){return e.selected}))})};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});return e}());u.style=h;var f='@charset "UTF-8";:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none;font-size:0.875rem;line-height:1.5;max-width:100%;--calcite-tree-text:var(--calcite-ui-text-2);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-chevron:var(--calcite-ui-border-1);--calcite-tree-chevron-hover:var(--calcite-ui-text-3);--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:var(--calcite-ui-border-1);--calcite-tree-indicator-active:var(--calcite-ui-blue-1);--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:auto;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:auto;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}:host([lines]){--calcite-tree-line:var(--calcite-ui-border-3);--calcite-tree-line-hover:var(--calcite-ui-border-1)}:host([scale=s]){--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}:host([dir=rtl]){--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:auto;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:auto;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}:host([dir=rtl][scale=s]){--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}::slotted(*){color:inherit;font-size:0.875rem;line-height:1.5;text-decoration:none !important;word-wrap:break-word;overflow-wrap:break-word;min-width:0;max-width:100%}::slotted(*):hover{text-decoration:none !important}::slotted(a){width:100%;text-decoration:none}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:"";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:hover:after,:host([has-children]) .calcite-tree-children:focus:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:"•";position:absolute;left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.calcite-tree-node:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:"";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0;position:absolute}:host([depth="1"])>.calcite-tree-node:after{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth="1"])>.calcite-tree-node:before,:host([depth="1"])>.calcite-tree-children:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host([selected]) .calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before{opacity:1}.calcite-tree-node:hover:after,:host([selected]) .calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-ui-blue-1);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-ui-blue-1)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-ui-blue-1);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:hover) .calcite-tree-chevron,:host(:focus) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:0.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-ui-blue-1);stroke-width:0.75;stroke:var(--calcite-ui-blue-1)}';var p=e("calcite_tree_item",function(){function e(e){var r=this;t(this,e);this.selected=false;this.expanded=false;this.iconClickHandler=function(e){e.stopPropagation();r.expanded=!r.expanded;r.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:true})};this.childrenClickHandler=function(e){return e.stopPropagation()};this.parentExpanded=false;this.depth=-1;this.hasChildren=null;this.calciteTreeItemSelect=i(this,"calciteTreeItemSelect",7)}e.prototype.expandedHandler=function(e){if(this.childrenSlotWrapper){var t=l(this.childrenSlotWrapper,"calcite-tree")[0];if(t){var i=l(t,"calcite-tree-item");i.forEach((function(t){return t.parentExpanded=e}))}}};e.prototype.componentWillRender=function(){this.hasChildren=!!this.el.querySelector("calcite-tree");var e=this.el.closest("calcite-tree");this.selectionMode=e.selectionMode;this.depth=0;this.scale=e&&e.scale||"m";this.lines=e&&e.lines;this.el.dir=o(this.el);var t;while(e){t=e.parentElement.closest("calcite-tree");if(t===e){break}else{e=t;this.depth=this.depth+1}}};e.prototype.render=function(){var e=this;var t=this.hasChildren?r("calcite-icon",{class:"calcite-tree-chevron",icon:"chevron-right",scale:"s",onClick:this.iconClickHandler,"data-test-id":"icon"}):null;return r(c,{tabindex:this.parentExpanded||this.depth===1?"0":"-1","aria-role":"treeitem","aria-hidden":this.parentExpanded||this.depth===1?undefined:"true","aria-selected":this.selected?"true":this.selectionMode===d.Multi||this.selectionMode===d.MultiChildren?"false":undefined,"aria-expanded":this.hasChildren?this.expanded.toString():undefined},r("div",{class:"calcite-tree-node",ref:function(t){return e.defaultSlotWrapper=t}},t,r("slot",null)),r("div",{class:"calcite-tree-children","data-test-id":"calcite-tree-children",role:this.hasChildren?"group":undefined,ref:function(t){return e.childrenSlotWrapper=t},onClick:this.childrenClickHandler},r("slot",{name:"children"})))};e.prototype.onClick=function(e){var t=l(this.defaultSlotWrapper,"a")[0];if(t&&e.composedPath()[0].tagName.toLowerCase()!=="a"){var i=t.target===""?"_self":t.target;window.open(t.href,i)}this.expanded=!this.expanded;this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:false})};e.prototype.keyDownHandler=function(e){var t;switch(s(e.key)){case" ":this.selected=!this.selected;e.preventDefault();e.stopPropagation();break;case"Enter":var i=n(this.el.children).find((function(e){return e.matches("a")}));if(i){i.click();this.selected=true}else{this.selected=!this.selected}e.preventDefault();e.stopPropagation();break;case"ArrowLeft":if(this.hasChildren&&this.expanded){this.expanded=false;e.preventDefault();e.stopPropagation();break}var r=this.el.parentElement.closest("calcite-tree-item");if(r&&(!this.hasChildren||this.expanded===false)){r.focus();e.preventDefault();e.stopPropagation();break}break;case"ArrowRight":if(this.hasChildren&&this.expanded===false){this.expanded=true;e.preventDefault();e.stopPropagation();break}if(this.hasChildren&&this.expanded){this.el.querySelector("calcite-tree-item").focus();break}break;case"ArrowUp":var c=this.el.previousElementSibling;if(c&&c.matches("calcite-tree-item")){c.focus()}break;case"ArrowDown":var a=this.el.nextElementSibling;if(a&&a.matches("calcite-tree-item")){a.focus()}break;case"Home":t=this.el.closest("calcite-tree[root]");var l=t.querySelector("calcite-tree-item");l.focus();break;case"End":t=this.el.closest("calcite-tree[root]");var o=t.children[t.children.length-1];var d=n(o.children).find((function(e){return e.matches("calcite-tree")}));while(d){o=d.children[t.children.length-1];d=n(o.children).find((function(e){return e.matches("calcite-tree")}))}o.focus();break}};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{expanded:["expandedHandler"]}},enumerable:true,configurable:true});return e}());p.style=f}}}));