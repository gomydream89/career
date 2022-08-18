### GET방식과 POST방식의 차이 
GET방식은 클라이언트에서 서버로 데이터를 전달할 때, 주소 뒤에 key와 value가 결합된 쿼리 스트링 형태로 전달됩니다. 주소창에 쿼리스트링이 그대로 보여지기 때문에 보안성이 떨어집니다. 길이에 제한이 있으므로 전송 데이터의 한계가 있습니다. POST 방식보다 상대적으로 전송 속도가 빠릅니다. 

POST방식은 일정 크기 이상의 데이터를 보내야할 때 사용합니다. 주소창에 전송하는 데이터의 정보가 노출되지 않아 GET방식에 비해 보안성이 높습니다. 전송 속도가 GET방식에 비해 느리며 쿼리스트링 데이터 뿐만 아니라 라디오 버튼, 텍스트 박스 같은 객체들의 값도 전송이 가능합니다.

GET방식과 POST방식의 차이점을 정리하자면, Get은 주로 웹 브라우저가 웹 서버에 데이터를 요청할 때 사용하고, 웹 브라우저에서 웹 서버로 전달되는 데이터가 인코딩되어 URL에 붙습니다. Post는 웹 브라우저가 웹 서버에 데이터를 전달하기 위해 사용하고, 전달되는 데이터가 보이지 않습니다. 웹 서버에 많은 데이터를 전달하기 위해서는 Post방식을 사용하는 것이 바람직합니다.

### (꼬리). HTTP 상태코드 
HTTP는 Hyper Text Transfer Protocol의 두문자어로, 인터넷에서 데이터를 주고받을 수 있는 프로토콜
100 정보성 상태 코드 / 200 성공 상태 코드 /  300 리다이렉션 상태 코드 / 400 클라이언트 에러 상태 코드  / 500 서버 에러 상태 코드 
✅ 200 : 요청은 정상이고, 본문은 요청된 리소스를 포함하고 있다.
✅ 201 : 어떠한 생성 작업을 요청받았으며, 생성 작업을 성공하였다.

✅ 400 : 클라이언트가 올바르지 못한 요청을 보내고 있음을 의미한다. 
✅ 401 : 요청을 위해서는 권한 인증 등을 요구함을 의미한다. 
✅ 403 : 요청이 서버에 의해 거부 되었음을 의미한다. 서버는 거부 이유를 포함하여 응답할 수 있지만, 보통은 거부 이유를 숨기고 싶을 때 사용된다. 
✅ 404 : 요청한 URL을 찾을 수 없음을 의미한다. 
✅ 405 : 요청한 URL이 Method를 지원하지 않음을 의미한다. (예시 - POST 요청에 대한 응답을 하는 URL에 GET으로 요청) 

✅ 500 : 서버에 오류가 발생하여 응답할 수 없음을 의미한다. 
✅ 501 : 클라이언트 요청에 대한 서버의 응답 수행 기능이 없음을 의미한다. 
✅ 503 : 현재 서버가 유지보수 등의 이유로 일시적인 사용이 불가함을 의미한다. 

### Rest API 에 대해 설명하시오.
REST는 Representational State Transfer의 약자입니다. 
간단히 말해서 URI와 HTTP 메소드 및 JSON과 같은 메시지포맷을 이용해 객체화된 웹 서비스에 접근하는 것입니다.

1. 클라이언트 / 서버 구조
클라이언트는 유저와 관련된 처리를, 서버는 REST API를 제공함으로써 각각의 역활이 확실하게 구분되고 일괄적인 인터페이스로 분리되어 작동할 수 있게 한다
REST Server: API를 제공하고 비지니스 로직 처리 및 저장을 책임진다.
Client: 사용자 인증이나 context (세션, 로그인 정보) 등을 직접 관리하고 책임진다.
서로 간 의존성이 줄어든다.

2. 무상태성 (Stateless)
REST는 HTTP의 특성을 이용하기 떄문에 무상태성을 갖는다.
즉 서버에서 어떤 작업을 하기 위해 상태정보를 기억할 필요가 없고 들어온 요청에 대해 처리만 해주면 되기 때문에 구현이 쉽고 단순해진다.

3. 캐시 처리 가능 (Cacheable)
HTTP라는 기존 웹표준을 사용하는 REST의 특징 덕분에 기본 웹에서 사용하는 인프라를 그대로 사용 가능하다.
대량의 요청을 효율적으로 처리하기 위해 캐시가 요구된다.
캐시 사용을 통해 응답시간이 빨라지고 REST Server 트랜잭션이 발생하지 않기 때문에 전체 응답시간, 성능, 서버의 자원 이용률을 향상 시킬 수 있다.

4. 자체 표현 구조 (Self - descriptiveness)
JSON을 이용한 메시지 포멧을 이용하여 직관적으로 이해할 수 있고 REST API 메시지만으로 그 요청이 어떤 행위를 하는지 알 수 있다.

5. 계층화 (Layered System)
클라이언트와 서버가 분리되어 있기 때문에 중간에 프록시 서버, 암호화 계층 등 중간매체를 사용할 수 있어 자유도가 높다

6. 유니폼 인터페이스 (Uniform)
Uniform Interface는 Http 표준에만 따른다면 모든 플랫폼에서 사용이 가능하며, URI로 지정한 리소스에 대한 조작을 가능하게 하는 아키텍쳐 스타일을 말한다
URI로 지정한 Resource에 대한 조작을 통일되고 한정적인 인터페이스로 수행한다.
즉, 특정 언어나 기술에 종속되지 않는다.

REST의 요소로는 크게 리소스, 메소드, 메세지 3가지 요소로 구성됩니다. 예를 들어 "이름이 Tom인 사용자를 생성한다." 라는 호출이 있을 때 
"사용자"는 생성되는 리소스, "생성한다."라는 행위는 메소드, 그리고 "이름이 Tom인 사용자"는 메세지가 됩니다. 즉 리소스는 http://myweb/users라는 형태의 URI로 표현되며, 
메소드는 HTTP Post, 메세지는 JSON 문서를 이용해서 표현됩니다. HTTP에는 여러가지 메소드가 있지만 REST에서는 CRUD에 해당하는 4가지의 메소드 GET, POST, PUT, DELETE를 사용합니다. 
REST는 리소스 지향 아키텍쳐 스타일이라는 정의에 맞게 모든 것을 명사로 표현하며 각 세부 리소스에는 id를 붙입니다. 

### HATEOAS 
Hypermedia As The Engine Of Application State
HATEOAS라는 개념을 통해, 자원에 호출 가능한 API 정보를 자원의 상태를 반영하여 표현하는것이다.
Application의 상태(State)는 Hyperlink를 통해 전이되어야 함, 서버는 현재 이용 가능한 다른 작업에 대한 하이퍼링크를 포함하여 응답해야 함.

(참고) https://wonit.tistory.com/454 HATEOAS 를 이용한 REST API 

![image](https://user-images.githubusercontent.com/46310329/185293323-2072a60c-8c7e-4fce-a082-eaa18e4b55f5.png)


### @RestController
(참고) Controller Vs RestController : https://mangkyu.tistory.com/49
* @RestController는 @Controller에 @ResponseBody가 추가된 것입니다. 당연하게도 RestController의 주용도는 Json 형태로 객체 데이터를 반환하는 것입니다. 
최근에 데이터를 응답으로 제공하는 REST API를 개발할 때 주로 사용하며 객체를 ResponseEntity로 감싸서 반환합니다. 

![image](https://user-images.githubusercontent.com/46310329/185289468-80313b36-cf86-4519-8851-0b4234a9515d.png)

1. Client는 URI 형식으로 웹 서비스에 요청을 보낸다.
2. DispatcherServlet이 요청을 위임할 HandlerMapping을 찾는다.
3. HandlerMapping을 통해 요청을 Controller로 위임한다.
4. Controller는 요청을 처리한 후에 객체를 반환한다.
5. 반환되는 객체는 Json으로 Serialize되어 사용자에게 반환된다.

### PathVariable 과 ReqeustParam 차이 
uri를 통해 전달된 값을 파라미터로 받아오는 역할을 합니다.
ReqeustParam 은 쿼리스트링을 사용하여 값을 전달하며, PathVariable은 REST방식으로 uri 경로의 일부를 파라미터로 받아오는 역할을 합니다.

### ResquestBody /  ResponseBody
web에서 받은 data는 java에서 사용 시 : web -> (javaObject로 변환 ) - > java에서 활용
java에서 web으로 data 보낼 시  : java -> ( json Object로 변환) ->  web
클라이언트가 전송하는 Http 요청의 Body 내용을 Java Object로 변환시켜주는 역할.
Json이나 XML같은 형태의 data를 jackson등의 MessageConverter를 활용하여 Java Object로 변환한다.

### ResponseEntity
Spring Framework에서 제공하는 클래스 중 HttpEntity라는 클래스가 존재한다. 이것은 HTTP 요청(Request) 또는 응답(Response)에 해당하는 HttpHeader와 HttpBody를 포함하는 클래스이다. 
HttpEntity 클래스를 상속받아 구현한 클래스가ResponseEntity 클래스이다. 
ResponseEntity는 사용자의 HttpRequest에 대한 응답 데이터를 포함하는 클래스이다. 따라서 HttpBody, HttpHeaders, HttpStatus를 포함한다. 


### OAuth2 인증방식 (OAuth2 인증을 통한 공공 open Api 이용)

OAuth2 정의 
https://cheese10yun.github.io/spring-oauth2-provider/

Oauth2 를 구현
https://autumnly.tistory.com/64?category=813931

### 마이데이터 동작 방식 
* 데이터 표현 규격 - JSON/UTF-8
* 데이터 통신 규격 - TLS 기반 상호인증 및 전송구간 암호화
* API 요청 및 응답 메시지 교환방식 - REST 방식 사용
* 개인신용정보 전송요구 인증 규격 - OAuth 2.0
* 접근토큰규격 - JWS(JSON Web Signature)

* API 종류 - 인증/정보제공/지원
* 지원 API - 접근토큰발급/기관정보조회/서비스정보조회/통계자료전송/통합인증API호출용자격증명조회/정보수신자용자격증명조회

![image](https://user-images.githubusercontent.com/46310329/185392206-6848787a-0f75-4c6a-96e8-de9644274f90.png)


### Swagger
API 설계, 개발, 문서화, 테스트를 통해 API Spec을 명세화, 관리할 수 있는 프레임워크로 알고 있습니다.

