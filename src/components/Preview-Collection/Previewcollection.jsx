import React from "react";
import "./Preview.style.scss"
import CollectionItem from "../../components/collection-item/collection-item.component"




export default function PreviewCollection({title, items,}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items.filter((item,idx)=> idx <4).map(({id,...OtherItems}) =>(
                    <CollectionItem key={id} {...OtherItems}/>
                ))
            }
            </div>
        </div>
    )
}
