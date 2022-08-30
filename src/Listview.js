const Listview = (props) => {
    
    return(
        <div className='listview'>
            <div className="eachlist" onDoubleClick={props.clicked} key={props.index}>
                <h3 >{props.text}</h3>
                <p>{props.day}</p> 
            </div>
            {/* {props.map((list, index)=> (<lists text={props.text} ></lists>))}   */}
        </div>
    )
} 

export default Listview;