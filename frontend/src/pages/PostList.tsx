import React, { useEffect, useState } from 'react';
import { getNotice, postNotice } from '../api/noticeApi';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await getNotice();
        setPosts(data);
      } catch (error) {
        console.log('게시글 불러오기 실패', error);
      }
    };
    getPost();
  }, []);

  return (
    <div>
      <h1>게시글 목록</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
