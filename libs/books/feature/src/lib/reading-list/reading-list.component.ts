import { Component, OnDestroy } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  getReadingList,
  removeFromReadingList,
} from '@tmo/books/data-access';
import { Book } from '@tmo/shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss'],
})
export class ReadingListComponent implements OnDestroy {
  readingList$ = this.store.select(getReadingList);

  snackBarRef: MatSnackBarRef<SimpleSnackBar>;
  subscription: Subscription;

  constructor(private readonly store: Store, private snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  unDoRemovingFromReadingList(book: Book, action) {
    const snackBarRef = this.snackBar.open('book added reading list', action, {
      duration: 2000,
    });

    this.subscription = snackBarRef.onAction().subscribe(() => {
      this.store.dispatch(addToReadingList({ book }));
      console.log('item tow');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
