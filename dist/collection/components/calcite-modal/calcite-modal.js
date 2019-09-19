import { Host, h, Build } from "@stencil/core";
import { x24 } from "@esri/calcite-ui-icons";
import "@a11y/focus-trap";
import { getElementDir, getElementTheme, hasSlottedContent } from "../../utils/dom";
export class CalciteModal {
    constructor() {
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** Optionally pass a function to run before close */
        this.beforeClose = () => Promise.resolve();
        /** Aria label for the close button */
        this.closeLabel = "Close";
        /** Set the overall size of the modal */
        this.size = "small";
        /** Select theme (light or dark) */
        this.theme = "light";
        this.hideBackButton = true;
        this.hideSecondaryButton = true;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentDidLoad() {
        if (Build.isBrowser) {
            const back = this.el.shadowRoot.querySelector("slot[name=back]");
            const secondary = this.el.shadowRoot.querySelector("slot[name=secondary]");
            back.addEventListener("slotchange", () => {
                this.hideBackButton = !hasSlottedContent(back);
            });
            secondary.addEventListener("slotchange", () => {
                this.hideSecondaryButton = !hasSlottedContent(secondary);
            });
        }
    }
    render() {
        const dir = getElementDir(this.el);
        const theme = getElementTheme(this.el);
        return (h(Host, { role: "dialog", "aria-modal": "true", class: { "is-active": this.isActive }, dir: dir, theme: theme },
            h("div", { class: "modal" },
                h("focus-trap", { ref: (el) => (this.trap = el) },
                    h("div", { class: "modal__header" },
                        h("button", { class: "modal__close", "aria-label": this.closeLabel, onClick: () => this.close() },
                            h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                                h("path", { d: x24 }))),
                        h("header", { class: "modal__title" },
                            h("slot", { name: "header" }))),
                    h("div", { class: "modal__content" },
                        h("slot", { name: "content" })),
                    h("div", { class: {
                            modal__footer: true,
                            "modal__footer--hide-back": this.hideBackButton,
                            "modal__footer--hide-secondary": this.hideSecondaryButton
                        } },
                        h("slot", { name: "back" }),
                        h("slot", { name: "secondary" }),
                        h("slot", { name: "primary" }))))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    handleEscape(e) {
        if (e.key === "Escape" && !this.disableEscape) {
            this.close();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Open the modal */
    async open() {
        this.previousActiveElement = document.activeElement;
        this.isActive = true;
        // wait for the modal to open, then handle focus.
        return new Promise(resolve => {
            setTimeout(() => {
                if (this.firstFocus) {
                    this.firstFocus.focus();
                }
                else {
                    this.trap.focusFirstElement();
                }
                resolve(this.el);
            }, 300);
            document.documentElement.classList.add("overflow-hidden");
            this.calciteModalOpen.emit();
        });
    }
    /** Close the modal, first running the `beforeClose` method */
    async close() {
        return this.beforeClose(this.el).then(() => {
            this.isActive = false;
            this.previousActiveElement.focus();
            document.documentElement.classList.remove("overflow-hidden");
            this.calciteModalClose.emit();
            return new Promise(resolve => {
                setTimeout(() => resolve(this.el), 300);
            });
        });
    }
    static get is() { return "calcite-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-modal.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-modal.css"]
    }; }
    static get properties() { return {
        "beforeClose": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(el: HTMLElement) => Promise<void>",
                "resolved": "(el: HTMLElement) => Promise<void>",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    },
                    "Promise": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Optionally pass a function to run before close"
            },
            "defaultValue": "() =>\n    Promise.resolve()"
        },
        "closeLabel": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Aria label for the close button"
            },
            "attribute": "close-label",
            "reflect": false,
            "defaultValue": "\"Close\""
        },
        "docked": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Prevent the modal from taking up the entire screen on mobile"
            },
            "attribute": "docked",
            "reflect": true
        },
        "firstFocus": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement",
                "resolved": "HTMLElement",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Specify an element to focus when the modal is first opened"
            }
        },
        "disableEscape": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Flag to disable the default close on escape behavior"
            },
            "attribute": "disable-escape",
            "reflect": false
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"small\" | \"medium\" | \"large\" | \"fullscreen\"",
                "resolved": "\"fullscreen\" | \"large\" | \"medium\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set the overall size of the modal"
            },
            "attribute": "size",
            "reflect": true,
            "defaultValue": "\"small\""
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"red\" | \"blue\"",
                "resolved": "\"blue\" | \"red\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Adds a color bar at the top for visual impact,\nUse color to add importance to desctructive/workflow dialogs."
            },
            "attribute": "color",
            "reflect": true
        },
        "theme": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"light\" | \"dark\"",
                "resolved": "\"dark\" | \"light\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Select theme (light or dark)"
            },
            "attribute": "theme",
            "reflect": true,
            "defaultValue": "\"light\""
        }
    }; }
    static get states() { return {
        "isActive": {},
        "hideBackButton": {},
        "hideSecondaryButton": {}
    }; }
    static get events() { return [{
            "method": "calciteModalOpen",
            "name": "calciteModalOpen",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired when the modal begins the open animation"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "calciteModalClose",
            "name": "calciteModalClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired when the modal begins the close animation"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "open": {
            "complexType": {
                "signature": "() => Promise<HTMLElement>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLElement>"
            },
            "docs": {
                "text": "Open the modal",
                "tags": []
            }
        },
        "close": {
            "complexType": {
                "signature": "() => Promise<HTMLElement>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLElement>"
            },
            "docs": {
                "text": "Close the modal, first running the `beforeClose` method",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "keyup",
            "method": "handleEscape",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
