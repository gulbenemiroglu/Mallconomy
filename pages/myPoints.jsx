import { useRouter } from "next/router";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppManagerContext } from "../contexts/AppManager";

const MyPoints = () => {
    const { completedItems } = useContext(AppManagerContext);
    const router = useRouter();
    return(
        <div className="completed-actions-container">
            <Container fluid>
            <h2 className='txt-action'>Completed actions</h2>
                <Row>
                    {completedItems.map(item => (
                    <Col                      
                    className="completed-actions-card" 
                    key={item.id}
                    xs={12} 
                    md={6} 
                    lg={4}>
                     <h4>{item.title}</h4>
                     <div className="txt-point">+{item.point}</div>  
                    </Col>
                    ))}
                </Row>
            </Container>    
        </div>
    )
}

export default MyPoints;