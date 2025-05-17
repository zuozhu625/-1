// 获取DOM元素
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeBtn = document.getElementById('closeBtn');

// 显示模态窗口
contactBtn.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

// 关闭模态窗口（按钮点击）
closeBtn.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// 关闭模态窗口（点击窗口外区域）
window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// 示例：未来可添加商品数据动态加载逻辑
// fetch('products.json')
//   .then(response => response.json())
//   .then(products => renderProducts(products));

// function renderProducts(products) {
//   const grid = document.querySelector('.product-grid');
//   products.forEach(product => {
//     grid.innerHTML += `
//       <div class="product-card">
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.description}</p>
//         <p class="price">￥${product.price}</p>
//       </div>
//     `;
//   });
// }


// 显示支付模态框
// 原显示支付模态框的逻辑（注释或删除）
// document.querySelectorAll('.buy-btn').forEach(btn => {
//     btn.addEventListener('click', () => {
//         const modal = document.querySelector('.payment-modal');
//         modal.style.display = 'flex';
//         setTimeout(() => modal.style.opacity = '1', 50);
//     });
// });

// 新增：跳转逻辑（示例跳转到支付页面，可根据实际需求修改目标URL）
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('立即购买按钮被点击，尝试跳转到payment.html'); // 添加日志
        window.location.href = 'payment.html';
    });
});

// 关闭支付模态框
document.querySelector('.close-payment').addEventListener('click', () => {
    const modal = document.querySelector('.payment-modal');
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 300); // 渐变隐藏
});

// 下载二维码到相册
document.querySelector('.download-btn').addEventListener('click', () => {
    const qrcodeImg = document.querySelector('.payment-qrcode');
    const imgUrl = qrcodeImg.src;
    
    // 创建临时下载链接
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = 'payment-qrcode.jpg'; // 下载文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});