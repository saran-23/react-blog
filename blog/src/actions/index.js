import jsonplaceholder from '../apis/jsonPlaceHoder';

export const fetchPosts  =  () => 
 async  dispath =>{
    const response =  await jsonplaceholder.get('/posts');

    dispath({
        type:'FETCH_POSTS',
        payload:response
    })
};



