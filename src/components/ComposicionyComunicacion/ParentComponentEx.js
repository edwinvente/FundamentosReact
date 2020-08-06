import React, { Component } from 'react'

const Header = () => {
    const subtitleStyles = {
        fontWeight: 'bold'
    }

    const headerStyles = {
        margin: '0.6em',
        borderRadius: '0.3em',
        border: '1px solid #d2d2d2',
        padding: '2em 0.4em',
        fontFamily: 'monospace',
        fontSize: '17px',
        textAlign: 'center'
    }

    return (
        <header style={headerStyles}>
            <div>
                ( Hermanos )
      </div>
            <div style={subtitleStyles}>
                Parent Component
        <span role='img' aria-label='flame' >
                    🔥
        </span>
            </div>
        </header>
    )
}

const boxStyles = {
    padding: '0.5em',
    margin: ' 0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAlign: 'center'
}

const blueStyles = {
    ...boxStyles,
    border: '1px solid blue',
}

const redStyles = {
    ...boxStyles,
    border: '1px solid red',
}


class ComponentA extends Component {
    render() {
        const { num } = this.props

        return (
            <div style={blueStyles}>
                <h2>Component A</h2>
                <button onClick={this.props.addA}>
                    Conteo ({num})
                </button>
            </div>
        )
    }
}

class ComponentB extends Component {
    render() {
        const { num } = this.props

        return (
            <div style={redStyles}>
                <h2>Component B</h2>
                <button onClick={this.props.addA}>
                    Conteo ({num})
                </button>
            </div>
        )
    }
}

class App extends Component {

    state = {
        countA: 0,
        countB: 0
    }

    handleAddA = () =>{
        this.setState(state => ({
            countA: state.countA + 1
        }))
    }

    handleAddB = () =>{
        this.setState(state => ({
            countB: state.countB + 2
        }))
    }

    render() {

        const { countA, countB } = this.state

        return (
            <div style={boxStyles}>
                <Header />
                <ComponentA
                    num={countA}
                    addA={this.handleAddB}
                />
                <ComponentB
                    num={countB}
                    addA={this.handleAddA}
                />
            </div>
        )
    }
}

export default App