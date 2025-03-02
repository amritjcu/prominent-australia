# Prominent Australia website

## Technologies

-   [Laravel 11](https://laravel.com/docs/)
-   [InertiaJS](https://inertiajs.com/)

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   PHP >= 8.2
-   Composer (for package management)
-   Node.js & npm (for frontend dependencies)
-   MySQL or another [compatible database](https://laravel.com/docs/11.x/database#configuration)

## Installation

1. Clone the repository: `git clone [https://github.com/mahmudz/laravel-shadcn-app-panel.git](https://github.com/amritjcu/prominent-australia.git)`
2. Navigate into the project directory: `cd [project directory]`
3. Install PHP dependencies: `composer install`
4. Copy `.env.example` to `.env` and configure your environment variables, including database settings and application key.
5. Generate application key: `php artisan key:generate`
6. Run database migrations: `php artisan migrate`
7. Optionally, seed the database: `php artisan db:seed`
8. Install frontend dependencies: `npm install && npm run dev` (for development) or `npm install && npm run build` (for production)

## Usage

To start the development server, run:

```
php artisan serve
```

Access the application in your browser at `http://localhost:8000` by default.
