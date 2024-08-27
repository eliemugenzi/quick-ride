# Project name

Quick Ride Mobile application

## Introduction

Welcome to our React Native Expo application. This project leverages the power of Expo to streamline the development process, allowing us to focus on building engaging and high-performance mobile applications for both iOS and Android platforms.

## Prerequisites

Before you start, ensure you have the following installed on your macOS:

- **Node.js**: Install Node.js (version 12 LTS or later) from [Node.js official website](https://nodejs.org/en/download/).
- **Yarn package manager**: Installing nodejs comes with npm package manager by default. However, you need to install [`yarn`](https://formulae.brew.sh/formula/yarn) since it offers features like: Performance, Faster Installation, Caching Mechanism, Security, Offline Mode over `npm`.
- **Watchman**: Install Watchman for better performance and file system event handling via Homebrew with `brew install watchman`.
- **Expo CLI**: Install the Expo CLI globally using npm with `npm install -g expo-cli`.
- **Xcode**: Install Xcode from the Mac App Store to enable iOS development and access to the iOS Simulator
  - Once the Xcode is installed, open it and under `Xcode Settings (cmd+,)`, click `Platforms tab`, and install an iOS version from the list. It will download along with a Simulator.
- **Android Studio**: Install Android Studio to set up the Android Emulator. Follow the instructions on the [official Android Studio installation guide](https://developer.android.com/studio/install).
  - After the android studio is installed, open it, and on its welcome screen, click `More Actions` and click `Virtual Device Manager` to install an Android Emulator of your choice.

## Getting Started

To run the React Native Expo application locally on your macOS machine, follow these steps:

1. **Clone the Repository**: Clone the project repository to your local machine.

```bash
git clone git@github.com:Irembo/irembo-service-distribution-app.git cd cd irembo-service-distribution-app
```

2. **Install Dependencies**: Install the project dependencies

```bash
yarn install
```

3. **Install Expo Dependencies**: Some dependencies are best installed and managed by Expo to work properly:
   Run:

```bash
expo install
```

To finish the installation process.

## Start the development server

1. **Start the Expo Development Server**: To start the application dev server and clear the cache (-c)

```bash
expo start -c
```

## Running Options

**Android Emulator & iOS Simulator**

- Ensure you have iOS Simulator installed with Xcode
- Ensure your Android emulator is correctly installed and discovable. You can intall it through Android Studio (AVD Manager).

When the above tools are correctly installed and ready, you should be able to follow the instructions printed when when starting the development server to open the application on any target virtual device.

### Run the Application on iOS and Android Device with Expo Go

1. **Install Expo Go**: Download and install the Expo Go app from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) for Android or the [App Store](https://apps.apple.com/app/apple-store/id982107779) for iOS.

2. **Scan the QR Code with Expo Go**:
   - On your Android device, open the Expo Go app and tap on the camera icon to scan the QR code.
   - On your iOS device, use the Camera app to scan the QR code, then select the Expo Go app to open it.

Your application should now load on your device, and you can interact with it in real-time as you develop.

## Conclusion

By following these steps, you should be able to set up and run your React Native Expo application locally on your macOS machine and test it on both Android and iOS devices using the Expo Go app.
