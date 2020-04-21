import {url, params} from './constance';
export const GET_PICTURES = 'GET_PICTURES';

function convertToNormalise(response) {
  return response.reduce(
    (acc, item) => {
      acc.list = acc.list.concat(item.id);
      acc.data = {
        ...acc.data,
        [item.id]: item,
      };
      return acc;
    },
    {list: [], data: {}},
  );
}

export function getPictures() {
  const param = new URLSearchParams(params).toString();
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}?${param}`);

      if (response.ok) {
        const data = await response.json();

        return dispatch({
          type: GET_PICTURES,
          payload: convertToNormalise(data),
        });
      }
    } catch (e) {
      throw new Error('getPictures fail');
    }
  };
}
