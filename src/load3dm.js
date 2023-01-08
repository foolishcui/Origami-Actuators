import * as THREE from '../node_modules/three/build/three.module.js'
import {Rhino3dmLoader} from '../node_modules/three/examples/jsm/loaders/3DMLoader.js'

const filePath = '../models/miura-ori-tube.3dm'

// load Object3D (three.js) from Rhino 3dm file
export function load3dmFile( filePath ) {
    
    const loader = new Rhino3dmLoader()
    loader.setLibraryPath( 'https://cdn.jsdelivr.net/npm/rhino3dm@7.11.1/' )
    
    loader.load( filePath, function ( object ) {
        
        console.log( object.children[0].geometry )
        // console.log( tube.children[0].geometry.index.array )
        // console.log( tube.children[0].geometry.attributes.position.array )
        
        object_mesh = object.children[0]
        // get vertices
        vertices = object_mesh.geometry.attributes.position.array
        // get indices
        indices = object_mesh.geometry.index.array
        
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute( 'position', new THREE.BufferAttribute(vertices, 3) )
        geometry.setIndex( new THREE.BufferAttribute(indices, 1) )
        geometry.computeVertexNormals()
        
        return geometry
    })
}