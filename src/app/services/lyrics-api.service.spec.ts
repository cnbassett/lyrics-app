import { TestBed, inject } from '@angular/core/testing';

import { LyricsApiService } from './lyrics-api.service';

describe('LyricsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LyricsApiService]
    });
  });

  it('should be created', inject([LyricsApiService], (service: LyricsApiService) => {
    expect(service).toBeTruthy();
  }));
});
