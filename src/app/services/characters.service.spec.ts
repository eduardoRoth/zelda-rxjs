import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactersService = TestBed.get(CharactersService);
    expect(service).toBeTruthy();
  });
});
