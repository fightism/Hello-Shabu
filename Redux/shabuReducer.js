import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cart: [],
  Popup: null,
  Page: {
    currentPage: "main",
  },

  PorkDetail: [
    {
      id: "p1",
      product_name: "สันคอหมูสไลด์",
      srcmenu: "/p-slide.jpg",
      qty: 1,
      check: null,
      textButton: "Add"
    },
    {
      id: "p2",
      product_name: "หมูไม้ไผ่",
      srcmenu: "/p-pai.webp",
      qty: 1,
      check: null,
      textButton: "Add"
    },
  ],

  MeatDetail: [
    {
      id: "m1",
      product_name: "เนื้อสันคอ",
      srcmenu: "/m-slide1.jpg",
      qty: 1,
      check: null,
      textButton: "Add"
    },
    {
      id: "m2",
      product_name: "เนื้อวากิว A5",
      srcmenu: "/m-slide2.jpg",
      qty: 1,
      check: null,
      textButton: "Add"
    },
  ],

  VegDetail: [
    {
      id: "v1",
      product_name: "ผักรวมเล็ก",
      srcmenu: "/v2.webp",
      qty: 1,
      check: null,
      textButton: "Add"
    },
    {
      id: "v2",
      product_name: "ผักรวมใหญ่",
      srcmenu: "/v1.webp",
      qty: 1,
      check: null,
      textButton: "Add"
    },
  ],

  DrinkDetail: [
    {
      id: "d1",
      product_name: "น้ำเปล่า",
      srcmenu: "/w1.jpg",
      qty: 1,
      check: null,
      textButton: "Add"
    },
    {
      id: "d2",
      product_name: "โค้ก",
      srcmenu: "/w2.webp",
      qty: 1,
      check: null,
      textButton: "Add"
    },
  ],
};

export const shabuReducer = createSlice({
  name: "shabu",
  initialState: initialState,
  reducers: {
    SENT_ORDER: (state, action) => {
      if (action.payload.length === 0) {
        state.Popup = "p2";
      } else {
        state.Popup = "p1";
      }
    },

    OK_RETURN: (state, action) => {
        state.Popup = "p3";
        state.Page.currentPage = "main"
        state.Cart=[]
        state.PorkDetail.map((x)=>{
          x.qty = 1
          x.check = null
          x.textButton = "Add"
        })
        state.MeatDetail.map((x)=>{
          x.qty = 1
          x.check = null
          x.textButton = "Add"
        })
        state.VegDetail.map((x)=>{
          x.qty = 1
          x.check = null
          x.textButton = "Add"
        })
        state.DrinkDetail.map((x)=>{
          x.qty = 1
          x.check = null
          x.textButton = "Add"
        })

      }
    ,

    BACK_RETURN: (state, action) => {
      state.Popup = "p3";
      state.Page.currentPage = "main"
      state.PorkDetail.map((x)=>{
        x.qty = 1
        x.check = null
        
      })
      state.MeatDetail.map((x)=>{
        x.qty = 1
        x.check = null
      })
      state.VegDetail.map((x)=>{
        x.qty = 1
        x.check = null
      })
      state.DrinkDetail.map((x)=>{
        x.qty = 1
        x.check = null
      })
    },

    PAGE_CHANGE: (state, action) => {
      state.Page.currentPage = action.payload;
    },

    PORK_PLUS: (state, action) => {
      state.PorkDetail.map((pork) => {
        if (pork.id === action.payload.id) {
          pork.qty++;
        }
      });

      state.Cart.map((p) => {
        if (p.id === action.payload.id) {
          p.qty = action.payload.qty + 1;
        }
      });
    },

    PORK_MINUS: (state, action) => {
      state.PorkDetail.map((pork) => {
        if (pork.id === action.payload.id) {
          pork.qty = Math.max(pork.qty - 1, 1);
        }
      });
      state.Cart.map((p) => {
        if (p.id === action.payload.id) {
          p.qty = Math.max(action.payload.qty - 1, 1);
        }
      });
    },

    MEAT_PLUS: (state, action) => {
      state.MeatDetail.map((meat) => {
        if (meat.id === action.payload.id) {
          meat.qty++;
        }
      });

      state.Cart.map((p) => {
        if (p.id === action.payload.id) {
          p.qty = action.payload.qty + 1;
        }
      });
    },
    MEAT_MINUS: (state, action) => {
      state.MeatDetail.map((meat) => {
        if (meat.id === action.payload.id) {
          meat.qty = Math.max(meat.qty - 1, 1);
        }
      });
      state.Cart.map((p) => {
        if (p.id === action.payload.id) {
          p.qty = Math.max(action.payload.qty - 1, 1);
        }
      });
    },
    VEG_PLUS: (state, action) => {
      state.VegDetail.map((vegi) => {
        if (vegi.id === action.payload.id) {
          vegi.qty++;
        }
      })
      
      state.Cart.map((p) => {
        if (p.id === action.payload.id) {
          p.qty = action.payload.qty + 1;
        }
      });
      ;
    },

    VEG_MINUS: (state, action) => {
      state.VegDetail.map((vegi) => {
        if (vegi.id === action.payload.id) {
          vegi.qty = Math.max(vegi.qty - 1, 1);
        }
      });
      state.Cart.map((p) => {
        if (p.id === action.payload.id) {
          p.qty = Math.max(action.payload.qty - 1, 1);
        }
      });
    },

    DRINK_PLUS: (state, action) => {
      state.DrinkDetail.map((drink) => {
        if (drink.id === action.payload.id) {
          drink.qty++;
        }
      })
      
      state.Cart.map((p) => {
        if (p.id === action.payload.id) {
          p.qty = action.payload.qty + 1;
        }
      });;
    },

    DRINK_MINUS: (state, action) => {
      state.DrinkDetail.map((drink) => {
        if (drink.id === action.payload.id) {
          drink.qty = Math.max(drink.qty - 1, 1);
        }
      });
      state.Cart.map((p) => {
        if (p.id === action.payload.id) {
          p.qty = Math.max(action.payload.qty - 1, 1);
        }
      });
    },

    CHANGE_PAGE: (state, action) => {
      state.Page.page = action.payload;
    },
    ADD_CART: (state, action) => {     
      if (action.payload.statusCheck) {
        state.Cart.push(action.payload);
      } else {
        state.Cart = state.Cart.filter(
          (order) => order.id !== action.payload.id
        );
      }

      let result = action.payload.type;
      switch (result) {
        case "pork":
          state.PorkDetail.map((p) => {
            if (p.id === action.payload.id) {
              p.check = action.payload.statusCheck;
              if(p.check){
                p.textButton = "Added"
              }
              else{
                p.textButton = "Add"
              }
              
            }
          });

          break;
        case "meat":
          state.MeatDetail.map((p) => {
            if (p.id === action.payload.id) {
              p.check = action.payload.statusCheck;
              if(p.check){
                p.textButton = "Added"
              }
              else{
                p.textButton = "Add"
              }

            }
          });
          break;
        case "veg":
          state.VegDetail.map((p) => {
            if (p.id === action.payload.id) {
              p.check = action.payload.statusCheck;
              if(p.check){
                p.textButton = "Added"
              }
              else{
                p.textButton = "Add"
              }
            }
          });
          break;
        case "drink":
          state.DrinkDetail.map((p) => {
            if (p.id === action.payload.id) {
              p.check = action.payload.statusCheck;
              if(p.check){
                p.textButton = "Added"
              }
              else{
                p.textButton = "Add"
              }
            }
          });
      }




    },
  },

  REMOVE_ORDER: (state, action) => {
    state.Cart = state.Cart.filter((order) => order.id !== action.payload.id);
  },
});
export const {
  PORK_PLUS,
  PORK_MINUS,
  MEAT_PLUS,
  MEAT_MINUS,
  VEG_PLUS,
  VEG_MINUS,
  DRINK_PLUS,
  DRINK_MINUS,
  ADD_CART,
  REMOVE_ORDER,
  PAGE_CHANGE,
  SENT_ORDER,
  OK_RETURN,
  BACK_RETURN
} = shabuReducer.actions;
export default shabuReducer.reducer;
