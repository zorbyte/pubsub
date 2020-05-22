import { PubSub } from "../mod.ts";

class Test {
  public x = "sfg";
}

const m = new PubSub();

m.subscribe(Test, b => {
  console.log(b);
});

m.publish(new Test());
