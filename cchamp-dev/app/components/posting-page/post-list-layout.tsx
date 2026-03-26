'use client';

import Image from 'next/image';

interface PostListLayoutProps {
  posts: Post[];
}

const PostListLayout: React.FC<PostListLayoutProps> = ({ posts }) => {
  return (
    <div
      className="h-full w-full p-4 
               grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 overflow-y-auto scrollbar-hide">
      {posts.map((post) => (
        <div key={post.fileName}
          className="h-[400px] border-2 rounded-md shadow-md p-2 pt-5 flex flex-col justify-start bg-white">
            {/*표지*/}
            <div className="relative w-full h-[200px]">
              <Image src={post.meta.imageUrl ?? "/Image-not-found.png"} alt="post image" fill sizes="100vw" className="object-cover mb-2" />
            </div>
            {/*제목*/}
            <span className="text-[18px] font-size-md py-2 font-bold text-left">{String(post.meta.title ?? post.fileName)}</span>
            {/*내용 요약*/}
            <p className="line-clamp-3 text-[14px]" >{String(post.meta.summary ?? post.content)}</p>
        </div>
      ))}
    </div>
  );
}

export default PostListLayout;