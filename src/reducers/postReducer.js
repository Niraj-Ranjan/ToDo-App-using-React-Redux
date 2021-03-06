import { FETCH_POSTS, NEW_POST, REMOVE_POST, UPDATE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case REMOVE_POST:
        console.log(action.id);
        const filterList = state.items.filter(item =>
          item.id !== action.id
        );
        console.log(filterList);
        return {
          ...state,
          items: filterList
        };

    case UPDATE_POST:
        console.log(action.id);
        const filteredList = state.items.filter(item =>
          item.id !== action.id
        );
        const UpdatedList = state.items.find(item =>
          item.id !== action.id
        );
        console.log(UpdatedList);
        // this.setinitialState({
        //   items: filteredList,
        //   item: UpdatedList.title
        // });
        return {
          ...state,
          items: filteredList,
          item: UpdatedList
        };
        


    default:
      return state;
  }
}