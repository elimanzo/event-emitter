class EventEmitter {
  private subscribers: (() => void)[] = [];

  subscribe(subscriber: () => void): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: () => void): void {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  notifySubscribers(): void {
    for (const subscriber of this.subscribers) {
      subscriber();
    }
  }
}

const emitter = new EventEmitter();

const subscriber1 = () => console.log("Hello Sub 1");

emitter.subscribe(subscriber1);
emitter.subscribe(subscriber1);
emitter.subscribe(() => console.log("Hello Sub 2"));

emitter.notifySubscribers();

emitter.unsubscribe(subscriber1);
emitter.notifySubscribers();
