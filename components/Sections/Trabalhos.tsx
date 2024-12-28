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
    className={`lg:flex  items-center justify-between ${reverse ? 'flex-row-reverse text-right' : ''}`}
  >
    <div className='mx-auto w-11/12 lg:w-1/2'>
      <Image
        src={imageUrl}
        className="border shadow rounded-lg"
        alt={`${title} case`}
        width={650}
        height={500}
      />
    </div>
    <div className="mx-auto lg:mx-10 w-11/12  lg:w-1/2 space-y-4">
      <h2 className="mt-5 lg:mt-0 text-3xl lg:text-5xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="inline-block bg-neutral-950 text-white px-4 py-1 rounded-full">
        {serviceType}
      </p>
    </div>
  </div>
);

const Trabalhos = () => {
  const cases = [
    {
      title: 'Título 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis labore, nulla qui, similique, facilis excepturi placeat libero',
      serviceType: 'Serviço 1',
      imageUrl: '/IMAGEMx.png',
      reverse: false,
    },
    {
      title: 'Título 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis labore, nulla qui, similique, facilis excepturi placeat libero',
      serviceType: 'Serviço 2',
      imageUrl: '/IMAGEMx.png',
      reverse: true,
    },
    {
      title: 'Título 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis labore, nulla qui, similique, facilis excepturi placeat libero',
      serviceType: 'Serviço 3',
      imageUrl: '/IMAGEMx.png',
      reverse: false,
    },
    {
      title: 'Título 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis labore, nulla qui, similique, facilis excepturi placeat libero',
      serviceType: 'Serviço 4',
      imageUrl: '/IMAGEMx.png',
      reverse: true,
    },
  ];

  return (
    <div className="lg:px-20 min-h-screen mt-10" id="trabalhos">
      <div className="flex flex-col lg:flex-row text-center items-center justify-between py-10">
        <Titulo>Trabalhos</Titulo>
        <p className="w-full lg:w-1/2">
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
