# Buzzgram - Modern Full-Stack Social Media Platform

**Buzzgram** is a fully functional, full-stack social media application built with **Next.js 14**, **MongoDB**, **UploadThing**, and **NextAuth.js**. It allows users to register, log in, create posts with images, like posts, and manage their profiles with a real-time and responsive UI.

🔗 **Live Site:** [https://social-app-eight-ebon.vercel.app](https://social-app-eight-ebon.vercel.app)

---

## 📸 Screenshots

![Dashboard]![image](https://github.com/user-attachments/assets/f5d828f6-5467-42ed-815f-7662757949c9)

![Login Page]![image](https://github.com/user-attachments/assets/3269405f-e3bb-4019-a1ef-c0d7c7b4b8da)

![Global Feed]![image](https://github.com/user-attachments/assets/b2f10cad-9693-46f4-971f-59acffa99293)

![Profile]![image](https://github.com/user-attachments/assets/fe45b784-7a27-4ba7-9af7-44f949a9e013)

![Create Post]![image](https://github.com/user-attachments/assets/be30df90-8693-4200-94d4-03efe33953f1)

---

## 🚀 Features

**Authentication**
- Sign up and log in
- Secure authentication with NextAuth.js

**Post Functionality**
- Create posts with optional image URLs or uploads
- Image optimization using `next/image` and UploadThing
- Like posts instantly 
- Posts show profile image and timestamp

**Profile Management**
- Update name, bio, and profile picture
- Avatar fallback using Dicebear

- Instant changes reflected in global feed

**Feed**
- View all posts by all users
- Responsive, scrollable card layout
- Like system integrated with database

**File Upload**
- UploadThing integration for uploading profile pictures and post images
- Supports CDN links and previews

**Tech & UI**
- Fully responsive layout
- Recharts integration ready (for future analytics)

**Deployment**
- Hosted on Vercel with MongoDB Atlas as cloud database

---

## 🛠️ Tech Stack

| Category           | Tools/Tech                                      |
|-------------------|--------------------------------------------------|
| Frontend          | Next.js (App Router), TypeScript, Tailwind CSS |
| Backend/API       | Route Handlers in `app/api`, MongoDB + Mongoose |
| Auth              | NextAuth.js             |
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
   
2. **Install dependencies**
   ```bash
   npm install
   
3. **Set up environment variables**

Create a .env.local file and add:
.env
MONGODB_URI=your_mongodb_uri  
NEXTAUTH_SECRET=your_auth_secret  
NEXTAUTH_URL=http://localhost:3000  
UPLOADTHING_SECRET=your_uploadthing_secret  
UPLOADTHING_APP_ID=your_uploadthing_app_id  
UPLOADTHING_TOKEN=your_uploadthing_token  

4. **Run the app**
   ```bash
   npm run dev
   Visit http://localhost:3000

🧪 **Known Issues or Limitations**
- Only supports image URLs from allowed domains (e.g. utfs.io, api.dicebear.com, Unsplash, etc.)
- file.url was deprecated in UploadThing — now using file.ufsUrl
- No post delete/edit functionality (can be added)

👩‍💻 **Author**
Sunidhi Garg  
GitHub: @Sunidhi23garg
