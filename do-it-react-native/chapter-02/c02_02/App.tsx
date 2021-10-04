// import React from 'react';
// import {SafeAreaView, Text} from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView>
//       <Text>Hello JSX world!</Text>
//     </SafeAreaView>
//   );
// }

// if 문을 JSX 문 바깥쪽에 구현하여 문제 해결
// import React from 'react';
// import {SafeAreaView, Text} from 'react-native';

// export default function App() {
//   const isLoading = true;
//   if (isLoading) {
//     return (
//       <SafeAreaView>
//         <Text>Loading...</Text>
//       </SafeAreaView>
//     );
//   }
// }

// 조건문을 단축 평가 코드로 바꿔 문제 해결
// import React from 'react';
// import {SafeAreaView, Text} from 'react-native';

// export default function App() {
//   const isLoading = true;
//   return (
//     <SafeAreaView>
//       {isLoading && <Text>Loading...</Text>}
//       {isLoading && <Text>Hello JSX world!</Text>}
//     </SafeAreaView>
//   );
// }

// JSX 문을 변수에 담아 문제 해결
// import React from 'react';
// import {SafeAreaView, Text} from 'react-native';

// export default function App() {
//   const isLoading = true;
//   const children = isLoading ? (
//     <Text>Loading...</Text>
//   ) : (
//     <Text>Hello JSX world!</Text>
//   );

//   return <SafeAreaView>{children}</SafeAreaView>;
// }

// 배열에 담긴 JSX 렌더링 예
// import React from 'react';
// import {SafeAreaView, Text} from 'react-native';

// export default function App() {
//   const children = [
//     <Text>Hello world!</Text>,
//     <Text>Hello world!</Text>,
//     <Text>Hello world!</Text>,
//   ];

//   return <SafeAreaView>{children}</SafeAreaView>;
// }

// Array.map을 사용하여 조금씩 다른 자식 컴포넌트를 렌더링한 예
// import React from 'react';
// import {SafeAreaView, Text} from 'react-native';

// export default function App() {
//   const children = [1, 2, 3].map(i => <Text>Hello world! {i}</Text>);

//   return <SafeAreaView>{children}</SafeAreaView>;
// }

// 조금씩 다른 100개의 컴포넌트 배열을 만드는 예
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function App() {
  const children = new Array(100)
    .fill(null)
    .map((notUsed, index) => <Text>Hello world! {index}</Text>);

  return <SafeAreaView>{children}</SafeAreaView>;
}
