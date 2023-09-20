import { Hero, Features } from '@deriv-com/blocks';
import { Button, FluidContainer, Heading, useTheme } from '@deriv/quill-design';
import { useCallback } from 'react';

export interface HomeTemplateProps {
  title: string;
}

export function HomeTemplate({ title }: HomeTemplateProps) {
  const { theme, toggleTheme } = useTheme();

  const changeTheme = useCallback(() => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, toggleTheme]);

  return (
    <FluidContainer>
      <Hero.ContentLimitless
        title="Title goes here"
        description={`Description goes here description goes here
          description goes here description goes here`}
        content={
          <img
            className="w-full"
            src="https://placehold.co/712x800"
            alt="Placeholder"
          />
        }
        className="mb-10"
      >
        <p> This is an image limitless hero</p>
      </Hero.ContentLimitless>
      <Hero.ContentLimit
        title="Title goes here"
        description={`Description goes here description goes here
          description goes here description goes here`}
        content={
          <div className="flex pt-20 lg:pb-20 lg:pr-24 md:pr-0 sm:pr-0 pr-0">
            <img
              className="w-full rounded-3xl"
              src="https://placehold.co/712x800"
              alt="Placeholder"
            />
          </div>
        }
      >
        <p>this is an image limit hero</p>
      </Hero.ContentLimit>
      <Hero.ContentTop title="Content Top" className="mt-10">
        <img
          className="w-full"
          src="https://placehold.co/712x200"
          alt="Placeholder"
        />
      </Hero.ContentTop>
      <Hero.ContentBottom title="Content Bottom" className="mt-10">
        <img
          className="w-full"
          src="https://placehold.co/712x200"
          alt="Placeholder"
        />
      </Hero.ContentBottom>
      <Heading.Hero>Welcome to {title}</Heading.Hero>
      <Heading.H1>Current theme is {theme}</Heading.H1>
      <Features.Card
        title="Title goes here"
        description="Description goes here description goes here description goes here description goes here"
        cta={
          <div className="flex justify-center w-full">
            <Button>CTA</Button>
          </div>
        }
      >
        <div className="flex justify-center w-full">Content will go here</div>
      </Features.Card>
      <Button size="lg" onClick={changeTheme}>
        Toggle theme
      </Button>
    </FluidContainer>
  );
}

export default HomeTemplate;
