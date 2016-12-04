import { Ng2SelectizePage } from './app.po';

describe('ng2-selectize App', function() {
  let page: Ng2SelectizePage;

  beforeEach(() => {
    page = new Ng2SelectizePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
