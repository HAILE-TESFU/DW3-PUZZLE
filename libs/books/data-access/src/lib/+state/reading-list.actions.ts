import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Book, ReadingListItem } from '@tmo/shared/models';

export const init = createAction('[Reading List] Initialize');

export const loadReadingListSuccess = createAction(
  '[Reading List API] Load list success',
  props<{ list: ReadingListItem[] }>()
);
export const loadReadingListError = createAction(
  '[Reading List API] Load list error',
  props<{ error: string }>()
);

export const addToReadingList = createAction(
  '[Books Search Results] Add to list',
  props<{ book: Book }>()
);

export const failedAddToReadingList = createAction(
  '[Reading List API] Failed add to list',
  props<{ book: Book }>()
);

export const confirmedAddToReadingList = createAction(
  '[Reading List API] Confirmed add to list',
  props<{ book: Book }>()
);

export const removeFromReadingList = createAction(
  '[Books Search Results] Remove from list',
  props<{ item: ReadingListItem }>()
);

export const failedRemoveFromReadingList = createAction(
  '[Reading List API] Failed remove from list',
  props<{ item: ReadingListItem }>()
);

export const confirmedRemoveFromReadingList = createAction(
  '[Reading List API] Confirmed remove from list',
  props<{ item: ReadingListItem }>()
);

//TODO: marke as read
export const markFinishedReading = createAction(
  '[ Reading List API ] mark finished reading',
  props<{ item: Update<ReadingListItem> }>()
);

export const confirmedMarkFinishedReading = createAction(
  '[ Reading List Api ] confirmed mark finished reading',
  props<{ item: Update<ReadingListItem> }>()
);

export const failedMarkFinishedReading = createAction(
  '[ Reading List Api ] failed mark finished reading',
  props<{ item: Update<ReadingListItem> }>()
);
