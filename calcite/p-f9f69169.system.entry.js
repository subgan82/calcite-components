System.register(["./p-6f0a681a.system.js","./p-5f9f59ee.system.js","./p-f46ce193.system.js"],(function(t){"use strict";var e,i,c,r,o,a,s,h;return{setters:[function(t){e=t.r;i=t.c;c=t.h;r=t.H;o=t.g},function(t){a=t.h;s=t.g},function(t){h=t.g}],execute:function(){var l=":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{--calcite-switch-hover-handle-border:var(--calcite-ui-blue-2);--calcite-switch-switched-track-background:var(--calcite-ui-blue-2);--calcite-switch-switched-track-border:var(--calcite-ui-blue-2);--calcite-switch-switched-handle-border:var(--calcite-ui-blue-1);--calcite-switch-switched-hover-track-background:var(--calcite-ui-blue-2);--calcite-switch-switched-hover-track-border:var(--calcite-ui-blue-2);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-blue-3)}:host([color=red]){--calcite-switch-switched-track-background:var(--calcite-ui-red-2);--calcite-switch-switched-track-border:var(--calcite-ui-red-1);--calcite-switch-hover-handle-border:var(--calcite-ui-red-2);--calcite-switch-switched-handle-border:var(--calcite-ui-red-1);--calcite-switch-switched-hover-track-background:var(--calcite-ui-red-1);--calcite-switch-switched-hover-track-border:var(--calcite-ui-red-2);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-red-3)}:host([scale=s]){--calcite-switch-track-width:28px;--calcite-switch-track-height:16px;--calcite-switch-handle-size:14px}:host([scale=m]){--calcite-switch-track-width:36px;--calcite-switch-track-height:20px;--calcite-switch-handle-size:18px}:host([scale=l]){--calcite-switch-track-width:44px;--calcite-switch-track-height:24px;--calcite-switch-handle-size:22px}::slotted(input){display:none}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;width:var(--calcite-switch-track-width);height:var(--calcite-switch-track-height);background-color:var(--calcite-ui-foreground-2);border-radius:30px;border:1px solid var(--calcite-ui-border-2);pointer-events:none;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.handle{position:absolute;display:block;width:var(--calcite-switch-handle-size);height:var(--calcite-switch-handle-size);top:-1px;left:-1px;right:auto;background-color:var(--calcite-ui-foreground-1);border-radius:30px;border:2px solid var(--calcite-ui-border-4);pointer-events:none;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}:host(:hover) .track,:host(:focus) .track{background-color:var(--calcite-ui-foreground-3);border-color:var(--calcite-ui-border-1)}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-switch-hover-handle-border);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-switch-hover-handle-border);box-shadow:inset 0 0 0 1px var(--calcite-switch-hover-handle-border);right:auto}:host([switched]) .track{background-color:var(--calcite-switch-switched-track-background);border-color:var(--calcite-switch-switched-track-border)}:host([switched]) .handle{right:-1px;left:auto;border-color:var(--calcite-switch-switched-handle-border)}:host([switched]:hover) .track{background-color:var(--calcite-switch-switched-hover-track-background);border-color:var(--calcite-switch-switched-hover-track-border)}:host([switched]:hover) .handle{border-color:var(--calcite-switch-switched-hover-handle-border);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-switch-switched-hover-handle-border);box-shadow:inset 0 0 0 1px var(--calcite-switch-switched-hover-handle-border)}:host([dir=rtl]){margin-right:0;margin-left:0.5em}:host([dir=rtl]) .handle{left:auto;right:-1px}:host([dir=rtl][switched]) .handle{right:auto;left:-1px}:host([dir=rtl][switched]:active) .handle,:host([dir=rtl][switched]:focus) .handle{right:auto;left:-1px}";var n=t("calcite_switch",function(){function t(t){var c=this;e(this,t);this.switched=false;this.name="";this.value="";this.color="blue";this.scale="m";this.syncThisToProxyInput=function(){c.switched=c.inputProxy.hasAttribute("checked");c.name=c.inputProxy.name;c.value=c.inputProxy.value};this.syncProxyInputToThis=function(){c.switched?c.inputProxy.setAttribute("checked",""):c.inputProxy.removeAttribute("checked");c.inputProxy.setAttribute("name",c.name);c.inputProxy.setAttribute("value",c.value)};this.calciteSwitchChange=i(this,"calciteSwitchChange",7);this.change=i(this,"change",7)}t.prototype.handleLabelFocus=function(t){if(!this.el.contains(t.detail.interactedEl)&&a(t.detail.labelEl,this.el)){this.updateSwitch(event);this.el.focus()}else return};t.prototype.onClick=function(t){if(this.el.closest("label")&&t.target===this.inputProxy||!this.el.closest("label")&&t.target===this.el){this.updateSwitch(t)}};t.prototype.keyDownHandler=function(t){var e=h(t.key);if(e===" "||e==="Enter"){this.updateSwitch(t)}};t.prototype.switchWatcher=function(){this.switched?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")};t.prototype.connectedCallback=function(){var t=["blue","red"];if(!t.includes(this.color))this.color="blue";var e=["s","m","l"];if(!e.includes(this.scale))this.scale="m";this.setupProxyInput()};t.prototype.disconnectedCallback=function(){this.observer.disconnect()};t.prototype.componentWillRender=function(){this.syncProxyInputToThis()};t.prototype.render=function(){var t=s(this.el);return c(r,{dir:t,role:"checkbox","aria-checked":this.switched.toString(),tabIndex:this.tabIndex},c("div",{class:"track"},c("div",{class:"handle"})))};Object.defineProperty(t.prototype,"tabIndex",{get:function(){var t=this.el.hasAttribute("tabindex");if(t){return Number(this.el.getAttribute("tabindex"))}return 0},enumerable:true,configurable:true});t.prototype.setupProxyInput=function(){this.inputProxy=this.el.querySelector("input");if(!this.inputProxy){this.inputProxy=document.createElement("input");this.inputProxy.type="checkbox";this.syncProxyInputToThis();this.el.appendChild(this.inputProxy)}this.syncThisToProxyInput();{this.observer=new MutationObserver(this.syncThisToProxyInput);this.observer.observe(this.inputProxy,{attributes:true})}};t.prototype.updateSwitch=function(t){t.preventDefault();this.switched=!this.switched;this.change.emit();this.calciteSwitchChange.emit()};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{switched:["switchWatcher"]}},enumerable:true,configurable:true});return t}());n.style=l}}}));