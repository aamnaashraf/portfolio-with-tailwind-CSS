import React from 'react'
import Heading from "./Heading";
import Card from './Card';
const data =[
    {
        id:0,
        title: "Todo List",
        desc:"An app for managing and organizing your tasks efficiently",
        img:"/myproject4.PNG",
        tags:[ "Node" , "Typescript"],
    },
    {
        id:1,
        title: "CLI-based Number guessing game",
        desc:"A game in which the user has to correctly guess the answer",
        img:"/myproject2.PNG",
        tags:[ "Node" , "Typescript"],
    },
    {
        id:2,
        title: "Quiz System",
        desc:"A dynamic system that engages users with interactive questions and instant feedback",
        img:"/myproject5.PNG",
        tags:["Node" , "Typescript" ],
    },
    {
        id:3,
        title: "ATM Machine",
        desc:"enables cash withdrawls and basic banking transactions",
        img:"/myprojects.PNG",
        tags:[ "Node" , "Typescript"],
    },
]

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects"/>
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) =>(<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
