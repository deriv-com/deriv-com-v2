import { Hero, Features } from '@deriv-com/blocks';
import { OptimizedImage } from '@deriv-com/components';
import {
  Button,
  Text,
  FluidContainer,
  Heading,
  useTheme,
} from '@deriv/quill-design';
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
          <OptimizedImage
            imageName={'home/features/hk_home_hero_1.png'}
            alt="hero"
            width={712}
            height={800}
            priority
          />
        }
        className="mb-2000"
      >
        <p> This is a content limitless hero</p>
      </Hero.ContentLimitless>
      <Hero.ContentLimit
        title="Title goes here"
        description={`Description goes here description goes here
          description goes here description goes here`}
        content={
          <div className="flex py-2000 pr-50 lg:py-4000 lg:pr-4800">
            <OptimizedImage
              imageName="home/hero/hk_homepage_feature.png"
              width={712}
              height={800}
              alt="home hero"
            />
          </div>
        }
      >
        <p>This is a content limit hero</p>
      </Hero.ContentLimit>
      <Hero.ContentTop title="Content Top" className="mt-2000">
        <img
          className="w-full"
          src="https://placehold.co/712x200"
          alt="Placeholder"
        />
      </Hero.ContentTop>
      <Hero.ContentBottom title="Content Bottom" className="mt-2000">
        <img
          className="w-full"
          src="https://placehold.co/712x200"
          alt="Placeholder"
        />
      </Hero.ContentBottom>

      <Hero.ContentLess
        title="Title goes here"
        description={`Description goes here description goes here
          description goes here description goes here`}
        className="mt-2000"
      >
        <p>This is a content less block</p>
      </Hero.ContentLess>

      <Heading.Hero>Welcome to {title}</Heading.Hero>
      <Heading.H1>Current theme is {theme}</Heading.H1>
      <Features.CardContent
        title="Title goes here"
        description="Description goes here description goes here description goes here description goes here"
        cta={
          <div className="flex w-full justify-center">
            <Button>CTA</Button>
          </div>
        }
      >
        <div className="flex w-full justify-center">Content will go here</div>
      </Features.CardContent>

      <Features.ContentLeft
        className="my-1000 bg-background-primary-container max-lg:px-1200 max-sm:px-800"
        title="Content Left Title"
        description="Description goes here description goes here description goes here description goes here"
        content={
          <div className="flex w-full">
            <Text>Any Content here</Text>
          </div>
        }
        image_content={
          <img
            className="flex w-full flex-1"
            src="https://placehold.co/712x800"
            alt="Placeholder"
          />
        }
      />

      <Features.ContentRight
        className="my-1000 bg-background-primary-container max-lg:px-1200 max-sm:px-800"
        title="Content Left Title"
        description="Description goes here description goes here description goes here description goes here"
        content={
          <div className="flex w-full">
            <Text>Any Content here</Text>
          </div>
        }
        image_content={
          <img
            className="flex w-full flex-1"
            src="https://placehold.co/712x800"
            alt="Placeholder"
          />
        }
      />

      <Button size="lg" onClick={changeTheme}>
        Toggle theme
      </Button>
    </FluidContainer>
  );
}

export default HomeTemplate;
