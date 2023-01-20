import { React, useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
const Header = (prop) => {
    const { title, subtitle, text, dec } = prop;

    const [style, setStyle] = useState({
        color: "red", fontSize: '20px'
    })

    return (


        <div className="card text-center mx-auto" style={{ width: "11rem" }}>

            <div className="card-body">
                <h6 className="card-title text-dark mb-3" >{title}</h6>
                <h4 className="card-subtitle mb-2" style={{ color: "#76a700" }}>{subtitle}</h4>
                <p className="card-text">{text}</p>
                <p style={dec === "8%" ? style : { color: "#76a700" }}>  {dec === "18 Dec 2018" ? '' : <AiOutlineCaretDown />}{dec}</p>
            </div>
        </div >

    )
}

export default Header