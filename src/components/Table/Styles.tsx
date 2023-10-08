import styled from 'styled-components';

export const TableContainer = styled.table`
  padding-top: 250px;
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.thead`
  border-bottom: 1px solid white;
  padding: 10px;

  th {
    font-size: 12px;
    color: white;
    border-right: 1px solid white;
    width: 112px;
  }

  .th_edit {
    border: none;
  }
`;

export const TableBody = styled.tbody`
  padding: 10px;
  height: 200px;

  .tr_body {
    border-bottom: 1px solid white;
  }

  td {
    color: #2FC18C;
    width: 112px;
    text-align: center;
    padding: 10px;
    font-size: 15px;
    font-weight: 500;
    line-height: 13px;
  }

  button {
    border: none;
    cursor: pointer;
    background: #003BE5;
    padding: 0 10px;
  }
`;
