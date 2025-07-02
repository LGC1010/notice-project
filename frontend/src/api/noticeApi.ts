import { noticeRequest } from '../types/notice';
import axiosInstance from './api';

export const getNotice = async () => {
  const res = await axiosInstance.get('/posts');
  return res.data;
};

export const postNotice = async (post: noticeRequest) => {
  const res = await axiosInstance.post('/posts', post);
  return res.data;
};
