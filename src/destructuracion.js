const user1 = {
    name:'Edwin Vente',
    username:'creandola',
    /* country:'colombia', */
    social:{
        facebook:'https://face...',
        twitter:'https://twi...'
    }
}

const salduda = (user) =>{

    let {name, username:elGrone, country = 'Colombia', social:{twitter}} = user

    name = "Edwin Konecta"

    const orden = ['papas', 'cocacola', 'helado', 124, false, 'otro']

    const [comida, bebida, postre, ...faltantes] = orden 

    console.log(
        `Hola soy ${name}, me dicen ${elGrone}, Megusta mucho ordenar ${orden} y vivo en ${country}, sigueme en ${twitter}`
    )

    console.log(faltantes);
    
}


salduda(user1)