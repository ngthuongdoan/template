import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ActiveLink: React.FC<LinkProps> = ({ children, href, ...props }) => {
  const router = useRouter();

  const linkClasses = classNames({
    "link--is-active": router.asPath === href,
  });

  return (
    <div className={linkClasses}>
      <Link href={href} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default ActiveLink;
