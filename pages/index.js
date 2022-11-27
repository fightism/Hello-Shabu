
import Image from "next/image";
import List from "./component/List"
import Main from "./component/Main"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Popup from "./component/Popup";
import PopupE from "./component/PopupE";


export default function Home() {

  const { shabu } = useSelector((state) => ({ ...state }));

  let ppage = shabu.Page.currentPage
  let ppp = shabu.Popup
  



  function switchYo(){
    switch (ppage) {
      case "main":
        return (<Main/>)
     
      case "summary":
        return (<List/>);
     }
  }

  function popupYo(){
    switch (ppp) {
      case "p1":
        return (<Popup/>)
     
      case "p2":
        return (<PopupE/>);

        case "p3":
          return (null);
     }
  }



  return (
    <div>
     {popupYo()}
      <div className="flex justify-center p-5">
        <Image
          src="/logo_hello.png"
          alt="Logo Hello Shabu"
          width={500}
          height={500}
        />
        
      </div> 
      {/* ----------------โลโก้ร้าน--------------- */}
   {switchYo()}
      
    
     
     </div>



      
   
  );
}
