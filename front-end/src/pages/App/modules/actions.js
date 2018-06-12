import axios from 'axios';

import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  FETCH_GITUSER,
} from './index';

export const searchStart = () => {
  return {
    type: SEARCH_REQUEST,
  };
};

export const searchSuccess = (items) => {
  return {
    type: SEARCH_SUCCESS,
    payload: items,
  };
};

export const searchError = (errors) => {
  return {
    type: SEARCH_ERROR,
    errors,
  };
};
export const fetchGitUserBykeyword = (option) => {
  return {
    type: FETCH_GITUSER,
    payload: option,
  };
};
