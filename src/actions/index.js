import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data }) 
}


export const fetchUser = (id) => async dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data })
});


    /*BAD APPROACH!!! it will get an error
    because we have to return a plain javascript object
    const response = await jsonPlaceholder.get('/posts');
    
    return {
        type: 'FETCH_POSTS',
        payload: response
    }

    //IF I take way the async await it will take too long to return
    because its an asynchronous request
    const response = jsonPlaceholder.get('/posts');
    
    return {
        type: 'FETCH_POSTS',
        payload: response
    }
    */