import React from "react";
import { HeaderProps } from "../Utilis/types";
import Link from "next/link";

const Header: React.FC<HeaderProps> = ({ title, breadcrumbLinks }) => {
  return (
    <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '50px' }}>
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white animated zoomIn">{title}</h1>
          {breadcrumbLinks.map((link, index) => (
            <React.Fragment key={index}>
              <Link href={link.url} className="h5 text-white">{link.name}</Link>
              {index < breadcrumbLinks.length - 1 && <i className="bi bi-circle text-white px-2"></i>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
