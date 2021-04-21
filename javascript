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
