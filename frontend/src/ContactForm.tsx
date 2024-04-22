import { useState } from "react"


type Props = {}

function ContactForm({}: Props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        //post request to create contact
        const data = {
            firstName,
            lastName,
            email
        }
        const url = 'http://127.0.0.1:5000/create_contact'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const res = await fetch(url, options)
        if (res.status !== 201 && res.status !==200) {
            const data = await res.json()
            alert(data.message)
        }else{
            alert('Contact Created')
        }
    }

  return (
    <form 
        onSubmit={handleSubmit} >
        <div>
            <label htmlFor="firstName"></label>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="lastName"></label>
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email"></label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type="submit">Create Contact</button>

    </form>
  )
}

export default ContactForm