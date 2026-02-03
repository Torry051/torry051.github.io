import React, { useEffect } from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import { FirstName } from "../../utils/getName";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../settings/translations";
import { useDencrypt } from "use-dencrypt-effect";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
    schoolLine: {
        display: 'flex',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        margin: '1em 0',
    },
    ucsb: {
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, #00e5e5 50%, ${theme.palette.secondary.main} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 700,
        fontSize: '1.3em',
        letterSpacing: '0.02em',
        marginLeft: '0.3em',
    },
}));

const decryptOptions = {
    chars: ["-", ".", "/", "*", "!", "?", "#", "%", "&", "@", "$", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    interval: 50,
};

// Inline decrypt component for UCSB with gradient
const InlineDecrypt = ({ text, className }) => {
    const { result, dencrypt } = useDencrypt(decryptOptions);
    
    useEffect(() => {
        const action = setTimeout(() => dencrypt(text || ""), 0);
        return () => clearTimeout(action);
    }, [dencrypt, text]);
    
    return <span className={className}>{result}</span>;
};

export const Content = () => {
    const classes = useStyles();
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                <TextDecrypt text={`${t.hero.greeting} ${t.hero.name || FirstName}`} />
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                <TextDecrypt text={t.hero.job} />
                <div className={classes.schoolLine}>
                    <InlineDecrypt text={t.hero.at} />
                    <InlineDecrypt text={t.hero.school} className={classes.ucsb} />
                </div>
                {t.hero.schoolFull && (
                    <TextDecrypt text={t.hero.schoolFull} />
                )}
            </Typography>
        </Container>
    );
};
