# PubSub for Deno

A simple PubSub module for deno.

## Example

```ts
import { PubSub } from "https://deno.land/x/pubsub/mod.ts";

class Test {
  public x = "sfg";
}

const m = new PubSub();

m.subscribe(Test, (t) => {
  console.log(t);
});

m.publish(new Test());
```

# License

Licensed under the MIT License, checkout the [LICENSE](../LICENSE) for more information.
