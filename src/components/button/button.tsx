import classes from "./button.module.scss";

interface IButton {
    text: string;
    onClick: (ev: any) => void;
}

const Button = ({text, onClick}: IButton) => {
    return <button className={classes.button} onClick={onClick}>{text}</button>;
}

export default Button;