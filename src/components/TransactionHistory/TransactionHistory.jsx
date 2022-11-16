import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHead,
  TransactionBody,
  TableRow,
  TableData,
  TableHeaderEl,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <TableRow>
          <TableHeaderEl>Type</TableHeaderEl>
          <TableHeaderEl>Amount</TableHeaderEl>
          <TableHeaderEl>Currency</TableHeaderEl>
        </TableRow>
      </TransactionHead>

      <TransactionBody>
        {items.map(transaction => {
          return (
            <TableRow key={transaction.id}>
              <TableData>{transaction.type}</TableData>
              <TableData>{transaction.amount}</TableData>
              <TableData>{transaction.currency}</TableData>
            </TableRow>
          );
        })}
      </TransactionBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
};
