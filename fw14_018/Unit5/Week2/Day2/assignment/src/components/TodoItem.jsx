export const TodoItem = ({title,id, handleDelete})=>{
    return (
        <div >
            {title}{' - '}
            <button onClick={()=>{
                handleDelete(id)
            }}>Delete</button>
        </div>
    )
}