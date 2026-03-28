'use client'

import path from 'path';
import { useParams } from "next/navigation"
import MarkdownRenderer from "../../../../components/post/MarkdownRenderer";
import { useState } from "react";

export default function ImportNotionPage() {
  const [notionId, setNotionId] = useState('');
  const params = useParams<{ category: string; subCategory: string; }>();
  const category = params.category;
  const subCategory = params.subCategory;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [flag, setFlag] = useState(false);
  const [content, setContent] = useState('');

  const postingUrl = path.join(
    process.cwd(),
    "app",
    "posting",
    "posts",
    category,
    subCategory
  );


  async function tryGetNotionPageMarkdown() {
    try {
      setLoading(true);
      setMessage(null);
      setFlag(false);
      setContent('');

      const res = await fetch('/api/import-notion', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          notionId,
          category,
          subCategory
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message ?? "저장 실패");
        return;
      }

      setMessage(`저장 성공!\nurl: /posting/${category}/${subCategory}/${notionId}`);
      setContent(data.markdown ?? '');
      setFlag(true);
    } catch (e) {
      console.error(e);
      setMessage("요청 중 오류가 발생했습니다.");
      setFlag(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-full bg-green flex items-center justify-center">
      <div className="w-[800px] h-[400px] bg-white rounded-lg flex flex-col items-center justify-center px-20">
        <p className="self-start">저장할 노션 페이지의 id를 작성하세요</p>
        <input
          className="w-full y-[100px] border border-3 border-gray-300 text-lg m-2" placeholder="노션 페이지 id를 넣으세요"
          onChange={(e) => setNotionId(e.target.value)} />
        <button
          onClick={tryGetNotionPageMarkdown}
          className="self-end bg-black text-white rounded-md m-2 p-2">글 불러오기</button>
      </div>
      {/* 로딩 모달 */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded">
            <p>불러오는 중...</p>
          </div>
        </div>
      )}

      {/* 결과 메시지 */}
      {message && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded shadow">
          {message}

        </div>
      )}
      {/* 결과 */}
      {flag && (
        <MarkdownRenderer content={content} />
      )}
    </div>
  )

}