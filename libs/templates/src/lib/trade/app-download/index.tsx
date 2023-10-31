import React from 'react';
import { Heading, Text } from '@deriv/quill-design';
import { Card } from '@deriv-com/components';
import { data } from './data';

const AppDownload = () => {
  const { content, heading, description, cta, platforms } = data;

  return (
    <Card.ContentRight
      color="gray"
      align="start"
      size="lg"
      content={content}
      contentClassName="w-full flex justify-center"
      className="lg:gap-gap-lg"
    >
      <div className="flex flex-col gap-gap-2xl">
        <div className="flex flex-col gap-gap-xl">
          <Heading.H2>{heading}</Heading.H2>
          <Text className="text-body-lg leading-body-lg text-opacity-black-600">
            {description}
          </Text>
        </div>

        <div className="flex w-full flex-col gap-gap-xl md:flex-row lg:flex-col">
          <div className="flex w-full items-start gap-gap-lg">
            {cta.qr}
            <div className="grid w-[134px] gap-gap-md lg:w-full [&>p]:text-opacity-black-600">
              <Text>{cta.description}</Text>
              <Text bold className="text-body-lg">
                {cta.devices}
              </Text>
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-gap-lg">
            {platforms.map((platform) => (
              <div className="flex items-center gap-gap-md" key={platform.name}>
                {platform.icon}
                <Text>{platform.name}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card.ContentRight>
  );
};

export default AppDownload;
