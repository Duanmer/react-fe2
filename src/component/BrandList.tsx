import React from 'react';

interface Brand {
  id: number;
  name: string;
}

const BrandList: React.FC = () => {
  const brands: Brand[] = [
    { id: 1, name: 'Nike' },
    { id: 2, name: 'Adidas' },
  ];

  return (
    <div>
      <h2>Danh sách thương hiệu</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên thương hiệu</th>
          </tr>
        </thead>
        <tbody>
          {brands.map(brand => (
            <tr key={brand.id}>
              <td>{brand.id}</td>
              <td>{brand.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrandList;
