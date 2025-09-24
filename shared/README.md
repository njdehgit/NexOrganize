# NexOrganize Shared

Shared types, utilities, and business logic for the NexOrganize monorepo.

## Usage

Import shared code into both the web and mobile apps, as well as the API, to avoid duplication.

```typescript
import { Client, Project, Task, Invoice, formatCurrency, formatDate } from 'nexorganize-shared';
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the shared library:
   ```bash
   npm run build
   ```

3. Watch for changes during development:
   ```bash
   npm run dev
   ```

## What's included

- **Types**: User, Client, Project, Task, Invoice
- **Enums**: ProjectStatus, TaskStatus, TaskPriority, InvoiceStatus
- **API Types**: ApiResponse, PaginatedResponse
- **Utilities**: formatCurrency, formatDate, generateId
