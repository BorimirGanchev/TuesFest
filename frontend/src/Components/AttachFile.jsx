import React from "react"

export default function AddDocument(props){
    const [formData, setFormData] = React.useState(
            {
                firstName: "", 
                lastName: "", 
                type:"",
            }
        );
        function handleChange(event){
        
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <div className="">
            <input type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}/>
        </div>
    )
}