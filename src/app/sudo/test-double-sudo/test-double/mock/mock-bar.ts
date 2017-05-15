import { Bar } from 'app/sudo/test-double-sudo/test-double/mock/bar';

export class BarMock extends Bar {
    public getNumWasCalled = false;

    public getNum(): number {
        this.getNumWasCalled = true;
        return this.retVal;
    }
}
