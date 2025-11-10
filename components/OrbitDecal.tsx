import styles from './OrbitDecal.module.css';

interface OrbitProps {
    size: number
}

const OrbitDecal = ({size}: OrbitProps) => {
    return (

        <div className = {`flex-centered ${styles.OrbitContainer}`}>
            <img className = {styles.OrbitDecal} src = '/images/orbit.svg' width = {size}/>
        </div>

    )
}

export default OrbitDecal;