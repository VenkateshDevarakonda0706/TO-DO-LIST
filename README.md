# To-Do List App 📝

A beautiful and feature-rich To-Do List mobile application built with React Native and Expo. This app helps you stay organized and productive by managing your daily tasks efficiently.

## 🚀 Features

### Core Features (Required)

- ✅ **Add Tasks**: Create new tasks with a user-friendly input interface
- ✅ **View Tasks**: Display all tasks in a clean, organized list
- ✅ **Delete Tasks**: Remove tasks with confirmation dialog
- ✅ **Persistent Storage**: Tasks are saved locally using AsyncStorage and persist after app closes

### Bonus Features (Implemented)

- ✅ **Mark as Completed**: Toggle task completion status with visual indicators
- ✅ **Edit Tasks**: In-line editing of existing tasks
- ✅ **Task Statistics**: View total, pending, and completed task counts
- ✅ **Filter Tasks**: Separate view for all, pending, and completed tasks
- ✅ **Beautiful UI**: Modern design with shadows, colors, and smooth interactions
- ✅ **Task Management**: Clear completed tasks or clear all tasks
- ✅ **Date Tracking**: Shows when each task was created
- ✅ **Character Limit**: 200 character limit for tasks with counter
- ✅ **Confirmation Dialogs**: Prevents accidental deletions



## 🛠️ Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and toolchain
- **AsyncStorage**: Local data persistence
- **React Hooks**: State management with useState and useEffect

## 🏗️ Project Structure

```
To-Do-List/
├── App.js                 # Main app component with state management
├── components/
│   ├── TaskItem.js        # Individual task component with edit/delete
│   ├── TaskInput.js       # Task input component with validation
│   └── TaskStats.js       # Statistics component
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI: `npm install -g @expo/cli`
- Expo Go app on your mobile device (for testing)

### Installation

1. **Clone or download the project**

   ```bash
   cd path/to/To-Do-List
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run the app**
   - Scan the QR code with Expo Go app on your phone
   - Or press `w` to run in web browser
   - Or press `a` to run Android emulator
   - Or press `i` to run iOS simulator

### Alternative Running Methods

```bash
# Run on Android device/emulator
npm run android

# Run on iOS device/simulator (macOS only)
npm run ios

# Run in web browser
npm run web
```

## 📱 How to Use

1. **Adding Tasks**:

   - Type your task in the input field at the top
   - Press "Add Task" button or hit Enter
   - Tasks are limited to 200 characters

2. **Managing Tasks**:

   - Tap the checkbox to mark tasks as complete/incomplete
   - Tap "Edit" to modify task text
   - Tap "Delete" to remove tasks (with confirmation)

3. **Filtering Tasks**:

   - Use the filter buttons to view All, Pending, or Completed tasks
   - Statistics show counts for each category

4. **Bulk Actions**:
   - "Clear Completed" removes all finished tasks
   - "Clear All" removes all tasks (with confirmation)

## 🔧 Key Implementation Details

### Data Persistence

- Uses AsyncStorage to save tasks locally
- Tasks persist between app sessions
- Automatic saving when tasks are modified

### State Management

- React hooks (useState, useEffect) for state management
- Real-time updates across all components
- Optimistic UI updates for smooth experience

### User Experience

- Confirmation dialogs for destructive actions
- Loading states during data operations
- Empty state messages for better UX
- Character counters and input validation

## 🎨 Design Features

- **Modern UI**: Clean, material design inspired interface
- **Visual Feedback**: Shadows, elevation, and hover effects
- **Color Coding**: Different colors for pending/completed tasks
- **Responsive Layout**: Works on different screen sizes
- **Typography**: Clear hierarchy with different font sizes and weights
- **Icons**: Checkmarks and visual indicators

## 📦 Dependencies

```json
{
  "@react-native-async-storage/async-storage": "^1.x.x",
  "expo": "~54.0.0",
  "react": "18.x.x",
  "react-native": "0.x.x"
}
```

## 🐛 Known Issues

- None currently reported

## 🚀 Future Enhancements

- Push notifications for reminders
- Task categories and tags
- Due dates and priority levels
- Cloud sync across devices
- Search functionality
- Task sharing

## 👨‍💻 Development Notes

### Code Quality

- Modular component structure
- Proper error handling
- Clean, readable code with comments
- Consistent naming conventions

### Performance

- Efficient FlatList for task rendering
- Minimal re-renders with proper key props
- Optimized AsyncStorage operations



This is an assignment project, but suggestions and improvements are welcome!

---

**Developed with ❤️ using React Native and Expo**
