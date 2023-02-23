import './style.css';
import {FC} from "react";

type Props = {
    onClick: () => void;
    label: string;
    id: string;
}

const Button: FC<Props> = ({onClick, label, id}) => {
    return (
        <button className="scifi-button" id={id} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;