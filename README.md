# CMS-RYVA

Content Management System built with Laravel, Inertia.js, and React.

## Getting Started

### Prerequisites
- PHP >= 8.2
- Composer
- Node.js & NPM

### Setup & Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:indraagstin025/CMS-RYVA.git
   cd CMS-RYVA
   ```
2. Install PHP & Node dependencies:
   ```bash
   composer install
   npm install
   ```
3. Setup environment file:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
4. Run migrations:
   ```bash
   php artisan migrate
   ```
5. Build frontend assets:
   ```bash
   npm run build
   ```

### Development Server
```bash
# Terminal 1: Backend
php artisan serve

# Terminal 2: Frontend HMR
npm run dev
```
