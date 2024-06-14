import { useEffect, useState } from "react";
import Header from "./components/Header";
import Mapview from "./pages/Mapview";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlight } from "./redux/actions";
import Modal from "./components/Modal";


function App() {
  //!harita görünümü aktif mi
  const [isMapView, setIsMapView] = useState(true);
  const[detailId, setDetailId] = useState(null);
  
const dispatch =  useDispatch();
 useEffect(()=> {
  dispatch(getFlight());
 },[]);

  return (
    <div>
      <Header/>
      <div className="view-buttons">
      <button
          onClick={() => setIsMapView(true)}
          className={isMapView ? "active" : ""}
        >
          Harita Görünümü
        </button>
        <button
          className={isMapView ? "" : "active"}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
{isMapView ? <Mapview setDetailId={setDetailId}/> : <ListView setDetailId={setDetailId}/>}
      {detailId && <Modal detailId={detailId} 
      close={()=> setDetailId(null)}/>}
    </div>
  )
}

export default App;
