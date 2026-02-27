import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLanguage } from '../context/LanguageContext';

const useStyles = makeStyles((theme) => ({
    toggleContainer: {
        position: 'fixed',
        top: theme.spacing(3),
        right: theme.spacing(14),
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '6px 12px',
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${theme.palette.primary.main}40`,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderColor: theme.palette.primary.main,
        },
    },
    languageButton: {
        background: 'none',
        border: 'none',
        padding: '4px 10px',
        cursor: 'pointer',
        fontFamily: '"Roboto Mono", monospace',
        fontSize: '0.85rem',
        fontWeight: 500,
        color: theme.palette.text.secondary,
        borderRadius: '12px',
        transition: 'all 0.2s ease',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    activeLanguage: {
        color: theme.palette.primary.main,
        backgroundColor: `${theme.palette.primary.main}20`,
        fontWeight: 700,
    },
    divider: {
        color: theme.palette.text.secondary,
        opacity: 0.5,
        fontWeight: 300,
    },
}));

export const LanguageToggle = () => {
    const classes = useStyles();
    const { language, setLanguage } = useLanguage();

    return (
        <div className={classes.toggleContainer}>
            <button
                className={`${classes.languageButton} ${language === 'en' ? classes.activeLanguage : ''}`}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
            <span className={classes.divider}>|</span>
            <button
                className={`${classes.languageButton} ${language === 'zh' ? classes.activeLanguage : ''}`}
                onClick={() => setLanguage('zh')}
            >
                中文
            </button>
        </div>
    );
};

export default LanguageToggle;
