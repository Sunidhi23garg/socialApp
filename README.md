# 🌐 Buzzgram - Modern Full-Stack Social Media Platform

**Buzzgram** is a fully functional, full-stack social media application built with **Next.js 14**, **MongoDB**, **UploadThing**, and **NextAuth.js**. It allows users to register, log in, create posts with images, like posts, and manage their profiles with a real-time and responsive UI.

🔗 **Live Site:** [https://social-app-eight-ebon.vercel.app](https://social-app-eight-ebon.vercel.app)

---

## 📸 Screenshots

> ![Dashboard] [image](https://github.com/user-attachments/assets/f5d828f6-5467-42ed-815f-7662757949c9)

> ![Login](https://via.placeholder.com/800x400?text=Login+Page)
> ![Global Feed](https://via.placeholder.com/800x400?text=Post+Feed)
> ![Profile](https://via.placeholder.com/800x400?text=Profile+Management)
> ![Create Post](https://via.placeholder.com/800x400?text=Create+Post+Page)

---

## 🚀 Features

✅ **Authentication**
- Sign up and log in with Google or Email/Password
- Secure authentication with NextAuth.js

✅ **Post Functionality**
- Create posts with optional image URLs or uploads
- Image optimization using `next/image` and UploadThing
- Like posts instantly (like counter updates)
- Posts show profile image and timestamp

✅ **Profile Management**
- Update name, bio, and profile picture
- Avatar fallback using Dicebear
- Instant changes reflected in global feed

✅ **Feed**
- View all posts by all users
- Responsive, scrollable card layout
- Like system integrated with database

✅ **File Upload**
- UploadThing integration for uploading profile pictures and post images
- Supports CDN links and previews

✅ **Tech & UI**
- Fully responsive layout
- Tailwind CSS dark mode support
- Recharts integration ready (for future analytics)

✅ **Deployment**
- Hosted on Vercel with MongoDB Atlas as cloud database

---

## 🛠️ Tech Stack

| Category           | Tools/Tech                                      |
|-------------------|--------------------------------------------------|
| Frontend          | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| Backend/API       | Route Handlers in `app/api`, MongoDB + Mongoose |
| Auth              | NextAuth.js (Google, Credentials)               |
| File Upload       | UploadThing                                     |
| Database          | MongoDB Atlas                                   |
| Deployment        | Vercel                                          |
| Avatar Generator  | Dicebear                                        |

---

## 🧰 Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sunidhi23garg/socialApp.git
   cd socialApp
