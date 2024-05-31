# YC Startup Directory - React Native Project

This project is a sample React Native application created purely for the purpose of demonstration for my job application at YC. The app showcases my ability to build and deploy mobile applications using Expo. Additionally, I am proficient in Ruby and PostgreSQL, and I have built scalable products using React, Node, and PostgreSQL.

## Project Overview

This project is a startup directory application that mirrors the content found on the YC Companies website (https://www.ycombinator.com/companies). It allows users to browse and filter through a list of startups, providing detailed information about each company.

### Watch the Demo Video

For a quick overview of the app's features and functionality, you can watch the demo video below:

[Watch Demo Video](https://example.com/screen-recording.mp4)

Key features of this project include:

- Displaying a comprehensive list of startups with detailed information.
- Implementing frontend pagination to manage the display of large datasets.
- Utilizing Cloudflare proxy to handle requests efficiently.
- Highlighting the need for backend pagination to reduce the load on both the React frontend and the backend server, ensuring better performance and scalability.

## How to Check Out the App

### Step 1: Install Expo Go

To view the app on your mobile device, you need to install the Expo Go app. Expo Go allows you to run Expo projects directly on your phone without needing to build native binaries.

- For iOS: Download Expo Go from the [App Store](https://apps.apple.com/us/app/expo-go/id982107779).
- For Android: Download Expo Go from [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).

### Step 2: Open the App

There are two ways to open the app: using the QR code, scan it through the mobile camera or directly via the link.

#### Method 1: Using the QR Code
![QR Code](image.png) 
1. **Open Expo Go**: Launch the Expo Go app on your mobile device.
2. **Scan the QR Code**: Use the QR code scanner within the Expo Go app to scan the QR code provided below.

#### Method 2: Direct Link

1. **Open the Link**: Open the following link on your mobile device's browser, and it will prompt you to open it with Expo Go.

[Open App in Expo Go](https://expo.dev/preview/update?message=update%20with%20logo&updateRuntimeVersion=1.0.0&createdAt=2024-05-31T01%3A27%3A26.118Z&slug=exp&projectId=d5129c01-99ec-4180-b2f5-28eeb9543acb&group=e81588b5-a778-4e67-aca2-7e1c0b74cbb5)

### Step 3: View the App

Once you have scanned the QR code or opened the link, the app will load in Expo Go. You can now interact with the app and explore its features.

## Additional Information

This project was created as a quick demonstration of my ability to build mobile applications using React Native and Expo. While this project specifically uses React Native, I am also highly proficient in building scalable solutions with React, Ruby on Rails, and PostgreSQL. I have a proven ability to quickly learn and master new technologies, enabling me to build robust and scalable applications efficiently.
During my research, I identified several recommendations to enhance usability and performance:

1. **API Inefficiencies**
   - **Issue Identified**: The current API returns around 90,000 lines of JSON data in a single call, indicating inefficiencies.
   - **Implications**: This affects performance, scalability, and maintainability.
   - **Recommendations**:
     - **Pagination**: Implement pagination to reduce response size.
     - **Data Filtering**: Allow clients to request only the necessary fields.
     - **Caching**: Use Ruby on Rails' built-in caching mechanisms like fragment caching, action caching, or low-level caching to improve performance.
2. **Data Management**
   - **Issue Identified**: Inefficient handling of large data volumes.
   - **Implications**: Higher storage costs, slower data retrieval, and increased security risks.
   - **Recommendations**:
     - **Database Optimization**: Regular indexing, partitioning, and archiving.
     - **Data Cleaning**: Remove redundant and obsolete data.
     - **Cloud Solutions**: Use scalable and cost-effective cloud data management.

3. **Enhancing User Engagement: Bookface Mobile App**
   - **Opportunity Identified**: A mobile app for Bookface can boost user engagement.
   - **Benefits**: Increased accessibility, push notifications, and improved user experience.
   - **Proposed Features**:
     - **Networking**: Real-time chat and networking.
     - **Events**: Calendar integration with reminders and RSVP.
     - **Resources**: Access to YC's educational materials.
     - **Profile Management**: Easy profile updates.

I believe a dedicated mobile app for Bookface would be highly beneficial for both founders and YC, increasing the platform's usage and impact. I am confident that I can complete the development of the Bookface app within a couple of weeks, delivering a product with high-quality UI/UX. My track record of building products quickly and efficiently speaks to my ability to bring significant value to this project.

While this would be my first mobile app using React Native, my extensive experience with React and UI/UX design ensures that I can create a seamless and engaging user experience. I have a strong background in building web applications with React, and I am proficient at creating intuitive and visually appealing interfaces.

I am a software developer with hands-on experience in Java, Python, Node.js, React, Flutter, Angular, PostgreSQL, MySQL, MongoDB, and generative AI. I thrive in very fast-paced environments and am an easy-going person always open to feedback and collaboration. If you have any questions or need further information, please feel free to contact me at masetty.veda@gmail.com
