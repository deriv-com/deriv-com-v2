import React, { HTMLAttributes } from 'react';
import { BodyTypographyProps, Heading, Text } from '@deriv/quill-design';
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

  const CustomDiv: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
    className,
    ...props
  }) => {
    return <div className={clsx('flex', className)} {...props} />;
  };

  return (
    <Card.ContentRight
      color="gray"
      align="start"
      size="lg"
      content={content}
      contentClassName="w-full flex justify-center"
      className="lg:gap-gap-lg"
    >
      <CustomDiv className="flex-col gap-gap-2xl">
        <CustomDiv className="flex-col gap-gap-xl">
          <Heading.H2>{heading}</Heading.H2>
          <CustomText className="text-body-lg leading-body-lg">
            {description}
          </CustomText>
        </CustomDiv>

        <CustomDiv className="w-full flex-col gap-gap-xl md:flex-row lg:flex-col">
          <CustomDiv className="w-full items-start gap-gap-lg">
            {cta.qr}
            <div className="grid w-[134px] gap-gap-md lg:w-full">
              <CustomText>{cta.description}</CustomText>
              <CustomText bold className="text-body-lg">
                {cta.devices}
              </CustomText>
            </div>
          </CustomDiv>
          <CustomDiv className="w-full flex-wrap gap-gap-lg">
            {platforms.map((platform) => (
              <CustomDiv
                className="items-center gap-gap-md"
                key={platform.name}
              >
                {platform.icon}
                <Text>{platform.name}</Text>
              </CustomDiv>
            ))}
          </CustomDiv>
        </CustomDiv>
      </CustomDiv>
    </Card.ContentRight>
  );
};

export default AppDownload;
