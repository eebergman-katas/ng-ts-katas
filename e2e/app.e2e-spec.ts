import { KataCollectionPage } from './app.po';

describe('kata-collection App', () => {
  let page: KataCollectionPage;

  beforeEach(() => {
    page = new KataCollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
