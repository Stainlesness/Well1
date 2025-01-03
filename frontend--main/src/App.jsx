import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';
import BursarDashboard from './components/BursarDashboard';
import DirectorDashboard from './components/DirectorDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import { AuthProvider } from './auth/AuthProvider';
import PrivateRoute from './auth/PrivateRoute';
import RoleBasedRoute from './auth/RoleBasedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Private Routes with Role-Based Access */}
          <Route
            path="/AdminDashboard"
            element={
              <PrivateRoute>
                <RoleBasedRoute role="admin">
                  <AdminDashboard />
                </RoleBasedRoute>
              </PrivateRoute>
            }
          />

          <Route
            path="/bursar"
            element={
              <PrivateRoute>
                <RoleBasedRoute role="bursar">
                  <BursarDashboard />
                </RoleBasedRoute>
              </PrivateRoute>
            }
          />

          <Route
            path="/director"
            element={
              <PrivateRoute>
                <RoleBasedRoute role="director">
                  <DirectorDashboard />
                </RoleBasedRoute>
              </PrivateRoute>
            }
          />

          <Route
            path="/teacher"
            element={
              <PrivateRoute>
                <RoleBasedRoute role="teacher">
                  <TeacherDashboard />
                </RoleBasedRoute>
              </PrivateRoute>
            }
          />

          <Route
            path="/student"
            element={
              <PrivateRoute>
                <RoleBasedRoute role="student">
                  <StudentDashboard />
                </RoleBasedRoute>
              </PrivateRoute>
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

