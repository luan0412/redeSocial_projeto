import React, {Component} from 'react';
import '../css/Amigos.css';
import 'bootstrap';


class Amigos extends Component {
  constructor(props){
    super(props)
      this.state ={ 
        items:[],
        loading:false
  }
}
componentDidMount(){
    fetch("https://randomuser.me/api/?results=200&registered=upper,lower,18-80")
    .then((Response) => Response.json()).then((Response) => {
      this.setState({
        items:Response.results, 
        loading: true
      })
    })  
}
render(){

  let {items,loading} = this.state 

    if(!loading){
      return(
        <div>
          Loading...
        </div>
      )
    }

    else{


  return (
    <div className='amigos'>
     <React.Fragment>
      <h1>Amigos</h1>
        {items.map(item =>( 
             <div> <h1> {item.name.first} </h1>
              <p> {item.name.last} </p>
              <p> {item.login.username} </p>
              <p> {item.registered.age} </p>
              <p> {item.location.country} </p>
              <img src ={item.picture.medium} alt= {item.name.first} /> </div>

        ))}
        </React.Fragment>
    </div>
  );
}
}
}

export default Amigos;