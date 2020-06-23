import React from 'react'

class Mutacion extends React.Component{
    state = {
      video: {
          title: 'Super Video',
          likes: 0
      }
    }  
  
    add = () => {
        this.setState((state) => ({
            video:{
                ...state.video,
                likes: state.video.likes + 1
            }
        })) 
    }

    render(){

      return (
        <div>
            <h1> {this.state.video.title} </h1>
            <button onClick={this.add}>
                likes: ({this.state.video.likes})
            </button>
        </div>
      )
    }
  }
  
  export default Mutacion