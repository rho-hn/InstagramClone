import "./App.css";
import Post from "./Post";
import React, { useState, useEffect } from "react";
import { db , auth } from "./firebase";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button , Input } from '@material-ui/core';





function App() {
 
  const [modalStyle]= useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open,setOpen]= useState(false);
  const [username,setUsername]= useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
 const [user,setUser]= useState(null);


useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
if (authUser){
  //user has logged in 
 setUser(authUser);
} else{
  //user has logged out
  setUser(null);
}
})
},[user,username]);


const useStyles = makeStyles((theme)=> ({
  paper: {
  position: 'absolute',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  bprder: theme.shadows[5],
  padding: theme.spacing(2,4,3),
}
}))

const classes = useStyles();

  function getModalStyle(){
  const top = '50%';
  const left = '50%';

  return {
    top: '$(top)%',
    left: '$(left)%',
    transform: 'translate(-${top}%,-${left}%)',
  }
  }

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);


  const signUp= (event)=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser)=> {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((err)=> alert(err.message))
  }
  
  
  return (
    <div className="app">
    <Modal
    open={open}
    onClose={()=> setOpen(false)}
    >
    <div style={modalStyle} className = {classes.paper}>
    <center>
    <h5> instagram </h5>
    <form className= 'app___signup'>
    <Input
    type = "text"
    placeholder = "username"
    value = {username}
    onChange = {(e)=>setUsername(e.target.value)}
    />
     <Input
    type = 'text'
    placeholder = 'email'
    value = {email}
    onChange = {(e)=>setEmail(e.target.value)}
    />
     <Input
    type = 'text'
    placeholder = 'password'
    value = {password}
    onChange = {(e)=>setPassword(e.target.value)}
    />
    <Button  type='submit' onClick= {signUp}> Sign Up </Button>
    </form>
    </center>
    </div>
    </Modal>

          <div className="app__header">
                <h3>instagram</h3>
        {/* <img
          className="app__headerImage"
          src="https://source.instagram.com/static/?instagram"
          alt=""
        /> */}
        { user ? (
          <Button onClick = {()=> auth.signOut()}>Log Out</Button> 
        ):(
        <Button onClick= {()=> setOpen(true)}>Sign Up </Button>
        )}
        
      </div>
      {posts.map(({id, post}) => (
        <Post
          key={id}
          imageUrl={post.imageUrl}
          userName={post.userName}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
