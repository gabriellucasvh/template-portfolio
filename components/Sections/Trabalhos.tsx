import React from 'react';
import Titulo from '../Typograghy/Titulo';
import Image from 'next/image';

interface CaseProps {
  title: string;
  description: string;
  serviceType: string;
  imageUrl: string;
  reverse?: boolean;
}

const Case: React.FC<CaseProps> = ({ title, description, serviceType, imageUrl, reverse }) => (
  <div
    className={`flex items-center justify-between ${reverse ? 'flex-row-reverse' : ''}`}
    data-aos="flip-up"
    data-aos-delay="300"
    data-aos-duration="1000"
  >
    <div>
      <Image
        src={imageUrl}
        className="border shadow rounded-lg"
        alt={`${title} case`}
        width={650}
        height={500}
      />
    </div>
    <div className="w-1/2 space-y-4">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="inline-block bg-neutral-950 text-white px-4 py-2 rounded-full">
        {serviceType}
      </p>
    </div>
  </div>
);

const Trabalhos = () => {
  const cases = [
    {
      title: 'Título 1',
      description: 'Descrição do caso 1.',
      serviceType: 'Serviço 1',
      imageUrl: '/IMAGEMx.png',
      reverse: false,
    },
    {
      title: 'Título 2',
      description: 'Descrição do caso 2.',
      serviceType: 'Serviço 2',
      imageUrl: '/IMAGEMx.png',
      reverse: true,
    },
    {
      title: 'Título 3',
      description: 'Descrição do caso 3.',
      serviceType: 'Serviço 3',
      imageUrl: '/IMAGEMx.png',
      reverse: false,
    },
    {
      title: 'Título 4',
      description: 'Descrição do caso 4.',
      serviceType: 'Serviço 4',
      imageUrl: '/IMAGEMx.png',
      reverse: true,
    },
  ];

  return (
    <div className="px-20 min-h-screen" id="trabalhos">
      <div className="flex items-center justify-between py-10" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        <Titulo>Trabalhos</Titulo>
        <p className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis labore, nulla qui,
          similique, facilis excepturi placeat libero
        </p>
      </div>
      <div className="space-y-10 py-5">
        {cases.map((caseData, index) => (
          <Case key={index} {...caseData} />
        ))}
      </div>
    </div>
  );
};

export default Trabalhos;
