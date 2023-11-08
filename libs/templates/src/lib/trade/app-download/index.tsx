import React, { HTMLAttributes } from 'react';
import {
  BodyTypographyProps,
  FluidContainer,
  Heading,
  Text,
} from '@deriv/quill-design';
import { Card } from '@deriv-com/components';
import { data } from './data';
import clsx from 'clsx';

const AppDownload = () => {
  const { content, heading, description, cta, platforms } = data;

  const CustomText: React.FC<BodyTypographyProps> = ({
    className,
    ...props
  }) => {
    return (
      <Text className={clsx('text-typography-default', className)} {...props} />
    );
  };

  return (
    <FluidContainer className="py-general-4xl">
      <Card.ContentRight
        color="gray"
        align="start"
        size="lg"
        content={content}
        contentClassName="w-full flex justify-center"
        className="items-center lg:gap-gap-lg xl:items-end"
      >
        <div className="flex flex-col gap-gap-2xl">
          <div className="flex flex-col gap-gap-xl">
            <Heading.H2>{heading}</Heading.H2>
            <CustomText className="text-body-lg leading-body-lg">
              {description}
            </CustomText>
          </div>

          <div className="flex w-full flex-col gap-gap-xl md:flex-row lg:flex-col">
            <div className="flex w-full items-start gap-gap-lg">
              {cta.qr}
              <div className="grid w-[134px] gap-gap-md lg:w-full">
                <CustomText>{cta.description}</CustomText>
                <CustomText bold className="text-body-lg">
                  {cta.devices}
                </CustomText>
              </div>
            </div>
            <div className="flex w-full flex-wrap gap-gap-lg">
              {platforms.map((platform) => (
                <div
                  className="flex items-center gap-gap-md"
                  key={platform.name}
                >
                  {platform.icon}
                  <Text>{platform.name}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card.ContentRight>
    </FluidContainer>
  );
};

export default AppDownload;
