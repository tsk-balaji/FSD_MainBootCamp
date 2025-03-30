**MERN Stack Interview - 4 Years Experience**

**HTML/CSS:**

1.  **Question:** Explain the box model in CSS and how it impacts layout.
    * **Answer:** The CSS box model defines the structure of an element as a rectangular box. It consists of:
        * **Content:** The actual content of the element.
        * **Padding:** The space between the content and the border.
        * **Border:** A line surrounding the padding and content.
        * **Margin:** The space outside the border, separating the element from other elements.
        * `box-sizing` property controls how the total width and height of an element are calculated. `content-box` (default) includes only content, while `border-box` includes content, padding, and border, making layout calculations more predictable.

2.  **Question:** What are the differences between `display: inline`, `inline-block`, and `block`?
    * **Answer:**
        * `inline`: Elements flow within the line of text, don't create line breaks, and their width/height depend on their content. Padding and margins affect horizontal space, not vertical.
        * `inline-block`: Elements flow within the line, but can have specified width/height, and padding/margins affect both horizontal and vertical space.
        * `block`: Elements create line breaks, occupy the full available width, and can have specified width/height and padding/margins.

3.  **Question:** How would you implement a responsive design for a website that needs to look good on both desktop and mobile devices?
    * **Answer:**
        * Use media queries to apply different CSS rules based on screen size.
        * Set the viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`) to control how the browser scales the page on mobile devices.
        * Use flexible grids (Flexbox or Grid) to create layouts that adapt to different screen sizes.
        * Use responsive images (`<picture>` element, `srcset` attribute) to serve different image sizes based on screen resolution.

4.  **Question:** Explain CSS specificity and how it's calculated.
    * **Answer:** Specificity determines which CSS rules are applied to an element when multiple rules target it. It's calculated using a four-part value (a, b, c, d), where:
        * a: Inline styles (highest specificity).
        * b: IDs.
        * c: Classes, attributes, and pseudo-classes.
        * d: Elements and pseudo-elements (lowest specificity).
        * Rules with higher specificity override those with lower specificity.

**React:**

1.  **Question:** Describe the React component lifecycle and the purpose of each phase.
    * **Answer:**
        * **Mounting:** `constructor`, `render`, `componentDidMount`. Initial setup and rendering.
        * **Updating:** `render`, `componentDidUpdate`. Re-rendering due to state/prop changes.
        * **Unmounting:** `componentWillUnmount`. Cleanup before component removal.

2.  **Question:** Explain the concept of hooks in React and provide examples of commonly used hooks.
    * **Answer:** Hooks are functions that let you "hook into" React state and lifecycle features from function components. Examples:
        * `useState`: Manages component state.
        * `useEffect`: Performs side effects (data fetching, subscriptions).
        * `useContext`: Accesses context values.
        * `useReducer`: Manages complex state with a reducer function.
        * `useMemo`: Memoizes expensive calculations.
        * `useCallback`: Memoizes functions.

3.  **Question:** How would you optimize a React application for performance?
    * **Answer:**
        * Use memoization (`useMemo`, `useCallback`, `React.memo`) to prevent unnecessary re-renders.
        * Implement lazy loading and code splitting to reduce initial load time.
        * Use virtualization for rendering large lists.
        * Optimize images and assets.
        * Profile and identify performance bottlenecks using React Developer Tools.

4.  **Question:** Explain Context API and Redux. When would you use one over the other?
    * **Answer:**
        * Context API: Provides a way to pass data through the component tree without manually passing props at every level. Suitable for simple state management and theming.
        * Redux: A predictable state container for JavaScript apps. Suitable for complex state management, global state, and large applications. Redux provides a central store, predictable state updates, and middleware for handling side effects.
        * Use Context for localized simple state, and Redux for complex global state.

5.  **Coding Question:** Implement a simple counter component in React using hooks.
    ```jsx
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }

    export default Counter;
    ```

**Node.js:**

1.  **Question:** Explain the event loop in Node.js and its significance.
    * **Answer:** The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded. It continuously checks the call stack and the event queue, executing callbacks when the call stack is empty. This enables Node.js to handle asynchronous tasks efficiently.

2.  **Question:** What are some best practices for handling asynchronous operations in Node.js?
    * **Answer:** Use Promises or async/await for cleaner asynchronous code. Implement proper error handling using try-catch blocks or `.catch()` methods. Avoid blocking the event loop with synchronous operations.

3.  **Question:** Explain the differences between `require` and `import` in Node.js.
    * **Answer:** `require` is used in CommonJS modules (default in Node.js), while `import` is used in ES modules. Node.js supports both, but requires specific configurations (e.g., `"type": "module"` in `package.json`) to use ES modules.

4.  **Question:** How would you handle authentication and authorization in a Node.js API?
    * **Answer:** Use JWT (JSON Web Tokens) for authentication. Implement role-based access control (RBAC) or attribute-based access control (ABAC) for authorization. Use middleware to protect routes and verify user permissions. Libraries like Passport.js can simplify authentication.

5.  **Coding Question:** Write a Node.js function that reads a file and returns its content as a string using Promises.
    ```javascript
    const fs = require('fs').promises;

    async function readFileContent(filePath) {
      try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
      } catch (error) {
        throw error;
      }
    }
    ```

**MongoDB:**

1.  **Question:** Explain the concept of indexing in MongoDB and its impact on performance.
    * **Answer:** Indexes improve query performance by allowing MongoDB to efficiently locate documents. However, they can slow down write operations.

2.  **Question:** What are aggregation pipelines in MongoDB, and what are their use cases?
    * **Answer:** Aggregation pipelines allow for complex data transformations and analysis. Use cases include data aggregation, filtering, grouping, and reporting.

3.  **Question:** How would you handle data modeling in MongoDB for a social media application?
    * **Answer:** Use document structures to represent users, posts, and comments. Consider embedding vs. referencing based on relationships. Use appropriate indexes for common queries.

4.  **Question:** Explain transactions in MongoDB and when they are necessary.
    * **Answer:** Transactions ensure ACID properties for multi-document operations. Use them when data consistency is critical across multiple documents.

5.  **Question:** What are the ways you have used to improve Mongodb query performance?
    * **Answer:** Indexing, query optimization, projection, limiting results, avoid `$where`, and profiling.

**Optimization and Efficiency Questions:**

**React:**

1.  **Question:** How would you identify and fix memory leaks in a React application?
    * **Answer:** Use React Developer Tools' profiler, check for unmounted components holding references, remove event listeners on unmount, and handle subscriptions properly.

2.  **Question:** Explain techniques for lazy loading components and images in React. What are the benefits?
    * **Answer:** `React.lazy` and `Suspense` for component loading, Intersection Observer API or libraries like `react-lazyload` for images. Benefits: reduced initial load time and improved performance.

3.  **Question:** How do you optimize state management in large React applications to prevent unnecessary re-renders?
    * **Answer:** Use `useMemo`, `useCallback`, `React.memo`, careful selection of state granularity, and leveraging immutable data structures.

4.  **Question:** What strategies do you use to reduce the bundle size of a React application?
    * **Answer:** Code splitting, tree shaking, using production builds, optimizing image assets, and analyzing bundle size with tools like Webpack Bundle Analyzer.

**Node.js:**

1.  **Question:** How do you profile and identify performance bottlenecks in a Node.js application?
    * **Answer:** Use Node.js built-in profiler (`--prof`), tools like `clinic.js`, `0x`, and APM (Application Performance Monitoring) tools.

2.  **Question:** What techniques do you employ to optimize database queries and interactions in a Node.js API?
    * **Answer:** Query optimization, connection pooling, indexing, caching, and avoiding unnecessary database calls.

3.  **Question:** How do you handle and prevent memory leaks in a Node.js application?
    * **Answer:** Understand garbage collection, avoid global variables, properly close resources (e.g., file streams, database connections), and use tools to detect leaks.

4.  **Question:** Explain how clustering or load balancing can improve the performance and scalability of a Node.js application.
    * **Answer:** Leverage Node.js's `cluster` module or use load balancers like Nginx to distribute traffic across multiple instances.

**MongoDB:**

1.  **Question:** How do you optimize MongoDB queries for large datasets?
    * **Answer:** Indexing, using appropriate query operators, limiting results, using projections, and avoiding `$where` clauses.

2.  **Question:** Explain how sharding and replication improve MongoDB's performance and availability.





**Coding Questions (MERN Stack Interview - 4 Years Experience)**

**React:**

1.  **Question:** Implement a simple to-do list component in React using hooks. Include functionality to add new tasks, toggle task completion, and delete tasks.
    ```jsx
    import React, { useState } from 'react';

    function TodoList() {
      const [todos, setTodos] = useState([]);
      const [newTask, setNewTask] = useState('');

      const handleAddTask = () => {
        if (newTask.trim() !== '') {
          setTodos([...todos, { id: Date.now(), text: newTask, completed: false }]);
          setNewTask('');
        }
      };

      const handleToggleComplete = (id) => {
        setTodos(todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
      };

      const handleDeleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

      return (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  onClick={() => handleToggleComplete(todo.id)}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default TodoList;
    ```

2.  **Question:** Create a React component that fetches data from an API and displays it in a list. Handle loading and error states.
    ```jsx
    import React, { useState, useEffect } from 'react';

    function DataList() {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        fetch('[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)') // Example API
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(jsonData => {
            setData(jsonData);
            setLoading(false);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          });
      }, []);

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;

      return (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      );
    }

    export default DataList;
    ```

**Node.js:**

3.  **Question:** Write a Node.js API endpoint that accepts a POST request with JSON data and saves it to a file.
    ```javascript
    const http = require('http');
    const fs = require('fs').promises;

    const server = http.createServer(async (req, res) => {
      if (req.method === 'POST' && req.url === '/save') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const jsonData = JSON.parse(body);
            await fs.writeFile('data.json', JSON.stringify(jsonData, null, 2));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data saved successfully' }));
          } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
          }
        });
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
      }
    });

    server.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
    ```

4.  **Question:** Create a Node.js function that recursively traverses a directory and returns a list of all file paths.
    ```javascript
    const fs = require('fs').promises;
    const path = require('path');

    async function getFilePaths(dirPath, filePaths = []) {
      const files = await fs.readdir(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) {
          await getFilePaths(filePath, filePaths);
        } else {
          filePaths.push(filePath);
        }
      }
      return filePaths;
    }

    // Example Usage
    // getFilePaths('./your-directory').then(paths => console.log(paths));
    ```

**MongoDB:**

5.  **Question:** Write a Node.js function that connects to a MongoDB database, retrieves all documents from a collection, and returns them as an array.
    ```javascript
    const { MongoClient } = require('mongodb');

    async function getDocuments(uri, dbName, collectionName) {
      const client = new MongoClient(uri);
      try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const documents = await collection.find({}).toArray();
        return documents;
      } finally {
        await client.close();
      }
    }

    // Example Usage
    // const uri = 'mongodb://localhost:27017';
    // getDocuments(uri, 'mydb', 'mycollection').then(docs => console.log(docs));
    ```
