import classes from "./playground.module.scss";

const Playground = (props: any) => {
    return <div>
        <div className={classes.croupier}>Croupier</div>
        <div className={classes.player}>Player</div>
        <div className={classes.buttons}>Buttons</div>
    </div>;
}

export default Playground;