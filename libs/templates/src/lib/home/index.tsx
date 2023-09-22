import { Button, Text, FluidContainer, Heading, useTheme } from '@deriv/quill-design';
import { Features } from '@deriv-com/blocks';
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
      <Heading.Hero>Welcome to {title}</Heading.Hero>
      <Heading.H1>Current theme is {theme}</Heading.H1>
      <Features.CardContent
        title="Title goes here"
        description="Description goes here description goes here description goes here description goes here"
        cta={
          <div className="flex justify-center w-full">
            <Button>CTA</Button>
          </div>
        }
      >
        <div className="flex justify-center w-full">Content will go here</div>
      </Features.CardContent>

      <Features.ContentLeft
        className='my-1000 bg-background-primary-container max-sm:px-800 max-lg:px-1200'
        title='Content Left Title'
        description='Description goes here description goes here description goes here description goes here'
        content={
          <div className="flex w-full">
            <Text>Any Content here</Text>
          </div>
        }
        image_content={
          <img
            className="flex flex-1 w-full"
            src="https://placehold.co/712x800"
            alt="Placeholder"
          />
        }
      />

      <Features.ContentRight
        className='my-1000 bg-background-primary-container max-sm:px-800 max-lg:px-1200'
        title='Content Left Title'
        description='Description goes here description goes here description goes here description goes here'
        content={
          <div className="flex w-full">
            <Text>Any Content here</Text>
          </div>
        }
        image_content={
          <img
            className="flex flex-1 w-full"
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
