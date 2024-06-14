import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constans";


export const getFlight = createAsyncThunk("flights/getFlights", async () => {
    //!api isteği at
 const res = await axios.request(options);
 //!dizi içerisinde ki dizileri nesneye çevir
 const formetted = res.data.aircraft.map((item)=> ({
    id: item [0], 
    code: item[1], 
    lat: item[2] ,
    lng: item[3],

}));
//! aksiyonun payloadı olarak paylodı formatlanan veriyi ekle
return formetted
})