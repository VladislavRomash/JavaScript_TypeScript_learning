// import React, {useState} from 'react';
//
// type UserType = {
//     name: string
// }
//
// export const User = () => {
//
//     const [user, setUser] = useState<UserType[]>([
//         {name: 'Max'},
//         {name: 'Ann'},
//         {name: 'Nick'},
//     ])
//
//     const onClickAddHandler = () => setUser([{name: 'Igor'}, ...user])
//
//     const onClickDeleteHandler = (id: number) => setUser(user.filter((f, i) => i !== id))
//
//     return (
//         <div>
//             <ul>
//                 {
//                     user.map((m, i) => {
//                         return (
//                             <>
//                                 <li key={i}>
//                                     {m.name}
//                                     <button onClick={() => onClickDeleteHandler(i)}>x</button>
//                                 </li>
//                             </>
//
//                         )
//                     })
//                 }
//             </ul>
//
//             <button onClick={onClickAddHandler}>+</button>
//         </div>
//     );
// };