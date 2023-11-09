import React, { useState, useEffect } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()

/////////////This long Polling///////////////
  // const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {pollingInterval: 2000})

  // useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3)
    // }, 2000)
  // }, []);

//////////////////////////////////////////////

const handleRemove = (post: IPost) => {
  deletePost(post)
}

const handleUpdate = (post: IPost) => {
  updatePost(post)
}

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  return (
    <div>
      <div className='post__list'>
        {/* <button onClick={() => refetch()}>Refetch</button> */}
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error loading</h1>}
        {posts?.map(post => 
           <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
        )}
      </div>
    </div>
  );
}

export default PostContainer;
