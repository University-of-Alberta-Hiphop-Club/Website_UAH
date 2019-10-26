import React, {Component} from 'react';

class PopUp extends Component {
  
  constructor(props){
      super(props);
      this.state = {on:true}
  }
  
  toggle(){
    this.setState({on:!this.state.on});    
  }
  
  render(){
  return (
    <div>
    
        {this.state.on?(<p>{this.props.title}</p>):(<p>Bye</p>)}
        <button onClick={this.toggle.bind(this)}>Toggle</button>
        
    </div>
  );
  }
}

export default PopUp;
