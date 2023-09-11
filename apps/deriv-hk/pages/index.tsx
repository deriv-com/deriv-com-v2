import { HomeTemplate, HomeTemplateProps } from '@deriv-com/templates';
import { GetStaticProps } from 'next';

export function Index({ title }: HomeTemplateProps) {
  return <HomeTemplate title={title} />;
}

export default Index;

export const getStaticProps: GetStaticProps<HomeTemplateProps> = () => {
  return {
    props: {
      title: 'Deriv',
    },
  };
};
