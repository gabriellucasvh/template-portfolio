import React from 'react'
import { Card, CardContent, CardTitle, CardDescription } from '../ui/card'
import Titulo from '../Typograghy/Titulo'

const SkillsCards = () => [
  {
    title: 'Card Title',
    description: 'Card Description Lorem Lorem Lorem',
  },
  {
    title: 'Card Title 2',
    description: 'Card Description Lorem Lorem Lorem',
  },
  {
    title: 'Card Title 3',
    description: 'Card Description Lorem Lorem Lorem',
  },
  {
    title: 'Card Title 4',
    description: 'Card Description Lorem Lorem Lorem',
  },
]

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center px-6 md:px-20 min-h-screen space-y-10"
      id="skills"
    >
      {/* Título e descrição */}
      <div
        className="flex flex-col items-center justify-center space-y-5"
      >
        <Titulo>Minhas Skills</Titulo>
        <p className="text-center max-w-md md:max-w-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores fugit aspernatur quas, repellat.
        </p>
      </div>

      {/* Cards responsivos */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SkillsCards().map((card, index) => (
          <Card key={index} className="min-w-full p-4 text-center shadow-md">
            <CardContent>
              <CardTitle className="text-xl md:text-2xl">{card.title}</CardTitle>
              <CardDescription className="text-sm md:text-base">
                {card.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Skills
