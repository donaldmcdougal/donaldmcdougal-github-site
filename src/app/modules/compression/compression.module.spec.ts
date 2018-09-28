import { CompressionModule } from './compression.module';

describe('CompressionModule', () => {
  let compressionModule: CompressionModule;

  beforeEach(() => {
    compressionModule = new CompressionModule();
  });

  it('should create an instance', () => {
    expect(compressionModule).toBeTruthy();
  });
});
