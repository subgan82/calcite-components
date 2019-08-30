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
  @Prop() expandDateRange: boolean = false;
  startDate: any;
  endDate: any;
  min: any;
  max: any;

  private startObserver: MutationObserver;
  private endObserver: MutationObserver;

  connectedCallback() {
    this.setupProxyInput();
  }

  @Watch("start") changeStart() {
    this.endDate.min = this.start;
    if(this.start >= this.end ){
      this.end = new Date(this.start.getTime() + 86400000);
      this.endDate.value = this.end;
    }
  }

  render() {
    return (
      <Host expanded={this.expandDateRange}>
        <slot name="start" />
        <slot name="end" />
      </Host>
    );
  }

  setupProxyInput() {
    // check for a proxy input
    this.startDate =this.el.querySelector("calcite-date-picker[slot='start']");    
    this.endDate =this.el.querySelector("calcite-date-picker[slot='end']");
    this.startDate.showNextMonth = false;
    this.endDate.showPreviousMonth = false;
    this.startDate.autoClose = false;
    this.endDate.autoClose = false;
    this.endDate.showPreviousMonth = false;
    if(this.startDate) {
      this.min = this.startDate.min;
      this.start = this.startDate.value;
    }
    if(this.endDate) {
      this.max = this.endDate.min;
      this.end = this.endDate.value;
    }



    if (Build.isBrowser) {
      this.startObserver = new MutationObserver(this.syncStartDate.bind(this));
      this.startObserver.observe(this.startDate, { attributeFilter: ["value", "max", "show-calendar"] });
      this.endObserver = new MutationObserver(this.syncEndDate.bind(this));
      this.endObserver.observe(this.endDate, { attributeFilter: ["value", "max", "show-calendar"] });
    }
  }
  syncStartDate() {
    let selectedDate = new Date(this.startDate.value)
    if(this.start && this.start <= selectedDate) {
      this.end = new Date(selectedDate);
      this.startDate.endDate = this.endDate.endDate = this.end;
    }else{
      this.start = new Date(selectedDate);
      
      this.startDate.startDate = this.endDate.startDate = this.start;
    }
    this.min = this.startDate.min;
    this.endDate.min = new Date(selectedDate);
    this.endDate.min.setMonth(selectedDate.getMonth()+1);
    this.endDate.min.setDate(1);
    this.expandDateRange = 
    this.startDate.showCalendar = 
    this.endDate.showCalendar =  this.startDate.showCalendar || this.endDate.showCalendar;
  }
  syncEndDate() {
    let selectedDate = new Date(this.endDate.value)
    if(this.end && this.end >= selectedDate) {
      this.start = new Date(selectedDate);
      this.endDate.startDate = this.startDate.startDate = this.start;
    }else{
      this.end = new Date(selectedDate);
      
      this.endDate.endDate = this.startDate.endDate = this.end;
    }
    this.expandDateRange = 
    this.startDate.showCalendar = 
    this.endDate.showCalendar =  this.startDate.showCalendar || this.endDate.showCalendar;
  }
}
