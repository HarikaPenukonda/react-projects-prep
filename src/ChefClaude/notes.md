# Why does `console.log(ingredients)` print `[]` after `setIngredients()`?

This is one of the **most common React questions**, and understanding it will help you understand **how React state works**.

---

## What happens when you click "Add ingredient"?

Let's say you type:

```text
oregano
```

When you click the button, `handleSubmit` runs.

### Step 1: Current state

Initially,

```jsx
ingredients = []
```

---

### Step 2: React reads the form

```jsx
const formData = new FormData(event.currentTarget)
const newIngredient = formData.get("ingredient")
```

Now,

```jsx
newIngredient = "oregano"
```

---

### Step 3: You request a state update

```jsx
setIngredients(prevIngredients => [...prevIngredients, newIngredient])
```

Notice the word **request**.

You are **not immediately changing** `ingredients`.

You're telling React:

> "Please update the state after this event finishes."

At this exact moment, inside the same function,

```jsx
ingredients
```

is **still**

```jsx
[]
```

---

### Step 4: This line executes immediately

```jsx
console.log(ingredients)
```

Since React hasn't updated the state yet, it prints

```text
[]
```

---

### Step 5: After `handleSubmit` finishes

React processes the update.

Now the state becomes

```jsx
["oregano"]
```

React re-renders the component.

On the next render,

```jsx
ingredients
```

contains

```jsx
["oregano"]
```

---

# Timeline

```text
Button Click
      │
      ▼
handleSubmit()
      │
      ▼
ingredients = []
      │
      ▼
setIngredients(...)
      │
      │  (React schedules an update)
      ▼
console.log(ingredients)
      │
      ▼
prints []

handleSubmit ends
      │
      ▼
React updates state
      │
      ▼
ingredients = ["oregano"]
      │
      ▼
Component renders again
```

---

# Why is React designed this way?

React **batches state updates** for performance.

Imagine you have:

```jsx
setIngredients(...)
setCount(...)
setUser(...)
```

Instead of rendering the component three times, React groups them together and performs **one render**, making your app more efficient.

---

# How do you see the updated value?

## Option 1 (Recommended): Log during render

```jsx
export default function Main() {
    const [ingredients, setIngredients] = useState([])

    console.log(ingredients)

    ...
}
```

You'll see:

```text
[]
["oregano"]
["oregano", "salt"]
["oregano", "salt", "pepper"]
```

because this runs every time the component renders.

---

## Option 2: Use `useEffect`

```jsx
useEffect(() => {
    console.log(ingredients)
}, [ingredients])
```

This runs **after** React has updated the state.

---

# Think of `setIngredients` like placing an order

Imagine ordering coffee.

```text
You: One coffee please.
```

The barista says:

```text
Got it.
```

Immediately asking,

```text
Do I have my coffee?
```

The answer is **No**.

A few moments later,

```text
☕ Coffee is ready.
```

`setIngredients` works the same way.

```jsx
setIngredients(...)
```

means

> "React, please update this state."

The update happens **after** the current function finishes.

---

# Visual Representation

```text
Current Render
────────────────────────────────────────────

ingredients = []

          │
          ▼

User clicks "Add Ingredient"

          │
          ▼

handleSubmit()

          │
          ▼

setIngredients([...])

          │
          │
          ├──────────────► React schedules state update
          │
          ▼

console.log(ingredients)

          │
          ▼

Prints: []

          │
          ▼

handleSubmit() finishes

          │
          ▼

React updates state

          │
          ▼

ingredients = ["oregano"]

          │
          ▼

Component re-renders

          │
          ▼

UI displays:

• oregano
```

---

# Key Takeaways

- `useState` updates are **asynchronous**.
- Calling `setIngredients()` **does not immediately change** `ingredients`.
- React **schedules** the update and performs it after the current event handler completes.
- `console.log(ingredients)` inside the same function always logs the **current render's state**, not the next one.
- To observe the updated state:
  - Log it during rendering, or
  - Use `useEffect` with `ingredients` as a dependency.

---

# Rule to Remember

> **State updates in React are scheduled, not immediate.**

Whenever you call:

```jsx
setState(newValue)
```

Think:

> "React, please update this state before the next render."

**Not:**

> "Change the value right now."