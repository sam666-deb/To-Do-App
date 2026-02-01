# Deployment Steps for iOS and Android

## 📱 Quick Deployment Guide

Follow these steps to deploy your updated TODO App to iOS and Android.

---

## Prerequisites Checklist

- [ ] EAS CLI installed: `npm install -g eas-cli`
- [ ] Logged into Expo: `eas login`
- [ ] Convex backend deployed: `npx convex deploy`
- [ ] Environment variable set (see Step 2 below)
- [ ] App icon updated (✅ Done - using AppIcon.png)
- [ ] Bundle identifiers set (✅ Done - com.Samdeb.todoapp)

---

## Step 1: Deploy Convex Backend

### 1.1 Deploy Your Backend Functions

```bash
npx convex deploy
```

**What happens:**
- Your Convex functions (todos.ts) are deployed to production
- You'll get a deployment URL like: `https://your-project-name.convex.cloud`
- **Copy this URL** - you'll need it in the next step

### 1.2 Verify Deployment

- Check [Convex Dashboard](https://dashboard.convex.dev)
- Ensure all functions are deployed and working
- Test your API endpoints

---

## Step 2: Set Environment Variable

### Option A: Local Development (.env file)

Create/update `.env` file in project root:
```
EXPO_PUBLIC_CONVEX_URL=https://your-project-name.convex.cloud
```

**Replace** `your-project-name` with your actual Convex project name.

### Option B: EAS Secrets (Recommended for Production)

Set the environment variable in EAS (used during builds):

```bash
eas secret:create --scope project --name EXPO_PUBLIC_CONVEX_URL --value https://your-project-name.convex.cloud
```

**Why EAS Secrets?**
- More secure for production builds
- Automatically included in builds
- No need to commit `.env` files

**Verify it's set:**
```bash
eas secret:list
```

---

## Step 3: Update App Version (Important!)

Before building, update the version in `app.json`:

```json
"version": "1.0.1"  // Increment from 1.0.0
```

**Why?** Each build needs a unique version number. Increment it for each new release.

---

## Step 4: Build Android APK

### 4.1 Build Command

```bash
npm run build:android
```

Or directly:
```bash
eas build --platform android --profile preview
```

### 4.2 What Happens

1. EAS uploads your code to their servers
2. Builds your Android APK (takes 10-20 minutes)
3. Sends you an email when complete
4. Provides download link for APK file

### 4.3 Download and Install

- Click the download link from email
- Or check build status: `eas build:list`
- Install APK directly on Android devices

### 4.4 Production Build (For Play Store)

If you want to submit to Google Play Store:

```bash
npm run build:android:prod
```

This creates an **AAB** (Android App Bundle) file required for Play Store.

---

## Step 5: Build iOS IPA

### 5.1 Prerequisites for iOS

- **Apple Developer Account** ($99/year) - Required
- Your Apple ID must be added to the developer account

### 5.2 Build Command

```bash
npm run build:ios
```

Or directly:
```bash
eas build --platform ios --profile preview
```

### 5.3 First-Time iOS Build

On your **first iOS build**, EAS will:
1. Ask for your Apple ID credentials
2. Create certificates and provisioning profiles automatically
3. Register your bundle identifier with Apple
4. **Follow the prompts** - EAS handles most complexity

### 5.4 What Happens

1. EAS uploads your code
2. Builds your iOS IPA (takes 15-30 minutes)
3. Sends you an email when complete
4. Provides download link

### 5.5 Install on iOS Device

**Option 1: TestFlight (Recommended)**
```bash
eas submit --platform ios
```
Then install TestFlight app and accept invitation.

**Option 2: Direct Install**
- Requires Apple Developer account
- Use Xcode or Apple Configurator
- Or use ad-hoc distribution services

### 5.6 Production Build (For App Store)

```bash
npm run build:ios:prod
```

---

## Step 6: Update Existing Apps

### If You Already Have Apps Published:

1. **Increment Version Number** in `app.json`
   ```json
   "version": "1.0.2"  // Always increment
   ```

2. **Build New Version**
   ```bash
   # Android
   eas build --platform android --profile production
   
   # iOS
   eas build --platform ios --profile production
   ```

3. **Submit Update**
   ```bash
   # Android (Play Store)
   eas submit --platform android
   
   # iOS (App Store)
   eas submit --platform ios
   ```

---

## Step 7: Monitor Builds

### Check Build Status

```bash
# List all builds
eas build:list

# View specific build details
eas build:view [BUILD_ID]
```

### Build Notifications

- You'll receive **email notifications** when builds complete
- Check your Expo dashboard: [expo.dev](https://expo.dev)

---

## Troubleshooting

### Common Issues:

**1. "Convex URL not found"**
- ✅ Ensure `.env` file exists OR EAS secret is set
- ✅ Verify Convex URL is correct
- ✅ Check: `eas secret:list`

**2. "Build failed"**
- Check build logs: `eas build:view [BUILD_ID]`
- Ensure all dependencies are in `package.json`
- Verify app icon exists at correct path

**3. "Version already exists"**
- Increment version number in `app.json`
- Try: `"version": "1.0.1"` → `"version": "1.0.2"`

**4. "iOS build requires Apple Developer"**
- Sign up at [developer.apple.com](https://developer.apple.com)
- $99/year fee required

**5. "Bundle identifier already in use"**
- Your bundle ID `com.Samdeb.todoapp` looks good
- If error occurs, change to something more unique

---

## Quick Command Reference

```bash
# Login
eas login

# Deploy Convex
npx convex deploy

# Set environment variable
eas secret:create --scope project --name EXPO_PUBLIC_CONVEX_URL --value YOUR_URL

# Build Android APK
npm run build:android

# Build iOS IPA
npm run build:ios

# Check builds
eas build:list

# Submit to stores
eas submit --platform android
eas submit --platform ios
```

---

## Cost Summary

- **EAS Build**: Free tier available, then ~$0.10-0.20 per build
- **Convex**: Free tier available, scales with usage
- **Apple Developer**: $99/year (required for iOS)
- **Google Play**: $25 one-time fee (required for Android)

---

## Next Steps After Building

1. ✅ Test APK/IPA on real devices
2. ✅ Verify Convex backend works in production
3. ✅ Test all app features
4. ✅ Fix any bugs
5. ✅ Submit to app stores (optional)

---

## Your Current Configuration

- **App Name**: TODO_App
- **Version**: 1.0.0 (update before each build!)
- **Android Package**: com.Samdeb.todoapp ✅
- **iOS Bundle ID**: com.Samdeb.todoapp ✅
- **App Icon**: AppIcon.png ✅

**Ready to build!** 🚀

Start with: `npm run build:android` or `npm run build:ios`
