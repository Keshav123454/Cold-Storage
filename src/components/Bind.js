import '../App.css';
import Company from './Company';
import Header from './Header';
import Storage from './Storage';
import Management from './Management'
import Footer from './Footer';


function Bind() {
  return (
    <div class="App">
       <Header />
      <Company />
      <Storage />
      <Management />
      <Footer />
      
    </div>
    
  );
}

export default Bind;
