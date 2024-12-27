import React from 'react'
import { Card, CardContent, CardTitle, CardDescription } from '../ui/card'
import Titulo from '../Typograghy/Titulo'

const SkillsCards = () => [
    {
        title: 'Card Title',
        description: 'Card Description'
    },
    {
        title: 'Card Title 2',
        description: 'Card Description'
    },
    {
        title: 'Card Title 3',
        description: 'Card Description'
    },
    {
        title: 'Card Title 4',
        description: 'Card Description'
    }
]
const Skills = () => {
    return (
        <div className='flex flex-col items-center justify-center px-20 min-h-screen space-y-10'>
            <div className='flex flex-col items-center justify-center space-y-5'>
                <Titulo>Minhas Skills</Titulo>
                <p className='text-center w-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores fugit aspernatur quas, repellat </p>
            </div>
            <div className='flex max-w-full justify-center gap-4'>
                {SkillsCards().map((card, index) => (
                    <Card className='w-96 h-44 p-4 text-center'>
                        <div key={index}>
                            <CardContent>
                                <CardTitle className='text-5xl'>{card.title}</CardTitle>
                                <CardDescription>{card.description}</CardDescription>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Skills