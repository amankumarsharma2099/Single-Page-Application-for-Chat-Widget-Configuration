<a name="br1"></a> 

**Chat Widget Configuration SPA - README**

**Table of Contents**

1\. Project Overview

2\. Features

3\. Technologies Used

4\. Setup and Installaꢀon

5\. Usage Instrucꢀons

6\. Applicaꢀon Architecture

7\. Assumpꢀons and Design Decisions

8\. Known Issues

9\. Future Enhancements

**Project Overview**

The **Chat Widget Configuration SPA** is a single-page application that enables users to customize and

preview a chat widget's settings in real time. It supports saving configurations as JSON files and loading

them to resume customizations.

**Features**

1\. **Live Configuration:**

o

o

Modify seꢁngs such as bot name, font family, header colors, chat colors, and more.

Upload custom images for the bot avatar and launcher icon.

2\. **Live Preview:**

o

Instantly reﬂects changes in a live preview panel.

3\. **Download Configurations:**

o

Save conﬁguraꢀons as JSON ﬁles using the provided **Download Conﬁg** buꢂon.

4\. **Load Configurations:**

o

Load a previously saved JSON conﬁguraꢀon to resume ediꢀng or preview.

**Technologies Used**

·

·

·

·

**Framework**: React

**CSS**: css)

**File Handling**: HTML5 File APIs

**Tooling**: Vite

**Setup and Installation**

**Prerequisites**

Ensure you have the following installed on your system:

·

**Node.js**: v16 or later

![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AAf/Z)![ref1]![ref1]![ref2]![ref3]

<a name="br2"></a> 

·

**npm** or **yarn**

**Steps to Set Up**

1\. Clone the repository:

cd chat-widget-config

2\. Install dependencies:

npm i

3\. Start the development server:

npm run dev

4\. Open your browser and navigate to:

http://localhost:5173

**Usage Instructions**

1\. **Modify Configurations:**

o

o

Use the form on the leﬅ side to update seꢁngs like bot name, header colors, and font family.

Upload images for the avatar and launcher using the ﬁle input or a URL.

2\. **Preview Changes:**

o

Observe live updates in the right-side preview panel.

3\. **Save Configuration:**

o

Click the **Download Conﬁg** buꢂon to save your seꢁngs as a JSON ﬁle.

4\. **Load Configuration:**

o

Use the **Load Conﬁg** buꢂon to upload a JSON ﬁle and restore your seꢁngs.

**Application Architecture**

**Components Overview**

1\. **Form Panel**:

o

o

Handles user input for conﬁguraꢀon.

Syncs form data with the applicaꢀon's state.

2\. **Live Preview Panel**:

o

Dynamically updates to reﬂect the current state.

3\. **State Management**:

o

o

Centralized state using React Context API (or Redux).

Ensures seamless synchronizaꢀon between form inputs and the preview.

4\. **Utility Functions**:

o

o

File handling for JSON parsing and downloading.

Theme uꢀlity funcꢀons for color and font changes.

**Folder Structure**

css

Copy code

![ref1]![ref1]

<a name="br3"></a> 

root/

├── src/

│ ├── components/

│ │ ├── formConfig/

│ │ │ └── formConfig.jsx

│ │ ├── Preview/

│ │ │ ├── Preview.jsx

│ │ │ └── Preview.css

│ ├── utils/

│ │ └── fileUtils.js

│ ├── App.jsx

│ ├── App.css

│ ├── main.jsx

├── index.html

**Assumptions and Design Decisions**

1\. **Live Update Approach**:

o

Used state hooks to ensure real-ꢀme updates to the preview panel.

2\. **Component-based Design**:

o

The app is broken into modular components for reusability and scalability.

3\. **File Handling**:

o

JSON conﬁguraꢀons are validated during upload to ensure compaꢀbility.

4\. **Default Values**:

o

Defaults are preloaded for all inputs to ensure the app funcꢀons out-of-the-box.

**Known Issues**

·

·

The color picker may not display consistent results across browsers.

Limited font opꢀons in the dropdown (can be extended in future versions).

**Future Enhancements**

1\. Add more font family opꢀons and support custom font uploads.

2\. Allow live resizing of the chat widget preview.

3\. Implement user authenꢀcaꢀon for saving conﬁguraꢀons online.

4\. Add drag-and-drop funcꢀonality for JSON ﬁle uploads.

![ref4]![ref2]![ref2]![ref2]

[ref1]: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAFAr0DASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMEBgcK/8QAKxAAAgEEAgECBQQDAAAAAAAAAAcBGFiS1QIDBAUGCBESISITFDEyIzVB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOy33Z8N7I93e8PdXrvpnxQNf2f6b6p5/wC58D216Fz5dXpfonL6uyZ4+F9Pq3R9XGY5cYn59XX9uvj9jHfG+FNtdv7iY+MR09c8PJ7evl9HKYjs5cfp+fZyiPWo/Pn8/wAv5/j+QALNJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAFJzbvIdmc7sUnNu8h2ZzuwAIufwptjp7ers7PjBdHk8Po8rhy6e3lM8OX6nid3XHL/AHU/KeE8o58ft/bjH3g3oolN7pXXovn+n+4G/wC9GT5PqHmdPmdPqfuflM+V4HTw8Xr6I8Lx/n5vlf4Pnw/V/vx/PlP4/wDQAP/Z
[ref2]: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAFAr0DASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMEBgcK/8QAKhAAAgEEAgEEAgICAwAAAAAAAAcDGFiT1QECBAUGERIIExUxISIUMkH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7Mvdf46sv3Z7v90+uel/k+0vZ/pnqfn/APJ8D216HHF19M9F5+0nPPTw+f5KLnv17cduvHPzH0/x06mPeN+LTdk/f8fmE44/p5Msfb6QQcfs7dfr8y9uP5b/AL9/nj7f3/X9gAWaVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAAKVW/eO5sMG2FKrfvHc2GDbAARd/xabcMkfeX8wHF5PT6eV07RSww/Xn9nizdOO3z/AC3Px2j57cd+v+Of9uvBvBSqn3WvfRfO8D3C3/eLJ8rz/Lh8yH1P3L16dPK8GHr4scHHhQfTy/I45g+en7fnnt15+/bn/X/0AD//2Q==
[ref3]: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAFAr0DASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMEBgcK/8QAKRAAAgEEAgEDBAMBAQAAAAAAAAcDGFiU1QECBAUGEQgSEyIVITEUQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDst92fTm0fdvvD3V656V9UbO9nel+p+f8A9Pp/tn0TxuvHpvonb7pOeevid/5mHnv1547deOfmKPnnjp1Md8f6WHLJ+f7frHbsX2eTLH2+zwo+Pyduv2/Mvbj+e4/fv8/t/v8AnH9gAWaVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgAKVHPeW4MKPfilRz3luDCj34AClRz3luDCj34pUc95bgwo9+AApUc95bgwo9+KVHPeW4MKPfgARd/pZccMsXeX6xG55Mf2eV07QyeF0+3t+TxJunXt8/z3Px2j57cd+v8AXP7deP8ADeijVHu9e+i+d4HuRw+72V5Xn+ZF5kPqnuOHiLyfAg6+LHBx4MHHXz/L+Yfnp+X5579f37c/r/6AB//Z
[ref4]: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAFAr0DASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMEBgcK/8QAKhAAAgEEAgIBAwMFAAAAAAAAAAcCGFiU1QEDBAUGCBESEyEiFCUxMnH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7Mvlf04ML5d8v+U+99d9Tjc+Ieu9p5/Pk+F8b9D5HHT6r0suZdnPMfBjH2HVz+PPEo8c/eEfvxCJj3jfSo0u3+o54+r939f4eT29cv0/JhHjslH8fv2S449l/vP7/wAv+AAWaUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgAKUGpeG8sqOzFKDUvDeWVHZgART+lVo9Pb1dnZ9Xru8mH4eVCXT2+THmEv1PE7uviXP8AcuftzDmXE4/t9/yjx+/H+TeClU3yZd+l871/vW783Y/k+w8vp8zq9n8q7eOzy/B6YeL19HHheNzx5Pf9uj7w/V5/lx/OXP7AAf/Z
