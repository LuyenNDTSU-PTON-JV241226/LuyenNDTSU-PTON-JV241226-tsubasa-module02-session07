import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Demo3() {
  return (
    <div>
        <div className="d-flex justify-content-center gap-2 mt-5">
            <Button variant="primary">Lưu</Button>
            <Button variant="secondary">Hủy</Button>
            <Button variant="success">Thành công</Button>
            <Button variant="warning">Cảnh báo</Button>
            <Button variant="danger">Báo lỗi</Button>
            <Button variant="info">Thông tin</Button>
            <Button variant="link">Đường dẫn</Button>
        </div>
    </div>
  )
}

