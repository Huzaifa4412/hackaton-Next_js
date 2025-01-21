# Shop.co Marketplace

### **Introduction**

NextShop Marketplace is a fully functional and responsive e-commerce website designed to provide a seamless online shopping experience. This project was developed during a 7-day hackathon and serves as a complete marketplace solution, featuring advanced functionalities like search, product management, and a dynamic checkout system. Built with **Next.js** and **Sanity**, the project showcases optimized performance and scalability.

This hackathon was my first experience working under a tight deadline to solve real-world problems. It taught me how to overcome technical challenges, debug complex issues, and implement efficient solutions.

![Hackathon Giphy](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2UzMTg3czZ1M2NuaTJ2cnI4dW51dWtlMDNtM2Rhbjd0eDVsd3JvaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h408T6Y5GfmXBKW62l/giphy.gif)

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

### **ScreenShots**

#### Homepage

![Homepage Screenshot](/public/screenShots/homepage.png)

#### Product Details Page

![Product Details Screenshot](/public/screenShots/product_detail.png)

#### Checkout Page

![Checkout Screenshot](/public/screenShots/checkOut.png)

---

### **Website Performance**

#### **Lighthouse Metrics**

- **Performance**: 56/100
- **Accessibility**: 98/100
- **SEO**: 100/100
- **Best Practices**: 93/100

#### **Key Optimizations**

- Implemented lazy loading for images and components.
- Optimized API requests to reduce response times.
- Used static generation and server-side rendering (SSR) for better performance.

![Lighthouse Performance Screenshot](/public/screenshots/light_performance.png)
![Lighthouse practices ](/public/screenShots/light_practises.png)
![Lighthouse seo ](/public/screenShots/light_seo.png)
![Lighthouse accessibility ](/public/screenShots/lighthouseAss.png)

![Performance Giphy](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2d3dGpva21lZzVlbDd3eTgxcWxzMWZsZnY3MmxzNnNocGV0OThhcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8PpFJcG4y8HqsxQumz/giphy.gif)

---

### **Sanity CMS Integration**

#### **Sanity Features**

- **Product Management**: Easy addition, deletion, and modification of products.
- **Dynamic Content**: Fetch real-time updates directly from Sanity.

#### **Sanity ScreenShots**

![Sanity Dashboard Screenshot](/public/screenshots/sanity_dashboard.png)

![Sanity Data Screenshot](/public/screenshots/sanity_vision.png)

![Sanity Giphy](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXh3Z3IyMDd1aTFyMnF4Y2lndGU2bWU1a3NtYzI4a25xcDYxZDBtbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif)

---

### **Project Architecture**

- **Pages Directory**: Contains the main routes and components of the application.
- **Components Directory**: Contains reusable components used throughout the application.
- **Utils Directory**: Contains utility functions and helpers.
- **Styles Directory**: Contains global styles and custom Tailwind CSS classes.
- **Context Directory**: Manages global application state using Redux.
- **Sanity Directory**: Contains Sanity API client and GROQ queries.
- **bun.config.js**: Configuration file for Bun.

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

![Technology Giphy](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXM0cDg1dGM4ZXo1OGg3d2JjcWFpbm1senFrMDNua3psdW5rbGlyNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/doXBzUFJRxpaUbuaqz/giphy.gif)

---

### **User Flows**

1. **Searching for Products**: Users can search for products by typing keywords in the search bar.
2. **Adding to Cart**: Products can be added to the cart with dynamic quantity adjustment.
3. **Checkout**: Users fill out a form and submit data, which is securely stored in Sanity.

---

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

### **API Documentation**

- **GET /api/products**: Fetch all products from Sanity.
- **POST /api/checkout**: Submit checkout data to Sanity.

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

### **Badges**

![GitHub Repo Stars](https://img.shields.io/github/stars/your-username/your-repo-name?style=social)
![License](https://img.shields.io/github/license/Huzaifa4412/hackaton-Next_js)
![Next.js](https://img.shields.io/badge/Next.js-Framework-blue)
![Sanity](https://img.shields.io/badge/Sanity-CMS-orange)

---

### **Contributor Guidelines**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Create a pull request and describe your changes.

---

### **Known Issues**

- No payment gateway integration yet.
- Limited product filtering options.

---

### **License**

This project is licensed under the MIT License.
