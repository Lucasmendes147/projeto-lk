import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeioPaginaComponent } from './meio-pagina.component';

describe('MeioPaginaComponent', () => {
  let component: MeioPaginaComponent;
  let fixture: ComponentFixture<MeioPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeioPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeioPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
