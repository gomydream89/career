* 실행컨텍스트 : 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
                     (함수 실행 시, 실행 컨텍스트 구성)
   - VariableEnvironment : 현재 컨텍스트 내의 식별자들에 대한 정보 + 외부환경 정보
                                 선언 시점의 LexicalEnvironment 의 스냅샷
   - LexicalEnvironment   : VariableEnvironment 와 같지만, 변경사항이 실시간으로 반영됨.
   - ThisBinding : this 식별자가 바라봐야할 대상 객체 

* LexicalEnvironment = {...VariableEnvironment, 변경사항}
  - environmentRecord : 코드가 실행되기 전에 현재 컨텍스트와 관련된 코드의 식별자 정보저장(변수, 선언함수)
    # 호이스팅 : 식별자들을 최상단으로 끌어올려놓는
                    변수는 선언부.
                    함수선언문은 전체 / 함수표현식은 선언부.

 - outer-EnvironmentReference : 현재 호출된 함수가 선언될 당시의 LexicalEnvironment 참조.

* 스코프(Scope) : 식별자에 대한 유효범위, 식별자의 유효범위를 안에서부터 바깥으로 차례로 검색해나가는것을 스코프 체인이라한다.

 * this : 실행컨텍스트가 생성될떄, 함께 결정되는 즉 this는 함수를 호출할때 결정된다.
  - 전역공간 : window
  - 함수호출시 : window ex) outer();
  - 메소드호출시 : 메소드 호출 주체(메소드 명 앞) ex) x.outer(); -> x가 this
  - callback 호출 시: 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에 따르며, 정의하지 않은 경우 전역객체를 찿ㅁ조.
  - 생성자 함수 호출 시: 생성될 인스턴스를 참조 
  
    # 명시적 this 바인딩
    - call, apply 메소드는 this를 명시적으로 지정하며 함수 또는 메소드를 호출
    - bind 메서드는 this 및 함수에 넘길 인수를 일부 지정해서 새로운 함수를 만듭니다.
    
* 콜백 함수는 다른 코드에 인자를 넘겨줌으로써, 그 제어권도 함꼐 위임한 함수.
* 클로저란 어떤 함수에서 선언한 변수를 참조하는 내부함수를 외부로 전달하는 경우, 함수의 실행컨텍스트가 종료된 히우에도, 해당 변수가 사라지지 않는 현상.
* 어떤 생성자 함수를 new 연산자와 함께 호출하면 Constructor에서 정의된 내용을 바탕으로 새로운 인스턴스가 생성되는데, 
  이 인스턴스에는 __proto__ 라는, Constructor의 prototype 프로퍼티를 참조하는 프로퍼티가 자동으로 부여됩니다.
  __proto__는 생략가능한 속성이며, 인스턴스는 Constructor.prototype의 메서드를 마치 자신의 메서드인것처럼 호출 가능.저


* DOM(Document Object Model)은 자바스크립트를 이용하여 수정가능한 객체를 이용하여 원본 html 문서를 해석하는 방법
  # 트리구조
      Document Node : 최상위에 존재하며 DOM 트리에 접근하기 위한 Root Node입니다.
      Element Node : h1, div 같은 태그를 가르키는 Node입니다.
      Attribute Node : class, id , href, style 같은 속성에 대한 Node입니다.
      Text Node : <div> Hello World </div> 에서 태그 안에 감싸진 Hello Wolrd를 가르키는 Node입니다.

# 정적인 문서 객체와 동적인 문서 객체 2가지 종류
   정적인 문서 객체는 우리가 생성한 원본 html 문서에 있는 객체들이고 동적인 문서 객체는 <script>를 이용하여 구현

* CSR(Client Side Rendering) VS SSR(Server Side Rendering)
CSR : Browser가 서버에 HTML과 static파일을 요청한 후 로드되면 사용자의 상호작용에 따라서 javascript를 통해 동적으로 Rendering한다. 
       필요에 따라 데이터를 서버에 요청해서 받아와 Rendring한다.

       - 장점 : 첫 로딩에 HTML과 static파일들만 다 받으면, 동적으로 빠르게 Rendering하기 때문에 사용자 UX가 뛰어나다.
                 서버에 요청하는 횟수가 훨씬 적기 때문에 서버 부담이 덜하다.
       - 단점 : 모든 HTML과 static파일이 로드될 때까지 기다려야 한다.
                 SEO(검색엔진 최적화) 문제가 발생할 수 있다.(Javascript 해석 불가-구글은 예외)
                 
SSR : 완전하게 만들어진 HTML파일을 받아오고 Rendering하게 된다. 
        웹서버에 요청할때 마다 Browser 새로고침이 일어나고 서버에 새로운 페이지에 대한 요청을 하는 방식.

       - 장점 : 초기 로딩 속도가 빠르기 때문에 사용자가 컨텐츠를 빨리 볼 수 있다.
                 모든 검색엔진에 대한 SEO(검색엔진 최적화)가 가능하다.
       - 단점 : 매번 페이지를 요청할 때마다 새로고침 되기 때문에 사용자 UX가 다소 떨어진다.
                 서버에 매번 요청을 하기 때문에 트래픽, 서버 부하가 커진다.

SSR을 사용하면 모든 데이터가 매핑된 서비스 페이지를 클라이언트(브라우저)에게 바로 보여줄 수 있다. 
서버를 이용해서 페이지를 구성하기 때문에 클라이언트에서 구성하는 CSR(client-side rendering)보다 페이지를 구성하는 속도는 늦어지지만 
전체적으로 사용자에게 보여주는 콘텐츠 구성이 완료되는 시점은 빨라진다는 장점이 있다.

* SPA(Single Page Application) VS MPA(Multiple Page Application)
SPA : 하나의 HTML 파일을 기반으로 javascript 를 이용해 동적으로 화면을 이리저리 컨텐츠를 바꾸는 방식의 웹 어플리케이션이다.
MPA : 화면마다 HTML파일이 존재하고, 사용자가 그 화면을 요청할 때마다, 웹 서버가 필요한 데이터와 HTML로 파싱해서 보여주는 방식의 웹 어플리케이션이다.

SPA는 서버로부터 최초 페이지 전체(.js)를 받아오고 이후에는 동적으로 DOM을 구성하여 Rendering 되는 화면이 바뀌게 한다.
동적으로 DOM을 구성하여 Rendering 되는 화면이 바뀌게 한다.” 부분이 CSR이다.
SPA는 한 종류의 화면만 존재하는 것이 아니다! 화면에 따라 다른 주소를 가진다. 주소가 있어야 사용자들이 북마크도 가능하고, 
서비스에 구글을 통해 유입될 수 있기 때문이다.(SEO). 주소에 따라 다른 뷰를 렌더링하는 것을 라우팅이라고 한다. 

* HTTPS 필요이유 3가지
개인정보보호/무결성/식별
- 개인정보보호 : 아무도 메시지를 가로챌 수 없음을 의미
- 무결성 : 메시지가 목적지로 가는 도중에 조작되지 않음을 의미
- 식별 : 메시지에 첨부된 디지털 서명으로 발신자 확인 가능.

* 핸드 쉐이크 
- 브라우저와 서버 간의 협상 프로세스.
1. 클라이언트 -> 서버 : SSL/TLS 버전 및 암호와 알고리즘 목록 (cipher suite)
                              # SSL : Secure Socket Layer/ TLS : Transport Layer Security
2. 서버 -> 클라이언트 : 버전 및 알고리즘 선택 후, 공개기가 포함된 인증서로 회신.
3. 키교환 
    1) 클라이언트가 서버의 인증서 확인(합법적) / CA(인증기관) 확인
    2) 클라이언트 -> 서버 : pre-master(대칭) 키를 생성하여, 이 키를 서버의 공개 키로 암호환 후 송신
4. 개인키를 사용하여 pre-master 키 암호 해독 
5. 종료 및 https 통신 시작 
