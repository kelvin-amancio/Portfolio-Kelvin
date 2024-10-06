import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEbookComponent } from './content-ebook.component';

describe('ContentEbookComponent', () => {
  let component: ContentEbookComponent;
  let fixture: ComponentFixture<ContentEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentEbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
