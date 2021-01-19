import  _  from  'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';

export const  fetchPosts  =  () => async  dispatch => {
    const response =  await jsonplaceholder.get('/posts');

    dispatch({
        type:'FETCH_POSTS',
        payload:response.data,
    });
};

export const fetchUser = id => async dispatch => {
 _fetchUser();
};


const  _fetchUser =  _.memoize( () =>{                             //private  function  _fetchuser
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch ({
        type : 'FETCH_USER',
        payload: response.data,
    });
});
