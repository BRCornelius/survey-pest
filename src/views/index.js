import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SplashPage } from './SplashPage/SplashPage';
import { SurveyPage } from './SurveyPage/SurveyPage';

export const PageView = () => <Routes>
    <Route path="/:survey" element={<SurveyPage />} />
    <Route exact path="/" element={<SplashPage />} />
</Routes>;

export default PageView;