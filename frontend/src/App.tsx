import { useEffect, useState } from "react"
import ContactForm from "./ContactForm"
import ContactList from "./ContactList"
import axios from "axios";


type UserData = {
  id:number,
  firstName : string
  lastName:string
  email:string
}

// function App() {
//   const [contacts,setcontacts] = useState<UserData[]>([])

//   const fetchContacts = async () => {
//     const response = await fetch('http://127.0.0.1:5000/contacts')
//     const data = await response.json()
//     setcontacts(data)
//   }

//   useEffect(() => {
//     fetchContacts()
    
//   },[])

//   return (
//     <div>
//       <h1>Contacts</h1>
//       {contacts.map(contact => (
//         <div key={contact.id}>
//           <h2>{contact.firstName} {contact.lastName}</h2>
//           <p>{contact.email}</p>
//         </div>
//       ))}
//       <h1>Contact Form</h1>
//       <ContactForm/>
//     </div>
//   )
// }

// export default App


function App() {
  const [contacts, setContacts] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/contacts');
      
      setContacts(response.data);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ContactList contacts={contacts}/>
      <h1>Contact Form</h1>
      <ContactForm/>
    </div>
  );
}

export default App;
