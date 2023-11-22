import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column bg-danger'>
      <div className="footer d-flex justify-content-evenly align-items-center w-100">
        <div className='website' style={{width:'400px'}}>
          <h4 className='text-dark'><i class="fa-solid fa-cart-shopping text-white"></i>{' '} E-CART</h4>
          <h6 className=' text-white' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate nisi saepe quo sit nemo a blanditiis.</h6>
            <h6 className='text-white'>similique? Nesciunt aspenture</h6>
        </div>
        <div className='links d-flex flex-column'>
          <h4 className='text-dark'>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>WishList</Link>
        </div>
        <div className='guides d-flex flex-column'>
          <h4 className='text-dark'>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>bootswatch</Link>
        </div>
        <div className='contacts'>
          <h4 className='mb-3 text-dark'>Contact Us</h4>
          <div className="d-flex mb-3 ">
            <input type="text" className='form-control' placeholder='Enter Your Email ID' />
            <button className='btn btn-warning ms-2 w-50f'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center'>
            <Link to={'https://bootswatch.com/'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>
      <p className='mt-5 text-dark'>copyright @ 2023 media player. Built with React.</p>
    </div>
  )
}

export default Footer