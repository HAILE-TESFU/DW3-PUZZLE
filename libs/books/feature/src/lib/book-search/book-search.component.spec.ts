import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedTestingModule } from '@tmo/shared/testing';

import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchComponent } from './book-search.component';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { ReadingListBook } from '@tmo/books/data-access';
import * as ReducerBook from '../../../../data-access/src/index';
import { Book } from '@tmo/shared/models';

describe('ProductsListComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;
  let mochStore: MockStore;
  let memoiezBookLisSelector: MemoizedSelector<
    ReducerBook.ReadingListBook[],
    Book[]
  >;
  const bookDataDisplayed = (element) => {
    const el: HTMLElement = fixture.debugElement.query(By.css(element))
      .nativeElement.textContent;
    return el;
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    mochStore = TestBed.inject(MockStore);
    memoiezBookLisSelector = mochStore.overrideSelector(
      ReducerBook.getAllBooks,

      [
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
      ]
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('Should work the instant search', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(bookDataDisplayed('book--title')).toBe(
      'Angular Momentum in Quantum mechanics'
    );
  });
});
