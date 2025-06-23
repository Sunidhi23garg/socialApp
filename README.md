# 🌐 Buzzgram - Modern Full-Stack Social Media Platform

**Buzzgram** is a fully functional, full-stack social media application built with **Next.js 14**, **MongoDB**, **UploadThing**, and **NextAuth.js**. It allows users to register, log in, create posts with images, like posts, and manage their profiles with a real-time and responsive UI.

🔗 **Live Site:** [https://social-app-eight-ebon.vercel.app](https://social-app-eight-ebon.vercel.app)

---

## 📸 Screenshots

> ![Dashboard]![image](https://github.com/user-attachments/assets/f5d828f6-5467-42ed-815f-7662757949c9)

> ![Login]![image](https://github.com/user-attachments/assets/c30e1991-87e3-423e-ba26-7b0b7321ecf7)

> ![Global Feed]![image](https://github.com/user-attachments/assets/1b516171-e87d-4684-84ec-c69710843825)

> ![Profile]![image](https://github.com/user-attachments/assets/2ec30cb2-87eb-41b2-be47-27b8a8182f51)

> ![Create Post]![image](https://github.com/user-attachments/assets/13aa7c69-0510-424f-9c59-ced681f9ba39)


---

## 🚀 Features

✅ **Authentication**
- Sign up and log in
- Secure authentication with NextAuth.js

✅ **Post Functionality**
- Create posts with optional image URLs or uploads
- Image optimization using `next/image` and UploadThing
- Like posts instantly 
- Posts show profile image and timestamp

✅ **Profile Management**
- Update name, bio, and profile picture
- Avatar fallback using Dicebear
 ![image](https://github.com/user-attachments/assets/ff740562-874d-4f17-a8f3-59d5e0d9dafb)

- Instant changes reflected in global feed
  ![image](https://github.com/user-attachments/assets/0406198a-6d96-420f-97f3-6fb000da1409)


✅ **Feed**
- View all posts by all users
- Responsive, scrollable card layout
- Like system integrated with database

✅ **File Upload**
- UploadThing integration for uploading profile pictures and post images
- Supports CDN links and previews

✅ **Tech & UI**
- Fully responsive layout
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
