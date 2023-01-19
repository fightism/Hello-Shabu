
import Image from "next/image";
import Pork from "./Pork";
import Meat from "./Meat";
import Veg from "./Veg"
import Drink from "./Drink"

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {PAGE_CHANGE} from '../../Redux/shabuReducer'




export default function Home() {

  const dispatch = useDispatch();
  const { shabu } = useSelector((state) => ({ ...state }));

  let sum = 0;

  shabu.Cart.forEach(element => {
    sum += parseInt(element.qty);
  });

 


  const [menuPage,setMenuPage] = useState("pig")

  function changePage(e, product) {

    setMenuPage(product)
  }
  
    function type()
  {
    switch (menuPage) {
      case "pig":
        return (<Pork/>) 
   
      case "cow":
        return (<Meat/>) 
     
      case "veg":
        return(<Veg/>) 
      
        case "drink":
          return(<Drink/>) 
    }
  }
const cartHave =
  <button className="flex box justify-center  w-full" 
  onClick={() => dispatch(PAGE_CHANGE("summary"))}>
   <h1 className="text-xl sm:text-xl mx-auto">รายการอาหารที่สั่ง &nbsp; {sum} &nbsp;จำนวน</h1>
  </button>

const cartEmpty =
<button className="flex boxdis justify-center  w-full" disabled
onClick={() => dispatch(PAGE_CHANGE("summary"))}>
 <h1 className="text-xl sm:text-xl mx-auto">ยังไม่มีรายการอาหาร กรุณากดสั่งอาหาร</h1>
</button>



 function checkCart(){
  let checkC = shabu.Cart
  if (checkC.length === 0){
    return <div>{cartEmpty}</div>
  }
  else
  return <div>{cartHave}</div>
 }

  return (
    <div>
 
   
      
      <div className="grid overflow-hidden grid-cols-12 grid-rows-1 gap-2 mx-1 ">
    
        <div className="  col-span-2 md:col-span-1 border-r px-1 border-zinc-200 ">
          <a  onClick={(e) => changePage(e, "pig")} className="box mb-3  ">
            <Image
              src="/pork.svg"
              alt="Pork"
              width={150}
              height={150}
              className="w-10 sm:w-20 mx-auto"
            />

            <h1 className="text-xs sm:text-xl">เนื้อหมู</h1>
          </a>

          <a onClick={(e) => changePage(e, "cow")} className="box mb-3">
            <Image
              src="/cow.svg"
              alt="Cow"
              width={150}
              height={150}
              className="w-10 sm:w-20 mx-auto"
            />

            <h1 className="text-xs sm:text-xl">เนื้อวัว</h1>
          </a>

          <a  onClick={(e) => changePage(e, "veg")} className="box mb-3">
            <Image
              src="/veg.svg"
              alt="Veg"
              width={150}
              height={150}
              className="w-10 sm:w-20 mx-auto"
            />

            <h1 className="text-xs sm:text-xl">ผักสด</h1>
          </a>

          <a  onClick={(e) => changePage(e, "drink")} className=" box mb-3">
            <Image
              src="/drink.svg"
              alt="Drink"
              width={150}
              height={150}
              className="w-10 sm:w-20 mx-auto"
            />

            <h1 className="text-xs sm:text-xl">เครื่องดื่ม</h1>
          </a>

        </div>



        <div className="  col-span-10 md:col-span-11">{type()}</div>

      </div>


 

      {checkCart()}
     </div>



      
   
  );
}
