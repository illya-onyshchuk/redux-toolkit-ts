import React from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer2 = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)

  const handleRemove = (post: IPost) => {

  }

  const handleUpdate = (post: IPost) => {

  }

  return (
    <div>
      <div className='post__list'>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error loading</h1>}
        {posts?.map(post => 
           <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
        )}
      </div>
    </div>
  );
}

export default PostContainer2;
