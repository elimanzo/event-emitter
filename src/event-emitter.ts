class EventEmitter {
  private subscribers: Map<number, () => void> = new Map();
  private nextKey = 0;
  subscribe(subscriber: () => void): () => void {
    const key = this.nextKey++;
    this.subscribers.set(key, subscriber);

    return () => this.subscribers.delete(key);
  }

  notifySubscribers(): void {
    for (const subscriber of this.subscribers.values()) {
      subscriber();
    }
  }
}

const emitter = new EventEmitter();

const subscriber1 = () => console.log("Hello Sub 1");

emitter.subscribe(subscriber1);
const unsubscribe = emitter.subscribe(subscriber1);
emitter.subscribe(subscriber1);
emitter.subscribe(subscriber1);
emitter.subscribe(() => console.log("Hello Sub 2"));

emitter.notifySubscribers();

unsubscribe();
unsubscribe();
unsubscribe();
unsubscribe();
emitter.notifySubscribers();
