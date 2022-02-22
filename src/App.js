import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ref, set, getDatabase, onValue} from 'firebase/database'
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Router from './router/Router';
import db  from './Firebase'
import Home from './pages/Home';
import Notfound from './components/Notfound';
import Application from './pages/Application';
import Header from './components/Header';
function App() {
//   const [user,setUser] = useState([])
//   let [userCurrent,setUsercurrent] = useState("");
//   const handleUsercurrent = (u)=>{
//     setUsercurrent(u);
//     console.log(u);
//   }
//   const [checkLogin,setChecklogin] = useState(false)
//   const handleChecklogin = ()=>{
//     setChecklogin(!checkLogin);
//     console.log("dang nhap thanh cong")
//   }
//   useEffect(()=>{
// // Get database 
//   onValue((ref(db,'user')),(snapshot)=>{
//     const data = snapshot.val();
//     const {id,name} = data;
//     const listuser = Object.values(data)
//     listuser.map(l=>{
//       setUser(pre=>[...pre,l])
//     })
//   })
//   },[])

  return (   
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Router user={user} handleUsercurrent={handleUsercurrent} userCurrent={userCurrent}> */}
        {/* <Router> */}
        {/* {checkLogin === false&&<Login user={user} handleUsercurrent={handleUsercurrent} handleChecklogin={handleChecklogin}/>}
        {
        checkLogin===true&&<Home userCurrent={userCurrent} user={user} handleChecklogin={handleChecklogin}/>
        } */}
        {/* </Router> */}
        <Application />
    </BrowserRouter>
    // <BrowserRouter>
  );
}

export default App;
