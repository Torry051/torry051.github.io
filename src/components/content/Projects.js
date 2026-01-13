import React, { useState } from "react";
import { Typography, Container, Grid, Card, CardContent, CardMedia, CardActionArea, Chip, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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
    projectCard: {
        background: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(0, 0, 0, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: `1px solid ${theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.08)'}`,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: `0 20px 40px ${theme.palette.type === 'dark' 
                ? 'rgba(0, 191, 191, 0.3)' 
                : 'rgba(0, 191, 191, 0.25)'}`,
            border: `1px solid ${theme.palette.primary.main}`,
        },
    },
    cardActionArea: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    cardMedia: {
        height: 200,
        position: 'relative',
        flexShrink: 0,
    },
    cardContent: {
        padding: theme.spacing(2, 2.5),
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    projectTitle: {
        fontWeight: 600,
        marginBottom: theme.spacing(0.5),
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '1rem',
    },
    descriptionContainer: {
        position: 'relative',
        marginBottom: theme.spacing(1.5),
        flexGrow: 1,
    },
    projectDescription: {
        color: theme.palette.type === 'dark' 
            ? 'rgba(255, 255, 255, 0.7)' 
            : 'rgba(0, 0, 0, 0.7)',
        fontSize: '0.8rem',
        lineHeight: 1.6,
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        fontFamily: 'Roboto Mono, monospace',
    },
    descriptionCollapsed: {
        maxHeight: '3.6em', // 约2-3行文字
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1.5em',
            background: theme.palette.type === 'dark'
                ? 'linear-gradient(transparent, rgba(30, 30, 30, 1))'
                : 'linear-gradient(transparent, rgba(250, 250, 250, 1))',
        },
    },
    descriptionExpanded: {
        maxHeight: '500px',
    },
    expandButton: {
        padding: theme.spacing(0.25, 0.75),
        fontSize: '0.7rem',
        color: theme.palette.primary.main,
        textTransform: 'none',
        fontFamily: 'Roboto Mono, monospace',
        marginTop: theme.spacing(0.5),
        minWidth: 'auto',
        '&:hover': {
            backgroundColor: theme.palette.type === 'dark'
                ? 'rgba(0, 191, 191, 0.1)'
                : 'rgba(0, 191, 191, 0.08)',
        },
    },
    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(1),
        marginTop: 'auto',
    },
    tag: {
        fontSize: '0.7rem',
        height: '22px',
        backgroundColor: theme.palette.type === 'dark'
            ? 'rgba(0, 191, 191, 0.2)'
            : 'rgba(0, 191, 191, 0.15)',
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.type === 'dark' ? '#111' : '#fff',
        },
    },
    gameIcon: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        background: theme.palette.primary.main,
        color: theme.palette.type === 'dark' ? '#111' : '#fff',
        padding: theme.spacing(0.5, 1.5),
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: 600,
        fontFamily: 'Roboto Mono, monospace',
        zIndex: 1,
    },
    gridItem: {
        display: 'flex',
    },
}));

const ProjectCard = ({ project, classes }) => {
    const [expanded, setExpanded] = useState(false);
    const descriptionLength = project.description?.length || 0;
    const needsExpand = descriptionLength > 120; // 超过120字符显示展开按钮

    const handleExpandClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.projectCard} elevation={0}>
            <CardActionArea 
                href={project.url || "#"} 
                target="_blank"
                rel="noopener noreferrer"
                className={classes.cardActionArea}
            >
                <div style={{ position: 'relative' }}>
                    {project.type && (
                        <span className={classes.gameIcon}>
                            {project.type}
                        </span>
                    )}
                    <CardMedia
                        className={classes.cardMedia}
                        image={project.image 
                            ? `${process.env.PUBLIC_URL}${project.image}` 
                            : `https://via.placeholder.com/400x200/00bfbf/ffffff?text=${encodeURIComponent(project.name)}`}
                        title={project.name}
                    />
                </div>
                <CardContent className={classes.cardContent}>
                    <Typography 
                        variant="h6" 
                        component="h3" 
                        className={classes.projectTitle}
                    >
                        {project.name}
                    </Typography>
                    <div className={classes.descriptionContainer}>
                        <Typography 
                            variant="body2" 
                            className={`${classes.projectDescription} ${
                                needsExpand 
                                    ? (expanded ? classes.descriptionExpanded : classes.descriptionCollapsed)
                                    : ''
                            }`}
                        >
                            {project.description}
                        </Typography>
                        {needsExpand && (
                            <Button 
                                className={classes.expandButton}
                                onClick={handleExpandClick}
                                endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            >
                                {expanded ? 'Show less' : 'Read more'}
                            </Button>
                        )}
                    </div>
                    <div className={classes.tagsContainer}>
                        {project.technologies && project.technologies.map((tech, i) => (
                            <Chip 
                                key={i} 
                                label={tech} 
                                size="small" 
                                className={classes.tag}
                            />
                        ))}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export const Projects = () => {
    const classes = useStyles();
    const projects = Resume.projects || [];

    return (
        <section className={classes.section} id="projects">
            <Container maxWidth="md">
                <Typography variant="h3" component="h2" className={classes.sectionTitle}>
                    <TextDecrypt text="Projects" />
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} key={index} className={classes.gridItem}>
                            <ProjectCard project={project} classes={classes} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};
