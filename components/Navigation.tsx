import styles from './Navigation.module.css';

const Navigation = () => {
    return (

        <div className = {`${styles.Navigation}`}>
            
            <span style = {{fontSize: 27}}>
                {"{"}
            </span>

            <a href = '/'>
                <img src = '/icons/ui/house.svg' width = {20}/>
                Home
            </a>

            <a href = '/about'>
                <img src = '/icons/ui/person.svg' width = {20}/>
                About
            </a>

            <a href = '/projects'>
                <img src = '/icons/ui/books.svg' width = {20}/>
                Projects
            </a>
            
            <span style = {{fontSize: 27}}>
                {"}"}
            </span>
            
        </div>

    )
}

export default Navigation;