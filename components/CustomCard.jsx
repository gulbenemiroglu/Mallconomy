import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CustomCard = ({title, approveText, onApprove, customHeader, children }) => {
  return (
    <Card className="text-center" border="light">
      <Card.Body>
        {customHeader}
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {children}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className='w-100 card-button' onClick={onApprove} variant="dark">{approveText}</Button>
      </Card.Footer>
    </Card>
  );
}

export default CustomCard;