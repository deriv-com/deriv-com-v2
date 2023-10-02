import ExportedImage, { ExportedImageProps } from 'next-image-export-optimizer';
import { forwardRef } from 'react';
import ImagesJson from 'assets/public/next-image-export-optimizer-hashes.json';

export type PureImageNames = keyof typeof ImagesJson;
export type ImageNames = PureImageNames extends `/${infer Key}`
  ? Key
  : PureImageNames;

export type OptimizedImageProps = Omit<ExportedImageProps, 'src'> & {
  imageName?: ImageNames;
  remoteSrc?: string;
};

export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ imageName, remoteSrc, ...rest }, ref) => {
    return (
      <ExportedImage
        src={remoteSrc ? remoteSrc : `/images/${imageName}`}
        {...rest}
        ref={ref}
      />
    );
  },
);

OptimizedImage.displayName = 'Image';

export default OptimizedImage;
