import React from 'react';
import { Link } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

interface LinkRedirectProps {
  title: string;
  path: string;
  closeBurger?: any;
  linkTo: string;
  offset: number;
  scrollWithOffsetAfterRedirect?: any;
}

const LinkRedirectScroll: React.FC<LinkRedirectProps> = ({
  title,
  path,
  closeBurger,
  linkTo,
  offset,
  scrollWithOffsetAfterRedirect,
}) => {
  const redirect = (str: string) => `/#${str}`;

  return (
    <>
      {path !== '/' ? (
        <HashLink
          to={redirect(linkTo)}
          scroll={(linkTo: any) =>
            scrollWithOffsetAfterRedirect(linkTo, offset)
          }
        >
          {title}
        </HashLink>
      ) : (
        <Link
          to={linkTo}
          spy={true}
          smooth={true}
          onSetActive={closeBurger}
          offset={offset}
          duration={100}
        >
          {title}
        </Link>
      )}
    </>
  );
};

export default LinkRedirectScroll;
