import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    logoImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
        transition: "all 0.5s ease",
        "&:hover": {
            filter: "brightness(1.2)",
            transform: "scale(1.05)",
        },
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <img
            src={`${process.env.PUBLIC_URL}/TR.jpg`}
            alt="TR Logo"
            className={classes.logoImage}
        />
    );
};
