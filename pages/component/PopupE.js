import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdArrowBackIos } from 'react-icons/md';
import {BACK_RETURN} from '../../Redux/shabuReducer'


export default function PopupE() {
  const dispatch = useDispatch();
  const { shabu } = useSelector((state) => ({ ...state }));
    return(
        <div className="bgBlack">
       <div className="flex centered w-9/12 sm:w-5/12  text-white text-center">
<div className="w-full h-full  bg-white rounded-xl text-black justify-center">
    
<Image
className="mx-auto"
          src="/error.gif"
          alt="wait"
          width={200}
          height={200}
        />
    
    <p className=" text-xl sm:text-3xl mb-3">ไม่มีรายการอาหาร</p>
    <button className="text-xl sm:text-2xl   bg-orange-400 hover:bg-orange-500 text-zinc-900
  border-b-4 border-orange-700 hover:border-orange-600 
   active:border-orange-400 active:bg-orange-300 active:shadow-lg transition duration-150 ease-in-out
  focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 focus:text-slate-100 rounded-xl my-5 w-2/6 p-2 mx-auto" onClick={()=>dispatch(BACK_RETURN(shabu.Cart))}>ตกลง</button>
    </div>

    

       </div>
        </div>
    )
}