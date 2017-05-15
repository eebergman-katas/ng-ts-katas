import { BarStub } from 'app/sudo/test-double-sudo/test-double/stub/bar-stub';
import { Foo } from 'app/sudo/test-double-sudo/test-double/stub/foo';

describe('Stub Spec', () => {
    let barTD: BarStub;
    let foo: Foo;
    let fooRes: number;

    beforeEach(() => {
        barTD = new BarStub();
        foo = new Foo(barTD);
        barTD.retVal = 3;
        fooRes = foo.foo();
    });

    it('should return 5', () => {
        expect(fooRes).toEqual(5);
    });
});
