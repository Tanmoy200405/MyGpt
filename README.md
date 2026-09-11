# 🚀 QuickGPT - AI Chat Application

A full-stack AI chat application built with React and Node.js, powered by OpenAI API. QuickGPT allows users to chat with an advanced AI model, manage their credits, and explore community features.

**🌐 Live Demo:** [https://mygpt-ten-roan.vercel.app/](https://mygpt-ten-roan.vercel.app/)

---

## ✨ Features

- 🤖 **AI-Powered Chat** - Real-time conversations with OpenAI GPT
- 💳 **Credit System** - Pay-per-use credit management with Stripe integration
- 🔐 **User Authentication** - Secure JWT-based authentication
- 📝 **Message History** - View and manage chat history
- 🎨 **Modern UI** - Beautiful responsive design with Tailwind CSS
- 📱 **Fully Responsive** - Works seamlessly on desktop and mobile
- 🌙 **Dark Mode Support** - Theme toggle for better UX
- 👥 **Community Page** - Connect with other users
- 🏆 **Credits Page** - Transparent credit pricing

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **React Markdown** - Markdown rendering
- **Prism.js** - Code syntax highlighting
- **Moment.js** - Date/time utilities

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **OpenAI API** - AI chat model
- **JWT (jsonwebtoken)** - Authentication
- **Bcryptjs** - Password hashing
- **Stripe** - Payment processing
- **ImageKit** - Image optimization
- **Svix** - Webhook management
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Tools & Services
- **Vercel** - Frontend deployment
- **MongoDB Atlas** - Cloud database
- **Stripe** - Payment gateway
- **OpenAI** - AI model API
- **ImageKit** - Image CDN
- **Svix** - Webhook provider

---

## 📁 Project Structure

```
QuickGPT/
├── client/                          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBox.jsx          # Main chat interface
│   │   │   ├── Message.jsx          # Individual message component
│   │   │   └── Sidebar.jsx          # Sidebar navigation
│   │   ├── pages/
│   │   │   ├── Login.jsx            # Authentication page
│   │   │   ├── Community.jsx        # Community features
│   │   │   ├── Credits.jsx          # Credit pricing page
│   │   │   └── Loading.jsx          # Loading state component
│   │   ├── context/
│   │   │   └── AppContext.jsx       # Global state management
│   │   ├── assets/
│   │   │   ├── images/              # Image assets
│   │   │   ├── icons/               # SVG icons
│   │   │   └── styles/              # Prism CSS, custom styles
│   │   ├── App.jsx                  # Root component
│   │   ├── main.jsx                 # Application entry point
│   │   └── index.css                # Global styles
│   ├── index.html                   # HTML template
│   ├── vite.config.js               # Vite configuration
│   ├── eslint.config.js             # ESLint configuration
│   ├── vercel.json                  # Vercel deployment config
│   └── package.json                 # Frontend dependencies
│
├── server/                          # Express backend application
│   ├── configs/
│   │   ├── db.js                    # MongoDB connection
│   │   ├── openai.js                # OpenAI API configuration
│   │   └── imageKit.js              # ImageKit configuration
│   ├── controllers/
│   │   ├── chatController.js        # Chat logic
│   │   ├── userController.js        # User management
│   │   ├── creditController.js      # Credit system
│   │   ├── messageController.js     # Message management
│   │   └── webhooks.js              # Stripe webhook handlers
│   ├── models/
│   │   ├── User.js                  # User schema
│   │   ├── Chat.js                  # Chat history schema
│   │   └── Transaction.js           # Transaction/Credit schema
│   ├── routes/
│   │   ├── userRoutes.js            # User endpoints
│   │   ├── chatRoutes.js            # Chat endpoints
│   │   ├── creditRoutes.js          # Credit endpoints
│   │   └── messageRoutes.js         # Message endpoints
│   ├── middlewares/
│   │   └── auth.js                  # JWT authentication middleware
│   ├── server.js                    # Main server file
│   ├── vercel.json                  # Vercel deployment config
│   └── package.json                 # Backend dependencies
│
└── README.md                        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account (for database)
- **OpenAI API** key
- **Stripe** account (for payments)
- **ImageKit** account (for image optimization)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Tanmoy200405/MyGpt.git
cd QuickGPT
```

#### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
WEBHOOK_SECRET=your_webhook_secret
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run server
```

The server will run on `http://localhost:5000`

#### 3. Setup Frontend

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_SERVER_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

---

## 📚 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register new user
- `POST /login` - Login user
- `GET /profile` - Get user profile
- `PUT /profile` - Update user profile

### Chat Routes (`/api/chat`)
- `POST /new` - Create new chat
- `GET /list` - Get user's chat history
- `GET /:chatId` - Get specific chat
- `DELETE /:chatId` - Delete chat

### Message Routes (`/api/message`)
- `POST /send` - Send message
- `GET /:chatId` - Get messages in chat
- `DELETE /:messageId` - Delete message

### Credit Routes (`/api/credit`)
- `GET /balance` - Get user credit balance
- `POST /purchase` - Purchase credits
- `GET /transactions` - Get credit transactions

---

## 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** for authentication:

1. User registers/logs in with email and password
2. Backend validates credentials and returns JWT token
3. Client stores token in localStorage
4. All subsequent requests include token in Authorization header
5. Middleware verifies token on protected routes

---

## 💳 Payment System

Credits are managed through **Stripe integration**:

- Users purchase credit packages
- Stripe webhook confirms payment
- Credits are automatically added to user account
- Each message deducts credits based on response length

---

## 📦 Deployment

### Frontend Deployment (Vercel)

```bash
cd client
npm run build
```

Connect your GitHub repository to Vercel and deploy automatically.

### Backend Deployment

Backend is ready for deployment on:
- Vercel
- Heroku
- AWS
- DigitalOcean

Ensure environment variables are set in your hosting platform.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Tanmoy** - [GitHub Profile](https://github.com/Tanmoy200405)

---

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) - For the powerful GPT API
- [Vercel](https://vercel.com/) - For hosting
- [MongoDB](https://www.mongodb.com/) - For database
- [Stripe](https://stripe.com/) - For payment processing
- [React](https://react.dev/) - For the amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) - For styling

---

## 📞 Support

For support, please reach out through:
- GitHub Issues
- Email
- GitHub Discussions

---

## 🔄 Version History

- **v1.0.0** (Current) - Initial release with full AI chat, credit system, and user authentication

---

**Happy Chatting! 🎉**
