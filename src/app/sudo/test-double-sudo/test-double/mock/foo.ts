import { Bar } from 'app/sudo/test-double-sudo/test-double/mock/bar';

export class Foo {
    constructor(public bar: Bar) { }

    public foo(): number { return this.bar.getNum() + 2; }
}
