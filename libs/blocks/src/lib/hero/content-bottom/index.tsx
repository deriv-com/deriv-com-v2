import { Heading } from "@deriv/quill-design";
import clsx from "clsx";
import { HeroProps } from "..";

/* eslint-disable-next-line */
export interface ContentBottomProps {}

const ContentBottom = ({
  className,
  title,
  children,
  contentClassName
}: HeroProps) => {
  return (
    <div className={clsx(
      'h-screen w-full flex flex-col py-10 px-4 md:py-10 md:px-6 lg:py-4000 bg-slate-50 gap-10',
      className
    )}>
      <Heading.H1 className="flex w-full justify-center lg:px-4000 text-center">
        {title}
      </Heading.H1>
      <div className="flex flex-1 lg:px-4000">
        <div className={clsx("w-full h-full", contentClassName)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ContentBottom;
