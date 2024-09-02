import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import { useDispatch } from "react-redux";
import api from "./utils/api";
import { useEffect } from "react";
import { setJobs, setLoading, setError } from "./app/slices/jobSlice";

const App = () => {
  const dispatch = useDispatch();

  const getJobs = () => {
    //loading durumunu çalıştır
    dispatch(setLoading());
    //istek başarılı olursa slice içerisindeki state i güncellemek için setJobs aksiyonunu çalıştır ve içerisini payloadına veriyi gönder
    api
      .get("/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      //başarısız olursa setError aksiyonunu çalıştır ve payloadına veriyi gönder
      .catch((err) => dispatch(setError(err.message)));
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList  retry={getJobs}/>} />
        <Route path="/new" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
