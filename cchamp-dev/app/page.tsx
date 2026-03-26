import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[70%] h-full flex flex-col items-start p-4 gap-4 bg-white/70 rounded-md shadow-md">
      <h1 className="text-2xl font-bold">안녕하세요 개발자 짬빵입니다 &gt;o&lt;</h1>
      
      <div className="self-center w-full grid grid-cols-2 gap-4 m-4">
        <div className="w-full rounded-md p-4 bg-gray-300 border-2 border-gray-400">
          <h1 className="text-2xl font-bold md-0">About Me</h1>
          <ul className="font-bold text-md list-disc list-inside">
            <li>이름: 허완</li>
            <li>생년월일: 2005.06.29 </li>
            <li>거주지: 경기도 성남시 분당구 수내3동</li>
            <li>이메일: hurwan0629@gmail.com</li>
            <li>직무: 풀스택, 백엔드, 프론트엔드</li>
          </ul>
        </div>
        <div className="w-full rounded-md p-4 bg-gray-300 border-2 border-gray-400">
          <h1 className="text-2xl font-bold md-0">Link</h1>
          <ul className="font-bold text-md list-disc list-inside">
            <li><a href="https://github.com/hurwan0629" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/hurwan" target="_blank" rel="noopener noreferrer">Notion</a></li>
          </ul>
        </div>
        <div className="w-full rounded-md p-4 bg-gray-300 border-2 border-gray-400">
          <h1 className="text-2xl font-bold md-0">자격증</h1>
          <ul className="font-bold text-md list-disc list-inside">
            <li>네트워크 관리사 2급 - 2025.05월 응시 예정</li>
            <li>SQLD - 2025.12</li>
            <li>리눅스 마스터 2급 (필기) - 2025.10</li>
            <li>ADsP - 2025.09</li>
          </ul>
        </div>
      </div>
      
      
    </div>
  );
}
