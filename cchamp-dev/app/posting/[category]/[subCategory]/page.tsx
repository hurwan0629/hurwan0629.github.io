import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import picture from './posts/2.png';
import PostListLayout from '@/app/components/posting-page/post-list-layout';
import { Link } from 'lucide-react';

type PathVariables = {
  params: Promise<{
    category: string;
    subCategory: string;
  }>;
};

export default async function NextjsPage({ params }: PathVariables) {
  const { category, subCategory } = await params;
  console.log("category:", category);
  console.log("subCategory:", subCategory);
  
  const postsPath = path.join(process.cwd(), 'public', 'posts', category, subCategory);
  if(!fs.existsSync(postsPath)) {
    return <div>등록된 글이 없습니다.</div>;
  }

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
    <div className="w-full h-full p-4 bg-white/70 rounded-md shadow-md">
      <PostListLayout posts={posts} category={category} subCategory={subCategory} />
    </div>
  );
}