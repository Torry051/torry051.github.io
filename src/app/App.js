import React, { lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { LanguageProvider } from "../context/LanguageContext";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// Use basename for GitHub Pages deployment
const basename = process.env.PUBLIC_URL || "";

export const App = () => {
    logCredits();

    return (
        <LanguageProvider>
            <ThemeProvider>
                <CssBaseline />
                <Router basename={basename}>
                    <HelmetMeta />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/cn" exact component={Home} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/cn/resume" component={Resume} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </LanguageProvider>
    );
};
