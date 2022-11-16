import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableColor};
`;

export const TransactionHead = styled.thead`
  background-color: #3c8ed6;
  color: ${p => p.theme.colors.textLight};
  padding: 10px;
`;

export const TableHeaderEl = styled.th`
  font-size: 20px;
  padding: 10px;
  border: 1px solid #0a8de4;
  text-align: center;
`;

export const TransactionBody = styled.tbody`
  text-align: center;
  border: ${p => p.theme.borders.normal} #0a8de4;
`;

export const TableRow = styled.tr`
  padding: 10px;
`;

export const TableData = styled.td`
  padding: 10px;
  border: ${p => p.theme.borders.normal} #0a8de4;
  text-align: center;
`;
