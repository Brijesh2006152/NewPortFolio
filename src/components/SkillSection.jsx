import React from 'react'

const SkillSection = (props) => {
  
  return (
    <section className='skill-set'>
        <div className="skill-set-head">{props.head}</div>
        <ul>
          {
            props.body.map((skill) => (
              <li key={skill.id}>{skill}</li>
            ))
          }
        </ul>
        {/*
        <div className="skill-set-body"> {props.body}</div>
        */}
    </section>
  )
}

export default SkillSection;