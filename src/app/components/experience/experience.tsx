import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>3 years working as a Software Developer, in companys such as Embraer and ESIG.</p>
          <div className="experience-time">
            <Skill image="/java.png" measure={3} years="3 years"/>
            <Skill image="/postgres.png" measure={3} years="3 years"/>
            <Skill image="/js.png" measure={2} years="2 years"/>
            <Skill image="/angularr.png" measure={1} years="1 years"/>
            <Skill image="/ts.png" measure={1} years="1 years"/>
            
            
          </div>
        </div>
    )
}