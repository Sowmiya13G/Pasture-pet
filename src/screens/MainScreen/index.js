// import React from 'react';
// import { AppRegistry, View } from 'react-native';
// import { ARKit } from 'react-native-arkit';


// const ReactNativeARKit = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <ARKit
//         style={{ flex: 1 }}
//         debug
//         planeDetection={ARKit.ARPlaneDetection.Horizontal}
//         lightEstimationEnabled
//         onLightEstimation={(e) => console.log(e.nativeEvent)}
//         onPlaneDetected={(anchor) => console.log(anchor)}
//         onPlaneUpdated={(anchor) => console.log(anchor)}
//         onPlaneRemoved={(anchor) => console.log(anchor)}
//         onAnchorDetected={(anchor) => console.log(anchor)}
//         onAnchorUpdated={(anchor) => console.log(anchor)}
//         onAnchorRemoved={(anchor) => console.log(anchor)}
//         detectionImages={[{ resourceGroupName: 'DetectionImages' }]}
//         onARKitError={console.log}
//       >
//         <ARKit.Box
//           position={{ x: 0, y: 0, z: 0 }}
//           shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
//         />
//         <ARKit.Sphere
//           position={{ x: 0.2, y: 0, z: 0 }}
//           shape={{ radius: 0.05 }}
//         />
//       </ARKit>
//     </View>
//   );
// };

// AppRegistry.registerComponent('ReactNativeARKit', () => ReactNativeARKit);

// export default ReactNativeARKit;