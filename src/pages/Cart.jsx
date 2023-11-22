import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, buyProdect, removeFromCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)

  const dispatch = useDispatch()
  /* console.log(cartArray); */
  
  const [total , setTotal] = useState(0)

  const navigate = useNavigate()

  const handleCart = (item)=>{
    dispatch(addToWishlist(item))

    dispatch(removeFromCart(item.id))
  }

  const buyitem = (item) =>{
    toast.success('Your order Placed')
    dispatch(buyProdect(item.id))
  }

  //function to find the sum of given array
  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  console.log(total);

  useEffect(()=>{
    getTotal()
  },[cartArray])


  //function to checkout the prodects
  const checkout = () =>{
    toast.success('Thank You ,  Your Order  Placed Successfully')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <div style={{marginTop:'150px'}}>

      <Row>    
        
          <Col className='mb-5 d-flex align-items-center justify-content-center flex-column'>
            <div style={{width:'350px'}} className=' border d-flex align-items-center justify-content-center flex-column'>
              <h3 className='text-success mt-3'>Cart Summery</h3>
              <h4 >Total no of Prodects : <span className='fw-bolder fs-2 text-warning ms-3'>{cartArray.length}</span></h4>
              <h4>Price : ₹<span className='fw-bolder fs-2 text-danger ms-3'>{total}</span></h4>
              <Button onClick={()=>checkout()}   variant="outline-dark" style={{backgroundColor:'yellow'}} className='btn rounded w-100 mb-5 mt-3'>Proceed to Buy</Button>
            </div>
            
          </Col>
     
      </Row>


      <div>
      <Row className='ms-5 me-3 mb-5'>
      {cartArray?.length>0?
      cartArray?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '18rem',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px  0 rgba(0 , 0 , 0 , 0.19)'}}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
        <Card.Body>
          <Card.Title>{item.title.slice(0,20)}...</Card.Title>
          <Card.Text>
            <p>{item.description.slice(0,40)}...</p>
            <p className='fw-bolder text-danger'>Price : ₹{item.price}</p>
            <p>Discount :{item.discountPercentage}</p>
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between'>
            <Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash "></i></Button>
            <Button onClick={()=>handleCart(item)} variant="outline-success"><i class="fa-solid fa-heart"></i></Button>
          </div>
          <div className=' align-items-center mt-4 ms-5 ' >
            <Button onClick={()=>buyitem(item)} variant="outline-danger ms-4" > Buy Now </Button>
          </div>
        
        </Card.Body>
     </Card>
    </Col>))
        : 
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="No image" height={'300px'} />
          <h2 className='text-danger fw-bolder'>Your Cart is Empty</h2>
          <button className='btn btn-success mt-2'><Link to={'/'} style={{textDecoration:'none',color:'yellow'}}><i class="fa-solid fa-arrow-left me-2 mt-2"></i>Back To Home</Link></button>
        </div>
      }
    </Row>
      </div>
    {/* toast container */}
    <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </div>
    
  )
}

export default Cart