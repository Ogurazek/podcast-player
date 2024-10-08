import styles from './PlayListItem.module.css'


type ItemProps = {
    titulo: string;
    descripcion: string;
    imagen: string;
};

function ItemDetails({ titulo, descripcion, imagen }: ItemProps) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemImage}>
                <img src={imagen} alt={titulo} />
            </div>
            <div className={styles.itemDetails}>
                <strong>{titulo}</strong>
                <span>{descripcion}</span>
            </div>
        </div>
    );
}

export default ItemDetails;