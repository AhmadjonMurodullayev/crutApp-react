// import React, { useState } from "react";
// import {nanoid} from 'nanoid'
// import { Modal , ModalBody, ModalHeader, ModalFooter } from "reactstrap";
// const GlobalModal = (props)=>{
//      const {open, toggle, data,setData, update} = props
//      const [form,setForm] = useState({})
//      const handleChange = (event)=>{
//       const {name,value} = event.target
//       setForm({...form, [name]: value})
//     }
//      const handleSubmit =(event)=>{
//         event.preventDefault()
//         if(update.id){
//             data.forEach(element => {
//                 if(element.id === update.id){
//                     element.name = form.name
//                     element.age = form.age
//                     element.phone = form.phone
//                     element.address = form.address
//                 }
//             });
//         }else{
//             let paload = {...form, id: nanoid()}
//             let nuw_data = [...data,{...paload}]
//             setData([...nuw_data])
//         }
//      }

//   return (
//     <Modal isOpen={open} toggle={toggle}>
//       <ModalHeader>
//         <h2>Add sutudent</h2>
//       </ModalHeader>
//       <ModalBody>
//         <form onSubmit={handleSubmit} id="form">
//             <input  type="text" defaultValue={update.name} onChange={handleChange} name="name" placeholder="name " />
//             <input  type="text" defaultValue={update.name} onChange={handleChange} name="age" placeholder="age " />
//             <input  type="text" defaultValue={update.name} onChange={handleChange} name="phone" placeholder="phone " />
//             <input  type="text" defaultValue={update.name} onChange={handleChange} name="adrress" placeholder="adress " />
//         </form>
//       </ModalBody>
//       <ModalFooter>
//         <button className="btn btn-success" type="submit" form="form">save</button>

//       </ModalFooter>
//     </Modal>
//   );
// }

// export default GlobalModal;

import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const GlobalModal = ({ open, toggle, data, setData, update }) => {
  const [form, setForm] = useState({ name: "", age: "", phone: "", address: "" });

  useEffect(() => {
    if (update.id) {
      setForm({
        name: update.name,
        age: update.age,
        phone: update.phone,
        address: update.address,
      });
    } else {
      setForm({ name: "", age: "", phone: "", address: "" });
    }
  }, [update]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (update.id) {
      const updatedData = data.map((item) =>
        item.id === update.id ? { ...item, ...form } : item
      );
      setData(updatedData);
    } else {
      const newData = [...data, { ...form, id: nanoid() }];
      setData(newData);
    }
    toggle();
  };

  return (
    <Modal
      isOpen={open}
      toggle={toggle}
      className="max-w-md mx-auto rounded-lg shadow-lg"
    >
      <ModalHeader toggle={toggle} className="bg-gray-800 text-white">
        <h2 className="text-lg">{update.id ? "Edit Student" : "Add Student"}</h2>
      </ModalHeader>
      <ModalBody className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={handleChange}
              name="name"
              id="name"
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="text-sm font-semibold text-gray-700">Age</label>
            <input
              type="text"
              value={form.age}
              onChange={handleChange}
              name="age"
              id="age"
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter age"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="text"
              value={form.phone}
              onChange={handleChange}
              name="phone"
              id="phone"
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm font-semibold text-gray-700">Address</label>
            <input
              type="text"
              value={form.address}
              onChange={handleChange}
              name="address"
              id="address"
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter address"
              required
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter className="space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          type="submit"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          onClick={toggle}
        >
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default GlobalModal;
