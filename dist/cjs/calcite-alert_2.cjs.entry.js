'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9cd06664.js');
const dom = require('./dom-dcb5a4ba.js');
const index = require('./index-885f003a.js');
const index$1 = require('./index-c41eeb4b.js');

const AlertInterface = index$1.createProviderConsumer({
    currentAlert: "",
    queueLength: 0
}, (subscribe, child) => (core.h("context-consumer", { subscribe: subscribe, renderer: child })));

const CalciteAlert = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** Is the alert currently active or not */
        this.active = false;
        /** Close the alert automatically (recommended for passive, non-blocking alerts) */
        this.dismiss = false;
        /** Length before autodismissal (only used with `dismiss`) */
        this.duration = this.dismiss
            ? "medium"
            : null;
        /** Color for the alert (will apply to top border and icon) */
        this.color = "blue";
        /** Select theme (light or dark) */
        this.theme = "light";
        /** If false, no icon will be shown in the alert */
        this.icon = false;
        /** Unique ID for this alert */
        /** @internal */
        this.alertId = this.el.id;
        /** @internal */
        this.currentAlert = "";
        /** @internal */
        this.queueLength = 0;
        this.durationDefaults = {
            slow: 14000,
            medium: 10000,
            fast: 6000
        };
        this.iconDefaults = {
            green: index.checkCircle24F,
            yellow: index.exclamationMarkTriangle24F,
            red: index.exclamationMarkTriangle24F,
            blue: index.lightbulb24F
        };
        this.calciteAlertClose = core.createEvent(this, "calciteAlertClose", 7);
        this.calciteAlertOpen = core.createEvent(this, "calciteAlertOpen", 7);
    }
    /** watch for changes to currentAlert passed from <calcite-alerts> */
    watchCurrentAlert() {
        if (!this.active && this.currentAlert === this.alertId) {
            if (this.dismiss)
                setTimeout(() => this.closeCalciteAlert(), this.durationDefaults[this.duration]);
            setTimeout(() => (this.active = true), 300);
        }
        else {
            this.active = false;
        }
    }
    /** emit the `calciteAlertClose` event - <calcite-alerts> listens for this */
    async closeCalciteAlert() {
        this.calciteAlertClose.emit({ requestedAlert: this.alertId });
    }
    /**  emit the `calciteAlertOpen` event - <calcite-alerts> listens for this  */
    async openCalciteAlert() {
        this.calciteAlertOpen.emit({ requestedAlert: this.alertId });
    }
    connectedCallback() {
        // prop validations
        let colors = ["blue", "red", "green", "yellow"];
        if (!colors.includes(this.color))
            this.color = "blue";
        let durations = ["slow", "medium", "fast"];
        if (this.duration !== null && !durations.includes(this.duration))
            this.duration = "medium";
        let themes = ["dark", "light"];
        if (!themes.includes(this.theme))
            this.theme = "light";
    }
    setIcon() {
        var path = this.iconDefaults[this.color];
        return (core.h("div", { class: "alert-icon" }, core.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24", viewBox: "0 0 24 24" }, core.h("path", { d: path }))));
    }
    render() {
        const dir = dom.getElementDir(this.el);
        const closeButton = (core.h("button", { class: "alert-close", "aria-label": "close", onClick: () => this.closeCalciteAlert() }, core.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "32", width: "32", viewBox: "0 0 32 32" }, core.h("path", { d: index.x32 }))));
        const close = !this.dismiss ? closeButton : "";
        const icon = this.icon ? this.setIcon() : "";
        const count = (core.h("div", { class: `${this.queueLength > 0 ? "active " : ""}alert-count` }, "+", this.queueLength > 0 ? this.queueLength : 1));
        const progress = this.active && this.dismiss ? core.h("div", { class: "alert-dismiss" }) : "";
        return (core.h(core.Host, { active: this.active, dir: dir }, icon, core.h("div", { class: "alert-content" }, core.h("slot", { name: "alert-title" }), core.h("slot", { name: "alert-message" }), core.h("slot", { name: "alert-link" })), count, close, progress));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "currentAlert": ["watchCurrentAlert"]
    }; }
    static get style() { return ":host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-alert-background:#fff;--calcite-alert-title-text:#404040;--calcite-alert-message-text:#555;--calcite-alert-icon-fill:#151515;--calcite-alert-close-background-hover:#f3f3f3;--calcite-alert-close-background-pressed:#eaeaea;--calcite-alert-count-text:#404040;--calcite-alert-count-border:#f3f3f3;--calcite-alert-dismiss-background:hsla(0,0%,100%,0.8);--calcite-alert-border-blue:#007ac2;--calcite-alert-border-green:#35ac46;--calcite-alert-border-red:#d83020;--calcite-alert-border-yellow:#edd317}:host([theme=dark]){--calcite-alert-background:#2b2b2b;--calcite-alert-title-text:#f8f8f8;--calcite-alert-message-text:#f3f3f3;--calcite-alert-icon-fill:#d4d4d4;--calcite-alert-close-background-hover:#202020;--calcite-alert-close-background-pressed:#151515;--calcite-alert-count-text:#d4d4d4;--calcite-alert-count-border:#202020;--calcite-alert-dismiss-background:rgba(43,43,43,0.8);--calcite-alert-border-blue:#3db8ff;--calcite-alert-border-green:#3bed52;--calcite-alert-border-red:#ff0015;--calcite-alert-border-yellow:#fe3}:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;pointer-events:none;z-index:102;margin:0 auto;width:50em;max-width:90%;max-height:0;background-color:var(--calcite-alert-background);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.15);box-shadow:0 0 16px 0 rgba(0,0,0,.15);border-radius:2px;opacity:0;-webkit-transform:translate3d(0,1.5rem,0);transform:translate3d(0,1.5rem,0);-webkit-transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;border-top:0 solid transparent}\@media only screen and (max-width:860px){:host{width:100%;max-width:100%;border-radius:2px 2px 0 0;-webkit-box-shadow:0 -8px 16px 0 rgba(0,0,0,.15);box-shadow:0 -8px 16px 0 rgba(0,0,0,.15)}}:host:host(.hydrated){visibility:hidden!important}:host([active]){opacity:1;max-height:100%;-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);pointer-events:auto;border-top-width:3px}:host([active]):host(.hydrated){visibility:visible!important}\@media only screen and (max-width:860px){:host([active]){-webkit-transform:translateZ(0);transform:translateZ(0)}}div::slotted([slot=alert-title]),slot[name=alert-title]::slotted(div){font-size:1rem;line-height:1.5;color:var(--calcite-alert-title-text);font-weight:500}::slotted(calcite-button){font-size:.9375rem;line-height:1.5}div::slotted([slot=alert-message]),slot[name=alert-message]::slotted(div){display:inline;margin-right:.75rem;font-size:.9375rem;line-height:1.5;color:var(--calcite-alert-message-text)}:host([dir=rtl]) div::slotted([slot=alert-message]),:host([dir=rtl]) slot[name=alert-message]::slotted(div){margin-right:unset;margin-left:.75rem}.alert-content{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:.75rem .75rem .75rem 0}.alert-content svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-content{padding:1.5rem}}.alert-content:first-of-type{padding-left:1.5rem}\@media only screen and (max-width:860px){.alert-content{padding:1.5rem .75rem 1.5rem 0}}:host([dir=rtl]) .alert-content:first-of-type{padding-right:1.5rem;padding-left:none}\@media only screen and (max-width:860px){:host([dir=rtl]) .alert-content{padding:1.5rem 0 1.5rem .75rem}}.alert-icon{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-icon svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-icon{padding:1.5rem}}.alert-close{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;border-radius:0 0 2px 0}.alert-close svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-close{padding:1.5rem}}.alert-close svg{fill:var(--calcite-alert-icon-fill)}.alert-close:focus,.alert-close:hover{background-color:var(--calcite-alert-close-background-hover)}.alert-close:active{background-color:var(--calcite-alert-close-background-pressed)}:host([dir=rtl]) .alert-close{border-radius:0 0 0 2px}\@media only screen and (max-width:860px){:host([dir=rtl]) .alert-close{border-radius:0}}.alert-count{font-size:.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:var(--calcite-alert-count-text);opacity:0;border-left:0 solid transparent;border-right:0 solid transparent;cursor:default;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.alert-count.active{visibility:visible;opacity:1;padding:0 .375rem;width:3rem;border-left:1px solid var(--calcite-alert-count-border);border-right:1px solid var(--calcite-alert-count-border)}.alert-count.active:last-child{border-right:0 solid transparent}\@media only screen and (max-width:860px){.alert-count{border-radius:0}}:host([dir=rtl]).active:last-child{border-left:1px solid var(--calcite-alert-count-border);border-right:0 solid transparent}.alert-dismiss{left:0;top:0;width:100%;z-index:103}.alert-dismiss,.alert-dismiss:after{display:block;position:absolute;right:0;height:3px}.alert-dismiss:after{top:-3px;border-radius:2px 2px 0 0;content:\"\";background-color:var(--calcite-alert-dismiss-background);z-index:104}:host([color=blue]){border-top-color:var(--calcite-alert-border-blue)}:host([color=blue]) .alert-icon svg{fill:var(--calcite-alert-border-blue)}:host([color=red]){border-top-color:var(--calcite-alert-border-red)}:host([color=red]) .alert-icon svg{fill:var(--calcite-alert-border-red)}:host([color=yellow]){border-top-color:var(--calcite-alert-border-yellow)}:host([color=yellow]) .alert-icon svg{fill:var(--calcite-alert-border-yellow)}:host([color=green]){border-top-color:var(--calcite-alert-border-green)}:host([color=green]) .alert-icon svg{fill:var(--calcite-alert-border-green)}:host([duration=fast]) .alert-dismiss:after{-webkit-animation:dismissProgress 6s ease-out;animation:dismissProgress 6s ease-out}:host([duration=medium]) .alert-dismiss:after{-webkit-animation:dismissProgress 10s ease-out;animation:dismissProgress 10s ease-out}:host([duration=slow]) .alert-dismiss:after{-webkit-animation:dismissProgress 14s ease-out;animation:dismissProgress 14s ease-out}\@-webkit-keyframes dismissProgress{0%{width:0;opacity:.8}to{width:100%;opacity:1}}\@keyframes dismissProgress{0%{width:0;opacity:.8}to{width:100%;opacity:1}}"; }
};
AlertInterface.injectProps(CalciteAlert, ["currentAlert", "queueLength"]);

const CalciteAlerts = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.currentAlert = "";
        this.active = false;
        this.alertQueue = [];
        this.calciteAlertsClose = core.createEvent(this, "calciteAlertsClose", 7);
        this.calciteAlertsOpen = core.createEvent(this, "calciteAlertsOpen", 7);
    }
    /** Adds the requested alert to the alert queue, if not present */
    updateQueueOnOpen(event) {
        if (!this.alertQueue.includes(event.detail.requestedAlert)) {
            this.active = true;
            this.currentAlert = event.detail.requestedAlert;
            this.alertQueue.push(event.detail.requestedAlert);
            this.calciteAlertsOpen.emit({
                currentAlert: this.currentAlert,
                alertQueue: this.alertQueue
            });
        }
    }
    /** Closes the requested alert and removes from the queue, or removes from queue if not active */
    updateQueueOnClose(event) {
        if (this.alertQueue.includes(event.detail.requestedAlert))
            this.alertQueue = this.alertQueue.filter(e => e !== event.detail.requestedAlert);
        if (this.alertQueue.length < 1)
            setTimeout(() => {
                this.active = false;
            }, 400);
        this.calciteAlertsClose.emit({
            currentAlert: this.currentAlert,
            alertQueue: this.alertQueue
        });
    }
    componentWillUpdate() {
        this.currentAlert = this.alertQueue.length > 0 ? this.alertQueue[0] : "";
    }
    render() {
        const alertState = {
            currentAlert: this.currentAlert,
            queueLength: this.alertQueue.length >= 2 ? this.alertQueue.length - 1 : 0
        };
        return (core.h(core.Host, { active: this.active }, core.h(AlertInterface.Provider, { state: alertState }, core.h("slot", null))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:none;position:fixed;left:0;right:0;bottom:0;pointer-events:none;z-index:101}:host([active]){display:block}"; }
};

exports.calcite_alert = CalciteAlert;
exports.calcite_alerts = CalciteAlerts;
