import { BrowserRouter } from 'react-router-dom';
import { ref, set, getDatabase, onValue} from 'firebase/database'
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Router from './router/Router';
import db  from './Firebase'
import Home from './pages/Home';
function App() {
  const [user,setUser] = useState([])
  let [userCurrent,setUsercurrent] = useState("");
  const handleUsercurrent = (u)=>{
    setUsercurrent(u);
    console.log(u);
  }
  const [checkLogin,setChecklogin] = useState(false)
  const handleChecklogin = ()=>{
    setChecklogin(!checkLogin);
    console.log("dang nhap thanh cong")
  }
  useEffect(()=>{
// Get database 
  onValue((ref(db,'user')),(snapshot)=>{
    const data = snapshot.val();
    const {id,name} = data;
    const listuser = Object.values(data)
    listuser.map(l=>{
      setUser(pre=>[...pre,l])
    })
  })
  },[])

  return (   
    <BrowserRouter>
      {/* <Router user={user} handleUsercurrent={handleUsercurrent} userCurrent={userCurrent}> */}
        {checkLogin == false&&<Login user={user} handleUsercurrent={handleUsercurrent} handleChecklogin={handleChecklogin}/>}
        <Home userCurrent={userCurrent} user={user} handleChecklogin={handleChecklogin}/>
      {/* </Router> */}
    </BrowserRouter>
      
  );
}

export default App;
