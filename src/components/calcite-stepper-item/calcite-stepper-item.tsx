import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from "@stencil/core";
import { getElementDir, getElementProp } from "../../utils/dom";
import { getKey } from "../../utils/key";

@Component({
  tag: "calcite-stepper-item",
  styleUrl: "calcite-stepper-item.scss",
  shadow: true,
})
export class CalciteStepperItem {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLElement;

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------
  /** is the step active */
  @Prop({ reflect: true, mutable: true }) active: boolean = false;

  /** has the step been completed */
  @Prop({ reflect: true, mutable: true }) complete: boolean = false;

  /** does the step contain an error that needs to be resolved by the user */
  @Prop({ mutable: true }) error: boolean = false;

  /** is the step disabled and not navigable to by a user */
  @Prop({ mutable: true }) disabled: boolean = false;

  /** pass a title for the stepper item */
  @Prop() itemTitle?: string;

  /** pass a title for the stepper item */
  @Prop() itemSubtitle?: string;

  // internal props inherited from wrapping calcite-stepper
  /** pass a title for the stepper item */
  /** @internal */

  @Prop({ reflect: true, mutable: true }) layout?: string;

  /** should the items display an icon based on status */
  /** @internal */
  @Prop({ mutable: true }) icon: boolean = false;

  /** optionally display the step number next to the title and subtitle */
  /** @internal */
  @Prop({ mutable: true }) numbered: boolean = false;

  /** the scale of the item */
  /** @internal */
  @Prop({ reflect: true, mutable: true }) scale: "s" | "m" | "l" = "m";

  // watch for removal of disabled to register step
  @Watch("disabled") disabledWatcher() {
    this.registerStepperItem();
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  @Event() calciteStepperItemKeyEvent: EventEmitter;
  @Event() calciteStepperItemSelect: EventEmitter;
  @Event() calciteStepperItemRegister: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  componentWillLoad() {
    this.icon = getElementProp(this.el, "icon", false);
    this.numbered = getElementProp(this.el, "numbered", false);
    this.layout = getElementProp(this.el, "layout", false);
    this.scale = getElementProp(this.el, "scale", "m");
  }

  componentDidLoad() {
    this.itemPosition = this.getItemPosition();
    this.itemContent = this.getItemContent();
    this.registerStepperItem();
    if (this.active) this.emitRequestedItem();
  }

  componentDidUpdate() {
    if (this.active) this.emitRequestedItem();
  }

  render() {
    const dir = getElementDir(this.el);
    return (
      <Host
        dir={dir}
        tabindex={this.disabled ? null : 0}
        aria-expanded={this.active.toString()}
        onClick={() => this.emitRequestedItem()}
      >
        <div class="stepper-item-header">
          {this.icon ? this.setIcon() : null}
          {this.numbered ? (
            <div class="stepper-item-number">{this.getItemPosition() + 1}.</div>
          ) : null}
          <div class="stepper-item-header-text">
            <span class="stepper-item-title">{this.itemTitle}</span>
            <span class="stepper-item-subtitle">{this.itemSubtitle}</span>
          </div>
        </div>
        <div class="stepper-item-content">
          <slot />
        </div>
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("keydown") keyDownHandler(e) {
    if (!this.disabled && e.target === this.el) {
      switch (getKey(e.key)) {
        case " ":
        case "Enter":
          this.emitRequestedItem();
          e.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "Home":
        case "End":
          this.calciteStepperItemKeyEvent.emit({ item: e });
          e.preventDefault();
          break;
      }
    }
  }

  @Listen("calciteStepperItemChange", { target: "parent" })
  updateActiveItemOnChange(event: CustomEvent) {
    this.activePosition = event.detail.position;
    this.determineActiveItem();
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------
  /** position within parent */
  private itemPosition: number;

  /** the latest requested item position*/
  private activePosition: number;

  /** the slotted item content */
  private itemContent: HTMLElement[] | HTMLElement;

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private setIcon() {
    var path = this.active
      ? "circleF"
      : this.error
      ? "exclamationMarkCircleF"
      : this.complete
      ? "checkCircleF"
      : "circle";

    return <calcite-icon icon={path} scale="s" class="stepper-item-icon" />;
  }

  private determineActiveItem() {
    this.active = !this.disabled && this.itemPosition === this.activePosition;
  }

  private registerStepperItem() {
    this.calciteStepperItemRegister.emit({
      position: this.itemPosition,
      content: this.itemContent,
    });
  }

  private emitRequestedItem() {
    if (!this.disabled) {
      this.calciteStepperItemSelect.emit({
        position: this.itemPosition,
        content: this.itemContent,
      });
    }
  }

  private getItemContent() {
    // handle ie and edge
    return this.el.shadowRoot?.querySelector("slot")
      ? (this.el.shadowRoot
          .querySelector("slot")
          .assignedNodes({ flatten: true }) as HTMLElement[])
      : this.el.querySelector(".stepper-item-content")
      ? (this.el.querySelector(".stepper-item-content") as HTMLElement)
      : null;
  }

  private getItemPosition() {
    const parent = this.el.parentElement as HTMLCalciteStepperElement;
    return Array.prototype.indexOf.call(
      parent.querySelectorAll("calcite-stepper-item"),
      this.el
    );
  }
}
