import { TestBed } from '@angular/core/testing';

import { GrocerystoreService } from './grocerystore.service';

describe('GrocerystoreService', () => {
  let service: GrocerystoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrocerystoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
