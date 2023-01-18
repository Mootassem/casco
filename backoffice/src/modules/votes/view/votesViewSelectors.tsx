import { createSelector } from 'reselect';

const selectRaw = (state) => state.votes.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const votesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default votesViewSelectors;
