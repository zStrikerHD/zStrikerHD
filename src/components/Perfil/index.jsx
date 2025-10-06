import styles from './Perfil.module.css'

// assim:

const Perfil = ({ nomeUsuario }) => {
    // const usuario = {
    //     nome: 'Giovani Sanchez',
    //     avatar: 'https://github.com/zStrikerHD.png'
    // }

    // const {endereco, nome} = props;

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

// ou assim:

// export default () => {

//     const usuario = {
//         nome: 'Giovani Sanchez',
//         avatar: 'https://github.com/zStrikerHD.png'
//     }
    
//     return (
//         <div>
//             <img className='perfil-avatar' src={usuario.avatar} />
//             <h3 className='perfil-titulo'>{usuario.nome}</h3>
//         </div>
//     )
// }


export default Perfil;