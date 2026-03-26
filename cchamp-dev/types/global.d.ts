declare global {
  interface Post {
    fileName: string;
    meta: {
      title?: string;
      date?: string;
      summary?: string;
      tags?: string[];
      imageUrl?: string;
      [key: string]: any; // 추가적인 메타데이터 허용
    };
    content: string;
  }
}

export {};