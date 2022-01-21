/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-01-19 17:27:02
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-20 15:06:34
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Three/three1.tsx
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

    }
    useEffect(() => {
        init()
    }, [])

    return (
        <div id='refCanva' style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
        </div>
    )
}

export default three
