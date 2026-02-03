import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { About } from '../components/content/About';
import { Experience } from '../components/content/Experience';
import { Projects } from '../components/content/Projects';
import { Skills } from '../components/content/Skills';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { LanguageToggle } from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import translations from '../settings/translations';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  sectionsContainer: {
    position: 'relative',
    zIndex: 10,
    backgroundColor: theme.palette.type === 'dark' ? '#111111' : '#fafafa',
    paddingBottom: theme.spacing(10),
    // 顶部渐变遮罩
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-200px',
      left: 0,
      right: 0,
      height: '200px',
      background: theme.palette.type === 'dark' 
        ? 'linear-gradient(to bottom, transparent 0%, #111111 100%)'
        : 'linear-gradient(to bottom, transparent 0%, #fafafa 100%)',
      pointerEvents: 'none',
      zIndex: 5,
    },
  },
  footer: {
    position: 'relative',
    zIndex: 10,
    backgroundColor: theme.palette.type === 'dark' ? '#111111' : '#fafafa',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    animation: '$bounce 2s infinite',
    zIndex: 100,
    transition: 'all 0.3s ease',
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    },
  },
  scrollText: {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '0.8rem',
    fontWeight: 500,
    marginBottom: '8px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },
  scrollArrow: {
    width: '12px',
    height: '12px',
    border: `2px solid currentColor`,
    borderTop: 'none',
    borderLeft: 'none',
    transform: 'rotate(45deg)',
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateX(-50%) translateY(0)',
    },
    '40%': {
      transform: 'translateX(-50%) translateY(-10px)',
    },
    '60%': {
      transform: 'translateX(-50%) translateY(-5px)',
    },
  },
}));

export const Home = () => {
  const classes = useStyles();
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      {/* Hero Section with 3D Sphere */}
      <div className={classes.root}>
        <div className={classes.heroSection}>
          <DisplacementSphere />
          <LogoLink />
          <Content />
          <LanguageToggle />
          <ThemeToggle />
          <Hidden smDown>
            <SocialIcons />
          </Hidden>
          <Hidden mdUp>
            <SpeedDials />
          </Hidden>
          
          {/* Scroll Indicator */}
          <div className={classes.scrollIndicator} onClick={scrollToAbout}>
            <span className={classes.scrollText}>{t.scroll}</span>
            <div className={classes.scrollArrow}></div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className={classes.sectionsContainer}>
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
      
      {/* Footer */}
      {/* <div className={classes.footer}>
        <FooterText />
      </div> */}
    </>
  );
};
