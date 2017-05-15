import { Bar } from 'app/sudo/test-double-sudo/test-double/spy/spy-bar';

export class Foo {
  constructor(
    public bar: Bar
  ) {
    this.bar = bar;
  }

  public foo(a: any) {
    this.bar.save(a);
  }
}


