import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"

const PhotoCard = ({imageURL,imageAlt,className})=>{
    return (
        <Image src={imageURL} alt={imageAlt} className={className} width={250}, height={100}/>
    )
}

export default PhotoCard