import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Fluent</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Science and Tecnology Bachelors Degree - Universidade Federal do Rio Grande do Norte</span>
        </div>
        <div className="educational-info">
        <span>🎓</span>
          <span>Mechatronic Engineer Bachelors Degree - Universidade Federal do Rio Grande do Norte</span>
          </div>
      </div>
    )
}