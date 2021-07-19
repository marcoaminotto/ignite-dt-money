import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website Development</td>
            <td className="deposit">$12.000</td>
            <td>Development</td>
            <td>19/07/21</td>
          </tr>
          <tr>
            <td>Renting</td>
            <td className="withdraw">- $2.000</td>
            <td>House</td>
            <td>19/07/21</td>
          </tr>
          <tr>
            <td>University</td>
            <td className="withdraw">- $2.000</td>
            <td>Studies</td>
            <td>19/07/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
