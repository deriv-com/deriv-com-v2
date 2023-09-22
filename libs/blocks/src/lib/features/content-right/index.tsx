import clsx from "clsx"
import { FeaturesProps } from ".."
import ContentLeft from "../content-left"

const ContentRight = ({
  title,
  className,
  description,
  left_content,
  right_content,
  variant
}: FeaturesProps) => {
  return (
    <ContentLeft
      title={title}
      variant="content-right"
      description={description}
      left_content={left_content}
      right_content={right_content}
      className={className}
    >
    </ContentLeft>
  )
}

export default ContentRight

