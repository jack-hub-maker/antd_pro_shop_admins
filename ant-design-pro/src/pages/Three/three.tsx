/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-01-19 17:27:02
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-20 14:51:36
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Three/three.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three';
import ReactDOM from 'react-dom';
const three = () => {
    const refCanvas = useRef<any>(null);
    const init = () => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('refCanva').appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };
        animate();

        // const scene = new THREE.Scene()

        // const camera = new THREE.PerspectiveCamera(45,
        //     window.innerWidth / window.innerHeight,
        //     0.1,
        //     1000
        // )
        // camera.position.set(-30, 40, 30)
        // camera.lookAt(0, 0, 0)
        // scene.add(camera)

        // const planeGeometry = new THREE.PlaneGeometry(60, 20)
        // const planeMaterial = new THREE.MeshLambertMaterial({
        //     color: 0xAAAAAA
        // })
        // const plane = new THREE.Mesh(planeGeometry, planeMaterial)
        // plane.rotation.x = -Math.PI / 2
        // plane.position.set(15, 0, 0)
        // scene.add(plane)


        // const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
        // const sphereMaterial = new THREE.MeshLambertMaterial({
        //     color: 0xffff00
        // })
        // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
        // sphere.position.set(20, 4, 2)
        // scene.add(sphere)

        // const spotLight = new THREE.SpotLight(0xffffff)
        // spotLight.position.set(-20, 30, -15)
        // scene.add(spotLight)

        // const renderer = new THREE.WebGLRenderer()
        // renderer.setClearColor(new THREE.Color(0x000000))
        // renderer.setSize(window.innerWidth, window.innerHeight)
        // document.getElementById('webgl-output').appendChild(renderer.domElement)

        // renderer.render(scene, camera)
    }




    useEffect(() => {
        init()
    }, [])
    return (
        <div id='refCanva' style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            {/* 画布，3D场景 */}
            {/* <canvas style={{ width: '100%', height: '100%' }} id='refCanva' ref={refCanvas}>1</canvas> */}
        </div>

        // <div id="webgl-output"></div>
    )
}

export default three
