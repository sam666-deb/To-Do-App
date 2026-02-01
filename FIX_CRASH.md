# Fix App Crash - Missing Convex URL

## 🔴 Problem Identified

Your app is crashing because the `EXPO_PUBLIC_CONVEX_URL` environment variable is **not set in your EAS build**. 

The `.env` file only works for local development - **production builds need EAS environment variables**.

---

## ✅ Solution: Set Environment Variable in EAS

### Step 1: Set the Environment Variable

Run this command in your terminal:

```powershell
eas env:create
```

Then follow the prompts:
1. **Name**: `EXPO_PUBLIC_CONVEX_URL`
2. **Value**: `https://confident-marmot-49.convex.cloud`
3. **Scope**: Select `project`
4. **Type**: Select `string`
5. **Visibility**: Select `plaintext` (it's a public URL)
6. **Environment**: Select `preview` (or `production` if you want it for all builds)

**OR** use the old method (still works):

```powershell
eas secret:create --scope project --name EXPO_PUBLIC_CONVEX_URL --value https://confident-marmot-49.convex.cloud
```

### Step 2: Verify It's Set

```powershell
eas env:list
```

You should see `EXPO_PUBLIC_CONVEX_URL` listed.

### Step 3: Update App Version

Before rebuilding, increment the version in `app.json`:

```json
"version": "1.0.1"
```

### Step 4: Rebuild the APK

```powershell
eas build --platform android --profile preview
```

Or use the npm script:

```powershell
npm run build:android
```

---

## 🛠️ Code Fix Applied

I've also updated your code (`app/_layout.tsx`) to:
- ✅ Handle missing Convex URL gracefully
- ✅ Show a helpful error message instead of crashing
- ✅ Prevent the app from initializing with undefined URL

**However**, you still need to set the EAS environment variable and rebuild for the app to work properly.

---

## 🔍 Why This Happened

1. **Local Development**: Uses `.env` file ✅
2. **Production Builds**: Need EAS environment variables ❌ (was missing)

The `.env` file is **not included** in production builds for security reasons. You must set environment variables in EAS.

---

## 📋 Quick Checklist

- [ ] Set `EXPO_PUBLIC_CONVEX_URL` in EAS (Step 1)
- [ ] Verify it's set (Step 2)
- [ ] Update version in `app.json` (Step 3)
- [ ] Rebuild APK (Step 4)
- [ ] Test on device

---

## 🚀 After Rebuild

Once you rebuild with the environment variable set:
1. Download the new APK
2. Uninstall the old version from your device
3. Install the new APK
4. The app should work without crashing!

---

## 🆘 Still Crashing?

If it still crashes after setting the environment variable:

1. **Check build logs**:
   ```powershell
   eas build:list
   eas build:view [BUILD_ID]
   ```

2. **Verify Convex is deployed**:
   ```powershell
   npx convex deploy
   ```

3. **Check device logs** (Android):
   ```powershell
   adb logcat | Select-String "ReactNativeJS"
   ```

4. **Test Convex URL**:
   Open `https://confident-marmot-49.convex.cloud` in a browser to verify it's accessible.

---

**The main fix: Set the EAS environment variable and rebuild!** 🎯
