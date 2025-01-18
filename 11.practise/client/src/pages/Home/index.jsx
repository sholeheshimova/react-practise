import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'antd';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoritesContext';
import styles from '../Home/index.module.scss'


const BASE_URL = "http://localhost:4000/oclocks"
const Home = () => {
    const [oclocks, setOclocks] = useState([])
    let [oclocksCopy, setOclocksCopy] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const {oclock, toggleFavorites} = useContext(FavoritesContext)

    const getOclocks = async() => {
    try {
        const res = await axios.get(`${BASE_URL}`)
        setOclocks(res.data)
    } catch (error) {
        console.log(error);
    }
    }

    useEffect(() => {
        getOclocks()
    }, [])

   const filteredClocks = oclocks.filter((ocl) => ocl.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))

   let handleChange = (e) => {
    let sortedOclocks = null;
    if (e.target.value === "asc") {
        sortedOclocks = [...oclocks].toSorted((a,b) => a.price - b.price)
    }else if (e.target.value === "desc") {
        sortedOclocks = [...oclocks].toSorted((a,b) => b.price - a.price)
    }else{
     sortedOclocks = [...oclocksCopy]
    }
      setOclocks([...sortedOclocks])
   }
  return (
    <>
    <div className={styles.sec1}>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
       <div className={styles.text}>
       <h1>Select Your New Perfect Style</h1>
       <button>Shop Now</button>
       </div>

    </div>

    <div className={styles.sec2}>
        <h1>New Arrivals</h1>
        <div className={styles.cards}>
            <div className={styles.card1}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />
                <h4>Thermo Ball Etip Gloves</h4>
                <p><span>$459.083</span></p>
            </div>
            <div className={styles.card1}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
                <h4>Thermo Ball Etip Gloves</h4>
                <p><span>$489.673</span></p>
            </div>
            <div className={styles.card1}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" alt="" />
                <h4>Thermo Ball Etip Gloves</h4>
                <p><span>$869.870</span></p>
            </div>
        </div>
    </div>
     <div className={styles.sec3}>
        <h1>Popular Items</h1>
        <input type="search" onChange={(e) => {setSearchQuery(e.target.value)}} />
        <select name="" id="" onChange={handleChange}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
            <option value="default">Default</option>
        </select>
     <Row >
      {oclocks.length > 0 && filteredClocks.map((o ) => {
        return (
            <Col span={6} style={{display: "flex", justifyContent: "center"}}>
                <div style={{marginTop: "150px"}}>
                    <img src={o.image} alt=""  width={140} style={{display: "flex", margin: "0 auto" }}/>
                    <h4 style={{fontSize:"20px"}}>{o.title}</h4>
                    <p style={{color: "red", fontSize: "18px"}}><span>Price: ${o.price}</span></p>
                    <div className="btns" style={{display: "flex", justifyContent: "space-around", paddingTop: "30px"}}>
                    <Link to={`oclocks/${o._id}`}><button style={{width: "100px", height: "30px", border: "none", backgroundColor: "lightgrey", borderRadius: "5px"}} >Details</button></Link>
                    <button style={{border: "none", width: "50px", backgroundColor: "white", fontSize: "20px"}}><FaRegHeart  onClick={() => {toggleFavorites(o)}}/></button>
                    </div>
                </div>
            </Col>
        )
      })}
    </Row>
     </div>
     <div className={styles.sec4}>
        <div className={styles.common1}>
            <div className={styles.texts}>
                <h1>Watch of Choice</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum repellat veritatis tempore laudantium quae minima animi iusto, adipisci autem obcaecati ex voluptatum debitis maxime odit? Ipsa illo dolorum dolorem?</p>
                <button>Shop Watches</button>
            </div>
            <div className={styles.imgs}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png" alt="" />
            </div>
        </div>
        <div className={styles.common2}>
        <div className={styles.texts}>
                <h1>Watch of Choice</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum repellat veritatis tempore laudantium quae minima animi iusto, adipisci autem obcaecati ex voluptatum debitis maxime odit? Ipsa illo dolorum dolorem?</p>
                <button>Shop Watches</button>
            </div>
            <div className={styles.imgs}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png" alt="" />
            </div>
        </div>
     </div>
    </>
  )
}

export default Home