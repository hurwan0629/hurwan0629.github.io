import SidebarButton from "./sidebarButton";
import SidebarButtonContainer from "./sidebarButtonContainer";
import Link from "next/link";
import Image from "next/image";
import logo from "./cchamppang.webp";

export default function Sidebar() {
  return (
    <div className="w-full h-full">
      <Link href="/posting">
        <div className="flex gap-2 m-2">
          <Image src={logo} alt="logo" className="w-8 h-8" />
          <span className="flex items-end h-8 font-black text-xl">
            Cchamp&apos;s dev
          </span>
        </div>
      </Link>

      <hr />

      <SidebarButtonContainer name="Dev Log" rootUrl="/posting/dev-log">
        <SidebarButton buttonContent="프로젝트" buttonLinkTo="/posting/dev-log/projects" />
        <SidebarButton buttonContent="구현과정" buttonLinkTo="/posting/dev-log/implementation" />
        <SidebarButton buttonContent="리팩토링" buttonLinkTo="/posting/dev-log/refactoring" />
        <SidebarButton buttonContent="시행착오" buttonLinkTo="/posting/dev-log/troubleshooting" />
      </SidebarButtonContainer>

      <SidebarButtonContainer name="Frontend" rootUrl="/posting/frontend">
        <SidebarButton buttonContent="React" buttonLinkTo="/posting/frontend/react" />
        <SidebarButton buttonContent="Next.js" buttonLinkTo="/posting/frontend/nextjs" />
        <SidebarButton buttonContent="UI/UX" buttonLinkTo="/posting/frontend/ui-ux" />
        <SidebarButton buttonContent="라이브러리" buttonLinkTo="/posting/frontend/libraries" />
      </SidebarButtonContainer>

      <SidebarButtonContainer name="Backend" rootUrl="/posting/backend">
        <SidebarButton buttonContent="Spring" buttonLinkTo="/posting/backend/spring" />
        <SidebarButton buttonContent="설계" buttonLinkTo="/posting/backend/design" />
        <SidebarButton buttonContent="웹계층" buttonLinkTo="/posting/backend/web-layer" />
        <SidebarButton buttonContent="서비스계층" buttonLinkTo="/posting/backend/service-layer" />
        <SidebarButton buttonContent="데이터 접근 계층" buttonLinkTo="/posting/backend/data-access-layer" />
        <SidebarButton buttonContent="도메인 계층" buttonLinkTo="/posting/backend/domain-layer" />
      </SidebarButtonContainer>

      <SidebarButtonContainer name="DataBase" rootUrl="/posting/database">
        <SidebarButton buttonContent="SQL" buttonLinkTo="/posting/database/sql" />
        <SidebarButton buttonContent="성능 개선" buttonLinkTo="/posting/database/performance" />
        <SidebarButton buttonContent="트랜잭션/락/격리수준" buttonLinkTo="/posting/database/transaction-lock-isolation" />
      </SidebarButtonContainer>

      <SidebarButtonContainer name="Computer Science" rootUrl="/posting/computer-science">
        <SidebarButton buttonContent="네트워크" buttonLinkTo="/posting/computer-science/network" />
        <SidebarButton buttonContent="OS" buttonLinkTo="/posting/computer-science/os" />
        <SidebarButton buttonContent="자료구조와 알고리즘" buttonLinkTo="/posting/computer-science/data-structure-algorithm" />
        <SidebarButton buttonContent="소프트웨어 공학" buttonLinkTo="/posting/computer-science/software-engineering" />
      </SidebarButtonContainer>

      <SidebarButtonContainer name="인프라" rootUrl="/posting/infrastructure">
        <SidebarButton buttonContent="클라우드" buttonLinkTo="/posting/infrastructure/cloud" />
        <SidebarButton buttonContent="빌드" buttonLinkTo="/posting/infrastructure/build" />
        <SidebarButton buttonContent="트래픽" buttonLinkTo="/posting/infrastructure/traffic" />
        <SidebarButton buttonContent="운영" buttonLinkTo="/posting/infrastructure/operations" />
        <SidebarButton buttonContent="보안" buttonLinkTo="/posting/infrastructure/security" />
      </SidebarButtonContainer>

      <SidebarButtonContainer name="기타" rootUrl="/posting/etc">
        <SidebarButton buttonContent="블로그 리뷰" buttonLinkTo="/posting/etc/blog-review" />
        <SidebarButton buttonContent="방향성" buttonLinkTo="/posting/etc/direction" />
      </SidebarButtonContainer>
    </div>
  );
}