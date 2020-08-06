import React, { Component } from 'react'
import faker from 'faker'

const chatStyle = {
    width: 230,
    height: 300,
    border: '1px solid gray',
    overflow: 'auto',
    fontFamily: 'monospace'
}

const messageStyle = {
    padding: '1em',
    borderBottom: '1px solid #DDD'
}

const avatarStyle = {
    width: 50,
    height: 50,
    borderRadius: '50%'
}

class Chat extends Component {

    box = React.createRef()

    getSnapshotBeforeUpdate(){
        const box = this.box.current
        if (box.scrollTop + box.scrollHeight >= box.scrollHeight) {
            return true
        }

        return false
    }

    componentDidUpdate(prevProps, prevState, snatshop){
        const box = this.box.current

        if (snatshop) {
            box.scrollTop = box.scrollHeight
        }

    }

    render() {
        return (
            <div 
                style={chatStyle}
                ref={this.box}
            >
                {this.props.list.map(item => (
                    <div
                        style={messageStyle}
                        key={item.id}
                    >
                        <p>{item.message}</p>
                        <div>
                            {item.name}
                        </div>
                        <img
                            src={item.avatar}
                            alt={item.name}
                            style={avatarStyle}
                        />
                    </div>
                ))

                }
            </div>
        )
    }
}

class App extends Component {

    state = {
        list: []
    }

    addMessage = () => {
        //crear mensaje falso
        //Agregarlo a la lista
        const message = {
            id: faker.random.uuid(),
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            message: faker.hacker.phrase()
        }

        console.log(message);

        this.setState(state => ({
            list: [
                ...state.list,
                message
            ]
        }), () => {
            //console.log(this.state.list)
        })


    }

    render() {
        return (
            <div>
                <h1>getSnapshotBeforeUpdate method</h1>
                <button onClick={this.addMessage}>
                    NEW MESSAGE
                </button>
                <Chat
                    list={this.state.list}
                />
            </div>
        )
    }
}

export default App