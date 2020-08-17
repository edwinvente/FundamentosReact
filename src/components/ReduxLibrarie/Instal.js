import React from 'react'
import { Provider } from 'react-redux'

import store from './Redux/store'
import Counter from './Counter'
import Info from './Info'

const Install = () => {
    return (
        <Provider store={store}>
            <div>
                <Info />
                <Counter />
            </div>
        </Provider>
    )
}

export default Install