import React, { useState } from 'react';
import styles from './playListForms.module.css';



type formProps = {
    playList: Array<{ titulo: string; descripcion: string; imagen: string }>;
    setPlayList: React.Dispatch<React.SetStateAction<
        Array<{ titulo: string; descripcion: string; imagen: string }>>>;
        SetShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

function PlayListForm({ playList, setPlayList, SetShowForm }: formProps) {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");

    function handleChangeTitulo(event: React.ChangeEvent<HTMLInputElement>) {
        setTitulo(event.target.value);
    }

    function handleChangeDescripcion(event: React.ChangeEvent<HTMLInputElement>) {
        setDescripcion(event.target.value);
    }

    function handleChangeImagen(event: React.ChangeEvent<HTMLInputElement>) {
        setImagen(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newItem = {
            titulo,
            descripcion,
            imagen,
        };
        setPlayList([...playList, newItem]);
        setTitulo("");
        setDescripcion("");
        setImagen("");
        SetShowForm(false);
    }

    return (
        <div className={styles.containerForm}>
            <div className={styles.formPlayList}>
                <h2>Creá tu Playlist Fav</h2>
                <form className={styles.formLabelInput} onSubmit={handleSubmit}>
                    <label htmlFor="titulo">Título</label>
                    <input
                        className={styles.inputPlay}
                        id="titulo"
                        type="text"
                        value={titulo}
                        onChange={handleChangeTitulo}
                    />
                    <label htmlFor="descripcion">Descripción</label>
                    <input
                        className={styles.inputPlay}
                        id="descripcion"
                        type="text"
                        value={descripcion}
                        onChange={handleChangeDescripcion}
                    />
                    <label htmlFor="imagen">Imagen URL</label>
                    <input
                        className={styles.inputPlay}
                        id="imagen"
                        type="text"
                        value={imagen}
                        onChange={handleChangeImagen}
                    />
                    <div className={styles.botonContainer}>
                        <button className={styles.botonPlay} type="submit">
                            Crear
                        </button>
                    </div>
                </form>

               


                    </div>
           
                        <ItemDetails
                    titulo={titulo}
                    descripcion={descripcion}
                    imagen={imagen}
                    />
                    
                </div>
                 ); 
                }

type ItemProps = {
    titulo: string;
    descripcion: string;
    imagen: string;
};

function ItemDetails({ titulo, descripcion, imagen }: ItemProps) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemImage}>
                <img src={imagen}/>
            </div>
            <div className={styles.itemDetails}>
                <h4>{titulo}</h4>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}




export default PlayListForm;


