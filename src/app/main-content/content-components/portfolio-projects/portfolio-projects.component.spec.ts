import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectsComponent } from './portfolio-projects.component';

describe('PortfolioProjectsComponent', () => {
  let component: PortfolioProjectsComponent;
  let fixture: ComponentFixture<PortfolioProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
