import { Action, PROJECTS_DATA_ACTION } from './actions';

const INITIAL_STATE = {
  projectData: {
    _id: 0,
    img: '',
    text: '',
    development: '',
    task: '',
  },
};

export function reducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case PROJECTS_DATA_ACTION:
      return {
        ...state,
        projectData: action.projectsData,
      };

    default:
      return state;
  }
}
