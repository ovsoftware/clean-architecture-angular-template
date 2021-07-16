import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLazyLoadedPageContainerComponent } from './my-lazy-loaded-page-container.component';

describe('MyLazyLoadedPageContainerComponent', () => {
  let component: MyLazyLoadedPageContainerComponent;
  let fixture: ComponentFixture<MyLazyLoadedPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLazyLoadedPageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLazyLoadedPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
