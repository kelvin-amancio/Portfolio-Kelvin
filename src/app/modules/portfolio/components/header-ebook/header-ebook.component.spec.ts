import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEbookComponent } from './header-ebook.component';

describe('HeaderEbookComponent', () => {
  let component: HeaderEbookComponent;
  let fixture: ComponentFixture<HeaderEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderEbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
