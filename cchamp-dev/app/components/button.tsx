'use client'

import React from "react";
import Link from "next/link";

interface SidebarButtonProps {
  buttonContent: string;
  buttonLinkTo: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  buttonContent,
  buttonLinkTo,
}) => {
  return (
    <Link
      href={`${buttonLinkTo}`}
      className="block w-full text-left px-3 py-2 rounded hover:bg-white/10">
        {buttonContent}
    </Link>
  );
};

export default SidebarButton;
