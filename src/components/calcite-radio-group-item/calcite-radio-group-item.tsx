import {
  Component,
  Event,
  h,
  EventEmitter,
  Prop,
  Element,
  Host,
  Watch,
  Build,
} from "@stencil/core";
import { getElementProp } from "../../utils/dom";
@Component({
  tag: "calcite-radio-group-item",
  styleUrl: "calcite-radio-group-item.scss",
  shadow: true,
})
export class CalciteRadioGroupItem {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element()
  el: HTMLElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** Indicates whether the control is checked. */
  @Prop({ reflect: true, mutable: true }) checked = false;

  /** optionally pass an icon to display - accepts Calcite UI icon names  */
  @Prop({ reflect: true }) icon?: string;

  /** optionally used with icon, select where to position the icon */
  @Prop({ reflect: true, mutable: true }) iconPosition?: "start" | "end" =
    "start";

  @Watch("checked")
  protected handleCheckedChange(): void {
    this.calciteRadioGroupItemChange.emit();
    this.syncToExternalInput();
  }

  /**
   * The control's value.
   */
  @Prop()
  value: any | null;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    let inputProxy: HTMLInputElement = this.el.querySelector(
      `input[slot="input"]`
    );

    if (inputProxy) {
      this.value = inputProxy.value;
      this.checked = inputProxy.checked;
      if (Build.isBrowser) {
        this.mutationObserver.observe(inputProxy, { attributes: true });
      }
    }

    this.inputProxy = inputProxy;

    // prop validations
    let iconPosition = ["start", "end"];
    if (this.icon !== null && !iconPosition.includes(this.iconPosition))
      this.iconPosition = "start";
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }

  render() {
    const { checked, el, icon, iconPosition, value } = this;
    const scale = getElementProp(el, "scale", "m");
    const appearance = getElementProp(el, "appearance", "m");
    const layout = getElementProp(el, "layout", "m");

    const iconEl = (
      <calcite-icon class="radio-group-item-icon" icon={icon} scale="s" />
    );

    return (
      <Host
        role="radio"
        aria-checked={checked.toString()}
        scale={scale}
        appearance={appearance}
        layout={layout}
      >
        <label>
          {icon && iconPosition === "start" ? iconEl : null}
          <slot>{value}</slot>
          <slot name="input" />
          {icon && iconPosition === "end" ? iconEl : null}
        </label>
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  @Event()
  calciteRadioGroupItemChange: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  private inputProxy: HTMLInputElement;

  private mutationObserver = this.getMutationObserver();

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private getMutationObserver(): MutationObserver | null {
    return (
      Build.isBrowser &&
      new MutationObserver(() => this.syncFromExternalInput())
    );
  }

  private syncFromExternalInput(): void {
    if (this.inputProxy) {
      this.value = this.inputProxy.value;
      this.checked = this.inputProxy.checked;
    }
  }

  private syncToExternalInput(): void {
    if (!this.inputProxy) {
      return;
    }

    this.inputProxy.value = this.value;
    if (this.checked) {
      this.inputProxy.setAttribute("checked", "true");
    } else {
      this.inputProxy.removeAttribute("checked");
    }
  }
}
