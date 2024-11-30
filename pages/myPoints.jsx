import { useRouter } from "next/router";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppManagerContext } from "../contexts/AppManager";

const MyPoints = () => {
    const { completedItems } = useContext(AppManagerContext);
    const router = useRouter();
    return(
        <div className="completed-actions-container">
            <Container >
            <h2 className='txt-action text-center'>Completed actions</h2>
                <Row className=" justify-content-center" >
                    {completedItems.map(item => (
                    <Col                      
                    className="completed-actions-card mt-4 mx-4" 
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