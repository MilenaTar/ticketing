import { Card, Row, Col, Radio, Button } from 'antd';
import { TicketStatus } from '../../types/Ticket.type';

const statusOptions = [
  { label: 'All', value: 'all' },
  { label: TicketStatus.OPEN, value: TicketStatus.OPEN },
  { label: TicketStatus.CLOSED, value: TicketStatus.CLOSED },
];

export const TicketsToolsPanel: React.FC<{
  statusFilter: TicketStatus | 'all';
  onStatusChange: (value: TicketStatus | 'all') => void;
  onCreate: () => void;
}> = ({ statusFilter, onStatusChange, onCreate }) => (
  <Card size="small" style={{ marginBottom: 16, color: 'unset' }}>
    <Row align="middle" justify="space-between">
      <Col>
        <Radio.Group
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          optionType="button"
          buttonStyle="solid"
        >
          {statusOptions.map((opt) => (
            <Radio.Button key={opt.value} value={opt.value}>
              {opt.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Col>
      <Col>
        <Button type="primary" onClick={onCreate}>
          Create new ticket
        </Button>
      </Col>
    </Row>
  </Card>
);
