import { TrackerV1Page } from './app.po';

describe('tracker-v1 App', function() {
  let page: TrackerV1Page;

  beforeEach(() => {
    page = new TrackerV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
