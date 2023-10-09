import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  padding: 20px;
  height: 145px;
  background: #E1E5EB7D;

  @media only screen and ( max-width: 768px ) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5px;

  @media only screen and ( max-width: 768px ) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Label = styled.label`
  padding: 10px;
  color: #003BE5;
`;

export const InputDesc = styled.input`
  width: 350px;
  height: 30px;
  border-radius: 5px;
  padding: 0 10px;
  border: 1px solid #003BE5;
  
  &:focus {
    border: 2px solid blue;
    outline: 0;
  }

  @media only screen and ( max-width: 768px ) {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 150px;
  height: 30px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #003BE5;
  cursor: pointer;
  color: #003BE5;
  
  &:focus {
    border: 2px solid blue;
    outline: 0;
  }

  @media only screen and ( max-width: 768px ) {
    width: 100%;
  }
`;

export const InputValue = styled.input`
  width: 240px;
  height: 30px;
  border-radius: 5px;
  padding: 0 10px;
  border: 1px solid #003BE5;
  
  &:focus {
    border: 2px solid blue;
    outline: 0;
  }

  @media only screen and ( max-width: 768px ) {
    width: 100%;
  }
`;

export const ButtonForm = styled.button`
background: #2FC18C;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  margin-top: 37px;
  padding: 10px;
  height: 40px;
  width: 330px;
  cursor: pointer;
  border: none;

  &:hover {
    background: linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 90%);
  }

  @media only screen and ( max-width: 768px ) {
    margin-top: 15px;
  }
`;
