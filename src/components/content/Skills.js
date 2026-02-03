import React from "react";
import { Typography, Container, Grid, LinearProgress, Box } from "@material-ui/core";
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
    skillCategory: {
        marginBottom: theme.spacing(4),
    },
    categoryTitle: {
        fontFamily: 'Roboto Mono, monospace',
        fontWeight: 600,
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        '&::before': {
            content: '">"',
            marginRight: theme.spacing(1),
            opacity: 0.7,
        },
    },
    skillCard: {
        background: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.03)' 
            : 'rgba(0, 0, 0, 0.02)',
        borderRadius: '12px',
        padding: theme.spacing(3),
        border: `1px solid ${theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.08)' 
            : 'rgba(0, 0, 0, 0.06)'}`,
        transition: 'all 0.3s ease',
        height: '100%',
        '&:hover': {
            background: theme.palette.type === 'dark' 
                ? 'rgba(255, 255, 255, 0.06)' 
                : 'rgba(0, 0, 0, 0.04)',
            borderColor: theme.palette.primary.main,
        },
    },
    skillItem: {
        marginBottom: theme.spacing(2.5),
        '&:last-child': {
            marginBottom: 0,
        },
    },
    skillHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
    },
    skillName: {
        fontFamily: 'Roboto Mono, monospace',
        fontWeight: 500,
        fontSize: '0.9rem',
    },
    skillLevel: {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '0.75rem',
        color: theme.palette.primary.main,
        opacity: 0.9,
    },
    progressBar: {
        height: 6,
        borderRadius: 3,
        backgroundColor: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.08)',
    },
    progressBarFill: {
        borderRadius: 3,
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    },
    keywordsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(1),
        marginTop: theme.spacing(4),
        paddingTop: theme.spacing(3),
        borderTop: `1px dashed ${theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.08)'}`,
        justifyContent: 'center',
    },
    keyword: {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '0.8rem',
        padding: theme.spacing(0.5, 1.5),
        borderRadius: '4px',
        background: theme.palette.type === 'dark' 
            ? 'rgba(0, 191, 191, 0.1)' 
            : 'rgba(0, 191, 191, 0.08)',
        color: theme.palette.primary.main,
        border: `1px solid transparent`,
        transition: 'all 0.2s ease',
        '&:hover': {
            borderColor: theme.palette.primary.main,
            background: theme.palette.type === 'dark' 
                ? 'rgba(0, 191, 191, 0.2)' 
                : 'rgba(0, 191, 191, 0.15)',
        },
    },
}));

export const Skills = () => {
    const classes = useStyles();
    const { language } = useLanguage();
    const t = translations[language];
    const skillCategories = t.skills.categories || [];

    // Collect all skill names for bottom tags
    const allSkillNames = skillCategories.reduce((acc, category) => {
        const names = category.skills 
            ? category.skills.map(s => s.name) 
            : (category.keywords || []);
        return [...acc, ...names];
    }, []);

    return (
        <section className={classes.section} id="skills">
            <Container maxWidth="md">
                <Typography variant="h3" component="h2" className={classes.sectionTitle}>
                    <TextDecrypt text={t.skills.title} />
                </Typography>
                <Grid container spacing={4}>
                    {skillCategories.map((category, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <div className={classes.skillCard}>
                                <Typography 
                                    variant="h6" 
                                    className={classes.categoryTitle}
                                >
                                    {category.name}
                                </Typography>
                                {/* 新格式：每个技能有独立的 level */}
                                {category.skills && category.skills.map((skill, i) => (
                                    <div key={i} className={classes.skillItem}>
                                        <div className={classes.skillHeader}>
                                            <Typography className={classes.skillName}>
                                                {skill.name}
                                            </Typography>
                                            <Typography className={classes.skillLevel}>
                                                {skill.level}%
                                            </Typography>
                                        </div>
                                        <LinearProgress 
                                            variant="determinate" 
                                            value={skill.level}
                                            classes={{
                                                root: classes.progressBar,
                                                bar: classes.progressBarFill,
                                            }}
                                        />
                                    </div>
                                ))}
                                {/* 兼容旧格式：keywords 数组 */}
                                {!category.skills && category.keywords && category.keywords.map((skillName, i) => (
                                    <div key={i} className={classes.skillItem}>
                                        <div className={classes.skillHeader}>
                                            <Typography className={classes.skillName}>
                                                {skillName}
                                            </Typography>
                                        </div>
                                        <LinearProgress 
                                            variant="determinate" 
                                            value={75}
                                            classes={{
                                                root: classes.progressBar,
                                                bar: classes.progressBarFill,
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Grid>
                    ))}
                </Grid>
                {allSkillNames.length > 0 && (
                    <Box className={classes.keywordsContainer}>
                        {[...new Set(allSkillNames)].map((name, index) => (
                            <span key={index} className={classes.keyword}>
                                {name}
                            </span>
                        ))}
                    </Box>
                )}
            </Container>
        </section>
    );
};
