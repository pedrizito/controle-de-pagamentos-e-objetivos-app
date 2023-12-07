import { TestBed } from '@angular/core/testing';

import { AbstracaoPessoaServiceService } from './abstracao-pessoa-service.service';

describe('AbstracaoPessoaServiceService', () => {
  let service: AbstracaoPessoaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstracaoPessoaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
