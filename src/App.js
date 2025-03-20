import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import LoginMerged from './LoginMerged'; // Updated import
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import Unauthorized from './Unauthorized';
import { Roles } from './roles';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 p-4">
          <Routes>
            <Route path="/login" element={<LoginMerged />} /> Updated route
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={[Roles.Admin]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute allowedRoles={[Roles.User]}>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
