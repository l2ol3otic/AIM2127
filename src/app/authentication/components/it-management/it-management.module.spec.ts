import { ItManagementModule } from './it-management.module';

describe('ItManagementModule', () => {
  let itManagementModule: ItManagementModule;

  beforeEach(() => {
    itManagementModule = new ItManagementModule();
  });

  it('should create an instance', () => {
    expect(itManagementModule).toBeTruthy();
  });
});
