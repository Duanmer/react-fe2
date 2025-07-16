import React from 'react';

interface Order {
  id: number;
  customer: string;
  total: number;
  status: string;
}

const OrderList: React.FC = () => {
  const orders: Order[] = [
    { id: 101, customer: 'Nguyễn Văn A', total: 1200000, status: 'Đã giao' },
    { id: 102, customer: 'Trần Thị B', total: 950000, status: 'Đang xử lý' },
  ];

  return (
    <div>
      <h2>Danh sách đơn hàng</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Khách hàng</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total.toLocaleString('vi-VN')} ₫</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
