import ListItem from "./ListItem"
import { useSelector } from "react-redux"

export default function MyRole(){
    const project = useSelector(state => state.project.data)

    const roleInProject = project.myRoleInProject.map((role, i) => ( <ListItem key={i} text={role} /> ))

    return(
        <div>
            <h3>My role in this project</h3>
            <ul role="list">
                {roleInProject}
            </ul>
        </div>
    )
}