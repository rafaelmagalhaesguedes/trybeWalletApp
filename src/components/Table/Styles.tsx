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
    font-size: 12px;
    color: white;
    width: 112px;
    text-align: center;
    padding: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
      background: #dad7d7;
  }
`;
