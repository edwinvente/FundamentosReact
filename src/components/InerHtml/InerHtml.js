import React, {Component} from 'react'


class InerHtml extends Component{
    
    state = {
        marcado:`<h1>Iner Html Ract class</h1>`
    }
    
    render(){
        return(
            <div>
                <h1>Hello world InerHtml!</h1>
                <div
                    dangerouslySetInnerHTML={{ 
                        __html:this.state.marcado
                     }}
                ></div>
            </div>
        )
    }
}

export default InerHtml