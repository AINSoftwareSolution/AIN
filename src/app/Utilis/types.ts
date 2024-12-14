export interface ServiceType {
  icon: string;
  title: string;
  description: string;
  link: string;
  phone?: string;
}

export interface HeaderProps {
  title: string;
  breadcrumbLinks: { name: string; url: string }[];
}
  