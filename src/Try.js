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
            this.setState({results:responsejson.items})
            })
     }
        
    render()
    {
            
            return(
             <ul>
          {
            
            this.state.results.map((item)=> {
              return <li>{item.name}</li>
            })
            
          }
        </ul>
    )
           
       

    }
}

export default Try;