import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTileContainerComponent } from './movie-tile-container.component';

describe('MovieTileContainerComponent', () => {
  let component: MovieTileContainerComponent;
  let fixture: ComponentFixture<MovieTileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTileContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
