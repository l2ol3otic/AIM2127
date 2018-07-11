import { AssetManagementModule } from './asset-management.module';

describe('AssetManagementModule', () => {
  let assetManagementModule: AssetManagementModule;

  beforeEach(() => {
    assetManagementModule = new AssetManagementModule();
  });

  it('should create an instance', () => {
    expect(assetManagementModule).toBeTruthy();
  });
});
