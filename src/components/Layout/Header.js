import { Fragment } from "react";
import classes from "./Header.module.css";
import foodImage from "../../assets/img/food.jpg";
import foodIcon from "../../assets/img/food-icon.png";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.brand}>
                    <img src={foodIcon} alt="Food Icon" />
                    <h1>ReactFood</h1>
                </div>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={foodImage} alt="Table full of food" />
            </div>
        </Fragment>
    );
};

export default Header;
