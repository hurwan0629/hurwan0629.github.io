"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Next.js에서 PWA 설치 버튼이 안 뜬 이유 정리",
    category: "Next.js",
    date: "2026-03-25",
    summary:
      "beforeinstallprompt 이벤트가 발생하지 않던 원인을 조건별로 추적하고, manifest와 service worker 설정을 점검한 기록입니다.",
    slug: "nextjs-pwa-install-debug",
  },
  {
    id: 2,
    title: "JPA에서 EntityManager와 Repository의 역할 이해하기",
    category: "Spring",
    date: "2026-03-23",
    summary:
      "EntityManager, JpaRepository, 커스텀 Repository가 각각 어떤 책임을 가지는지 실전 흐름으로 정리했습니다.",
    slug: "jpa-entitymanager-repository",
  },
  {
    id: 3,
    title: "React 상태 관리를 배울 때 헷갈렸던 포인트",
    category: "React",
    date: "2026-03-21",
    summary:
      "상태, props, memo, useCallback이 언제 필요하고 왜 필요한지 초반에 헷갈리던 지점을 중심으로 정리했습니다.",
    slug: "react-state-confusion-notes",
  },
  {
    id: 4,
    title: "기술 블로그를 왜 쓰는가",
    category: "Essay",
    date: "2026-03-20",
    summary:
      "단순 기록이 아니라 사고 과정과 문제 해결 방식을 드러내는 도구로서 기술 블로그를 바라본 관점을 적었습니다.",
    slug: "why-i-write-tech-blog",
  },
  {
    id: 5,
    title: "Next.js 블로그 구조 초안 설계",
    category: "Next.js",
    date: "2026-03-19",
    summary:
      "App Router 기준으로 홈, 블로그, 프로젝트, 소개 페이지를 어떻게 나눌지 구조 초안을 잡아본 글입니다.",
    slug: "nextjs-blog-structure-draft",
  },
  {
    id: 6,
    title: "SQL을 배울 때 처음부터 join보다 중요한 것",
    category: "Database",
    date: "2026-03-18",
    summary:
      "join 문법보다 데이터가 어떻게 쌓이고 조회되는지 흐름을 먼저 이해하는 것이 왜 중요한지 정리했습니다.",
    slug: "sql-first-principles",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(posts.map((post) => post.category))),
];

export default function BlogHomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const keyword = search.trim().toLowerCase();
      const matchKeyword =
        keyword.length === 0 ||
        post.title.toLowerCase().includes(keyword) ||
        post.summary.toLowerCase().includes(keyword) ||
        post.category.toLowerCase().includes(keyword);

      return matchCategory && matchKeyword;
    });
  }, [selectedCategory, search]);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="h-fit rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
          <div className="mb-8">
            <p className="text-sm font-medium text-zinc-500">Tech Blog</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight">
              cchamp-dev
            </h1>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              구현 과정, 문제 해결, 학습 기록을 정리하는 개인 기술 블로그
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-zinc-800">Category</p>
            <div className="space-y-2">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                      isActive
                        ? "bg-zinc-900 text-white"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    }`}
                  >
                    <span>{category}</span>
                    <span className="text-xs opacity-80">
                      {category === "All"
                        ? posts.length
                        : posts.filter((post) => post.category === category).length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-100 p-4">
            <p className="text-sm font-semibold text-zinc-800">About</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              웹 개발, Spring, React, Next.js 중심으로 배운 것과 구현 과정을
              기록합니다.
            </p>
          </div>
        </aside>

        <section>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">Archive</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  {selectedCategory === "All"
                    ? "모든 글"
                    : `${selectedCategory} 글 모음`}
                </h2>
                <p className="mt-3 text-sm text-zinc-600">
                  카테고리를 선택해서 원하는 주제의 글만 볼 수 있습니다.
                </p>
              </div>

              <label className="flex w-full max-w-sm items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 md:w-80">
                <Search className="h-4 w-4 text-zinc-500" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="글 제목이나 주제로 검색"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                />
              </label>
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-700">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-600">{post.summary}</p>

                  <div className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      글 읽기
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-900">
                  조건에 맞는 글이 없습니다
                </h3>
                <p className="mt-3 text-sm text-zinc-600">
                  다른 카테고리를 선택하거나 검색어를 지워보세요.
                </p>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
