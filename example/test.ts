import { PubSub } from "../mod.ts";

class Test {
  public x = "sfg";
}

const m = new PubSub();

m.subscribe(Test, (t) => {
  console.log(t);
});

m.subscribe(String, (s) => {
  console.log(s);
});

m.publish("sdfg");
m.publish(new Test());
