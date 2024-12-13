interface ListProps{
    data : string,
    index : number

}


const List = ({data, index}:ListProps) => {
    return (
        <li>
             {(index+1) + " . " + data}
        </li>
    )
}

export default List;