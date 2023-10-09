import styled from 'styled-components';

export const TableContainer = styled.table`
  padding-top: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 500px;

  @media only screen and ( max-width: 768px ) {
    padding: 0;
    margin: 0;
    overflow-x: auto;
    display: block;
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1138px) {
    padding: 0;
    margin: 0;
    height: auto;
  }
`;

export const TableHeader = styled.thead`
  padding: 10px;

  th {
    font-size: 13px;
    color: #2FC18C;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    width: 112px;
    padding: 10px;
  }

  .th_edit {
    border-right: none;
  }
  
  @media only screen and ( max-width: 768px ) {
    th {
      padding: 20px;
    }
  }
`;

export const TableBody = styled.tbody`
  padding: 10px;
  height: auto;

  td {
    color: white;
    width: 112px;
    text-align: center;
    padding: 10px;
    font-size: 15px;
    font-weight: 500;
    line-height: 13px;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
  }

  button {
    border: none;
    cursor: pointer;
    background: #003BE5;
    padding: 0 10px;
  }

  @media only screen and ( max-width: 768px ) {
    height: auto;

    td {
      padding: 10px 20px;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
    }
  }


  @media only screen and (min-width: 768px) and (max-width: 1138px) {
    padding: 0;
    margin: 0;
    height: auto;
  }
`;
