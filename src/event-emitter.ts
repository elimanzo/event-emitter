class EventEmitter {
  private subscribers: (() => void)[] = [];

  subscribe(subscriber: () => void): void {
    this.subscribers.push(subscriber);
  }

  notifySubscribers(): void {
    for(const subscriber of this.subscribers) {
      subscriber();
    }
  }
}

const emitter = new EventEmitter();

emitter.subscribe(() => console.log("Hello Sub 1"));
emitter.subscribe(() => console.log("Hello Sub 2"));

emitter.notifySubscribers();
