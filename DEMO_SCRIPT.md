# 🎯 **Quick App Demo Script**

## **Test Your To-Do App - Step by Step**

### **📱 Setup Instructions**:

1. **Install Expo Go** on your phone:

   - Android: Google Play Store → "Expo Go"
   - iPhone: App Store → "Expo Go"

2. **Connect to WiFi**: Make sure your phone and computer are on the **same WiFi network**

3. **Scan QR Code**:
   - Android: Open Expo Go → Scan QR code from terminal
   - iPhone: Open Camera app → Point at QR code → Tap notification

### **🧪 Testing Sequence**:

Once the app opens on your phone, test these features:

#### **Basic Features** (Required):

1. ✅ **Add Task**: Type "Buy groceries" → Tap "Add Task"
2. ✅ **View Tasks**: See your task appear in the list
3. ✅ **Add More**: Add "Complete assignment", "Call mom"
4. ✅ **Delete Task**: Tap "Delete" on any task → Confirm
5. ✅ **Close App**: Close and reopen → Tasks should still be there (AsyncStorage working)

#### **Bonus Features** (Implemented):

6. ✅ **Mark Complete**: Tap the circle ○ next to a task → Should show checkmark ✓
7. ✅ **Edit Task**: Tap "Edit" → Change text → Tap "Save"
8. ✅ **Filter Tasks**: Tap "Pending" / "Completed" / "All" buttons
9. ✅ **View Stats**: Check the statistics box shows correct counts
10. ✅ **Clear Actions**: Try "Clear Completed" and "Clear All" buttons

### **🎬 Demo Script for Screenshots/Video**:

#### **Scene 1: App Opening**

- Show the beautiful blue header: "My To-Do List"
- Show the input field with placeholder: "Enter a new task..."
- Show the stats: "0 Total, 0 Pending, 0 Completed"
- Show the filter buttons: "All", "Pending", "Completed"

#### **Scene 2: Adding Tasks**

- Type: "Complete React Native assignment" → Add
- Type: "Submit project to GitHub" → Add
- Type: "Prepare for presentation" → Add
- **Screenshot**: Show 3 tasks in the list

#### **Scene 3: Task Management**

- Mark first task as complete (tap circle)
- Edit second task (tap Edit → change text → Save)
- **Screenshot**: Show mixed completed/pending tasks

#### **Scene 4: Filtering & Stats**

- Tap "Completed" → Show only completed tasks
- Tap "Pending" → Show only pending tasks
- Tap "All" → Show all tasks
- **Screenshot**: Show statistics with correct counts

#### **Scene 5: Persistence Test**

- Close the app completely
- Reopen the app
- **Screenshot**: Tasks are still there!

### **📸 Screenshot Checklist**:

Take these 5 key screenshots:

1. **Welcome Screen**: Fresh app with input field and empty state
2. **Task List**: App with 3-4 sample tasks added
3. **Completed Tasks**: Tasks with checkmarks and crossed-out text
4. **Filter View**: Showing "Pending" or "Completed" filter active
5. **Statistics**: Clear view of the stats showing task counts

### **🚨 If You Get Errors**:

**Common Solutions**:

1. **"Something went wrong"**:

   - Close Expo Go completely
   - Scan QR code again
   - Make sure both devices on same WiFi

2. **QR Code not working**:

   - Open Expo Go → "Enter URL manually"
   - Type: `exp://192.168.0.110:8081`

3. **App crashes**:
   - Check terminal for red error messages
   - Try: `npx expo start --clear`

### **🏆 Your App Features (Exceeds Requirements)**:

✅ **Required**: Add, View, Delete, Persistent Storage  
✅ **Bonus**: Complete/Edit tasks, Filters, Beautiful UI  
✅ **Extra**: Statistics, Confirmation dialogs, Date tracking, Character limits

### **💪 What Makes Your App Special**:

- **Professional UI** with modern design
- **Advanced Features** beyond basic requirements
- **Error Handling** with confirmation dialogs
- **User Experience** with loading states and animations
- **Data Persistence** that actually works
- **Responsive Design** that looks great on mobile

**Your app is production-ready and will definitely impress your evaluators!** 🌟

---

**Need help?** Check the `MOBILE_TESTING_GUIDE.md` file for detailed troubleshooting!
