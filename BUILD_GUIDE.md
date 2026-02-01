# Build Guide for TODO App

This guide will help you build your React Native TODO app as APK (Android) and IPA (iOS) files.

## Prerequisites

### For Both Platforms:
1. **Expo Account**: Sign up at [expo.dev](https://expo.dev) (free)
2. **EAS CLI**: Install globally
   ```bash
   npm install -g eas-cli
   ```
3. **Login to Expo**:
   ```bash
   eas login
   ```

### For Android:
- No additional requirements (EAS handles everything)

### For iOS:
- **Apple Developer Account** ($99/year) - Required for App Store distribution
- For testing only, you can use Expo's free tier, but production builds require Apple Developer account

---

## Step 1: Backend Setup (Convex)

### 1.1 Deploy Convex Backend

1. **Login to Convex** (if not already):
   ```bash
   npx convex dev
   ```
   This will prompt you to login/create account if needed.

2. **Deploy your Convex functions**:
   ```bash
   npx convex deploy
   ```

3. **Get your Convex URL**:
   After deployment, Convex will provide you with a deployment URL. It looks like:
   ```
   https://your-project-name.convex.cloud
   ```

4. **Set Environment Variable**:
   Create a `.env` file in your project root (if it doesn't exist):
   ```bash
   EXPO_PUBLIC_CONVEX_URL=https://your-project-name.convex.cloud
   ```
   
   **Important**: Replace `your-project-name` with your actual Convex project name.

### 1.2 Verify Convex Deployment

- Check your Convex dashboard at [dashboard.convex.dev](https://dashboard.convex.dev)
- Ensure all your functions (todos.ts) are deployed
- Test your API endpoints to ensure they work

---

## Step 2: Configure App Identifiers

### 2.1 Update app.json

Edit `app.json` and update these fields:

**For Android:**
- Change `"package": "com.yourcompany.todoapp"` to your desired package name
- Format: `com.yourcompany.appname` (e.g., `com.johndoe.todoapp`)

**For iOS:**
- Change `"bundleIdentifier": "com.yourcompany.todoapp"` to your desired bundle ID
- Format: `com.yourcompany.appname` (e.g., `com.johndoe.todoapp`)

**Important**: 
- These identifiers must be unique
- Once published, they cannot be changed
- Use reverse domain notation (com.yourcompany.appname)

---

## Step 3: Build Android APK

### 3.1 Configure EAS Build

1. **Initialize EAS** (if not done):
   ```bash
   eas build:configure
   ```

2. **Build APK for Testing**:
   ```bash
   eas build --platform android --profile preview
   ```
   This creates an APK file you can install directly on Android devices.

3. **Build Production APK**:
   ```bash
   eas build --platform android --profile production
   ```

### 3.2 Download Your APK

- EAS will provide a download link when the build completes
- The build typically takes 10-20 minutes
- You'll receive an email when it's ready
- Download the APK and install on Android devices

### 3.3 Alternative: Local Build (Advanced)

If you want to build locally:
```bash
eas build --platform android --profile preview --local
```
**Note**: Requires Android SDK and setup. EAS cloud builds are recommended.

---

## Step 4: Build iOS IPA

### 4.1 Prerequisites Check

- Ensure you have an Apple Developer account
- Your Apple ID must be added to the developer account

### 4.2 Configure iOS Build

1. **Build for Testing**:
   ```bash
   eas build --platform ios --profile preview
   ```

2. **Build for Production**:
   ```bash
   eas build --platform ios --profile production
   ```

### 4.3 First-Time iOS Build Setup

On your first iOS build, EAS will:
1. Ask for your Apple ID credentials
2. Create necessary certificates and provisioning profiles
3. Register your app bundle identifier with Apple

**Follow the prompts** - EAS handles most of the complexity.

### 4.4 Download Your IPA

- EAS will provide a download link when complete
- Build time: 15-30 minutes
- You'll receive an email notification

### 4.5 Install IPA on iOS Device

**Option 1: TestFlight (Recommended)**
1. After build completes, submit to TestFlight:
   ```bash
   eas submit --platform ios
   ```
2. Install TestFlight app on your iOS device
3. Accept the TestFlight invitation
4. Install your app from TestFlight

**Option 2: Direct Install**
- Requires Apple Developer account
- Use Xcode or Apple Configurator
- Or use services like Diawi for ad-hoc distribution

---

## Step 5: Environment Variables for Production

### 5.1 Set Environment Variables in EAS

For production builds, set environment variables in EAS:

```bash
eas secret:create --scope project --name EXPO_PUBLIC_CONVEX_URL --value https://your-project-name.convex.cloud
```

Or use the EAS dashboard:
1. Go to [expo.dev](https://expo.dev)
2. Select your project
3. Go to "Secrets" section
4. Add `EXPO_PUBLIC_CONVEX_URL` with your Convex URL

### 5.2 Verify Environment Variables

Check your secrets:
```bash
eas secret:list
```

---

## Step 6: Build Profiles Explained

The `eas.json` file defines three build profiles:

1. **development**: For development builds with Expo Go
2. **preview**: For testing (APK/IPA files)
3. **production**: For App Store/Play Store submission

---

## Step 7: Submit to App Stores (Optional)

### Android (Google Play Store)

1. **Build AAB** (Android App Bundle) instead of APK:
   Update `eas.json`:
   ```json
   "production": {
     "android": {
       "buildType": "app-bundle"
     }
   }
   ```

2. **Build AAB**:
   ```bash
   eas build --platform android --profile production
   ```

3. **Submit to Play Store**:
   ```bash
   eas submit --platform android
   ```

### iOS (App Store)

1. **Build for App Store**:
   ```bash
   eas build --platform ios --profile production
   ```

2. **Submit to App Store**:
   ```bash
   eas submit --platform ios
   ```

---

## Troubleshooting

### Common Issues:

1. **"Convex URL not found"**
   - Ensure `.env` file exists with `EXPO_PUBLIC_CONVEX_URL`
   - Or set it as EAS secret (recommended for production)

2. **"Bundle identifier already in use"**
   - Change the bundle identifier in `app.json`
   - Use a unique identifier

3. **"Build failed"**
   - Check EAS build logs: `eas build:view`
   - Ensure all dependencies are in `package.json`
   - Check that all assets (icons, splash screens) exist

4. **"iOS build requires Apple Developer account"**
   - Sign up at [developer.apple.com](https://developer.apple.com)
   - $99/year fee required

### Get Help:

- EAS Build Docs: https://docs.expo.dev/build/introduction/
- Convex Docs: https://docs.convex.dev
- Expo Discord: https://chat.expo.dev

---

## Quick Reference Commands

```bash
# Login to Expo
eas login

# Configure EAS
eas build:configure

# Build Android APK
eas build --platform android --profile preview

# Build iOS IPA
eas build --platform ios --profile preview

# View build status
eas build:list

# Set environment variable
eas secret:create --scope project --name EXPO_PUBLIC_CONVEX_URL --value YOUR_URL

# Submit to stores
eas submit --platform android
eas submit --platform ios
```

---

## Cost Estimate

- **EAS Build**: Free tier includes limited builds, then pay-as-you-go (~$0.10-0.20 per build)
- **Convex**: Free tier available, scales with usage
- **Apple Developer**: $99/year (required for iOS)
- **Google Play**: $25 one-time fee (required for Android)

---

## Next Steps After Building

1. ✅ Test your APK/IPA on real devices
2. ✅ Verify Convex backend is working in production
3. ✅ Test all app features
4. ✅ Fix any bugs found
5. ✅ Submit to app stores (optional)

Good luck with your build! 🚀
