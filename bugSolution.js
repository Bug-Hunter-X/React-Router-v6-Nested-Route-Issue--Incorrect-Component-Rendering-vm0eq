```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLayout />}>
          <Route path="contact" element={<Contact />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> };

function AboutLayout() {
  let location = useLocation();
  return (
    <div>
      <h2>About</h2>
      <p>Location: {location.pathname}</p>
      <Outlet/>
    </div>
  );
}

function Contact() { return <div>Contact</div> };

export default App;
```