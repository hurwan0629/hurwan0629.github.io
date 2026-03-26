import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import picture from './posts/2.png';
import PostListLayout from '@/app/components/posting-page/post-list-layout';

export default function NextjsPage() {
  const postsPath = path.join(process.cwd(), 'app', 'posting', 'frontend', 'nextjs', 'posts');
  const fileNames = fs.readdirSync(postsPath);

  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsPath, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const post: Post = {
      fileName: fileName.replace(/\.md$/, ''),
      meta: data,
      content,
    };
    
    return post;
  });
  
  return (
      <PostListLayout posts={posts} />
  );
}