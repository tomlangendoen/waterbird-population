import { fetchData, setTrends } from './actions';

export default {
  [fetchData]: (state, { payload }) => ({
    ...state,
    widgetsData: payload
  }),
  [setTrends]: (state, { payload }) => ({
    ...state,
    trends: payload
  })
};
