"use client";

import React from "react";
import { useState } from "react";

interface SidebarButtonContainerProps {
  name: string;
  rootUrl: string;
  children: React.ReactNode;
}

// 토글형 부모 사이드 바 버튼
const SidebarButtonContainer: React.FC<SidebarButtonContainerProps> = ({
  name,
  rootUrl,
  children,
}) => {
  const [toggleDown, setToggleDown] = useState(false);

  function switchToggle() {
    setToggleDown((prev) => !prev);
  }

  return (
    <div>
      <button
        className="block text-left px-3 py-2 rounded appearance-none bg-transparent border-none p-0 m-0 focus:outline-none w-full hover:bg-white/10 cursor-pointer font-bold"
        onClick={switchToggle}
      >
        {name}
      </button>
      {toggleDown && (
        <div className="px-3">
          {children}
        </div>
      )}
    </div>
  );
};

export default SidebarButtonContainer;
