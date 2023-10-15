
import { Row, Col, Form, Button } from "react-bootstrap"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai"
const LoginFormCard = () => {
    return (
        <Row className='mt-4 pb-4'>
            <Col md={4}>
                <div className='d-flex flex-column p-3 bg-white justify-content-center align-items-center' style={{ height: "500px" }}>
                    <div className='d-flex align-items-center justify-content-between w-100'>
                        <p className='m-0 fs-5 text-secondary'>
                            Login
                        </p>
                        <div className='text-secondary fs-5'>
                            <BiDotsVerticalRounded />
                        </div>

                    </div>
                    <img src="avatar.jpg" alt="" style={{ width: "130px", height: "120px", objectFit: "cover" }} className='rounded-circle mt-5' />
                    <p className='text-secondary fs-5 mt-3 mb-4'>
                        Maxi Johnsons
                    </p>
                    <div className='px-5 w-100'>
                        <div className='d-flex align-items-center border-bottom pb-2'>
                            <input placeholder='Enter your password' type='password' style={{ border: "none", outline: "none", width: "100%" }} />
                            <div className='fs-5'>
                                <AiOutlineEye />
                            </div>
                        </div>
                        <Button variant='primary' className='w-100 my-4'>
                            Login
                        </Button>
                    </div>
                    <p className='text-primary'>
                        Not you ? Sign in as different user
                    </p>
                </div>
            </Col>
            <Col md={4}>
                <div className='d-flex flex-column p-3 pt-5 bg-white  align-items-center' style={{ height: "500px" }}>
                    <div className='d-flex align-items-center justify-content-between w-100' style={{ transform: "translateY(-35%)" }}>
                        <p className='m-0 fs-5 text-secondary'>
                            Login
                        </p>
                        <div className='text-secondary fs-5'>
                            <BiDotsVerticalRounded />
                        </div>

                    </div>
                    <div className='d-flex flex-column mt-5 mb-6'>
                        <p className='fw-bold fs-4 m-0' style={{ letterSpacing: "2px" }} >
                            Bootstrap
                        </p>
                        <p className='fs-5 m-0 text-secondary'>
                            Template Designn
                        </p>
                    </div>

                    <div className='px-5 w-100 mt-4  h-100 d-flex flex-column justify-content-end'>
                        <div className='d-flex align-items-center border-bottom pb-2 mb-3'>
                            <input placeholder='Email Address' type='text' style={{ border: "none", outline: "none", width: "100%" }} />

                        </div>
                        <div className='d-flex align-items-center border-bottom pb-2 mb-3'>
                            <input placeholder='Enter your password' type='password' style={{ border: "none", outline: "none", width: "100%" }} />

                        </div>
                        <Button variant='primary' className='w-100 my-4'>
                            Login
                        </Button>
                        <div className='d-flex justify-content-between w-100 '>
                            <p className='text-primary'>
                                Forgot Password?
                            </p>
                            <p className='text-primary'>
                                Sign up Now
                            </p>
                        </div>
                    </div>

                </div>
            </Col>
            <Col md={4}>
                <div className='d-flex flex-column p-3 pt-5 bg-white  align-items-center' style={{ height: "500px" }}>
                    <div className='d-flex align-items-center justify-content-between w-100' style={{ transform: "translateY(-35%)" }}>
                        <p className='m-0 fs-5 text-secondary'>
                            Signup
                        </p>
                        <div className='text-secondary fs-5'>
                            <BiDotsVerticalRounded />
                        </div>

                    </div>


                    <div className='px-5 w-100   h-100 d-flex flex-column pt-3 '>
                        <div className='d-flex flex-column align-items-center border-bottom pb-2 mb-3  '>
                            <p className='text-start w-100 text-secondary m-0 mb-2'>
                                Your Name
                            </p>
                            <input placeholder='Admin Dashboard' type='text' style={{ border: "none", outline: "none", width: "100%" }} />

                        </div>
                        <div className='d-flex flex-column align-items-center border-bottom pb-2 mb-3'>
                            <p className='text-start w-100 text-secondary m-0 mb-2'>
                                Email
                            </p>
                            <input placeholder='Email' type='email' style={{ border: "none", outline: "none", width: "100%" }} />

                        </div>
                        <div className='d-flex flex-column align-items-center border-bottom pb-2 mb-3 mt-5'>

                            <input placeholder='Enter your Password' type='password' style={{ border: "none", outline: "none", width: "100%" }} />

                        </div>
                        <div className='d-flex align-items-center'>
                            <input type="checkbox" className='bg-secondary ' style={{ accentColor: "gray", transform: "translateY(5%)", marginRight: "15px" }} checked />
                            <p className='m-0'>
                                I agree with <span className="text-primary">Terms and Conditions</span>
                            </p>
                        </div>
                        <Button variant='primary' className='w-100 my-4'>
                            Login
                        </Button>
                        <p className='text-primary text-center'>
                           Already have an account? Sign in
                        </p>
                    </div>

                </div>
            </Col>
        </Row>
    )
}

export default LoginFormCard