export default {
  SIDEBAR: [
    {
      name: 'search',
      text: 'Tìm kiếm nhanh',
      icon: 'bi-search'
    },
    {
      name: 'Business',
      text: 'Kinh doanh',
      icon: 'bi-credit-card',
      child: [
        {
          name: 'Liên hệ',
          controller: 'ContactController',
          action: 'index'
        },
        {
          name: 'Data Marketing',
          controller: 'BookOrderController',
          action: 'index'
        },
        {
          name: 'Data Tiềm năng',
          controller: 'SettingController',
          action: 'index'
        },
        {
          name: 'Hợp đồng',
          controller: 'ContactController',
          action: 'index'
        },
        {
          name: 'Hóa đơn',
          controller: 'ContactController',
          action: 'index'
        },
        {
          name: 'Hóa đơn sách',
          controller: 'ContactController',
          action: 'index'
        },
        {
          name: 'Xử lí hóa đơn',
          controller: 'ContactController',
          action: 'index'
        },
        {
          name: 'Phiếu sharezone',
          controller: 'ContactController',
          action: 'index'
        },
        {
          name: 'Lịch sử hóa đơn',
          controller: 'ContactController',
          action: 'index'
        },
        {
          name: 'Lịch sử chăm sóc',
          controller: 'ContactController',
          action: 'index'
        }
      ]
    },
    {
      name: 'event',
      text: 'Sự Kiện',
      icon: 'bi-calendar-event',
      child: [
        {
          name: 'Demo lớp học',
        },
        {
          name: 'Demo'
        },
        {
          name: 'Test',
        },
        {
          name: 'Hội thảo'
        },
      ]
    },
    {
      name: 'training',
      text: 'Đào tạo',
      icon: 'bi-book',
      child: [
        {
          name: 'Yêu cầu xử lí',
        },
        {
          name: 'Đăng kí thủ tục'
        },
        {
          name: 'Dữ liệu khảo sát',
        },
        {
          name: 'Chấm bài test IE'
        },
        {
          name: 'Sản phẩm',
        },
        {
          name: 'Lớp học offline'
        },
        {
          name: 'Lớp học trực tuyến',
        },
        {
          name: 'Địa điểm học'
        },
        {
          name: 'Phòng học'
        },
      ]
    },
    {
      name: 'report',
      text: 'Báo cáo',
      icon: 'bi-bar-chart',
      controller: 'ContactController',
      action: 'index'
    },
    {
      name: 'turnover',
      text: 'Phân bổ doanh thu',
      icon: 'bi-credit-card-2-front-fill',
      controller: 'ContactController',
      action: 'index'
    },
    {
      name: 'target',
      text: 'Chỉ tiêu kinh doanh',
      icon: 'bi bi-bookmark-check-fill',
      controller: 'ContactController',
      action: 'index'
    },
    {
      name: 'setting',
      text: 'Cài đặt',
      icon: 'bi bi-gear',
      child: [
        {
          name: 'Nhân viên',
        },
        {
          name: 'Cơ sở kinh doanh'
        },
        {
          name: 'Đội nhóm kinh doanh',
        },
        {
          name: 'Phân vùng đội nhóm'
        },
        {
          name: 'Phân loại đội nhóm',
        },
        {
          name: 'Chương trình khuyến mãi'
        },
        {
           name: 'Cấu hình chuyên mục',
        },
        {
          name: 'Form'
        },
        {
          name: 'Form data'
        },
      ]
    },
  ]
};
