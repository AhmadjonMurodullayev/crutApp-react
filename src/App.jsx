// import { useState } from "react";
// import GlobalModal from "./components/modal";
// const App = () => {
//   const [data, setData] = useState([]);
//   const [update, setUpdate] = useState({});
//   const [open, setOpen] = useState(false);
//   const deleteData = (id) => {
//     let new_data = data.filter((item) => item.id !== id);
//     setData([...new_data]);
//   };
//   const updateData = (item) => {
//     console.log(item);
//     setUpdate(item);
//     setOpen(true);
//   };


//   return (
//     <div className="container">
//       <GlobalModal
//         open={open}
//         toggle={()=>setOpen(false)}
//         date={data}
//         setData={setData}
//         update={update}
//       >
//         <div className="row mt-3">
//           <div className="col-md-3 offset-1">
//             <button className="btn btn-succsess" onClick={() => setOpen(true)}>
//               Open modal
//             </button>
//           </div>
//             <div className="col-md-8 offset-2">
//               <table className="table table-bordered table-hover">
//                 <thead>
//                   <tr>
//                     <th>T/R</th>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Phone</th>
//                     <th>Address</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {
//                     data.map((item,index)=>(
//                       <tr key={index} >
//                         <td>{index + 1}</td>
//                         <td>{item.name}</td>
//                         <td>{item.age}</td>
//                         <td>{item.phone}</td>
//                         <td>{item.address}</td>
//                         <td>
//                           <button onClick={()=>deleteData(item.id)}>delet</button>
//                           <button onClick={()=>updateData(item)}>edit</button>
//                         </td>
//                       </tr>
//                     ))
//                   }
//                 </tbody>
//               </table>
//             </div>
//         </div>
//       </GlobalModal>
//     </div>
//   );
// };

// export default App;


import { useState } from "react";
import GlobalModal from "./components/modal";

const App = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState({});
  const [open, setOpen] = useState(false);

  const deleteData = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const updateData = (item) => {
    setUpdate(item);
    setOpen(true);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <GlobalModal
        open={open}
        toggle={() => setOpen(false)}
        data={data}
        setData={setData}
        update={update}
      />
      <div className="flex justify-end mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300" onClick={() => setOpen(true)}>
          Add New
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead >
            <tr>
              <th className="px-5 py-3 text-left">T/R</th>
              <th className="px-5 py-3 text-left">Name</th>
              <th className="px-5 py-3 text-left">Age</th>
              <th className="px-5 py-3 text-left">Phone</th>
              <th className="px-5 py-3 text-left">Address</th>
              <th className="px-5 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item, index) => (
              <tr className="hover:bg-gray-100" key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-5 py-4">{item.name}</td>
                <td className="px-6 py-4 ">{item.age}</td>
                <td className="px-6 py-4 ">{item.phone}</td>
                <td className="px-6 py-4 ">{item.address}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-red-600 transition duration-300 mr-2"
                    onClick={() => deleteData(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-yellow-600 transition duration-300"
                    onClick={() => updateData(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
