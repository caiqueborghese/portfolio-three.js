import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import { Color } from 'three'

export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>

        

        <Environment preset='city' />

        <color args={ ['#f8f8f8'] } attach="background" />

        
        <PresentationControls  // camera
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ -0.4, 0.2 ] } 
            azimuth={ [ -1, 0.75 ] } // rotação lateral
            config={ { mass: 2, tension: 400 } } // efeito elastico
            snap={ { mass: 4, tension: 400 } } // o computador volta automatico para posicao inicial
        >
            <Float rotationIntensity={ 0.4 }>

                {/* LIGHT */}
                <rectAreaLight 
                  width={ 2.5 }
                  height={ 1.65 }
                  intensity={ 65 }
                  color={ '#FFFFFF' }
                  rotation={ [ 0.1, Math.PI, 0 ]}
                  position={ [ 0, 0.55, - 1.15 ] }
                />

                {/* LAPTOP */}
                <primitive 
                    object={ computer.scene }
                    position-y={ -1.2 }
                >
                  <Html
                    transform
                    wrapperClass='htmlScreen'
                    distanceFactor={ 1.17 }
                    position={ [ 0, 1.56, - 1.4 ] }
                    rotation-x={ - 0.256 }
                  >
                    <iframe src="https://caiqueborghese.github.io/portfolio/"/>
                  </Html>
                </primitive>
                {/* TEXT */}
                <Text
                  font='./bangers-v20-latin-regular.woff'
                  fontSize={ 1 }
                  position={ [ 2, 0.75, 0.75 ] }
                  rotation-y={ - 1.25 }
                  maxWidth={ 2 }
                  textAlign='center'
                  color={ '#000000' }
                >
                  CAIQUE BORGHESE
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows 
            position-y={ -1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 } 
        />

        
    </>
}

