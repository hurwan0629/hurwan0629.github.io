import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

type Props = {
  params: Promise<{
    postId: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { postId } = await params;

  const filePath = path.join(
    process.cwd(),
    "app",
    "posting",
    "frontend",
    "nextjs",
    "posts",
    `${decodeURIComponent(postId)}.md`,
  );

  console.log("exists:", fs.existsSync(filePath));
  console.log(
    fs.readdirSync(
      path.join(process.cwd(), "app", "posting", "frontend", "nextjs", "posts"),
    ),
  );

  if (!fs.existsSync(filePath)) {
    return <div>글이 없습니다.</div>;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="prose mx-auto">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div className="w-[70%] h-full p-0">
        <div className="p-4 bg-white/70 rounded-md shadow-md">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
        <div className="flex justify-end mt-4">
          <Link
            href="/posting/frontend/nextjs"
            className="flex items-center gap-2 mt-4 text-white hover:underline bg-gray-200 px-3 py-2 rounded-md bg-gray-800"
          >
            목록으로 이동하기
          </Link>
        </div>
      </div>
    </div>
  );
}
