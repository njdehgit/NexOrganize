'use client';

import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import MainLayout from '../../components/layout/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const TasksPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to auth if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/auth';
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
            <p className="mt-1 text-sm text-gray-600">
              Organize and track your tasks across all projects.
            </p>
          </div>
          <Button>Add New Task</Button>
        </div>

        {/* Coming Soon Card */}
        <div className="text-center py-12">
          <Card className="max-w-md mx-auto">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Task Management</h3>
              <p className="text-gray-600 mb-4">
                Full task management functionality is coming soon! You&apos;ll be able to create, assign, and track tasks across all your projects.
              </p>
              <div className="text-sm text-gray-500">
                <p>Features planned:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Create and assign tasks</li>
                  <li>• Set due dates and priorities</li>
                  <li>• Track time spent</li>
                  <li>• Kanban board view</li>
                  <li>• Task dependencies</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default TasksPage;