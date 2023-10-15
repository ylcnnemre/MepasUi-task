import React from 'react'
import { Row, Col } from "react-bootstrap"
import {FileExcelFill} from "react-bootstrap-icons"
const DocumentCard = () => {
    return (
        <Row>
            <Col md={3}>
                <div className='d-flex flex-col' style={{backgroundColor:"#ECF5F5"}}>   
                    <div>
                        <FileExcelFill size={30} />
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default DocumentCard