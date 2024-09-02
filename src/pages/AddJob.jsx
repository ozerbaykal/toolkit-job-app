import AutoInput from "../components/AutoInput";
import Select from "../components/Select";
import { statusOpt, typeOpt } from "./../constans/";
import SubmitButton from "../components/SubmitButton";
import { v4 } from "uuid";
import api from "../utils/api";
import { useDispatch } from "react-redux";
//import { setLoading } from "../app/slices/jobSlice";
import { createJob } from "../app/slices/jobSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    // formdata oluştur
    const formData = new FormData(e.target);
    //inputtaki verilerden bir nesne oluşturur
    const newJobData = Object.fromEntries(formData.entries());

    newJobData.id = v4();
    newJobData.date = Date.now();
    //oluşturduğumuz yapıyı api ye kaydet
    api
      .post("/jobs", newJobData).then(()=>{
        toast.success("iş başarılı bir şekilde eklendi")
        //store a veriyi kaydet
        dispatch(createJob(newJobData));
       //anasayfaya yönlendir
        navigate("/");
      }).catch(()=>toast.error("iş eklenirken hata oluştu"));
     
      
  };

  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>

        <form onSubmit={handleSubmit}>
          <AutoInput label="Pozisyon" name="position" />
          <AutoInput label="Şirket" name="company" />
          <AutoInput label="Lokasyon" name="location" />

          <Select label="Durum" options={statusOpt} name="status" />
          <Select label="Tür" options={typeOpt} name={"type"} />
          <div>
            <SubmitButton text="Oluştur" type="submit" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
