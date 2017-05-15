import { Bar } from 'app/sudo/test-double-sudo/test-double/stub/bar';

export class BarStub extends Bar {
    public retVal = 1;

    getNum() {
        return this.retVal;
    }
}
