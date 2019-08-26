import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async() => {
    //BAD APPROACH!!!
    const response = await jsonPlaceholder.get('/posts');
    
    return {
        type: 'FETCH_POSTS',
        payload: response
    }
}