
class ProgressMeter {
  private selector: string;
  constructor(selector = 'progress') {
    this.selector = selector;
    this.onloadRegistry();
  }

  onloadRegistry() {
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

const progress = new ProgressMeter();
