function Card(props){
    const detail = props.detail
    return(
        <div className=" rounded-lg bg-white border-2 overflow-hidden border-gray-500">
            <div className="card-image overflow-hidden">
                <img src={detail.imgUrl} alt="" className="object-cover object-center" />
            </div>
            <div className="card-header text-xl px-5 py-2 border-b">
                {detail.title}
            </div>
            <div className="card-body px-5 pt-2 pb-5 text-sm text-gray-500">
                <p>{detail.content}</p>
            </div>
            
        </div>
    )
}

export default Card