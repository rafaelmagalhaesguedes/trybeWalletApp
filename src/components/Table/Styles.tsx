import styled from 'styled-components';

export const TableContainer = styled.table`
  padding-top: 250px;
  display: flex;
  flex-direction: column;

  @media only screen and ( max-width: 768px ) {
    padding: 0;
    margin: 0;
    overflow-x: auto;
    display: block;
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
  height: 200px;

  .tr_body {
    border-bottom: 1px solid white;
  }

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
`;
