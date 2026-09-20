<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Website Routes
Route::get('/', function () {
    return Inertia::render('Public/Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('Public/About');
})->name('about');

Route::get('/services', function () {
    return Inertia::render('Public/Services');
})->name('services');

Route::get('/portfolio', function () {
    return Inertia::render('Public/Portfolio');
})->name('portfolio');

Route::get('/articles', function () {
    return Inertia::render('Public/Articles/Index');
})->name('articles.index');

Route::get('/articles/{slug}', function ($slug) {
    return Inertia::render('Public/Articles/Show', [
        'slug' => $slug,
    ]);
})->name('articles.show');

Route::get('/contact', function () {
    return Inertia::render('Public/Contact');
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Admin CMS Management Routes
Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/articles', function () {
        return Inertia::render('Admin/Articles/Index');
    })->name('articles.index');

    Route::get('/articles/create', function () {
        return Inertia::render('Admin/Articles/Form');
    })->name('articles.create');

    Route::get('/articles/{id}/edit', function ($id) {
        return Inertia::render('Admin/Articles/Form', ['article' => ['id' => $id]]);
    })->name('articles.edit');

    Route::get('/categories', function () {
        return Inertia::render('Admin/Categories/Index');
    })->name('categories.index');

    Route::get('/tags', function () {
        return Inertia::render('Admin/Tags/Index');
    })->name('tags.index');

    Route::get('/media', function () {
        return Inertia::render('Admin/Media/Index');
    })->name('media.index');

    Route::get('/inquiries', function () {
        return Inertia::render('Admin/Inquiries/Index');
    })->name('inquiries.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
