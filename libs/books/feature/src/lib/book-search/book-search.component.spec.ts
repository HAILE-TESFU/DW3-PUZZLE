import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedTestingModule } from '@tmo/shared/testing';

import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchComponent } from './book-search.component';

describe('ProductsListComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('Should display the books list', () => {
    component.books = [
      {
        id: '1',
        title: 'Angular Momentum in Quantum mechanics',
        authors: ['A.R. Edmonds'],
        description: 'Momentum of a System of Particles PRELIMINARY REMARKS',
        publisher: 'Princeton University Press',
        publishedDate: '12/31/1995',
        coverUrl: 'the website',
        isAdded: false,
      },
    ];

    fixture.detectChanges();

    const le = fixture.debugElement;

    const bookgrid = le.queryAll(By.css('.book'));

    expect(bookgrid).toBeTruthy();
  });
});
