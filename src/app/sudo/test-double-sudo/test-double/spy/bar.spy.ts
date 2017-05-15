import { Bar } from 'app/sudo/test-double-sudo/test-double/spy/spy-bar';

export class BarSpy extends Bar {
    public saveWasCalled = false;
    public saveWasCalledWith = [];

    public save(a: any) {
      this.saveWasCalled = true;
      this.saveWasCalledWith = [a];
    }
}
