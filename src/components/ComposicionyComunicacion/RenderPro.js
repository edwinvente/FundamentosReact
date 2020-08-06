import React, {Component} from 'react'

const boxStyles = {
    border:'1px solid gray',
    margin:'0.3em',
    padding:'0.3em',
    borderRadius:'0.3em',
    textAlign:'center'
}

const Header = () => {
    return(
        <div style={boxStyles}>
            <h1>Render Props</h1>
        </div>
    )
}

class List extends Component{
    render(){

        const {list, render} = this.props

        return(
            <div>
                <ul>
                    {list.map((item, index) => {
                        
                        if (render) {
                            return render(item, index)
                        }
                        
                        return(
                            <li key={item.name}>
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

class App extends Component{
    
    state = {
        frutas:[
            {name:'Mango', price:3200},
            {name:'Fresa', price:2800},
            {name:'Sandia', price:1000},
            {name:'Manzana', price:3500}
        ]
    }
    
    render(){

        const {frutas} = this.state

        return(
            <div style={boxStyles}>
                <Header />
                <List 
                    list={frutas}
                    render={(data, index) => (
                        <div key={index}>
                            <h1> {index + 1} ***</h1>
                            <p>
                                {data.name} - {data.price}
                            </p>
                        </div>
                    )}
                />
            </div>
        )
    }
}

export default App