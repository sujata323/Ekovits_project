import React, { useState } from 'react';
import styled from 'styled-components';
import featureIcon1 from '../assets/customize_14644462.webp';
import featureIcon2 from '../assets/internet_10284120.webp';
import featureIcon3 from '../assets/security_6865349.webp';
import featureIcon4 from '../assets/24-hours-support_9723188.webp';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeaderText = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #333;
  font-weight:700px;
  background: linear-gradient(to right, #2C47A3, #b5b4be);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;


const ColumnsContainer = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 2rem 0;
`;

const Column = styled.div`
  flex: ${props => props.isExpanded ? 2 : 1};
  display: flex;
  padding: 0 15px;
  border-right: 1px solid #ddd;
  position: relative;
  min-height: 100px;
  transition: flex 0.3s ease;

  &:last-child {
    border-right: none;
  }
`;

const IconSection = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
//   background-color: #f0f0f0;
//   border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    // background-color: #e0e0e0;
    transform: scale(1.05);
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

const Title = styled.h3`
  margin: 10px 0 0;
  font-size: 1.2rem;
  text-align: center;
  font-weight:bold;
`;

const ContentSection = styled.div`
  flex: 1;
  padding-left: 15px;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-height: ${props => props.isExpanded ? '200px' : '0'};
  opacity: ${props => props.isExpanded ? 1 : 0};
  overflow: hidden;
  transition: all 0.3s ease;
  text-align: center;
  padding: ${props => props.isExpanded ? '0 10px' : '0'};
  font-size: 0.9rem;
  line-height: 1.5;
  
`;

// const CallbackButton = styled.button`
//   display: block;
//   margin: 2rem auto 0;
//   padding: 12px 30px;
//   background-color: #0066cc;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #0052a3;
//   }
// `;

const ValueProposition = () => {
  const [expandedColumn, setExpandedColumn] = useState(null);

  const columns = [
    { 
      id: 1, 
      title: 'Customization', 
      icon: <img src={featureIcon1} alt="Customization" />, 
      content: 'We understand that every business is unique. Our experienced team will work closely with you to develop customized IT solutions that align with your goals and budget.' 
    },
    { 
      id: 2, 
      title: 'Global Presence', 
      icon: <img src={featureIcon2} alt="Global Presence" />, 
      content: 'Ekovits strives to provide affordable IT solutions without compromising on quality. We can help you optimize your IT investments and maximize your return on investment.' 
    },
    { 
      id: 3, 
      title: 'Secured', 
      icon: <img src={featureIcon3} alt="Secured" />, 
      content: 'From cloud computing and cybersecurity to network infrastructure and software development, Ekovits offers a wide range of IT services to address your business challenges.' 
    },
    { 
      id: 4, 
      title: '24 X 7 Support', 
      icon: <img src={featureIcon4} alt="24 X 7 Support" />, 
      content: 'We are dedicated to ensuring the reliability and security of your IT systems. Our responsive support team is always available to assist you with any issues or questions.' 
    }
  ];

  return (
    <Container>
      <HeaderText>
        VALUES<br></br>
      Discover the core values that inspire us, shape our culture, and drive our commitment to excellence.
      </HeaderText>

      

      <ColumnsContainer>
        {columns.map((column) => (
          <Column 
            key={column.id}
            isExpanded={expandedColumn === column.id}
            onMouseEnter={() => setExpandedColumn(column.id)}
            onMouseLeave={() => setExpandedColumn(null)}
          >
            <IconSection>
              <Icon>{column.icon}</Icon>
              <Title>{column.title}</Title>
            </IconSection>

            <ContentSection>
              <Content isExpanded={expandedColumn === column.id}>
                {column.content}
              </Content>
            </ContentSection>
          </Column>
        ))}
      </ColumnsContainer>

      
    </Container>
  );
};

export default ValueProposition;