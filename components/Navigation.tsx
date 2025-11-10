import styles from './Navigation.module.css';

const Navigation = () => {
    return (

        <div className = {`${styles.Navigation}`}>
            
            <span style = {{fontSize: 27}}>
                {"{"}
            </span>

            <a href = '/'>
                <img src = '/icons/house.svg' width = {20}/>
                Home
            </a>

            <a href = '/about'>
                <img src = '/icons/person.svg' width = {20}/>
                About
            </a>

            <a href = '/archive'>
                <img src = '/icons/books.svg' width = {20}/>
                Archive
            </a>
            
            <span style = {{fontSize: 27}}>
                {"}"}
            </span>
            
        </div>

    )
}

export default Navigation;