import React from 'react'
import { skillText } from '../constants/index'

const Skill = () => {
    return (
        <section id='skill'>
            <div className='skill_inner'>
                <h2 className='skill_title'>
                    Challenge<em>나의도전</em>
                </h2>
                    <div className='skill_desc'>
                        {skillText.map((skill,key)=>(
                            <div key={key}>
                                <span>{key+1}</span>
                                <h3>{skill.title}</h3>
                                <p>{skill.desc}</p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Skill