import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

type Props = {
  content: string;
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
          ),
          p: ({ children }) => (
            <p className="leading-7 my-3 text-black">{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline"
            >
              {children}
            </a>
          ),
          code(props) {
            const { children, className } = props;
            const isInline = !className;

            if (isInline) {
              return (
                <code className="bg-green-200 px-1 py-0.5 rounded text-sm">
                  {children}
                </code>
              );
            }

            return (
              <code className={className}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="rounded-xl p-4 overflow-x-auto bg-gray-300">
              {children}
            </pre>
          ),
          img: ({ src, alt }) => (
            // 우선은 일반 img로 시작
            <img
              src={src ?? ""}
              alt={alt ?? ""}
              className="rounded-lg my-4 max-w-full"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}