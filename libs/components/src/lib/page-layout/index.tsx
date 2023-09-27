import { FixContainer } from '@deriv/quill-design';

export interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <FixContainer className="pt-3600">{children}</FixContainer>;
};

export default PageLayout;
