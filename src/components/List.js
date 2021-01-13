const defaultList = ['Tata','Mahindra','Honda','Suzuki'];

export const List = (props)=>{
    return(
        <ul>  
            {props.list.map((item)=>{
                return <li>{item}</li>
            })}
            {defaultList.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
    );
}
List.displayName = 'CarList';