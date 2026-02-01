# ✨ TODO App - Modern Task Management

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?logo=react)
![Expo](https://img.shields.io/badge/Expo-54.0.31-000020?logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**A beautiful, modern, and feature-rich todo application built with React Native and Expo**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Building](#-building) • [Tech Stack](#-tech-stack)

</div>

---

## 📱 About

TODO App is a sleek, cross-platform task management application that combines beautiful design with powerful functionality. Built with React Native and Expo, it offers a seamless experience across iOS and Android devices with real-time synchronization powered by Convex.

### What Makes It Special?

- 🎨 **Stunning Gradient UI** - Beautiful linear gradients throughout the interface
- 🌓 **Dark Mode Support** - Seamless light/dark theme switching
- 📊 **Progress Tracking** - Visual statistics for your productivity
- ⚡ **Real-time Sync** - Instant updates across all devices
- 🎯 **Intuitive UX** - Smooth animations and haptic feedback
- 🔒 **Cloud Backend** - Secure data storage with Convex

---

## ✨ Features

### 📝 Core Todo Management
- ✅ **Create Todos** - Quickly add new tasks with a beautiful input interface
- ✏️ **Edit Todos** - Inline editing with save/cancel options
- 🗑️ **Delete Todos** - Swipe or tap to remove tasks with confirmation
- ☑️ **Toggle Completion** - Mark tasks as complete/incomplete with visual feedback
- 📋 **Empty State** - Elegant empty state when you have no todos

### 📊 Progress & Statistics
- 📈 **Real-time Stats** - Track total, completed, and active todos
- 🎯 **Visual Cards** - Beautiful gradient cards showing your progress
- 📉 **Completion Tracking** - Monitor your productivity at a glance

### 🎨 User Experience
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 🎨 **Gradient Design** - Stunning linear gradients throughout
- 💫 **Smooth Animations** - Fluid transitions and interactions
- 📱 **Responsive Layout** - Optimized for all screen sizes
- 🔔 **Haptic Feedback** - Tactile responses for better UX

### ⚙️ Settings & Preferences
- 🌙 **Theme Toggle** - Switch between light and dark mode
- 🔔 **Notifications** - Enable/disable push notifications
- 🔄 **Auto Sync** - Automatic cloud synchronization
- ⚠️ **Danger Zone** - Reset app and clear all todos

### 🔄 Backend & Sync
- ☁️ **Cloud Storage** - All data synced to Convex backend
- ⚡ **Real-time Updates** - Instant synchronization across devices
- 🔒 **Secure** - Enterprise-grade security with Convex
- 📡 **Offline Support** - Works seamlessly with network changes

---

## 🛠️ Tech Stack

### Frontend
- **React Native** (0.81.5) - Cross-platform mobile framework
- **Expo** (54.0.31) - Development platform and tooling
- **Expo Router** - File-based routing system
- **TypeScript** - Type-safe development
- **Expo Linear Gradient** - Beautiful gradient effects
- **React Navigation** - Navigation library
- **Ionicons** - Icon library

### Backend
- **Convex** - Real-time backend as a service
- **TypeScript** - Type-safe backend functions

### State Management
- **Convex React Hooks** - Real-time data synchronization
- **React Hooks** - Local state management
- **AsyncStorage** - Local persistence

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **EAS Build** - Cloud build service

---

## 🚀 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (optional, included with project)
- EAS CLI (for building)
- Convex account (for backend)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Convex Backend

1. **Deploy Convex functions:**
   ```bash
   npm run convex:deploy
   ```

2. **Get your Convex URL** from the deployment output

3. **Create `.env` file** in the project root:
   ```env
   EXPO_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
   ```

### Step 4: Start Development Server

```bash
npm start
```

Or for specific platforms:
```bash
npm run android    # Android emulator/device
npm run ios         # iOS simulator/device
npm run web         # Web browser
```

---

## 📖 Usage

### Running the App

1. **Start Expo development server:**
   ```bash
   npm start
   ```

2. **Scan QR code** with Expo Go app (iOS/Android) or press:
   - `a` for Android emulator
   - `i` for iOS simulator
   - `w` for web browser

### Basic Operations

#### Creating a Todo
1. Tap the input field at the top
2. Type your task
3. Press Enter or tap the add button

#### Editing a Todo
1. Tap the edit (pencil) icon on any todo
2. Modify the text in the input field
3. Tap "Save" to confirm or "Cancel" to discard

#### Completing a Todo
- Tap the checkbox on the left of any todo
- The todo will be marked as complete with a checkmark
- Completed todos are visually distinct (strikethrough, muted)

#### Deleting a Todo
1. Tap the delete (trash) icon on any todo
2. Confirm the deletion in the alert dialog

#### Viewing Statistics
1. Navigate to the Settings tab
2. View your progress stats:
   - Total Todos
   - Completed Todos
   - Active Todos

#### Changing Theme
1. Go to Settings tab
2. Toggle "Dark Mode" switch
3. The entire app theme updates instantly

#### Resetting the App
1. Go to Settings tab
2. Scroll to "Danger Zone"
3. Tap "Reset App"
4. Confirm to delete all todos

---

## 🏗️ Building

### Prerequisites for Building

- EAS CLI installed: `npm install -g eas-cli`
- Logged into Expo: `eas login`
- Convex backend deployed
- Environment variables set in EAS

### Set Environment Variables

```bash
eas env:create
```

When prompted:
- **Name**: `EXPO_PUBLIC_CONVEX_URL`
- **Value**: Your Convex deployment URL
- **Scope**: `project`
- **Type**: `string`
- **Visibility**: `plaintext`
- **Environment**: `preview` or `production`

### Build Android APK

```bash
npm run build:android
```

Or:
```bash
eas build --platform android --profile preview
```

### Build iOS IPA

```bash
npm run build:ios
```

Or:
```bash
eas build --platform ios --profile preview
```

### Production Builds

```bash
npm run build:android:prod  # Android AAB for Play Store
npm run build:ios:prod      # iOS IPA for App Store
```

**Note:** iOS builds require an Apple Developer account ($99/year)

---

## 📁 Project Structure

```
TODO_App/
├── app/                    # Expo Router app directory
│   ├── _layout.tsx         # Root layout with providers
│   └── (tabs)/             # Tab navigation
│       ├── index.tsx       # Main todo list screen
│       └── settings.tsx    # Settings screen
├── assets/                 # Static assets
│   ├── images/            # App icons, splash screens
│   └── styles/            # Style definitions
├── components/             # Reusable components
│   ├── DangerZone.tsx     # Reset app component
│   ├── EmptyState.tsx     # Empty state component
│   ├── Header.tsx         # App header
│   ├── LoadingSpinner.tsx # Loading indicator
│   ├── Preferences.tsx   # Settings preferences
│   ├── ProgressStates.tsx # Statistics display
│   └── TodoInput.tsx      # Todo input component
├── convex/                 # Convex backend
│   ├── schema.ts          # Database schema
│   └── todos.ts           # Todo functions
├── hooks/                  # Custom React hooks
│   └── useTheme.tsx       # Theme management hook
├── app.json               # Expo configuration
├── eas.json               # EAS Build configuration
└── package.json           # Dependencies and scripts
```

---

## 🎨 Design Philosophy

This app follows modern design principles:

- **Gradient-First Design** - Beautiful linear gradients create visual depth
- **Consistent Color System** - Semantic colors (primary, success, warning, danger)
- **Smooth Animations** - Fluid transitions enhance user experience
- **Accessibility** - High contrast ratios and readable fonts
- **Platform Consistency** - Native feel on both iOS and Android

---

## 🔧 Development

### Available Scripts

```bash
npm start              # Start Expo development server
npm run android        # Start on Android
npm run ios            # Start on iOS
npm run web            # Start on web
npm run lint           # Run ESLint
npm run convex:dev     # Start Convex dev server
npm run convex:deploy  # Deploy Convex functions
```

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Functional components with hooks
- Component-based architecture

---

## 🐛 Troubleshooting

### App Crashes on Launch

1. **Check environment variables:**
   ```bash
   eas env:list
   ```
   Ensure `EXPO_PUBLIC_CONVEX_URL` is set

2. **Verify Convex deployment:**
   ```bash
   npm run convex:deploy
   ```

3. **Check build logs:**
   ```bash
   eas build:list
   eas build:view [BUILD_ID]
   ```

### Build Failures

- Ensure all dependencies are installed: `npm install`
- Verify app.json configuration
- Check EAS environment variables
- Review build logs for specific errors

### Convex Connection Issues

- Verify Convex URL is correct
- Check network connectivity
- Ensure Convex functions are deployed
- Check Convex dashboard for errors

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

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Expo** - Amazing development platform
- **Convex** - Powerful backend infrastructure
- **React Native Community** - Excellent libraries and tools
- **Ionicons** - Beautiful icon set

---

## 📞 Support

- 📧 Email: [a.ahsan18ahmed@gmail.com]
- 🐛 Issues: [GitHub Issues](https://github.com/sam666-deb/todo-app/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/sam666-deb/todo-app/discussions)

---

## 🗺️ Roadmap

- [ ] Todo categories/tags
- [ ] Due dates and reminders
- [ ] Todo prioritization
- [ ] Search functionality
- [ ] Todo sharing
- [ ] Export/import todos
- [ ] Widget support
- [ ] Siri/Google Assistant integration

---

<div align="center">

**Made with ❤️ using React Native and Expo**

⭐ Star this repo if you find it helpful!

</div>
