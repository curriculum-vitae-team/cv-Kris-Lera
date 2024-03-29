import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import '../index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from '@graphql/client';
import LoginPage from '@authPages/LoginPage';
import EmployeesPage from '@pages/EmployeesPage';
import SignupPage from '@authPages/SignupPage';
import { routes } from '@route/routeConstants';
import { PrivateRoute } from '@routeComponents/PrivateRoute';
import theme from '@theme/theme';
import { PublicRoute } from '@routeComponents/PublicRoute';
import ProfilePage from '@pages/ProfilePage';
import ProfileSkillsPage from '@pages/ProfileSkillsPage';
import ProfileLanguagesPage from '@pages/ProfileLanguagesPage';
import ProfileCVsPage from '@pages/ProfileCVsPage';
import ProjectsPage from '@pages/ProjectsPage';
import ProjectDetailsPage from '@pages/ProjectDetailsPage';
import CvsPage from '@pages/CvsPage';
import CvDetailsPage from '@pages/CvDetailsPage';
import CvProjectsPage from '@pages/CvProjectsPage';
import DepartmentsPage from '@pages/DepartmentsPage';
import PositionPage from '@pages/PositionPage';
import LanguagesPage from '@pages/LanguagesPage';

const App: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route
              path={routes.LOGIN}
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path={routes.SIGNUP}
              element={
                <PublicRoute>
                  <SignupPage />
                </PublicRoute>
              }
            />
            <Route
              path={routes.EMPLOYEES}
              element={<PrivateRoute>{<EmployeesPage />}</PrivateRoute>}
            />
            <Route path={routes.PROFILE} element={<PrivateRoute>{<ProfilePage />}</PrivateRoute>} />
            <Route
              path={routes.EMPLOYEE_SKILLS}
              element={<PrivateRoute>{<ProfileSkillsPage />}</PrivateRoute>}
            />
            <Route
              path={routes.EMPLOYEE_LANGUAGES}
              element={<PrivateRoute>{<ProfileLanguagesPage />}</PrivateRoute>}
            />
            <Route
              path={routes.EMPLOYEE_CVS}
              element={<PrivateRoute>{<ProfileCVsPage />}</PrivateRoute>}
            />
            <Route
              path={routes.PROJECTS}
              element={<PrivateRoute>{<ProjectsPage />}</PrivateRoute>}
            />
            <Route
              path={routes.PROJECT_DETAILS}
              element={
                <PrivateRoute>
                  <ProjectDetailsPage />
                </PrivateRoute>
              }
            />
            <Route path={routes.CVS} element={<PrivateRoute>{<CvsPage />}</PrivateRoute>} />
            <Route
              path={routes.CV_DETAILS}
              element={
                <PrivateRoute>
                  <CvDetailsPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.CV_PROJECTS}
              element={
                <PrivateRoute>
                  <CvProjectsPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.DEPARTMENTS}
              element={
                <PrivateRoute>
                  <DepartmentsPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.POSITIONS}
              element={
                <PrivateRoute>
                  <PositionPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.LANGUAGES}
              element={
                <PrivateRoute>
                  <LanguagesPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to={routes.EMPLOYEES} />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
