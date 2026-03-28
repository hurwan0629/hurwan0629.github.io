import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import PostListLayout from '@/app/components/posting-page/post-list-layout';
import Link from 'next/link';

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
  
  const postsPath = path.join(process.cwd(), 'app', 'posting', 'posts', category, subCategory);
  if(!fs.existsSync(postsPath)) {
    return (
    <div> 
      <span className="text-lg font-bold">등록된 글이 없습니다.</span>
      
      <Link href={`/posting/${category}/${subCategory}/import-notion`} 
        className="absolute bottom-4 right-4 w-[180px] h-[60px] text-lg font-bold bg-black text-white p-1 rounded-md flex items-center justify-center" >
        노션에서 글 불러오기
      </Link>
    </div>
    );
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
    <div className="relative w-full h-full p-4 bg-white/70 rounded-md shadow-md">
      <PostListLayout posts={posts} category={category} subCategory={subCategory} />
      <Link href={`/posting/${category}/${subCategory}/import-notion`} 
        className="absolute bottom-4 right-4 w-[180px] h-[60px] text-lg font-bold bg-black text-white p-1 rounded-md flex items-center justify-center" >
        노션에서 글 불러오기
      </Link>
    </div>
  );
}