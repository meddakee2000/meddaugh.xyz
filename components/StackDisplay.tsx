interface StackProps {
    width: number
}

const StackDisplay = ({width}: StackProps) => {
    return (

        <div className = 'flex-centered' style = {{flex: 1, justifyContent: 'space-evenly'}}>
            <img src = '/icons/html.svg' width = {width}/>
            <img src = '/icons/css.svg' width = {width}/>
            <img src = '/icons/typescript.svg' width = {width}/>
            <img src = '/icons/nextjs.svg' width = {width}/>
            <img src = '/icons/git.svg' width = {width}/>
            <img src = '/icons/react.svg' width = {width}/>
            <img src = '/icons/nodejs.svg' width = {width}/>
        </div>

    )
}

export default StackDisplay;