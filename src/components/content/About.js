import React from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import GetAppIcon from '@material-ui/icons/GetApp';
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
        marginBottom: theme.spacing(2),
        textAlign: "center",
        fontWeight: 600,
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '2.5rem',
    },
    sectionSubtitle: {
        textAlign: "center",
        marginBottom: theme.spacing(5),
        color: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.6)' 
            : 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Roboto Mono, monospace',
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
    },
    description: {
        fontSize: '1.05rem',
        lineHeight: 1.9,
        color: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.85)' 
            : 'rgba(0, 0, 0, 0.75)',
        marginBottom: theme.spacing(5),
        fontFamily: 'Roboto Mono, monospace',
    },
    statsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(6),
        marginBottom: theme.spacing(5),
        flexWrap: 'wrap',
    },
    statItem: {
        textAlign: 'center',
        minWidth: '120px',
        padding: theme.spacing(2),
        borderRadius: '12px',
        background: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.03)' 
            : 'rgba(0, 0, 0, 0.02)',
        border: `1px solid ${theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.08)' 
            : 'rgba(0, 0, 0, 0.06)'}`,
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: theme.palette.primary.main,
            transform: 'translateY(-4px)',
        },
    },
    statNumber: {
        fontSize: '2.2rem',
        fontWeight: 700,
        color: theme.palette.primary.main,
        fontFamily: 'Roboto Mono, monospace',
    },
    statLabel: {
        fontSize: '0.85rem',
        color: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.6)' 
            : 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Roboto Mono, monospace',
        marginTop: theme.spacing(0.5),
    },
    downloadButton: {
        background: theme.palette.primary.main,
        color: theme.palette.type === 'dark' ? '#111' : '#fff',
        padding: theme.spacing(1.5, 4),
        borderRadius: '50px',
        fontFamily: 'Roboto Mono, monospace',
        fontWeight: 600,
        textTransform: 'none',
        fontSize: '1rem',
        boxShadow: `0 8px 30px ${theme.palette.type === 'dark' 
            ? 'rgba(0, 191, 191, 0.4)' 
            : 'rgba(0, 191, 191, 0.3)'}`,
        transition: 'all 0.3s ease',
        '&:hover': {
            background: theme.palette.primary.main,
            transform: 'translateY(-3px)',
            boxShadow: `0 12px 40px ${theme.palette.type === 'dark' 
                ? 'rgba(0, 191, 191, 0.5)' 
                : 'rgba(0, 191, 191, 0.4)'}`,
        },
    },
    buttonIcon: {
        marginLeft: theme.spacing(1),
    },
}));

export const About = () => {
    const classes = useStyles();
    const about = Resume.about || {};
    const { language } = useLanguage();
    const t = translations[language];
    const cvHref = language === 'zh' ? `${process.env.PUBLIC_URL}/resume-cn.pdf` : (about.cvLink || "/resume");

    return (
        <section className={classes.section} id="about">
            <Container maxWidth="md">
                <Typography variant="h3" component="h2" className={classes.sectionTitle}>
                    <TextDecrypt text={t.about.title} />
                </Typography>
                <div className={classes.contentWrapper}>
                    {/* Description */}
                    <Typography className={classes.description}>
                        {t.about.description}
                    </Typography>
                    
                    {/* Stats */}
                    <div className={classes.statsContainer}>
                        <div className={classes.statItem}>
                            <Typography className={classes.statNumber}>
                                {about.yearsExperience || "02+"}
                            </Typography>
                            <Typography className={classes.statLabel}>
                                {t.about.yearsExperience.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}{i === 0 && <br/>}
                                    </React.Fragment>
                                ))}
                            </Typography>
                        </div>
                        <div className={classes.statItem}>
                            <Typography className={classes.statNumber}>
                                {about.completedProjects || "20+"}
                            </Typography>
                            <Typography className={classes.statLabel}>
                                {t.about.completedProjects.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}{i === 0 && <br/>}
                                    </React.Fragment>
                                ))}
                            </Typography>
                        </div>
                        <div className={classes.statItem}>
                            <Typography className={classes.statNumber}>
                                {about.customStat || "∞"}
                            </Typography>
                            <Typography className={classes.statLabel}>
                                {t.about.passionForGames.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}{i === 0 && <br/>}
                                    </React.Fragment>
                                ))}
                            </Typography>
                        </div>
                    </div>
                    
                    {/* Download CV Button */}
                    <Button 
                        variant="contained" 
                        className={classes.downloadButton}
                        href={cvHref}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t.about.downloadCV}
                        <GetAppIcon className={classes.buttonIcon} />
                    </Button>
                </div>
            </Container>
        </section>
    );
};
