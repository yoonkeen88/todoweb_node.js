const express = require('express'); // express 모듈을 가져옴
const app = express(); // express를 사용하기 위해 변수에 할당 -객체 생성

app.listen(8080, function() { // 8080포트로 서버를 열고, 콜백함수를 실행;
    console.log('listening on 8080');

});
// 서버를 만들기 위해 기본세팅

// 누군가 서버에 접속하면, 서버가 응답할 수 있도록 라우팅 설정
app.get('/pet', function(req, res) { // req: 요청객체, res: 응답객체
    res.send('This is the page that you can buy the pet accessories');
});

app.get('/beauty', function(req, res) {
    res.send('This is the page that you can see the beauty products\tfrom all over the world');
});

app.get('/', function(req, res) { // 루트경로 = /, 홈페이지
    res.sendFile(__dirname + '/index.html'); // __dirname: 현재 디렉토리
});