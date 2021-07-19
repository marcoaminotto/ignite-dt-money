import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
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
