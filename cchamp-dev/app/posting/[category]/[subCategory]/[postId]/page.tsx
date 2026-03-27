import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

type Props = {
  params: Promise<{
    category: string;
    subCategory: string;
    postId: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { category, subCategory, postId } = await params;

  const filePath = path.join(
    process.cwd(),
    "public",
    "posts",
    category,
    subCategory,
    `${decodeURIComponent(postId)}.md`,
  );

  console.log(filePath);
  console.log("exists:", fs.existsSync(filePath));
  console.log(
    fs.readdirSync(
      path.join(process.cwd(), "public", "posts", category, subCategory ),
    ),
  );

  if (!fs.existsSync(filePath)) {
    return <div>글이 없습니다.</div>;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  // prose 
  return (
    <div className="grid grid-cols-1 mx-auto p-2 items-center">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div className="w-full h-full p-0 ">
        <div className="p-4 bg-white/70 rounded-md shadow-md">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
        <div className="flex justify-end mt-4">
          <Link
            href={`/posting/${category}/${subCategory}`}
            className="flex items-center gap-2 mt-4 text-white hover:underline bg-gray-200 px-3 py-2 rounded-md bg-gray-800"
          >
            목록으로 이동하기
          </Link>
        </div>
      </div>
    </div>
  );
}
