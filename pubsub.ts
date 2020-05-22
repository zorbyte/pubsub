export type Subscriber<T> = (data: T) => void;
export type Constructable<T> = { new (): T };

export class PubSub {
  private subscribers = new Map<unknown, Subscriber<any>[]>();

  public subscribe<T>(subscribtable: Constructable<T>, cb: Subscriber<T>) {
    const subs = this.subscribers.get(subscribtable) ?? [];
    subs.push(cb);
    this.subscribers.set(subscribtable, subs);
  }

  public publish<T>(subscribtable: T) {
    const subs = this.subscribers.get(
      (subscribtable as T & { constructor: Constructable<T> }).constructor,
    );
    if (!subs?.length) return;
    subs.forEach((s) => s(subscribtable));
  }
}
