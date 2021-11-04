import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreatePage } from './CreatePage/CreatePage';
import { SplashPage } from './SplashPage/SplashPage';
import { SurveyPage } from './SurveyPage/SurveyPage';

export const PageView = () => <Routes>
    <Route path="/:survey" element={<SurveyPage />} />
    <Route path="/create" element={<CreatePage />} />
    <Route exact path="/" element={<SplashPage />} />
</Routes>;

export default PageView;