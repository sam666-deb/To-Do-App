# Quick Start - Build Your App

## 🚀 Fast Track to Building

### 1. Install EAS CLI
```bash
npm install -g eas-cli
```

### 2. Login to Expo
```bash
eas login
```

### 3. Deploy Convex Backend
```bash
npx convex deploy
```
Copy the Convex URL that's displayed (e.g., `https://your-project.convex.cloud`)

### 4. Set Environment Variable
Create `.env` file in project root:
```
EXPO_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
```

Or set in EAS (recommended for production):
```bash
eas secret:create --scope project --name EXPO_PUBLIC_CONVEX_URL --value https://your-project.convex.cloud
```

### 5. Update App Identifiers
Edit `app.json`:
- Change `android.package` to your unique package name
- Change `ios.bundleIdentifier` to your unique bundle ID

### 6. Build Android APK
```bash
npm run build:android
```
or
```bash
eas build --platform android --profile preview
```

### 7. Build iOS IPA
```bash
npm run build:ios
```
or
```bash
eas build --platform ios --profile preview
```

## 📱 What You Get

- **Android**: APK file you can install directly on Android devices
- **iOS**: IPA file (requires Apple Developer account for $99/year)

## ⚠️ Important Notes

1. **First build takes 15-30 minutes** - subsequent builds are faster
2. **You'll receive an email** when build completes with download link
3. **iOS requires Apple Developer account** ($99/year)
4. **Android is free** - no account needed for APK builds

## 📚 Full Documentation

See `BUILD_GUIDE.md` for detailed instructions, troubleshooting, and App Store submission.

## 🆘 Need Help?

- Check build status: `eas build:list`
- View build logs: `eas build:view [BUILD_ID]`
- EAS Docs: https://docs.expo.dev/build/introduction/
