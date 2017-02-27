import { Angular2CrudPage } from './app.po';

describe('angular2-crud App', () => {
  let page: Angular2CrudPage;

  beforeEach(() => {
    page = new Angular2CrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
