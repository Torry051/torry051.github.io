import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const getLanguageFromPathname = (pathname) => {
    // URL is the source of truth:
    // - /cn (and anything under it) => Chinese
    // - otherwise => English
    return pathname && pathname.startsWith('/cn') ? 'zh' : 'en';
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return getLanguageFromPathname(window.location.pathname);
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    useEffect(() => {
        // Keep language in sync when user navigates with back/forward
        const onPopState = () => setLanguage(getLanguageFromPathname(window.location.pathname));
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'zh' : 'en');
    };

    const t = (key) => {
        // This will be used with the translations
        return key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
