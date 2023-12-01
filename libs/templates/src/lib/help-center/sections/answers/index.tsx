import { AccordionBlock } from '@deriv-com/blocks';
import { Section } from '@deriv/quill-design';
import { FAQDataType } from '../../types';
import { AccordionProps } from '@deriv-com/components';

const AnswerSection = ({ header, questions, answers }: FAQDataType) => {
  const accordionItems: AccordionProps[] = [];

  questions.forEach((question, qk) => {
    const answer = answers ? answers[qk] : () => <></>;

    accordionItems.push({
      title: question,
      content: answer,
    });
  });

  return (
    <Section className="mt-2400 flex flex-col">
      <AccordionBlock
        title={header}
        content={{
          data: [accordionItems],
        }}
        className="pb-2400 pt-general-none"
      />
    </Section>
  );
};

export default AnswerSection;
