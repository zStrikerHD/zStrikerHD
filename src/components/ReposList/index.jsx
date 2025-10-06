import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarrendo, setEstaCarrendo] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarrendo(false);
                setRepos(resJson);
            },3000)
        })
    },[nomeUsuario]);

    return (
        <div className="container">
            {estaCarrendo ? (
                <h1>Carregando...</h1>
            ): (
                <ul className={styles.list}>
                {/* {repos.map(repostorio => ( */}
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> 
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> 
                            {language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                    </li>
                ))}
                <li>Repostorio</li>
            </ul>
            )}
            
        </div>
    )
}

export default ReposList;