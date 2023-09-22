import { FluidContainer, Heading } from "@deriv/quill-design"
import clsx from "clsx"
import { FeaturesProps } from ".."

const ContentLeft = ({
  title,
  className,
  description,
  left_content,
  right_content,
  variant = 'content-left'
}: FeaturesProps) => {
  return (
    <FluidContainer className={clsx(
      'flex flex-col max-sm:gap-1200 bg-background-primary-container',
      'gap-1600 lg:gap-800',
      variant === 'content-left' ? 'lg:flex-row' : 'lg:flex-row-reverse',
      className
    )}>
      <div className={clsx(`flex flex-col flex-1 basis-1/2 lg:justify-center 
        max-sm:gap-1200 md:gap-1600 lg:gap-2000`,
        variant === 'content-left' ? 'lg:pr-2400' : 'lg:pl-2400'
      )}>
        <div>
          <Heading.H2>{title}</Heading.H2>
          {description && description}
        </div>
        {left_content && left_content}
      </div>
      <div className="flex flex-1 basis-1/2">
        {right_content && right_content}
      </div>
    </FluidContainer>
  )
}

export default ContentLeft

