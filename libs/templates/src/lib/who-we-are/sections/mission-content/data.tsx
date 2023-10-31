import { Text } from '@deriv/quill-design';

const Content = () => {
  const datas = [
    {
      id: 1,
      text: 'Deriv is one of the world’s largest online brokers for forex. We offer millions of traders worldwide a diverse range of trading assets on the forex market.',
    },
    {
      id: 2,
      text: 'From inception, we aimed to break free of the high commissions and clunky products traditional brokers offer. Also, we aim to deliver a first-class experience to digitally inclined traders, regardless of the size of their accounts on our trading platform.',
    },
    {
      id: 3,
      text: (
        <>
          In a journey spanning more than 20 years, Deriv Group has grown to
          over 3 million online traders worldwide. But our mission has remained
          the same.{' '}
          <span className="font-bold">
            Make trading accessible to anyone, anywhere
          </span>
        </>
      ),
    },
  ];

  return (
    <>
      {datas.map((data, index) => {
        return (
          <Text className="text-typography-default" key={data.id}>
            {data.text}
          </Text>
        );
      })}
    </>
  );
};

export default Content;
