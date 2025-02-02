# 🛒 Ecommerce-App

Ecommerce-App is a full-stack e-commerce application that provides a seamless shopping experience for users. It includes an **admin panel**, a **backend API**, and a **frontend UI**.

## 🚀 Features
- ✅ User authentication & authorization (Sign up, Login)
- ✅ Product catalog with categories & filters
- ✅ Shopping cart & order management
- ✅ Admin dashboard for managing products & orders
- ✅ Secure payment gateway integration
- ✅ Responsive UI for a smooth experience

## 📂 Project Structure
```
Ecommerce-App/
│── admin/           # Admin panel (React/Next.js or similar)
│── backend/         # Backend server (Node.js, Express, MongoDB)
│── frontend/        # User-facing e-commerce UI (React.js)
│── README.md        # Documentation
│── package.json     # Dependencies & scripts
│── .env             # Environment variables (API keys, DB credentials)
```

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Rx-Metallica/Ecommerce-App.git
cd Ecommerce-App
```

### 2️⃣ Install Dependencies

#### Backend
```sh
cd backend
npm install
```

#### Frontend
```sh
cd frontend
npm install
```

#### Admin Panel
```sh
cd admin
npm install
```

### 3️⃣ Setup Environment Variables
- Create a `.env` file in each directory (`backend`, `frontend`, `admin`)
- Add necessary configurations (e.g., database URL, API keys)

### 4️⃣ Start the Application

#### Backend Server
```sh
cd backend
npm run dev
```

#### Frontend Client
```sh
cd frontend
npm start
```

#### Admin Panel
```sh
cd admin
npm start
```

## 🎯 Usage
1. Open the frontend at **`http://localhost:3000`**.
2. Register/Login as a user.
3. Browse products, add them to the cart, and place an order.
4. Admins can manage products & orders from the admin panel.

## 🔗 API Endpoints (Backend)
| Endpoint              | Method | Description |
|----------------------|--------|-------------|
| `/api/auth/signup`  | POST   | User signup |
| `/api/auth/login`   | POST   | User login  |
| `/api/products`     | GET    | Fetch all products |
| `/api/products/:id` | GET    | Fetch product by ID |
| `/api/cart`         | POST   | Add items to cart |
| `/api/orders`       | POST   | Place an order |

## ⚙️ Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment**: Stripe and Razorpay
- **Deployment**: Vercel

💡 **Happy Coding!** 🎉
