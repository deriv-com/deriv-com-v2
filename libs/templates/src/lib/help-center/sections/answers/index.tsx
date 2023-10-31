import { AccordionBlock } from '@deriv-com/blocks';
import { Section } from '@deriv/quill-design';
import { FAQDataType } from '../../types';
import { AccordionProps } from '@deriv-com/components';

const AnswerSection = ({ header, questions, answers }: FAQDataType) => {
  const accordion_items: AccordionProps[] = [];

  questions.forEach((question, qk) => {
    const answer = answers ? answers[qk] : () => <></>;

    accordion_items.push({
      title: question,
      content: answer,
    });
  });

  return (
    <Section className="flex flex-col ">
      <AccordionBlock
        title={header}
        content={{
          data: accordion_items,
        }}
      />
    </Section>
  );
};

export default AnswerSection;
