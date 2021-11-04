import React from 'react';
import "./History.css"
import userImg from "../../assets/icons/user.svg"
import useUser from "../../hooks/useUser";
import { UserContext } from "../../context/UserContext";

export default function History() {
    const { user } = useUser();
    const { history } = React.useContext(UserContext);

    return (
        <div className="History">
            <div className="historyContainer">
                <div className="user">
                    <img src={userImg} alt="user" />
                </div>
                <div className="userInformation">
                    <p className="userInformationText">{user.name}</p>
                    <p className="userInformationText">Puntos: {user.points}</p>
                    <div className="historyInformation">
                        { history.map((element) => (
                            <ul key={element._id} style={{listStyle:'none'}}>
                                <li style={{margin: '.7rem .5rem'}}>
                                    Se compró {element.name}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}