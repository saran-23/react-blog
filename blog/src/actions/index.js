import jsonplaceholder from '../apis/jsonPlaceHoder';

export const fetchPosts  =  () => async  dispath => {
    const response =  await jsonplaceholder.get('/posts');

    dispath({
        type:'FETCH_POSTS',
        payload:response.data,
    });
};



export const fetchUser = (id) => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch ({
        type : 'FETCH_USER',
        payload: response.data,
    })
}