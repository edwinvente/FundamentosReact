import React, {useState} from 'react'

const Header = () => {
    const styles = {
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        textAlign: 'center',
        borderRadius: '0.2em',
        color: '#FFF',
        padding: '0.3em',
        margin: '0.3em',
        fontSize: '14px'
    }

    return (
        <header style={styles}>
        <h1>
            Hook React.memo
            <span
            role='img'
            aria-label='hook emoji'
            >
            ⚓
            </span> 
        </h1>
        </header>
    )
}

const Counter = React.memo(({ num }) =>{
    console.log('%cRender <Counter />', 'color:white')
    return(
        <p>
            {num}
        </p>
    )
})

const Title = React.memo(({ text }) =>{
    console.log('%cRender <Title />', 'color:orange')
    return(
        <p>
            {text}
        </p>
    )
})

const TitleNext = React.memo(({ info }) =>{
    console.log('%cRender <TitleNext />', 'color:lightgreen')
    return(
        <p>
            {info.text}
        </p>
    )
    }, (prevProps, nextProps) => {
        //true no renderiza
        //false si renderiza
        //console.log(prevProps, nextProps)
        return prevProps.info.text === nextProps.info.text
    }
)

const App = () =>{
    
    const [num, setNum] = useState(0);
    const [title, setTitle] = useState('React Memo');
    
    const handleClick = () =>{
        setNum(num + 1)
    }

    const handleChange = (e) =>{
        setTitle(e.target.value)
    }

    return(
        <div>
            <Header />
            <button onClick={handleClick}>
                Add
            </button>
            <input
                onChange={handleChange} 
                type='text'
            />
            
            <Counter num={num} /> 
            <Title text={title}/>
            <TitleNext info={{ 
                text:title
             }}/>

        </div>
    )
}

export default App