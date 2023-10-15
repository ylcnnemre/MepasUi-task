import React from 'react'
import { Col, Row, Button, Dropdown, DropdownButton, Form } from "react-bootstrap"
import { Search, GeoAltFill, Pencil } from "react-bootstrap-icons"
const CardMenu = () => {
    return (
        <div className='mt-4'>
            <Row>
                <Col md={4}  >
                    <div className='d-flex flex-column bg-white border'>
                        <div className='d-flex align-items-center justify-content-between px-4 py-4'>
                            <p className='m-0 fw-bold text-secondary'>
                                Card Title goes Here
                            </p>
                            <Button variant='success'>
                                Add
                            </Button>
                        </div>
                        <p className='my-4 text-secondary px-4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolores consequuntur exercitationem neque nostrum delectus harum quasi quia. Architecto velit saepe consequatur illo quae facilis expedita! Corrupti, obcaecati. Possimus, unde!
                        </p>
                        <div className='border-top px-4 py-3'>
                            <Button variant='primary'>
                                Footer Button
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col md={4}  >
                    <div className='d-flex flex-column bg-white border'>
                        <div className='d-flex align-items-center justify-content-between px-4 py-4'>
                            <p className='m-0 fw-bold text-secondary'>
                                Card Title goes Here
                            </p>
                            <DropdownButton
                                title="All"
                                variant='outline-secondary'
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    Active Item
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <p className='my-4 text-secondary px-4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolores consequuntur exercitationem neque nostrum delectus harum quasi quia. Architecto velit saepe consequatur illo quae facilis expedita! Corrupti, obcaecati. Possimus, unde!
                        </p>
                        <div className='border-top px-4 py-3'>
                            <Button variant='primary'>
                                Footer Button
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col md={4}  >
                    <div className='d-flex flex-column bg-white border'>
                        <div className='d-flex align-items-center justify-content-between px-4 py-4'>
                            <p className='m-0 fw-bold text-secondary'>
                                Card Title goes Here
                            </p>
                            <div className='d-flex'>
                                <Form.Control size="sm" type="text" placeholder="Search" style={{ width: "150px",outline:"none" }} />
                                <div className='d-flex justify-content-center align-items-center p-2 ' style={{ backgroundColor: "#E9ECEF" }}>
                                    <Search size={24} />
                                </div>

                            </div>

                        </div>
                        <p className='my-4 text-secondary px-4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolores consequuntur exercitationem neque nostrum delectus harum quasi quia. Architecto velit saepe consequatur illo quae facilis expedita! Corrupti, obcaecati. Possimus, unde!
                        </p>
                        <div className='border-top px-4 py-3'>
                            <Button variant='primary'>
                                Footer Button
                            </Button>
                        </div>
                    </div>
                </Col>

                <Col md={4} className='mt-3'  >
                    <div className='d-flex bg-white border '>
                        <div className='d-flex flex-column p-3 bg-warning'>
                            <span className='text-white'>
                                25
                            </span>
                            <span className='text-white'>
                                Mar
                            </span>
                        </div>
                        <div className='d-flex flex-column pt-3 px-3 pb-2'>
                            <p className='m-0 text-secondary fw-bold fs-5'>
                                College Meetup
                            </p>
                            <p className='m-0 text-secondary mt-3 mb-3'>
                                <GeoAltFill size={20} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis nulla neque necessitatibus asperiores reiciendis non illum vel a, maiores molestiae, minus, eos quisquam inventore explicabo mollitia autem. Iste, quam!
                            </p>
                            <div className='d-flex align-items-center justify-content-between ' style={{ paddingRight: "10px" }}>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bold m-0 fs-4' style={{ color: "gray" }}>
                                        Bootstrap
                                    </p>
                                    <p className='m-0 fs-5' style={{ color: "gray" }}>
                                        Template Design
                                    </p>
                                </div>
                                <Pencil size={24} />
                            </div>
                        </div>

                    </div>

                </Col>
                <Col md={4} className='mt-3'  >
                    <div className='d-flex bg-white border '>
                        <div className='d-flex flex-column p-3 ' style={{ backgroundColor: "#8CE241" }}>
                            <span className='text-white'>
                                25
                            </span>
                            <span className='text-white'>
                                Mar
                            </span>
                        </div>
                        <div className='d-flex flex-column pt-3 px-3 pb-2'>
                            <p className='m-0 text-secondary fw-bold fs-5'>
                                College Meetup
                            </p>
                            <p className='m-0 text-secondary mt-3 mb-3'>
                                <GeoAltFill size={20} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis nulla neque necessitatibus asperiores reiciendis non illum vel a, maiores molestiae, minus, eos quisquam inventore explicabo mollitia autem. Iste, quam!
                            </p>
                            <div className='d-flex align-items-center justify-content-between ' style={{ paddingRight: "10px" }}>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bold m-0 fs-4' style={{ color: "gray" }}>
                                        Bootstrap
                                    </p>
                                    <p className='m-0 fs-5' style={{ color: "gray" }}>
                                        Template Design
                                    </p>
                                </div>
                                <Pencil size={24} />
                            </div>
                        </div>

                    </div>

                </Col>
                <Col md={4} className='mt-3'  >
                    <div className='d-flex bg-white border '>
                        <div className='d-flex flex-column p-3 ' style={{ backgroundColor: "#F75E74" }}>
                            <span className='text-white'>
                                25
                            </span>
                            <span className='text-white'>
                                Mar
                            </span>
                        </div>
                        <div className='d-flex flex-column pt-3 px-3 pb-2'>
                            <p className='m-0 text-secondary fw-bold fs-5'>
                                College Meetup
                            </p>
                            <p className='m-0 text-secondary mt-3 mb-3'>
                                <GeoAltFill size={20} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis nulla neque necessitatibus asperiores reiciendis non illum vel a, maiores molestiae, minus, eos quisquam inventore explicabo mollitia autem. Iste, quam!
                            </p>
                            <div className='d-flex align-items-center justify-content-between ' style={{ paddingRight: "10px" }}>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bold m-0 fs-4' style={{ color: "gray" }}>
                                        Bootstrap
                                    </p>
                                    <p className='m-0 fs-5' style={{ color: "gray" }}>
                                        Template Design
                                    </p>
                                </div>
                                <Pencil size={24} />
                            </div>
                        </div>

                    </div>

                </Col>
                <Col md={4} className='mt-3'  >
                    <div className='d-flex bg-white border '>
                        <div className='d-flex flex-column p-3 bg-warning ' >
                            <span className='text-white'>
                                25
                            </span>
                            <span className='text-white'>
                                Mar
                            </span>
                        </div>
                        <div className='d-flex flex-column pt-3 px-3 pb-2 bg-warning'>
                            <p className='m-0 text-white fw-bold fs-5'>
                                College Meetup
                            </p>
                            <p className='m-0 text-white mt-3 mb-3 '>
                                <GeoAltFill size={20} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis nulla neque necessitatibus asperiores reiciendis non illum vel a, maiores molestiae, minus, eos quisquam inventore explicabo mollitia autem. Iste, quam!
                            </p>
                            <div className='d-flex align-items-center justify-content-between  ' style={{ paddingRight: "10px", backgroundColor: "#FFBF1D" }}>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bold m-0 fs-4 text-white' style={{ color: "gray" }}>
                                        Bootstrap
                                    </p>
                                    <p className='m-0 fs-5 text-white' style={{ color: "gray" }}>
                                        Template Design
                                    </p>
                                </div>
                                <Pencil size={24} color='white' />
                            </div>
                        </div>

                    </div>

                </Col>
                <Col md={4} className='mt-3'  >
                    <div className='d-flex bg-white border '>
                        <div className='d-flex flex-column p-3 ' style={{ backgroundColor: "#8CE241" }} >
                            <span className='text-white'>
                                25
                            </span>
                            <span className='text-white'>
                                Mar
                            </span>
                        </div>
                        <div className='d-flex flex-column pt-3 px-3 pb-2 ' style={{ backgroundColor: "#8CE241" }}>
                            <p className='m-0 text-white fw-bold fs-5'>
                                College Meetup
                            </p>
                            <p className='m-0 text-white mt-3 mb-3 '>
                                <GeoAltFill size={20} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis nulla neque necessitatibus asperiores reiciendis non illum vel a, maiores molestiae, minus, eos quisquam inventore explicabo mollitia autem. Iste, quam!
                            </p>
                            <div className='d-flex align-items-center justify-content-between  ' style={{ paddingRight: "10px", backgroundColor: "#90E051" }}>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bold m-0 fs-4 text-white' style={{ color: "gray" }}>
                                        Bootstrap
                                    </p>
                                    <p className='m-0 fs-5 text-white' style={{ color: "gray" }}>
                                        Template Design
                                    </p>
                                </div>
                                <Pencil size={24} color='white' />
                            </div>
                        </div>

                    </div>

                </Col>
                <Col md={4} className='mt-3'  >
                    <div className='d-flex bg-white border '>
                        <div className='d-flex flex-column p-3 ' style={{ backgroundColor: "#F75E74" }} >
                            <span className='text-white'>
                                25
                            </span>
                            <span className='text-white'>
                                Mar
                            </span>
                        </div>
                        <div className='d-flex flex-column pt-3 px-3 pb-2 ' style={{ backgroundColor: "#F75E74" }}>
                            <p className='m-0 text-white fw-bold fs-5'>
                                College Meetup
                            </p>
                            <p className='m-0 text-white mt-3 mb-3 '>
                                <GeoAltFill size={20} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis nulla neque necessitatibus asperiores reiciendis non illum vel a, maiores molestiae, minus, eos quisquam inventore explicabo mollitia autem. Iste, quam!
                            </p>
                            <div className='d-flex align-items-center justify-content-between  ' style={{ paddingRight: "10px", backgroundColor: "#F3637B" }}>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bold m-0 fs-4 text-white' style={{ color: "gray" }}>
                                        Bootstrap
                                    </p>
                                    <p className='m-0 fs-5 text-white' style={{ color: "gray" }}>
                                        Template Design
                                    </p>
                                </div>
                                <Pencil size={24} color='white' />
                            </div>
                        </div>

                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default CardMenu