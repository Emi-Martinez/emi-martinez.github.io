import ListItem from "./ListItem"
import { useSelector } from "react-redux"
import H3 from "./style/H3"
import styled from "styled-components"
import { ProjectPageContent } from "../data/ProjectPageContent"

export default function MyRole(){
    const project = useSelector(state => state.project.data)
    const lang = useSelector(state => state.language.data)

    const roleInProject = project[lang].myRoleInProject.map((role, i) => ( <ListItem key={i} text={role} /> ))

    const device = useSelector(state => state.device.data)

    const MyRoleContainer = styled.div`
        margin: ${device == "phone" ? "136px 16px" : device == "tablet" ? "156px 56px" : "256px 80px"};
        width: ${device == "phone" ? "" : "50%"};
    `
    const Ul = styled.ul`
        padding-left: 0px;
        margin-top: 64px;
    `
    
    return(
        <MyRoleContainer>
            <H3 device={device}>{ProjectPageContent[lang].myRole}</H3>
            <Ul role="list">
                {roleInProject}
            </Ul>
        </MyRoleContainer>
    )
}