import { NorthwindClientModule } from './northwind-client.module';

describe('NorthwindClientModule', () => {
  let northwindClientModule: NorthwindClientModule;

  beforeEach(() => {
    northwindClientModule = new NorthwindClientModule();
  });

  it('should create an instance', () => {
    expect(northwindClientModule).toBeTruthy();
  });
});
