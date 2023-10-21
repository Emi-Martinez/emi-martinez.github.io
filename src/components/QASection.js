import QAItem from '../icons/QAItem.svg'

export default function QASection(){
    return(
        <div>
            <h3>Before you send me a message, it’s important that you know:</h3>
            <ul>
                <li>
                    <QAItem />
                    <h6>Are you working with teams?</h6>
                    <p>Yes, I’m open to work with teams. Explain to me your project and the role that you want me to play in it and I will answer as fast as possible.</p>
                </li>
                <li>
                    <QAItem />
                    <h6>Do you make designs?</h6>
                    <p>No, currently i'm not designing websites or applications.</p>
                </li>
                <li>
                    <QAItem />
                    <h6>Do you build responsive websites?</h6>
                    <p>Yes, for all kind of devises!</p>
                </li>
                <li>
                    <QAItem />
                    <h6>Do you make SEO?</h6>
                    <p>No, in this moment i’m not working with SEO.</p>
                </li>
            </ul>
        </div>
    )
}