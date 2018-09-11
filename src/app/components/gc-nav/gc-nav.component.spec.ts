
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GcNavComponent } from './gc-nav.component';

describe('GcNavComponent', () => {
  let component: GcNavComponent;
  let fixture: ComponentFixture<GcNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [GcNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
