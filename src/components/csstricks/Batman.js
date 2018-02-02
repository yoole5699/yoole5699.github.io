import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Square = Center.extend`
  position: relative;

  height: 400px;
  width: 400px;

  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);

  transition: all .3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

const Wing = styled.div`
  position: absolute;

  width: 300px;
  height: 300px;

  border-radius: 50%;
  box-shadow: ${({ hover }) => hover ? '60px 85px 0 -50px #28a9e1' : '60px 85px 0 -50px #1c1c1c'};
`;

const OutWing = Wing.extend`
  transform: translateX(-150px) rotate(-30deg);
`;

const InsetWingOne = Wing.extend`
  transform: translate(-20px, 70px) rotate(-30deg);
`;

const InsetWingTwo = Wing.extend`
  transform: translate(25px, 85px) rotate(-30deg);
`;

const InsetWingThree = Wing.extend`

  box-shadow: ${({ hover }) => hover ? '40px 90px 0 -30px #28a9e1' : '40px 90px 0 -30px #1c1c1c'};
  transform: translate(20px, 135px) rotate(-60deg);
`;

const Head = styled.div`
  width: 100px;
  height: 100px;
  
  border-radius: 50%;
  background-color: ${({ hover }) => hover ? '#28a9e1' : '#1c1c1c'};
  
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    margin-top: 50px;
    width: 50px;
    height: 50px;

    background-color: ${({ hover }) => hover ? '#28a9e1' : '#cdbaa3'};
    border-top-left-radius: 40px 50px;
  }

  &:after {
    margin-top: 50px;

    content: '';
    display: block;

    width: 10px;
    height: 1px;
    background-color: ${({ hover }) => hover ? '#28a9e1' : '#1c1c1c'};
    transform: translate(20px, -65px) rotate(135deg);
  }
`;

const Ear = styled.div`
  position: absolute;
  width: 150px;
  height: 250px;

  border-radius: 50%;
  box-shadow: ${({ hover }) => hover ? '60px 85px 0 -50px #28a9e1' : '60px 85px 0 -50px #1c1c1c'};
`;

const EarOne = Ear.extend`
  z-index: -1;
  transform: rotate(-30deg) translateY(-285px);
`;

const EarTwo = Ear.extend`
  transform: translateX(30px) rotate(-30deg) translateY(-300px);
`;

const Eye = styled.div`
  position: absolute;

  width: 10px;
  height: 5px;

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${({ hover }) => hover ? '#28a9e1' : '#fff'};

  transform: translate(10px, -60px) rotate(-45deg);
`;

class Batman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }
  
  render() {
    const { hover } = this.state;

    return (
      <Square 
        onMouseEnter={(e) => { 
          this.setState({
            hover: true 
          });
        }}
        onMouseLeave={(e) => {
          this.setState({
            hover: false
          });
        }}
      >
        <OutWing hover={hover}>
          <InsetWingOne  hover={hover}/>
          <InsetWingTwo  hover={hover}/>
          <InsetWingThree  hover={hover}/>
        </OutWing>
        <Head hover={hover}>
          <Eye  hover={hover}/>
          <EarOne  hover={hover}/>
          <EarTwo  hover={hover}/>
        </Head>
      </Square>
    )
  }
}


export default Batman;