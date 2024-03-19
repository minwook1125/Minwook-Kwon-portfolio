const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static('public'));

// 기본 경로 설정
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/homepage.html'));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
