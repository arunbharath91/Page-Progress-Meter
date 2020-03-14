
export class ProgressMeter {
  private selector!: string;
  constructor() {
  }

  add(selector = 'progress') {
    this.selector = selector;
    window.onload = () => {
      const scrollElem = document.documentElement as HTMLElement;
      const distance = (scrollElem.scrollHeight - scrollElem.clientHeight);
      (document.querySelector(this.selector) as HTMLElement).setAttribute('max', distance.toString());
      this.bootProgress();
    }

    window.addEventListener('scroll', () => {
      this.bootProgress();
    });
  }


  bootProgress() {
    const scrollElem = document.documentElement;
    (document.querySelector(this.selector) as HTMLElement).setAttribute('value', (scrollElem.scrollTop).toString());
  }
}
