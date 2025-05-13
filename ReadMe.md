# Hibat East - Technical Documentation

## Project Overview

**Hibat East** is a modern, bilingual website for a luxury chandelier and lighting company, offering installation and maintenance services for homes, hotels, and palaces. The project aims to reflect the brand’s elegance with a premium user experience and scalable code architecture.

##

## Technical Information

- **Version**: 1.0.0 (BETA) 
- **Framework**: React + TypeScript  
- **Build Tool**: Vite 5  
- **Styling**: Tailwind CSS  
- **Languages Supported**: Arabic & English  
- **Responsive Design**: Fully responsive  
- **Browser Support**: Chrome, Firefox, Edge, Safari

## Core Technologies

- React v.18
- TypeScript v.5
- React Router 
- React Query 
- Tailwind CSS 3
- shadcn/ui (lib Material ui)
- Vite5

## Key Features

### 🔄 Multi language Interface (AR , EN)

-Full support for both Arabic (RTL) and English (LTR)

-Custom fonts for better reading:
-Arabic → Tajawal, Cairo
-English → Playfair Display, Roboto

-Easy language switch without page reload


### ✨ Modern UI Design

- Luxurious color (gold, charcoal, cream)
- Smooth transition effects
- Lazy loading for images (faster and lighter)
- Responsive on all screen sizes

### Patterns code 

- single of  components,pages , Patterns Design code, pages, and styles
- State managed via Context API
- Integrated routing via React Router

### 📈 SEO Optimization
- Custom meta tags per page
- Semantic HTML structure
- Fast page loads
- Ready for Google Analytics integration
-Unique meta tags for each page (Arabic & English)

###  User Experience UX

- Sticky navbar and mobile-friendly UI
- Persistent WhatsApp contact button
- Back-to-top functionality
- Notification system (Toaster & Sonner)
- Tooltips for better UX


## Project Structure
## هيكل المشروع
```
hibat-east/
├── public/                   # الملفات الثابتة (الصور، الأيقونات)
├── src/                      # شيفرة المصدر
│   ├── components/           # مكونات React القابلة لإعادة الاستخدام
│   │   ├── ui/               # مكونات واجهة المستخدم الأساسية
│   │   ├── Navbar.tsx        # شريط التنقل
│   │   ├── Footer.tsx        # تذييل الصفحة
│   │   ├── WhatsAppButton.tsx # زر واتساب
│   │   └── BackToTopButton.tsx # زر العودة للأعلى
│   ├── context/              # سياقات React
│   │   └── LanguageContext.tsx # سياق إدارة اللغات
│   ├── pages/                # صفحات الموقع
│   │   ├── Index.tsx         # الصفحة الرئيسية
│   │   ├── About.tsx         # صفحة من نحن
│   │   ├── Services.tsx      # صفحة الخدمات
│   │   ├── Gallery.tsx       # معرض الأعمال
│   │   ├── Testimonials.tsx  # آراء العملاء
│   │   ├── Contact.tsx       # صفحة الاتصال
│   │   └── NotFound.tsx      # صفحة 404
│   ├── App.tsx               # المكون الرئيسي للتطبيق
│   ├── main.tsx              # نقطة الدخول للتطبيق
│   └── index.css             # الأنماط العامة والتخصيصات
├── index.html                # ملف HTML الرئيسي
├── vite.config.ts            # إعدادات Vite
├── tailwind.config.ts        # إعدادات Tailwind CSS
├── tsconfig.json             # إعدادات TypeScript
└── package.json              # تبعيات المشروع
```


## Development Setup for devloper
## مهم!!  لبدء تطوير او التعديل علي المشروع المشروع
bash

```

1- git clone https://github.com/ahmedpro98/Hebat-East-Web-App.git

cd hibat-east or near name

2- npm install

3- npm run dev

4- take url  port IS : 'http://192.168.1.11:1998/'

5- FOR deploy npm run built than deploy

```


### color
### تعديل الألوان والسمات
يمكن تعديل نظام الألوان من خلال ملف `tailwind.config.ts`:
```typescript
colors: {
  gold: {
    DEFAULT: '#D4AF37',
    light: '#F5EFD8',
    dark: '#A38728'
  },
  charcoal: {
    DEFAULT: '#222222',
    light: '#444444',
    dark: '#111111'
  },
  cream: '#F5F5F0'
}
```
### add page
### إضافة صفحات جديدة
لإضافة صفحة جديدة:
1. إنشاء ملف جديد في مجلد `src/pages/`
2. إضافة مسار الصفحة في `App.tsx`:
```tsx
<Routes>
  {/* الصفحات + for pages now */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

