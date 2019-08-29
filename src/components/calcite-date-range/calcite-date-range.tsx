import {
  Component,
  Element,
  h,
  Host,
  Build,
  Watch,
  Prop
} from "@stencil/core";

@Component({
  tag: "calcite-date-range",
  styleUrl: "calcite-date-range.scss",
  shadow: true
})
export class CalciteDateRange {
  @Element() el: HTMLElement;
  @Prop() start: any;
  @Prop() end: any;
  startDate: any;
  endDate: any;
  min: any;
  max: any;

  private observer: MutationObserver;

  connectedCallback() {
    this.setupProxyInput();
  }

  @Watch("start") changeStart() {
    this.endDate.min = this.start;
    if(this.start >= this.end ){
      let tmpDate = new Date(this.start);
      this.end =  new Date(tmpDate.getTime() + 86400000);;
    }
  }

  render() {
    return (
      <Host>
        <p>Text here</p>
        <slot name="start" />
        <slot name="end" />
      </Host>
    );
  }

  setupProxyInput() {
    // check for a proxy input
    this.startDate =this.el.querySelector("calcite-date-picker[slot='start']");    
    this.endDate =this.el.querySelector("calcite-date-picker[slot='end']");
    if(this.startDate) {
      this.min = this.startDate.min;
      this.start = this.startDate.value;
    }
    if(this.endDate) {
      this.max = this.endDate.min;
      this.end = this.endDate.value;
    }

    if (Build.isBrowser) {
      this.observer = new MutationObserver(this.syncStartAndEndDate.bind(this));
      this.observer.observe(this.startDate, { attributes: true });
      this.observer.observe(this.endDate, { attributes: true });
    }
  }
  syncStartAndEndDate() {
    this.start = this.startDate.value;
    this.end = this.endDate.value;
    this.min = this.startDate.min;
    this.max = this.endDate.max;
  }
}
