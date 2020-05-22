export type Subscriber<T> = (data: T) => void;
export type Constructable<T> = { new (): T };

export class PubSub {
  private subscribers = new Map<unknown, Subscriber<any>[]>();

  public subscribe<T>(subscriptable: Constructable<T>, cb: Subscriber<T>) {
    const subs = this.subscribers.get(subscriptable) ?? [];
    subs.push(cb);
    this.subscribers.set(subscriptable, subs);
  }

  public publish<T>(subscriptable: T) {
    const subs = this.subscribers.get(
      (subscriptable as T & { constructor: Constructable<T> }).constructor,
    );
    if (!subs?.length) return;
    subs.forEach((s) => s(subscriptable));
  }
}
