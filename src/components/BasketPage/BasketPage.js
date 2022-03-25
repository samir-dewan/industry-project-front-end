// import React, {useState, useEffect} from "react";
// import axios from "axios";

//organise by colour, material

// const BasketPage = (routerProps) => {
//   const url = routerProps.match.url;
//   console.log(url);
//   	useEffect(() => {
//       axios
//         .get(GET_SINGLE_INVENTORY_API_URL(id))
//         .then(console.log(id))
//         .then((res) => setData(res.data))
//         .catch(() => {
//           console.log("Trouble connecting with the server");
//           return (
//             <>
//               <div className="list-error">
//                 We apologise. There has been a problem retrieving the data.
//               </div>
//             </>
//           );
//         });
//     }, [id]);
//   return (
//     <>
//       <List
//         title="Inventory"
//         itemType="Item"
//         apiUrl={GET_INVENTORIES_API_URL}
//         url={url}
//       />
//     </>
//   );
// };

// export default BasketPage;