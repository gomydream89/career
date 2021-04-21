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
