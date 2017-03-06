import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: []
    }

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    fetch('https://api.github.com/search/repositories?q='+this.state.searchTerm)
    .then((response)=> response.json()) 
    .then((responseJson)=> {
      console.log(responseJson.items);
      this.setState({
        results: responseJson.items
      })
    })
    .catch((error)=> {
      console.error(error);
      
    })
  }
  
  handleChange(e)
  {
    this.setState({searchTerm: e.target.value});

  }

  

  
  
  render() 
  {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <h3> Enter repository name to search</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
        <button> Search </button>
        </form>
        </div>
        <p className="App-intro">
          Now we will fetch a few results from the gihutb api and display them here on our page.
        </p>
         <ShowResults items={this.state.results} />
      </div>
    );
  }
}

class ShowResults extends Component{

  render()
  {
    return(
      <ul>
          {
            (this.props.items.length>0) ? 
            this.props.items.map((item)=> {
              return <li>{item.name}</li>
            })
            :
            <div>No results!</div>
          }
        </ul>
    )
  }
}

export default App;
