import tabStyle from '../components/Tabs.module.css'
export default function TabButton ({className = '',item, callback = ()=> {
    console.log('stai premendo il pulsane')
} }){

    return(
        <button onClick={callback} className={ `${tabStyle.button} ${className}`}>
        {item.title}</button>
    )
}