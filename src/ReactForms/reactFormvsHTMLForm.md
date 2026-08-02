# React Forms vs HTML Forms

At first glance, React forms and HTML forms look very similar because they both use the same HTML elements like `<form>`, `<input>`, `<button>`, and `<textarea>`.

The **major difference** is **who controls the form**.

- **HTML Forms:** The **browser** controls the form.
- **React Forms:** **React** controls the form.

---

# Traditional HTML Form

```html
<form action="/login" method="POST">
    <input
        type="text"
        name="username"
        placeholder="Username"
    />

    <input
        type="password"
        name="password"
        placeholder="Password"
    />

    <button>Login</button>
</form>
```

### What happens?

```text
User fills the form
        │
        ▼
Clicks Submit
        │
        ▼
Browser collects all form values
        │
        ▼
Browser sends request to server
        │
        ▼
Server returns a new page
        │
        ▼
Browser refreshes
```

The browser automatically:

- Collects form data
- Sends an HTTP request
- Refreshes the page
- Displays the new page returned by the server

---

# React Form

```jsx
function App() {

    function handleSubmit(event) {
        event.preventDefault()

        console.log("Form Submitted")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
            />

            <button>Login</button>
        </form>
    )
}
```

### What happens?

```text
User fills the form
        │
        ▼
Clicks Submit
        │
        ▼
React's handleSubmit() executes
        │
        ▼
event.preventDefault()
        │
        ▼
React reads the data
        │
        ▼
React decides what to do
        │
        ▼
Page does NOT refresh
```

Instead of the browser deciding what happens, **your React code decides what happens next**.

---

# Browser Behavior

### HTML

```text
Submit Form
      │
      ▼
Browser refreshes page
```

### React

```text
Submit Form
      │
      ▼
React intercepts submission
      │
      ▼
Browser refresh is prevented
```

This is why almost every React form contains:

```jsx
event.preventDefault()
```

Without it, the browser would refresh the page and your React state would be lost.

---

# Data Handling

## HTML

The browser automatically sends all form fields to the server.

```html
<form action="/register" method="POST">

<input name="username">

<input name="email">

<input name="password">

</form>
```

The browser sends something like:

```text
username=John
email=john@gmail.com
password=12345
```

You don't need JavaScript for this.

---

## React

React usually reads the values itself.

Example using `FormData`:

```jsx
function handleSubmit(event) {

    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const username = formData.get("username")
    const email = formData.get("email")
}
```

Instead of the browser sending data automatically, React lets you inspect, validate, or modify it before sending it.

---

# Validation

## HTML Validation

```html
<input
    type="email"
    required
/>
```

The browser validates the input automatically.

---

## React Validation

React can perform much more advanced validation.

```jsx
if (password.length < 8) {
    alert("Password is too short")
}
```

You can validate:

- Password strength
- Username availability
- Email uniqueness
- Business rules
- API responses

---

# State Management

## HTML

The browser stores the current values.

```text
User types

Browser remembers

Submit
```

JavaScript usually doesn't know the value until submission.

---

## React

React can store the values inside state.

```jsx
const [email, setEmail] = useState("")
```

```jsx
<input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>
```

Every keystroke updates React state.

```text
User types

      │

onChange

      │

setEmail()

      │

React State

      │

UI updates
```

---

# Page Refresh

## HTML

```text
Submit

↓

Refresh

↓

Entire page reloads
```

---

## React

```text
Submit

↓

No refresh

↓

Only necessary components update
```

This makes React applications feel much faster.

---

# Server Communication

## HTML

The browser sends the request automatically.

```html
<form action="/login" method="POST">
```

---

## React

You decide when and how to send the request.

Example:

```jsx
async function handleSubmit(event) {

    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    await fetch("/login", {
        method: "POST",
        body: formData
    })
}
```

React gives you complete control.

---

# User Experience

### HTML

```text
Fill Form

↓

Submit

↓

Page Reload

↓

See Response
```

---

### React

```text
Fill Form

↓

Submit

↓

Loading Spinner

↓

Success Message

↓

Stay on same page
```

This creates a smoother user experience.

---

# Comparison Table

| Feature | HTML Form | React Form |
|----------|-----------|------------|
| Controlled By | Browser | React |
| Page Refresh | Yes | No (usually) |
| Submit Handler | `action` attribute | `onSubmit` |
| Prevent Refresh | Not needed | `event.preventDefault()` |
| Data Reading | Browser sends automatically | `FormData` or React state |
| Validation | Basic HTML validation | Custom JavaScript validation |
| State Management | Browser manages values | React manages values (controlled components) |
| API Calls | Browser submits automatically | Developer decides using `fetch` or `axios` |
| User Experience | Full page reload | Single Page Application (SPA) experience |

---

# Visual Comparison

## HTML Form Flow

```text
User
   │
   ▼
HTML Form
   │
   ▼
Browser
   │
   ▼
Server
   │
   ▼
Page Refresh
```

---

## React Form Flow

```text
User
   │
   ▼
React Form
   │
   ▼
handleSubmit()
   │
   ▼
Validate Data
   │
   ▼
Call API
   │
   ▼
Update React State
   │
   ▼
Re-render Component
```

---

# When to Use Each

### HTML Forms

- Simple websites
- Static pages
- Traditional server-rendered applications
- No JavaScript required

---

### React Forms

- Single Page Applications (SPAs)
- Interactive dashboards
- Dynamic forms
- Live validation
- Real-time feedback
- Modern web applications

---

# Key Takeaways

- **HTML forms** rely on the browser to submit data and typically refresh the page.
- **React forms** intercept the submission using `onSubmit` and usually call `event.preventDefault()` to keep the user on the same page.
- React forms provide full control over validation, state management, API calls, and user interactions.
- HTML forms are simple and effective for traditional websites, while React forms are designed for rich, interactive applications where the UI updates dynamically without full page reloads.