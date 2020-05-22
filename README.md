# PubSub for Deno

A simple PubSub module for deno.

## Example

```ts
import { PubSub } from "https://deno.land/x/pubsub@0.0.4/mod.ts";

class Test {
  public x = "sfg";
}

const m = new PubSub();

m.subscribe(Test, (t) => {
  // Prints: Test { x: "sfg" }
  console.log(t);
});

m.publish(new Test());

m.subscribe(String, (s) => {
  // Prints: sdfg
  console.log(s);
});

m.publish("sdfg");
```

# License

Licensed under the MIT License, checkout the [LICENSE](../LICENSE) for more information.
