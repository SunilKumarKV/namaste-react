## Namaste React Course

## Episode - 01 - Inception

## Q: What is `Emmet`?

A: `Emmet` is a powerful toolkit for web developers and designers that greatly enhances their HTML and CSS workflow. It helps in writing code more quickly and efficiently by providing shortcuts for common HTML and CSS patterns.

## Q: Difference between a `Library and Framework`?

A: A `Library` is a collection of pre-written code that provides specific functionalities or features. It is designed to be reused across different projects to save development time and effort.

- **Control**: When using a library, the developer maintains more control over the overall structure and flow of the application. The developer decides when and how to use the library's components and functions.
- **Usage**: Libraries are generally used to solve specific tasks or provide utilities. They are often "called" by the developer's code to perform specific actions or computations.
- **Inversion of Control**: In a library, the developer controls the flow of the application. The library doesn't dictate the overall structure or architecture of the application.

For instance, React.js is a JavaScript library developed by Facebook.
React is primarily concerned with rendering UI components and managing their state and updates. It can be integrated into different project setups and combined with other libraries to create complete applications.

A `Framework` is a structured, pre-designed architecture that provides a foundation for building an entire application. It dictates the overall structure, flow, and design patterns of the application.

- **Control**: When using a framework, the developer gives up some control over the application's structure and flow. The framework enforces certain conventions and rules that the developer must follow.
- **Usage**: Frameworks are used to build entire applications. They provide a foundation and a set of tools to handle various aspects of application development, such as routing, database interactions, user authentication, etc.
- **Inversion of Control**: In a framework, control is often inverted, meaning the framework controls parts of the application's flow. Developers extend or customize the framework's components to build the application's logic.

For instance, Angular is a front-end framework developed by Google.
Angular is used for building dynamic and feature-rich web applications, particularly single-page applications (SPAs).

## Q: What is `CDN`? Why do we `use` it?

A: `CDN` stands for Content Delivery Network. It is a network of distributed servers located in various data centers around the world.
The primary purpose of a CDN is to deliver web content, such as images, videos, scripts, stylesheets, and other static or dynamic resources, to users more efficiently and with higher performance.
A CDN solves this problem by replicating the website's content on multiple servers spread across various geographic locations. When a user requests a specific piece of content, the CDN automatically routes the request to the nearest server in its network. This way, the content is delivered from a server closer to the user, reducing latency and ensuring faster loading times.

### Key benefits of using a CDN include:

- **Improved website performance:** Faster load times and reduced latency leads to a better user experience, lower bounce rates, and higher engagement.
- **Scalability:** CDNs can handle large amounts of traffic and distribute it across their network, reducing the load on the origin server.

## Q: Why is `React known as React`?

A: `React` is known as "React" because of its core principle, which is to efficiently react to changes in a component's state and efficiently update the user interface (UI) accordingly. The name "React" reflects the core concept of how the library operates.

## Q: What is `crossorigin in script tag`?

A: When a web page includes resources from different domains, it can introduce security and privacy concerns. Modern web browsers implement the same-origin policy, which restricts web pages from making requests to a different domain than the one that served the web page. This policy is designed to prevent malicious websites from accessing sensitive data from other domains without permission.

## Q What is difference between `React and ReactDOM`?

A: `React` is the core library of the React ecosystem. It is a JavaScript library for building user interfaces, focusing on creating reusable UI components and efficiently managing their state. React provides the tools and infrastructure to define components, handle their lifecycle, and manage state changes.

`ReactDOM` is a package that provides the integration between React and the DOM (Document Object Model). It serves as the glue that allows React components to interact with the browser's DOM. ReactDOM is specifically designed for web applications, as it handles rendering React components to the HTML DOM. When you want to display React components in the browser, you need ReactDOM to take care of the rendering process. It provides methods like **`ReactDOM.render()`** to attach a React component to a specific HTML element in the DOM.

## Q What is difference between `react.development.js` and `react.production.js` files via CDN?

A: `react.development.js`

- This file is intended for development purposes. It contains the full and unminified version of the React library, including helpful warning messages and development-specific features.
- It is larger in size compared to the production version since it includes additional information and code to aid developers in identifying potential issues during development and debugging.
- When using **`react.development.js`**, developers get more descriptive error messages and warnings in the browser's console, making it easier to identify and address problems in the code.

`react.production.js`

- This file is intended for production deployment. It contains the minified and optimized version of the React library, stripped of any development-specific code, warnings, and console logs.
- It is smaller in size compared to the development version, as all unnecessary code and debug information have been removed during the minification process.
- Using **`react.production.js`** results in faster loading times and improved performance for end-users, as the minimized code is more efficient and consumes fewer resources.

When deploying a React application to a production environment, it is best practice to use **`react.production.js`** (along with the corresponding **`react-dom.production.js`** file) from the CDN. This ensures that the application is delivered to users with a smaller and more optimized bundle, reducing the load time and improving overall performance.

During development, developers may prefer to use **`react.development.js`** (and **`react-dom.development.js`**) to take advantage of the helpful error messages and development tools that assist in identifying and resolving issues during the development and testing phase. However, it's essential to switch to the production version before deploying the application to a live environment to achieve better performance and user experience.
