import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Jeg startede på multimediedesigner uddannelsen i 2021 og går nu på 3. semester. Denne uddannelse tiltalte mig særligt på grund af min får lov til at være kreativ og eksperimenterende.
Gennem mit arbejde som butiksassistens har jeg opnået en del færdigheder, her ser jeg mig selv som løsningsorienteret, god til at kommunikere med andre, samt at holde overblik og lede andre mennesker. 
Har en stor passion for at lære nye teknologier som kan gavne mit workflow, heriblandt frameworks, librabries og nye versioner af programmeringssprog. 
            </p>

            <br />

            <p className='text-xl'>
            Når det kommer til at udvikling har jeg altid en klar vision om hvordan jeg skal nå i mål med mit projekt, en velstruktureret plan og deadlines holder jeg af.
På uddannelsen har vi lært de basale værktøjer inden for webudvikling og design. Vi har arbejdet med programmeringssprogene Javascript, samt HTML/CSS og har
arbejdet i frameworket React. Til design har vi primært arbejdet med de fleste programmer i Adobe-pakken og jeg kan derfor forstå processen fra start til slut af designet til en hjemmeside/webapp.

            </p>
        </div>
    </div>
  )
}

export default About