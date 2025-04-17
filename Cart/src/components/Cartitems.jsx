function Cartitems({item}){
    return(
        <>
         <div>
            <img src={item.image}/>

            <button>Delete</button>
         </div>
        </>
    )
}

export default Cartitems;