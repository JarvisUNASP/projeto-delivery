import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBowlComponent } from './page-bowl.component';

describe('PageBowlComponent', () => {
  let component: PageBowlComponent;
  let fixture: ComponentFixture<PageBowlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBowlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
