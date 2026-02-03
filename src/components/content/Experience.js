import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../settings/translations";

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(8, 0),
    },
    sectionTitle: {
        marginBottom: theme.spacing(6),
        textAlign: "center",
        fontWeight: 600,
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '2.5rem',
    },
    timeline: {
        position: 'relative',
        paddingLeft: theme.spacing(4),
        '&::before': {
            content: '""',
            position: 'absolute',
            left: '6px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: theme.palette.type === 'dark' 
                ? 'rgba(255, 255, 255, 0.2)' 
                : 'rgba(0, 0, 0, 0.15)',
        },
    },
    timelineItem: {
        position: 'relative',
        marginBottom: theme.spacing(3),
        '&:last-child': {
            marginBottom: 0,
        },
    },
    timelineDot: {
        position: 'absolute',
        left: '-30px',
        top: '8px',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        background: theme.palette.type === 'dark' ? '#111' : '#fafafa',
        border: `2px solid ${theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.4)' 
            : 'rgba(0, 0, 0, 0.3)'}`,
        zIndex: 1,
    },
    experienceCard: {
        background: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.03)' 
            : 'rgba(0, 0, 0, 0.02)',
        borderRadius: '10px',
        padding: theme.spacing(2, 3),
        border: `1px solid ${theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.08)' 
            : 'rgba(0, 0, 0, 0.08)'}`,
        transition: 'all 0.3s ease',
        '&:hover': {
            background: theme.palette.type === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(0, 0, 0, 0.03)',
            borderColor: theme.palette.primary.main,
            transform: 'translateX(4px)',
        },
    },
    companyName: {
        fontWeight: 600,
        fontSize: '1.1rem',
        marginBottom: theme.spacing(0.3),
        fontFamily: 'Roboto Mono, monospace',
    },
    jobMeta: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: theme.spacing(0.8),
        marginBottom: theme.spacing(1.5),
        color: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.6)' 
            : 'rgba(0, 0, 0, 0.6)',
        fontSize: '0.8rem',
        fontStyle: 'italic',
        fontFamily: 'Roboto Mono, monospace',
    },
    separator: {
        color: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.3)' 
            : 'rgba(0, 0, 0, 0.3)',
    },
    highlightsList: {
        margin: 0,
        paddingLeft: theme.spacing(2),
        '& li': {
            marginBottom: theme.spacing(0.7),
            lineHeight: 1.6,
            color: theme.palette.type === 'dark' 
                ? 'rgba(255, 255, 255, 0.8)' 
                : 'rgba(0, 0, 0, 0.75)',
            fontSize: '0.8rem',
            fontFamily: 'Roboto Mono, monospace',
            '&:last-child': {
                marginBottom: 0,
            },
        },
    },
}));

export const Experience = () => {
    const classes = useStyles();
    const { language } = useLanguage();
    const t = translations[language];
    const experiences = t.experience.items || [];

    if (experiences.length === 0) {
        return null;
    }

    return (
        <section className={classes.section} id="experience">
            <Container maxWidth="md">
                <Typography variant="h3" component="h2" className={classes.sectionTitle}>
                    <TextDecrypt text={t.experience.title} />
                </Typography>
                
                <div className={classes.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={classes.timelineItem}>
                            <div className={classes.timelineDot}></div>
                            <div className={classes.experienceCard}>
                                <Typography className={classes.companyName}>
                                    {exp.company}
                                </Typography>
                                <div className={classes.jobMeta}>
                                    <span>{exp.position}</span>
                                    <span className={classes.separator}>|</span>
                                    <span>{exp.location}</span>
                                    <span className={classes.separator}>|</span>
                                    <span>{exp.startDate} - {exp.endDate}</span>
                                </div>
                                {exp.highlights && exp.highlights.length > 0 && (
                                    <ul className={classes.highlightsList}>
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
