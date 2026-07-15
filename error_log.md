# React Error Log

## Error #1

**Date:** 14-Jul-2026

### Error
```
ReferenceError: reactLogo is not defined
```

### Cause
Incorrect import path or variable name mismatch.

### Wrong

```jsx
import reactLogo from "/src/assets/react.svg"
<img src={reactLogo} />
```

### Correct

```jsx
import reactLogo from "../assets/react.svg"
<img src={reactLogo} />
```

### Lesson
Always use the correct relative path and ensure the imported variable name matches the one used in JSX.

---

## Error #2

### Error
```
Failed to resolve import "src/assets/globe.png"
```

### Cause
Used an incorrect import path.

### Wrong

```jsx
import globe from "src/assets/globe.png"
```

### Correct

```jsx
import globe from "../../assets/globe.png"
```

### Lesson
Use relative paths (`../`) for local imports.

---

## Error #3

### Error
```
Cannot read properties of undefined (reading 'src')
```

### Cause
Accessed the wrong prop.

### Wrong

```jsx
<img src={props.src.img} />
```

### Correct

```jsx
<img src={props.img.src} />
```

### Lesson
The property name must match the prop that was passed.

---

## Error #4

### Error
```
Component renders nothing
```

### Cause
Forgot to return JSX.

### Wrong

```jsx
function Header() {
  <>
    <h1>Hello</h1>
  </>
}
```

### Correct

```jsx
function Header() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
```

### Lesson
Components must return JSX.