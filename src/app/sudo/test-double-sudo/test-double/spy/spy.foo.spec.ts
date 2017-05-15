import { BarSpy } from 'app/sudo/test-double-sudo/test-double/spy/bar.spy';
import { Foo } from 'app/sudo/test-double-sudo/test-double/spy/spy-foo';

const barTD = new BarSpy();

const foo = new Foo(barTD);

foo.foo(5);


describe('BarSpy', () => {
    it('should call save()', () => {
        expect(barTD.saveWasCalled).toBeTruthy();
    });
});

