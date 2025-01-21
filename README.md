# Shop.co Marketplace

### **Introduction**

NextShop Marketplace is a fully functional and responsive e-commerce website designed to provide a seamless online shopping experience. This project was developed during a 7-day hackathon and serves as a complete marketplace solution, featuring advanced functionalities like search, product management, and a dynamic checkout system. Built with **Next.js** and **Sanity**, the project showcases optimized performance and scalability.

This hackathon was my first experience working under a tight deadline to solve real-world problems. It taught me how to overcome technical challenges, debug complex issues, and implement efficient solutions.

---

### **Core Features**

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Data Fetching**: Uses Sanity CMS to fetch and manage products, categories, and user data.
- **Search Functionality**: Dynamic search bar with suggestions for faster navigation.
- **Product Details Page**: Comprehensive details for each product, including images and descriptions.
- **All Products Page**: Displays the complete product catalog with sorting and filtering options.
- **New Arrivals Section**: Highlights the latest additions to the store.
- **Add-to-Cart Functionality**: Users can add, update, and remove items from their cart.
- **Checkout Page**: Collects user data and securely sends it to Sanity CMS.
- **Optimized Code**: Efficient and clean codebase designed for scalability.

---

### **Screenshots**

#### Homepage

![Homepage Screenshot](/public/screenShots/homepage.png)

#### Product Details Page

![Product Details Screenshot](/public/screenShots/product_detail.png)

#### Checkout Page

![Checkout Screenshot](/public/screenShots/checkOut.png)

#### Structure Page

![Structure Screenshot](/public/screenShots/structure.png)

---

### **Challenges Overcome**

- **Sanity Data Fetching**: Initially faced issues fetching data from Sanity and rendering it dynamically. Solved it by implementing efficient GROQ queries and leveraging Next.js dynamic routes.
- **Debugging Frontend Issues**: Resolved issues related to state updates on the Product Details page.
- **Performance Optimization**: Improved load times by optimizing API requests and implementing lazy loading for images.

---

### **Technologies Used**

- **Next.js**: Framework for building the frontend.
- **Sanity**: Headless CMS for backend data management.
- **Redux**: State management for global application state.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Bun**: Fast JavaScript runtime and package manager.

---

### **Project Architecture**

- **Pages Directory**: Contains the main routes and components of the application.
- **Components Directory**: Contains reusable components used throughout the application.
- **Utils Directory**: Contains utility functions and helpers.
- **Styles Directory**: Contains global styles and custom Tailwind CSS classes.
- **Context Directory**: Manages global application state using Redux.
- **sanity directory**: Contains Sanity API client and GROQ queries.
- **bun.config.js**: Configuration file for Bun.

![Structure Screenshot](/public/screenShots/structure.png)

### **Future Enhancements**

- Adding smooth page transitions and animations.
- Integrating a secure payment gateway (e.g., Stripe or PayPal).
- Advanced product filters (e.g., by category, price range, ratings).
- Live notifications for cart updates and new arrivals.

---

### **How to Run This Project Locally**

1. **Clone the Repository**:

   ```bash
   git clone <your-repository-url>
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd <your-project-folder>
   ```

3. **Install Dependencies**:

   ```bash
   bun install
   ```

4. **Run the Development Server**:

   ```bash
   bun dev
   ```

5. **Configure Sanity CMS**:

   - Initialize a Sanity project:
     ```bash
     sanity init
     ```
   - Update the **Sanity API keys** and dataset settings in the `.env` file.

6. Open the application in your browser at:
   ```bash
   http://localhost:3000
   ```

---

### **Lessons Learned**

Participating in this hackathon was an incredible learning experience. I discovered how to:

- Handle real-world problems under tight deadlines.
- Debug complex issues and implement optimized solutions.
- Build scalable and maintainable codebases.

---

### **Credits**

- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Next.js Official Docs](https://nextjs.org/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)

---

### **License**

This project is licensed under the MIT License.
