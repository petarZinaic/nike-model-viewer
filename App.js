import { useEngine, EngineView } from '@babylonjs/react-native';
import { Scene } from "@babylonjs/core";
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

export default function App() {
  const engine = useEngine();
  const [camera, setCamera] = useState();

  useEffect(() => {
    if(engine) {
      const scene = new Scene(engine);
      scene.createDefaultCamera(true);
      setCamera(scene.activeCamera);
    }
  }, [engine])

  return (
    <>
      <EngineView style={styles.engineView} camera={camera}/>
    </>
  );
}

const styles = StyleSheet.create({
  engineView: {
    flex: 1,
  },
});
