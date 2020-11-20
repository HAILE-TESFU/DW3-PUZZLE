import { Component } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import {
  getReadingList,
  markFinishedReading,
  removeFromReadingList,
} from '@tmo/books/data-access';
import { Book, ReadingListItem } from '@tmo/shared/models';
@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss'],
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  markAsRead(b: ReadingListItem) {
    const itemnew: ReadingListItem = {
      ...b,
      finished: true,
      finishedDate: new Date().toISOString(),
    };
    const item: Update<ReadingListItem> = {
      id: b.bookId,
      changes: itemnew,
    };
    this.store.dispatch(markFinishedReading({ item }));
  }
}
