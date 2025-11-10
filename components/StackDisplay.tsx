interface StackProps {
    width: number,
    gap: number
}

const StackDisplay = ({width, gap}: StackProps) => {
    return (

        <div className = 'flex-centered' style = {{gap: gap}}>
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