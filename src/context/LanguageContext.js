import React, { createContext, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const history = useHistory();

    const language = location.pathname.startsWith('/cn') ? 'zh' : 'en';

    const setLanguage = (lang) => {
        if (lang === 'zh' && language !== 'zh') {
            history.push('/cn');
        } else if (lang === 'en' && language !== 'en') {
            history.push('/');
        }
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zh' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
