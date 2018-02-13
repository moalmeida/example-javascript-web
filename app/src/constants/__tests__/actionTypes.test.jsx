
import {
  INCREMENTAL_COUNT,
  FETCH_TODO,
  COUNT_TODO,
  AUTHORIZATION,
} from '../actionTypes';

describe('constants/actionTypes unit test', () => {
  test('expect be true', () => {
    expect(INCREMENTAL_COUNT).toBe('INCREMENTAL_COUNT');
    expect(FETCH_TODO).toBe('FETCH_TODO');
    expect(COUNT_TODO).toBe('COUNT_TODO');
    expect(AUTHORIZATION).toBe('AUTHORIZATION');
  });
});
