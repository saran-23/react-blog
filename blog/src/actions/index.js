import  _  from  'lodash';
import  jsonplaceholder  from '../apis/jsonplaceholder';


export const fetchPostsAndUsers = () => async  (dispatch ,getState )=> {
    await dispatch(fetchPosts());

//   const  userIds   =_.uniq(_.map(getState().posts,'userId'));
//     userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)  //getscall
    .map('userId')  //retrieve the values
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};


export const  fetchPosts  =  () => async  dispatch => {
    const response =  await jsonplaceholder.get('/posts');

    dispatch({  type:'FETCH_POSTS',  payload:response.data  });
};

export const fetchUser = id => async  dispatch =>  {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch ({ type : 'FETCH_USER',   payload: response.data });
};


// export const fetchUser = id =>  dispatch =>  _fetchUser(id,dispatch);     //(id,dispatch);   defines that what u need  

// const  _fetchUser =  _.memoize(async (id,dispatch) =>{                             //private  function  _fetchuser
//     const response = await jsonplaceholder.get(`/users/${id}`);

//     dispatch ({
//         type : 'FETCH_USER',
//         payload: response.data,
//     });
// });
