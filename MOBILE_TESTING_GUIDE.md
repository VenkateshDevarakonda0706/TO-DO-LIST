# 📱 Mobile Testing & Troubleshooting Guide

## 🔧 **Step-by-Step Mobile Testing Instructions**

### **Method 1: Using Expo Go App (Recommended)**

1. **Download Expo Go**:

   - **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - **iOS**: [App Store](https://apps.apple.com/app/apple-store/id982107779)

2. **Start the Development Server**:

   ```bash
   cd "c:\Users\Venkatesh\OneDrive\Desktop\To-Do-List"
   npx expo start --clear
   ```

3. **Connect Your Phone**:
   - **Make sure both your computer and phone are on the same WiFi network**
   - Scan the QR code that appears in the terminal using:
     - **Android**: Expo Go app
     - **iOS**: Camera app (will open in Expo Go)

### **Method 2: Using Web Browser (For Quick Testing)**

1. **Start with Web Support**:
   ```bash
   npx expo start --web
   ```
2. **Open in Browser**:
   - Go to `http://localhost:8081` or `http://localhost:8082`
   - Test all functionality in browser first

### **Method 3: Using Android Emulator**

1. **If you have Android Studio**:
   ```bash
   npx expo start
   # Then press 'a' in the terminal
   ```

## 🚨 **Common Issues & Solutions**

### **Issue 1: "Something went wrong" Error**

**Possible Causes & Solutions**:

1. **Network Issues**:

   - Ensure phone and computer are on same WiFi
   - Try restarting both devices
   - Check if firewall is blocking the connection

2. **Cache Issues**:

   ```bash
   npx expo start --clear
   npm start -- --reset-cache
   ```

3. **Dependency Issues**:
   ```bash
   rm -rf node_modules
   npm install
   npx expo install --fix
   ```

### **Issue 2: QR Code Not Working**

**Solutions**:

1. **Manual Connection**:

   - In Expo Go app, tap "Enter URL manually"
   - Enter: `exp://192.168.0.110:8081` (use the IP shown in your terminal)

2. **Try Tunnel Mode**:
   ```bash
   npx expo start --tunnel
   ```

### **Issue 3: App Crashes on Phone**

**Debug Steps**:

1. **Check Logs**:

   - Look at the terminal output when the crash happens
   - Look for red error messages

2. **Test Simple Version First**:

   - Use the `App-test.js` file to verify basic setup works

3. **Check Component Issues**:
   - Comment out complex components and add them back one by one

## 📸 **How to Take Screenshots & Videos**

### **Taking Screenshots**:

1. **On Android**: Power + Volume Down
2. **On iPhone**: Side Button + Volume Up
3. **Using Expo**:
   - Shake the device
   - Select "Copy link & screenshot"

### **Recording Videos**:

1. **Android**: Use built-in screen recorder
2. **iPhone**: Control Center → Screen Recording
3. **Using ADB** (Android):
   ```bash
   adb shell screenrecord /sdcard/demo.mp4
   ```

## 🔍 **Testing Your App Features**

### **Basic Functionality Test Checklist**:

- [ ] App opens without crashing
- [ ] Can add new tasks
- [ ] Can view task list
- [ ] Can delete tasks
- [ ] Can mark tasks as complete
- [ ] Can edit tasks
- [ ] Tasks persist after closing app
- [ ] Filter buttons work (All/Pending/Completed)
- [ ] Statistics show correct counts

### **UI/UX Test Checklist**:

- [ ] All buttons are touchable and responsive
- [ ] Text is readable on your device
- [ ] Colors and styling look good
- [ ] Scrolling works smoothly
- [ ] Keyboard doesn't cover input fields

## 🛠️ **Alternative Testing Methods**

### **Option 1: Expo Snack (Online)**

1. Go to [snack.expo.dev](https://snack.expo.dev)
2. Copy your code there
3. Test directly in browser with mobile preview

### **Option 2: Development Build**

```bash
npx create-expo-app --template
eas build --profile development --platform android
```

## 📱 **Device-Specific Instructions**

### **For Android Users**:

1. Enable Developer Options
2. Enable USB Debugging (if using cable)
3. Allow "Install from Unknown Sources" for Expo Go

### **For iPhone Users**:

1. Make sure iOS is updated
2. Trust the developer certificate if prompted
3. Check if Expo Go has camera permissions

## 🔄 **Quick Restart Sequence**

If nothing works, try this sequence:

1. **Stop all servers** (Ctrl+C in terminal)
2. **Clear all caches**:
   ```bash
   npx expo start --clear
   npm start -- --reset-cache
   ```
3. **Restart Expo Go app** on your phone
4. **Reconnect to same WiFi**
5. **Scan QR code again**

## 💡 **Pro Tips**

1. **Use --tunnel** if you're on corporate WiFi:

   ```bash
   npx expo start --tunnel
   ```

2. **Check your firewall** - it might be blocking port 8081

3. **Use your computer's IP manually**:

   - Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
   - Use `exp://YOUR_IP:8081` in Expo Go

4. **Test on web first** to isolate mobile-specific issues

## 🆘 **Still Not Working?**

Try this minimal test app:

1. Replace App.js temporarily with `App-test.js`
2. Start the server: `npx expo start --clear`
3. If the test app works, the issue is in your main code
4. If test app doesn't work, it's a setup/network issue

---

**Remember**: The app is fully functional - the issue is likely with the connection or setup, not the code itself!
