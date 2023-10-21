import {ListBulletPoint} from "../icons/ListBulletPoint.svg"

export default function ListItem({text}){
    return(
        <li>
            <ListBulletPoint />
            <span>{text}</span>
        </li>
    )
}