import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {DRINK_PLUS,DRINK_MINUS,ADD_CART} from '../../Redux/shabuReducer'
export default function Drink() {

  const dispatch = useDispatch();
  const { shabu } = useSelector((state) => ({ ...state }));
  


  
  function sent(e) {
    const qtyMenu = e.target.value
    const idMenu = e.target.id
    const statusCheck = e.target.checked
    const product_name = e.target.name
    
    
    
    
    const orderMenu ={
      id:idMenu,
      type: "drink",
      name:product_name,
      qty: qtyMenu,
      statusCheck,
    }
    
    
    
        if(e.target.checked){
          dispatch(ADD_CART(orderMenu));
       
        }
       else{
        
        dispatch(ADD_CART(orderMenu));
     
       }
      }
    

const allDrink = shabu.DrinkDetail.map((drinkMenu,key)=>{
return(
<div key={key}>

      <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-3">
        <div className="flex justify-between">
          <div className="flex flex-row align-middle ">
            {" "}
            <Image
              src={drinkMenu.srcmenu}
              alt="Pork"
              width={150}
              height={150}
              className="w-20 sm:w-44 h-20 sm:h-44 my-auto ml-1"
            />
            <div className="flex flex-col  ">
              
              <h1 className=" flex-initial w-32 md:w-60 flex-row text-1xl sm:text-4xl mt-3 sm:mt-8 ml-2  tracking-tight text-gray-900 dark:text-white">
                {drinkMenu.product_name}
              </h1>
              
              <div className="flex flex-initial w-13 sm:w-32 flex-row justify-around shadow-inner items-center h-30 w-13 py-1  my-3 sm:my-6 ml-2 font-bold rounded-lg bg-slate-200 ">
                <a
                  href="#"
                  onClick={() => dispatch(DRINK_MINUS(drinkMenu))}
                >
                  -
                </a>

                {drinkMenu.qty}

                <a
                  href="#"
                  onClick={() => dispatch(DRINK_PLUS(drinkMenu))}
                >
                  +
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
          <input
              type="checkbox"
              id={drinkMenu.id}
              name={drinkMenu.product_name}
              value={drinkMenu.qty}
              checked={drinkMenu.check}
              className="peer hidden"
              onChange={(e) => sent(e,{drinkMenu})}
            
            />
            <label
              htmlFor={drinkMenu.id}
              className=" h-full select-none cursor-pointer  rounded-lg py-10 md:py-24 px-2
        border-2
        bg-orange-400 text-slate-100    
           peer-checked:bg-orange-600 peer-checked:hover:bg-ornage-400 peer-checked:border-gray-200 peer-checked:text-slate-100 font-medium"
            >
            {drinkMenu.textButton}
            </label>
            
          </div>
        </div>
      </div>
    
</div>
)

})



  return (
    <div>
    {allDrink}
    </div>
  );
}
