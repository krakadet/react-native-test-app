export const GET_PICTURES = 'GET_PICTURES';

function convertToNormilize(response) {
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
  const url = new URL('https://api.unsplash.com/photos/');
  const params = {
    client_id:
      'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
  };

  const param = new URLSearchParams(params).toString();

  return async () => {
    try {
      const response = await fetch(`${url}?${param}`);

      // if (response.status === 200) {
      const data = await response.json();
      console.log('data=>', data);

      // console.log('convertToNormilize(data=>', convertToNormilize(data));
      // return {
      //   type: GET_PICTURES,
      //   payload: convertToNormilize(data),
      // };
      // }
    } catch (e) {
      throw new Error('getPictures fail');
    }
  };
}
