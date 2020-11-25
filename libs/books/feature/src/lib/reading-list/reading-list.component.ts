import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { Book } from '@tmo/shared/models';

import { UndoActionService } from '../undo-action-snackbar-serivice/undo-action.service';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss'],
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(
    private readonly store: Store,
    private undoActionSnackbar: UndoActionService
  ) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  unDoRemovingFromReadingList(book: Book, action) {
    this.undoActionSnackbar.undoRemovingBookFromReadingList(book, action);
  }
}
