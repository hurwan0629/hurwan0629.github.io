// app/api/notion-import/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getNotionPageMarkdown } from '../../lib/notion';
import { saveMarkdownFile } from '../../lib/saveMarkdownFile';

export async function POST(req: NextRequest) {
  try {
    const { notionId, category, subCategory, password } = await req.json();

    if(password != "Wanny2005!@") {
      return NextResponse.json({ message: "비밀번호가 틀렸습니다." }, { status: 403 });
    }

    if(!notionId) {
      return NextResponse.json({ message: "필수 값이 부족합니다." }, { status: 400 });
    }

    const markdown = await getNotionPageMarkdown(notionId);

    if (!markdown) {
      return NextResponse.json({ message: '불러오기 실패' }, { status: 400 });
    }

    saveMarkdownFile(markdown, category, subCategory, notionId);

    return NextResponse.json({ success: true, markdown });
  } catch (error) {
    return NextResponse.json({ message: '서버 오류' }, { status: 500 });
  }
}