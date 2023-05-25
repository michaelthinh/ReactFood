import { Fragment } from "react";
import classes from "./Header.module.css";
import foodImage from "../../assets/img/food.jpg";
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactFood</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img src={foodImage} alt="Table full of food" />
            </div>
        </Fragment>
    );
};

export default Header;
