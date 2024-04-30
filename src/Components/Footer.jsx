import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {

    return (
        <Container fluid className='bg-dark'>
            <Row>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                <p className='text-white text-centre'> Site best viewed at 1360 x 768 resolution in Microsoft Edge, Google Chrome 49+, Firefox 45+ and Safari 6+</p>
                </Col>
                <Col>
                <p className='text-white text-end'>&copy;  All rights reserved with SAFAR</p>   
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;