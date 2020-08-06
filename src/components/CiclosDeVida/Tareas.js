import React, { Component, PureComponent } from 'react'

const itemStyles = {
    padding: '1em',
    borderBottom: '1px solid #CCC',
    marginTop: '0.4em'
}

class Item extends PureComponent{
    
    handleClick = () =>{
        this.props.onRemove(this.props.item)
    }

    /* shouldComponentUpdate(nextProps, nextState){
        return nextProps.item.id !== this.props.item.id
    } */
    
    render(){

        const { item } = this.props

        console.log('render ' + item.txt)

        return(
            <div style={itemStyles}>
                <button onClick={this.handleClick}>
                    x
                </button>
                <span>
                    {item.txt}
                </span>
            </div>
        )
    }
}

class App extends Component {

    state = {
        list: []
    }

    addTask = (e) => {
        e.preventDefault()

        const txt = e.target[0].value
        const id = Math.random().toString(16)

        const pendiente = { txt, id }

        this.setState(state => ({
            list: [
                ...state.list,
                pendiente
            ]
        }))

        e.target[0].value = ''
    }

    eliminar = (item) =>{
        this.setState(state => ({
            list: state.list.filter(_item =>{
                return item.id !== _item.id
            })
        }))
    }

    render() {
        return (
            <div>
                <h1>App de tareas pendientes</h1>
                <form onSubmit={this.addTask}>
                    <input type='text' />
                    <button>
                        Aañdir tarea
                    </button>
                </form>
                <div>
                    {this.state.list.map(item => (
                        <Item 
                            key={item.id}
                            item={item}
                            onRemove={this.eliminar}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App