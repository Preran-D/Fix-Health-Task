import ConsultForm from "./Components/consulation/consultForm";
import { Header } from "./Components/header/newHeader/siteHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonial from "./Components/testimonial/testimonial";

function App(){
  return <div>
    <Header></Header>
    <ConsultForm></ConsultForm>
    <Testimonial></Testimonial>
  </div>
}


export default App;