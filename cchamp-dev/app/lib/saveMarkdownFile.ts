import fs from 'fs';
import path from 'path';

export function saveMarkdownFile(
  content: string,
  category: string,
  subCategory: string,
  fileName: string
) {
  // 1. 폴더 경로 생성
  const dirPath = path.join(
    process.cwd(),
    'app',
    'posting',
    'posts',
    category,
    subCategory
  );

  // 2. 폴더 없으면 생성
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // 3. 파일 경로
  const filePath = path.join(dirPath, `${fileName}.md`);

  // 4. 파일 저장
  fs.writeFileSync(filePath, content, 'utf8');

  return filePath;
}