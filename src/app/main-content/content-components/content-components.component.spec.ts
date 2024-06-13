import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponentsComponent } from './content-components.component';

describe('ContentComponentsComponent', () => {
  let component: ContentComponentsComponent;
  let fixture: ComponentFixture<ContentComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
