import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdArrowBackIos } from 'react-icons/md';
import {PAGE_CHANGE,SENT_ORDER} from '../../Redux/shabuReducer'




export default function Drink() {

  const dispatch = useDispatch();
  const { shabu } = useSelector((state) => ({ ...state }));



   
  
 




  const allMenu = shabu.Cart.map((all,key)=>{
    return(
     
            <tr key={key}>
      <td className="text-1xl sm:text-3xl">{all.name}</td>

      <td className="text-center text-1xl sm:text-3xl">{all.qty}</td>
     
    </tr>
  
    )

  })
  
  

  return (
    <div>
      <a href="#" onClick={() => dispatch(PAGE_CHANGE("main"))} className="flex text-lg sm:text-2xl mx-auto mb-5 ml-4 align-baseline text-orange-700 underline-offset-2
"><MdArrowBackIos size={20}/>เพิ่มรายการ</a>
    <div className="mx-3">
  


<div className="text-2xl sm:text-5xl mx-auto text-center mb-3 underline">รายการอาหารทั้งหมด</div>

<table className="table-auto w-full  my-3 sm:my-10  text-lg sm:text-xl">
  <thead>
    <tr >
      <th className="text-start">เมนู</th>
      <th >จำนวน</th>
      
    </tr>
  </thead>
  <tbody>
  {allMenu}

  </tbody>
</table>

    </div>
    <button className="flex box justify-center  mt-5 w-full  " onClick={()=>dispatch(SENT_ORDER(shabu.Cart))}>
     
    <h1 className="text-xl sm:text-2xl mx-auto">ยืนยันการสั่งอาหาร</h1>
   </button>

   </div>
  );
}
