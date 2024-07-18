import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image3dComponent } from './image3d.component';

describe('Image3dComponent', () => {
  let component: Image3dComponent;
  let fixture: ComponentFixture<Image3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Image3dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Image3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
