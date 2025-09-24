// Core User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Client Management Types
export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  notes?: string;
  status: 'active' | 'inactive' | 'prospective';
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

// Project Management Types
export interface Project {
  id: string;
  name: string;
  description?: string;
  clientId: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  startDate?: Date;
  endDate?: Date;
  budget?: number;
  hourlyRate?: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

// Task Management Types
export interface Task {
  id: string;
  title: string;
  description?: string;
  projectId: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  estimatedHours?: number;
  actualHours?: number;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

// Invoice Types
export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  projectId?: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  issueDate: Date;
  dueDate: Date;
  subtotal: number;
  tax: number;
  total: number;
  currency: string;
  notes?: string;
  items: InvoiceItem[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

// Dashboard Types
export interface DashboardStats {
  totalClients: number;
  activeProjects: number;
  pendingInvoices: number;
  totalRevenue: number;
  recentActivities: Activity[];
}

export interface Activity {
  id: string;
  type: 'client_added' | 'project_created' | 'task_completed' | 'invoice_sent' | 'invoice_paid';
  title: string;
  description: string;
  entityId: string;
  createdAt: Date;
  userId: string;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ClientForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  notes?: string;
  status: 'active' | 'inactive' | 'prospective';
}

export interface ProjectForm {
  name: string;
  description?: string;
  clientId: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  startDate?: string;
  endDate?: string;
  budget?: number;
  hourlyRate?: number;
}

export interface TaskForm {
  title: string;
  description?: string;
  projectId: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  estimatedHours?: number;
  assignedTo?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon: string;
  current?: boolean;
}