import React, { useState } from 'react';
import { postNotice } from '../api/noticeApi';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try {
      await postNotice({ title, content, author });
      alert('✅ 글이 등록되었습니다!');
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error('글 등록 실패:', error);
      alert('❌ 글 등록에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>글 작성</h1>
        <input placeholder='제목' value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)} required />
        <input placeholder='작성자' value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type='submit'>등록</button>
      </form>
    </div>
  );
};

export default PostForm;
