import ListItem from "./ListItem"
import { useSelector } from "react-redux"
import H3 from "./style/H3"
import styled from "styled-components"

export default function MyRole(){
    const project = useSelector(state => state.project.data)

    const roleInProject = project.myRoleInProject.map((role, i) => ( <ListItem key={i} text={role} /> ))

    const MyRoleContainer = styled.div`
        margin: 256px 80px;
        width: 50%;
    `
    const Ul = styled.ul`
        padding-left: 0px;
        margin-top: 64px;
    `

    return(
        <MyRoleContainer>
            <H3>My role in this project</H3>
            <Ul role="list">
                {roleInProject}
            </Ul>
        </MyRoleContainer>
    )
}