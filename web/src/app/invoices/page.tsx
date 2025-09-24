'use client';

import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import MainLayout from '../../components/layout/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const InvoicesPage: React.FC = () => {
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
            <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
            <p className="mt-1 text-sm text-gray-600">
              Create, send, and track your invoices and payments.
            </p>
          </div>
          <Button>Create Invoice</Button>
        </div>

        {/* Coming Soon Card */}
        <div className="text-center py-12">
          <Card className="max-w-md mx-auto">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Invoice Management</h3>
              <p className="text-gray-600 mb-4">
                Professional invoicing features are coming soon! You&apos;ll be able to create beautiful invoices and track payments effortlessly.
              </p>
              <div className="text-sm text-gray-500">
                <p>Features planned:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Professional invoice templates</li>
                  <li>• Automatic invoice numbering</li>
                  <li>• Payment tracking</li>
                  <li>• Recurring invoices</li>
                  <li>• PDF generation and email sending</li>
                  <li>• Payment reminders</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default InvoicesPage;