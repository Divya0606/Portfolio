import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects.Some are fornt end only as well as backend projects are also there. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'front-end app' ?
            <ToggleButton active value="front-end app" onClick={() => setToggle('front-end app')}>FRONT-END APP'S</ToggleButton>
            :
            <ToggleButton value="front-end app" onClick={() => setToggle('front-end app')}>FRONT-END APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'full-stack app' ?
            <ToggleButton active value="full-stack app" onClick={() => setToggle('full-stack app')}>FULL STACK APP'S</ToggleButton>
            :
            <ToggleButton value="full-stack app" onClick={() => setToggle('full-stack app')}>FULL STACK APP'S</ToggleButton>
          }
          {/* <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects