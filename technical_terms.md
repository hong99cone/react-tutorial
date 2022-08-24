# ✨ React 관련용어 정리   

* rendering(렌더링) : html요소(element) 또는 React 요소 등의 코드가 눈으로 볼수 있도록 그려지는 것   

* element(엘리먼트) : React의 App의 가장 작은 단위, 화면에 표시할 내용을 기술, component의 구성요소   
```jsx
const element = <h1>hello, react element😵</h1>;
```

* component(컴포넌트) : React의 App을 이루는 단위, 사용자에게 보여지는 UI 요소를 컴포넌트 단위로 구분, props와 state와 같은 data를 입력받아 DOM node를 생성    


* props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값   
* state : 컴포넌트 내부에서 선언하며 내부에서 값 변경 가능   


* refactory :   


* immutable object (불변 객체) : 객체 지향 프로그래밍에 있어서 생성 후에 상태를 바꿀 수 없는 객체   


```javascript
import React from 'react';

// HTML과 구분되게 pascal case로 표기

function App(props) {
  // props : React 컴포넌트에 젅달된 모든 데이터
  // HTML 요소는 attribute(속성)를 가지고 있고 React 컴포넌트는 props를 가지고 있음
  // ex) porps = "value"
  // props는 단방향(unidirectionial) only parent ▶ child

  const subject = props.subject;

  //  () 사용하는이유 : 가독성, 없어도 상관없음
  return (
    <div className="App">
      <header className="App-header">
        {/* src가{}안에 들어가있음, JSX가 변수를 인식하는 방법 */}
        <p>
          Hello {subject}!
        </p>
        
      </header>
    </div>
  );
}

// App comnponent를 다른 module에서도 사용할수 있게함
export default App;
```