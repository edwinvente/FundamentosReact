import React, {Component} from 'react'

class Select extends Component{

    state = {
        techs:['Vanilla']
    }

    handleChange = (event) =>{

        const techs = Array.from(
            event.target.selectedOptions,
            ((option) => option.value)
        )

        this.setState({ techs })
        
    }

    render(){
        return(
            <div>
                <form>
                    <h1>Select with React Js 
                        <ul>
                            {this.state.techs.map((tech, i) => (
                                <li
                                    key={i + tech}
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul> 
                    </h1>
                    <select 
                        value={this.state.techs}
                        onChange={this.handleChange}
                        multiple
                    >
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>  
                        <option value='Vanilla'>Vanilla</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Select