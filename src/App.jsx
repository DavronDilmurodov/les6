import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Contact } from "./pages/contact";
import { ContactForm } from "./pages/contactForm";
import { ErrorPage } from "./pages/errorPage";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Layout users={users}>
      <Routes>
        <Route path="contact/:id" element={<Contact users={users} />} />
        <Route path="add" element={<ContactForm setUsers={setUsers} />} />
        <Route
          path="edit"
          element={<ContactForm users={users} setUsers={setUsers} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
