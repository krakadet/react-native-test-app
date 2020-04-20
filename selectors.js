import {createSelector} from 'reselect';

export const selectPicturelist = (state) => state.list;
export const selectPictureData = (state) => state.data;

// const urlPictureList = createSelector(shopItemsSelector, (items) =>
//   items.reduce((acc, item) => acc + item.value, 0),
// );
