import { ProjectData } from "../../public/ProjectData"
import ListItem from "./ListItem"

export default function MyRole(){
    const roleInProject = ProjectData[0].myRoleInProject.map((role, i) => ( <ListItem key={i} text={role} /> )) 

    return(
        <div>
            <h3>My role in this project</h3>
            <ul role="list">
                {roleInProject}
            </ul>
        </div>
    )
}