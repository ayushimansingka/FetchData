import React, {Component} from 'react';

class Try extends Component
{
    constructor(props)
    {
        super(props);
        this.state={results:[]};
    }
     componentDidMount()
     {
            fetch('https://api.github.com/search/repositories?q=react')
            .then((response)=>response.json())
            .then((responsejson)=> {
            this.setState({results:responsejson.items[5]})
          
            })
     }
        
    render()
    {
            
            return(
             <ul>

              <li>ID is {this.state.results.id}</li>
              <li>Full name is {this.state.results.full_name}</li>
              <li>Description is {this.state.results.description}</li>
          
        </ul>
    )
           
       

    }
}

export default Try;