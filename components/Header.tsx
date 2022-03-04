import React from "react";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="w-full bg-red-200">
        <Link href="/" passHref>
          <h2>My Blog</h2>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
