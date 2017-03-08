import React, {Component} from 'react';

class Try extends Component
{
    constructor(props)
    {
        super(props);
        this.state={results:[]};
        this.renderOwner=this.renderOwner.bind(this);
    }
     componentDidMount()
     {
            fetch('https://api.github.com/search/repositories?q=react')
            .then((response)=>response.json())
            .then((responsejson)=> {
            this.setState({results:responsejson.items[1]})
          console.log(this.state.results.owner.avatar_url);
            })
     }
    renderOwner()
    {
        
    }
    render()
    {
            
            return(
             <ul>

              <li>ID is {this.state.results.id}</li>
              <li>Full name is {this.state.results.full_name}</li>
              <li>Description is {this.state.results.description}</li>
             <ul>
                 {
                    (this.state.results.length>0)?
                        this.state.results.owner.map(function(item) {
                             return <li>{item.avatar_url}</li>
                 })
                 :
                 <div>Wait for results</div>
                 }
             </ul>
        </ul>
    )
           
       

    }
}

export default Try;