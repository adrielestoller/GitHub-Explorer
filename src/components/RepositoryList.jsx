import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import './../styles/repositories.scss';

export function RepositoryList (){
    const [repositories, setRespositories] = useState([]);
    useEffect(() =>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRespositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            
            <ul>
                { repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />) }
            </ul>
        </section>
    );
}