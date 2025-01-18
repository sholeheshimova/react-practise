import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';


const BASE_URL = "http://localhost:4000/oclocks"
const Details = () => {
    const {id}  = useParams()
    const [oclocks, setOclocks] = useState(null)

    const getOclocks = async() => {
    try {
        const res = await axios.get(`${BASE_URL}/${id}`)
        setOclocks(res.data)
    } catch (error) {
        console.log(error);
    }
    }

    useEffect(() => {
        getOclocks()
    }, [])

  return (
    <>
    
    <Row>
     <div>
        {oclocks && (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                 <Col span={12} key={oclocks._id}>
              <img src={oclocks.image} alt="" />
             </Col >
             <Col span={12} key={oclocks._id}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat dolores corrupti ex iusto praesentium temporibus nostrum soluta, omnis ratione molestiae doloribus a facere magnam deleniti, quod sunt debitis? Consequuntur dolorum facere molestias est temporibus delectus consequatur corrupti exercitationem quae?</p>
             </Col >
            </div>
            
             
        )}
     </div>
    </Row>
    
    </>
  )
}

export default Details