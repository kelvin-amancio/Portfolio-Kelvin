import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDeliveryComponent } from './service-delivery.component';

describe('ServiceDeliveryComponent', () => {
  let component: ServiceDeliveryComponent;
  let fixture: ComponentFixture<ServiceDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
