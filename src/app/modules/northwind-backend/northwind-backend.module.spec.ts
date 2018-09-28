import { NorthwindBackendModule } from './northwind-backend.module';

describe('NorthwindBackendModule', () => {
  let northwindBackendModule: NorthwindBackendModule;

  beforeEach(() => {
    northwindBackendModule = new NorthwindBackendModule();
  });

  it('should create an instance', () => {
    expect(northwindBackendModule).toBeTruthy();
  });
});
