# CMS & Company Website Project Plan

## 1. Project Overview

Project ini merupakan pembangunan **Content Management System (CMS)** yang digunakan sebagai fondasi website perusahaan untuk mengelola dan menerbitkan konten secara dinamis.

Tahap awal difokuskan pada tiga hal utama:

1. Pembangunan CMS untuk pengelolaan konten.
2. Deployment website dan CMS ke hosting.
3. Implementasi dasar Technical SEO agar website dapat diindeks dan ditemukan oleh search engine.

CMS akan dikembangkan dengan pendekatan modular sehingga fitur tambahan dapat ditambahkan pada tahap berikutnya tanpa perlu melakukan perubahan besar pada arsitektur awal.

---

# 2. Project Goals

Tujuan tahap awal:

* Memiliki CMS yang dapat digunakan untuk mengelola konten.
* Memiliki website publik yang mengambil konten dari CMS.
* Admin dapat membuat, mengedit, menghapus, dan menerbitkan artikel.
* Konten memiliki kategori dan tag.
* CMS dapat mengelola gambar/media.
* Website memiliki struktur URL yang baik.
* Website memiliki metadata SEO.
* Website memiliki sitemap dan robots.txt.
* Website dapat diakses melalui domain dan HTTPS.
* CMS dan website siap digunakan untuk mulai membangun konten perusahaan.

---

# 3. Scope Tahap Pertama

Tahap pertama hanya mencakup:

```text
CMS
  ↓
Content Management
  ↓
Public Website
  ↓
Deployment
  ↓
Technical SEO
```

Fitur di luar kebutuhan tersebut ditunda ke tahap berikutnya.

---

# 4. Feature List

## 4.1 Authentication

### Required

* [ ] Login
* [ ] Logout
* [ ] Session/token authentication
* [ ] Protected admin routes
* [ ] Password hashing
* [ ] Basic authentication error handling

### Future

* [ ] Forgot password
* [ ] Reset password
* [ ] Email verification
* [ ] Two-factor authentication
* [ ] Multiple admin accounts

---

## 4.2 Dashboard

Dashboard digunakan sebagai halaman utama setelah admin login.

### Required

* [ ] Total articles
* [ ] Published articles
* [ ] Draft articles
* [ ] Recent articles
* [ ] Quick action untuk membuat artikel baru

### Future

* [ ] Content analytics
* [ ] Page views
* [ ] Popular articles
* [ ] Traffic overview
* [ ] Search performance

---

# 5. Content Management

## 5.1 Article Management

Fitur utama CMS.

### Required

* [ ] Create article
* [ ] Edit article
* [ ] Delete article
* [ ] Publish article
* [ ] Unpublish article
* [ ] Save as draft
* [ ] Preview article
* [ ] Article slug
* [ ] Published date
* [ ] Featured image
* [ ] Article excerpt
* [ ] Author
* [ ] Category
* [ ] Tags

### Article Structure

```text
Article
├── Title
├── Slug
├── Excerpt
├── Content
├── Featured Image
├── Author
├── Category
├── Tags
├── Status
├── Published At
├── Created At
└── Updated At
```

---

# 6. Rich Text Editor

CMS harus menyediakan editor konten yang nyaman untuk membuat artikel.

### Required

* [ ] Heading
* [ ] Paragraph
* [ ] Bold
* [ ] Italic
* [ ] Strikethrough
* [ ] Ordered list
* [ ] Unordered list
* [ ] Blockquote
* [ ] Link
* [ ] Image
* [ ] Table
* [ ] Code block
* [ ] Inline code

### Future

* [ ] Embedded video
* [ ] Embedded external content
* [ ] Custom blocks
* [ ] Callout blocks
* [ ] Interactive content blocks

---

# 7. Category Management

Category digunakan untuk mengelompokkan artikel berdasarkan topik utama.

### Required

* [ ] Create category
* [ ] Edit category
* [ ] Delete category
* [ ] Category slug
* [ ] Category description

### Initial Categories

Contoh:

```text
Technology
Business
AI
Development
Insight
```

Kategori dapat diubah sesuai kebutuhan perusahaan.

---

# 8. Tag Management

Tag digunakan untuk memberikan konteks tambahan pada artikel.

### Required

* [ ] Create tag
* [ ] Edit tag
* [ ] Delete tag
* [ ] Tag slug
* [ ] Assign tag to article
* [ ] Remove tag from article

### Example

```text
Go
React
AI
WebSocket
Cloud
Data
Business
Software Engineering
```

---

# 9. Media Library

Media Library digunakan untuk mengelola file media yang digunakan oleh website.

### Required

* [ ] Upload image
* [ ] Delete image
* [ ] Image preview
* [ ] Select image
* [ ] Image URL
* [ ] Alt text
* [ ] Basic file validation
* [ ] File size validation

### Initial Supported Format

```text
JPG
JPEG
PNG
WEBP
SVG
```

Format dapat diperluas pada tahap berikutnya.

---

# 10. Public Website

Website publik menggunakan data yang dikelola melalui CMS.

## Required Pages

```text
/
├── Home
├── Articles
│   └── /articles/[slug]
├── Categories
│   └── /categories/[slug]
├── About
├── Services
├── Portfolio
└── Contact
```

### Required

* [ ] Homepage
* [ ] Article listing
* [ ] Article detail
* [ ] Category page
* [ ] About page
* [ ] Services page
* [ ] Portfolio page
* [ ] Contact page
* [ ] Responsive design
* [ ] 404 page

---

# 11. SEO

SEO menjadi salah satu fokus utama setelah CMS selesai.

## 11.1 Article SEO

Setiap artikel memiliki:

* [ ] SEO title
* [ ] Meta description
* [ ] Slug
* [ ] Canonical URL
* [ ] Open Graph title
* [ ] Open Graph description
* [ ] Open Graph image
* [ ] Article structured data

---

## 11.2 Technical SEO

### Required

* [ ] Dynamic `<title>`
* [ ] Meta description
* [ ] Canonical URL
* [ ] Open Graph metadata
* [ ] Twitter/X card metadata
* [ ] `sitemap.xml`
* [ ] `robots.txt`
* [ ] Semantic HTML
* [ ] Responsive/mobile support
* [ ] Clean URL structure
* [ ] 404 page
* [ ] Proper heading hierarchy
* [ ] Image alt text

---

# 12. Website Performance

Tahap pertama juga perlu memperhatikan performa dasar.

### Required

* [ ] Image optimization
* [ ] Lazy loading images
* [ ] Minified production assets
* [ ] HTTP caching
* [ ] Efficient database queries
* [ ] Pagination for article listing
* [ ] Basic API error handling

### Future

* [ ] Redis caching
* [ ] CDN optimization
* [ ] Full-text search
* [ ] Advanced performance monitoring

---

# 13. Deployment

Setelah CMS dan website selesai, sistem akan dideploy ke production.

## Required

* [ ] Production database
* [ ] Backend deployment
* [ ] Frontend deployment
* [ ] Environment variables
* [ ] Domain configuration
* [ ] HTTPS
* [ ] Database migration
* [ ] Storage configuration
* [ ] Production error handling

### Production Architecture

```text
                   Internet
                       │
                     Domain
                       │
              ┌────────┴────────┐
              │                 │
        Public Website       CMS/Admin
              │                 │
              └────────┬────────┘
                       │
                    Backend
                       │
              ┌────────┴────────┐
              │                 │
           Database          Storage
```

---

# 14. Security

Security dasar wajib diterapkan sebelum production.

### Required

* [ ] Password hashing
* [ ] Authentication middleware
* [ ] Authorization for admin routes
* [ ] Input validation
* [ ] File upload validation
* [ ] File size limits
* [ ] CORS configuration
* [ ] Rate limiting for authentication
* [ ] Secure environment variables
* [ ] HTTPS
* [ ] Protection against basic SQL injection
* [ ] Protection against XSS
* [ ] Secure cookie configuration where applicable

---

# 15. Database Initial Schema

Struktur awal database dapat terdiri dari:

```text
users
├── id
├── name
├── email
├── password_hash
├── role
├── created_at
└── updated_at

articles
├── id
├── author_id
├── category_id
├── title
├── slug
├── excerpt
├── content
├── featured_image_id
├── status
├── published_at
├── created_at
└── updated_at

categories
├── id
├── name
├── slug
├── description
├── created_at
└── updated_at

tags
├── id
├── name
├── slug
├── created_at
└── updated_at

article_tags
├── article_id
└── tag_id

media
├── id
├── filename
├── url
├── mime_type
├── size
├── alt_text
├── created_at
└── updated_at
```

Struktur database dapat berubah selama proses development sesuai kebutuhan aktual.

---

# 16. Development Phases

## Phase 1 - Project Foundation

* [ ] Repository setup
* [ ] Backend setup
* [ ] Frontend setup
* [ ] Database setup
* [ ] Environment configuration
* [ ] Basic project architecture

## Phase 2 - Authentication

* [ ] Login
* [ ] Logout
* [ ] Authentication middleware
* [ ] Protected admin pages

## Phase 3 - CMS Core

* [ ] Dashboard
* [ ] Article CRUD
* [ ] Draft/publish
* [ ] Category management
* [ ] Tag management
* [ ] Rich text editor

## Phase 4 - Media

* [ ] Storage configuration
* [ ] Media upload
* [ ] Media library
* [ ] Image selection
* [ ] Alt text

## Phase 5 - Public Website

* [ ] Homepage
* [ ] Article listing
* [ ] Article detail
* [ ] Category pages
* [ ] About
* [ ] Services
* [ ] Portfolio
* [ ] Contact
* [ ] Responsive UI
* [ ] 404 page

## Phase 6 - SEO

* [ ] SEO metadata
* [ ] Canonical URL
* [ ] Open Graph
* [ ] Sitemap
* [ ] Robots.txt
* [ ] Structured data
* [ ] Image alt text
* [ ] Search engine verification

## Phase 7 - Production

* [ ] Production database
* [ ] Backend deployment
* [ ] Frontend deployment
* [ ] Domain
* [ ] HTTPS
* [ ] Environment variables
* [ ] Backup strategy
* [ ] Production testing

---

# 17. Phase 1 Completion Criteria

Tahap pertama dianggap selesai apabila:

```text
[✓] Admin dapat login
[✓] Admin dapat membuat artikel
[✓] Admin dapat mengedit artikel
[✓] Admin dapat menghapus artikel
[✓] Admin dapat menyimpan draft
[✓] Admin dapat publish artikel
[✓] Admin dapat mengelola category
[✓] Admin dapat mengelola tag
[✓] Admin dapat upload gambar
[✓] Website dapat menampilkan artikel
[✓] Website memiliki halaman company profile
[✓] Website sudah production
[✓] Domain sudah aktif
[✓] HTTPS aktif
[✓] Sitemap tersedia
[✓] Robots.txt tersedia
[✓] Basic SEO metadata tersedia
```

---

# 18. Features Deliberately Deferred

Fitur berikut **tidak termasuk dalam tahap pertama**:

```text
- Multi-user CMS
- Advanced RBAC
- Content approval workflow
- Article versioning
- AI content generation
- AI SEO assistant
- Internal analytics
- Visitor analytics
- Newsletter
- Comments
- Search engine internal
- Recommendation system
- Subscription
- Payment
- Multi-tenant CMS
- Mobile application
```

Fitur tersebut hanya akan dipertimbangkan setelah kebutuhan aktual muncul.

---

# 19. Future Direction

Setelah CMS dan website stabil, project dapat berkembang menjadi platform yang lebih besar.

```text
CMS
 │
 ├── Content Platform
 │
 ├── Company Website
 │
 ├── Digital Products
 │
 ├── Business Intelligence
 │
 └── AI/Data Products
```

Pengembangan tahap berikutnya dapat mencakup:

* Advanced CMS
* Multi-user & RBAC
* Content versioning
* Analytics
* Internal search
* AI-assisted content
* AI-assisted SEO
* Digital product management
* Customer portal
* Business intelligence
* Trend intelligence platform

```
```
