import React from 'react'
import { Row, Col, Button } from "react-bootstrap"

import { SiAdobeacrobatreader } from "react-icons/si"
import { BsFillCloudArrowDownFill } from "react-icons/bs"
import { AiOutlineFileWord, AiOutlineFileExcel } from "react-icons/ai"
import { BiSolidVolumeFull } from "react-icons/bi"

const DocumentCard = () => {
    return (
        <div className='mt-4'>
            <Row >
                <Col md={3}>
                    <div className='d-flex flex-column   w-100' style={{ backgroundColor: "#ECF5F5" }}>
                        <div className='d-flex align-items-center justify-content-between w-100 mb-3 bg-white p-3 '>
                            <div className='fs-6 bg-secondary rounded p-2 text-white'>
                                <SiAdobeacrobatreader />
                            </div>
                            <div className='d-flex flex-column align-items-start ms-3 w-100 '>
                                <p className='m-0 text-secondary fw-bold'>
                                    Document.pdf
                                </p>
                                <p className='m-0 text-secondary'>
                                    21.6 mb
                                </p>
                            </div>
                            <div className='fs-2 text-primary '  >
                                <BsFillCloudArrowDownFill />
                            </div>
                        </div>

                        <div className='bg-white px-4 py-5 d-flex flex-column justify-content-center align-items-center'>

                            <div className='bg-light p-4 rounded fs-4 d-flex  justify-content-center align-items-center' style={{ color: "red" }}>
                                <SiAdobeacrobatreader />
                            </div>
                            <p className='fw-bold fs-5 text-secondary mt-3'>
                                Document.pdf
                            </p>
                            <p className='text-secondary'>
                                21.6 MB
                            </p>
                            <Button variant='outline-primary' className='d-flex align-items-center' >
                                <div className='mx-2 fs-5'>
                                    <BsFillCloudArrowDownFill />
                                </div>

                                Download
                            </Button>
                        </div>

                    </div>
                </Col>
                <Col md={3}>
                    <div className='d-flex flex-column   w-100' style={{ backgroundColor: "#ECF5F5" }}>
                        <div className='d-flex align-items-center justify-content-between w-100 mb-3 bg-white p-3 '>
                            <div className='fs-6 bg-secondary rounded p-2 text-white'>
                                <AiOutlineFileWord />
                            </div>
                            <div className='d-flex flex-column align-items-start ms-3 w-100 '>
                                <p className='m-0 text-secondary fw-bold'>
                                    Document.docx
                                </p>
                                <p className='m-0 text-secondary'>
                                    21.6 mb
                                </p>
                            </div>
                            <div className='fs-2 text-primary '  >
                                <BsFillCloudArrowDownFill />
                            </div>
                        </div>

                        <div className='bg-white px-4 py-5 d-flex flex-column justify-content-center align-items-center'>

                            <div className='bg-light p-4 rounded fs-4 d-flex  justify-content-center align-items-center text-primary' >
                                <AiOutlineFileWord />
                            </div>
                            <p className='fw-bold fs-5 text-secondary mt-3'>
                                Document.docx
                            </p>
                            <p className='text-secondary'>
                                21.6 MB
                            </p>
                            <Button variant='outline-primary' className='d-flex align-items-center' >
                                <div className='mx-2 fs-5'>
                                    <BsFillCloudArrowDownFill />
                                </div>

                                Download
                            </Button>
                        </div>

                    </div>
                </Col>
                <Col md={3}>
                    <div className='d-flex flex-column   w-100' style={{ backgroundColor: "#ECF5F5" }}>
                        <div className='d-flex align-items-center justify-content-between w-100 mb-3 bg-white p-3 '>
                            <div className='fs-6 bg-secondary rounded p-2 text-white'>
                                <AiOutlineFileExcel />
                            </div>
                            <div className='d-flex flex-column align-items-start ms-3 w-100 '>
                                <p className='m-0 text-secondary fw-bold'>
                                    Document.xls
                                </p>
                                <p className='m-0 text-secondary'>
                                    21.6 mb
                                </p>
                            </div>
                            <div className='fs-2 text-primary '  >
                                <BsFillCloudArrowDownFill />
                            </div>
                        </div>

                        <div className='bg-white px-4 py-5 d-flex flex-column justify-content-center align-items-center'>

                            <div className='bg-light p-4 rounded fs-4 d-flex  justify-content-center align-items-center text-primary' >
                                <AiOutlineFileExcel />
                            </div>
                            <p className='fw-bold fs-5 text-secondary mt-3'>
                                Document.xls
                            </p>
                            <p className='text-secondary'>
                                21.6 MB
                            </p>
                            <Button variant='outline-primary' className='d-flex align-items-center' >
                                <div className='mx-2 fs-5'>
                                    <BsFillCloudArrowDownFill />
                                </div>

                                Download
                            </Button>
                        </div>

                    </div>
                </Col>
                <Col md={3}>
                    <div className='d-flex flex-column   w-100' style={{ backgroundColor: "#ECF5F5" }}>
                        <div className='d-flex align-items-center justify-content-between w-100 mb-3 bg-white p-3 '>
                            <div className='fs-6 bg-secondary rounded p-2 text-white'>
                                <BiSolidVolumeFull />
                            </div>
                            <div className='d-flex flex-column align-items-start ms-3 w-100 '>
                                <p className='m-0 text-secondary fw-bold'>
                                    Songs.mp3
                                </p>
                                <p className='m-0 text-secondary'>
                                    21.6 mb
                                </p>
                            </div>
                            <div className='fs-2 text-primary '  >
                                <BsFillCloudArrowDownFill />
                            </div>
                        </div>

                        <div className='bg-white px-4 py-5 d-flex flex-column justify-content-center align-items-center'>

                            <div className='bg-light p-4 rounded fs-4 d-flex  justify-content-center align-items-center text-warning' >
                                <BiSolidVolumeFull />
                            </div>
                            <p className='fw-bold fs-5 text-secondary mt-3'>
                                Document.xls
                            </p>
                            <p className='text-secondary'>
                                21.6 MB
                            </p>
                            <Button variant='outline-primary' className='d-flex align-items-center' >
                                <div className='mx-2 fs-5'>
                                    <BsFillCloudArrowDownFill />
                                </div>

                                Download
                            </Button>
                        </div>

                    </div>
                </Col>
            </Row>
           
        </div>

    )
}

export default DocumentCard