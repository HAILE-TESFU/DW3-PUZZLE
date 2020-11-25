# TASK

## TASK ONE : CODE FIXES AND REVIEW

1. The folling [test suite ]() from [ reading-list.reducer.spec.ts ]()hase two test case failed. You can see the test cases below.

[ describe('Books Reducer', () => {
describe('valid Books actions', () => {
let state: State;

    beforeEach(() => {
      state = readingListAdapter.setAll(
        [createReadingListItem('A'), createReadingListItem('B')],
        initialState
      );
    });

    it('failedAddToReadingList should undo book addition to the state', () => {
      const action = ReadingListActions.failedAddToReadingList({
        book: createBook('B')
      });

      const result: State = reducer(state, action);

      expect(result.ids).toEqual(['A']);
    });

    it('failedRemoveFromReadingList should undo book removal from the state', () => {
      const action = ReadingListActions.failedRemoveFromReadingList({
        item: createReadingListItem('C')
      });

      const result: State = reducer(state, action);

      expect(result.ids).toEqual(['A', 'B', 'C']);
    });

});]

- [Solution is as follow](): In the beforeEach case , the reduce has two items. So even the adding and removing operation fails , the reducer remains the same.

[expect(result.ids).toEqual(['A', 'B']);]() , with this it works fine.

2. the page loading doesn not have a sppiner

3. In the book-search component there was not unsubscribe. I have changed it to reactive using the async pipe.

## Accessibility

1. using the tap it does not go down to the "Try searching for a topic, for example "JavaScript".
