import React, { useContext, useState, useMemo, useEffect } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import CustomActionItem from '../components/CustomActionItem'
import CustomCard from '../components/CustomCard'
import axios from 'axios';
import CustomActionHeader from '../components/CustomActionHeader';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AppManagerContext } from '../contexts/AppManager';

const Home = (props) => {
  const { actionItems } = props;

  const router = useRouter();
  const {completedItems, setCompletedItems, currentScore, setCurrentScore} = useContext(AppManagerContext)

  const [selectedActionItem, setSelectedActionItem] = useState();
  const [isPointReceived, setIsPointReceived] = useState(false);

  const earnPoints = () => {
    const newScore = currentScore + selectedActionItem.point;

    setIsPointReceived(true);
    setCurrentScore(newScore)
    setCompletedItems([...completedItems, selectedActionItem])
  }

  const restActionItems = actionItems.filter(actionItem => {
    return !completedItems.some(completedItem => completedItem.id === actionItem.id)
  });
  return (
    <>
    {selectedActionItem ? (      
      <div className='pointsContainer'> 
        {isPointReceived ? (
        <CustomCard
        title={'Congratulations!'}
        approveText={'Close'}
        onApprove={()=> router.push('/myPoints')}
        customHeader={
          <Image 
            className='custom-header-image'
            src={'/congratulations.png'}
            width={72}
            height={50.55}
            layout={'fixed'}
            />
        }>
        You've earned points for your participation! <br /> 
        Keep Up the great work!
        </CustomCard>
        ) : (
        <CustomCard 
          title={selectedActionItem.title}
          approveText={'Earn Points'}
          onApprove={earnPoints}
          customHeader={
            <CustomActionHeader
              image={selectedActionItem.image}
              point={selectedActionItem.point}
            />
          }>
          {selectedActionItem.description}
        </CustomCard>
        )}
      </div>
    ) : (
    <div className='home-container' >
      <Container>
        <h2 className='txt-action'>Actions to be completed</h2>
        <Row>
          {restActionItems?.map(actionItem => (
           <Col 
            key={actionItem.id} 
            xs={12}
            lg={6}
            onClick={()=> setSelectedActionItem(actionItem)}>
            <CustomActionItem {...actionItem}/>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
    )}
    </>
  )
}

export async function getServerSideProps() {
  const response = await axios.get('https://cdn.mallconomy.com/testcase/actions.json');
  const { data } = response;

  return {
    props: {
      actionItems: data
    }
  }
}
export default Home