// ==UserScript==
// @name         自动评教
// @namespace    https://github.com/Nouchi-Kousu/Dlut_auto-StudentSummativeEvaluation
// @version      0.1
// @description  Dlut_auto-StudentSummativeEvaluation
// @author       Nouchi
// @match        *://jxgl.dlut.edu.cn/*
// @icon         https://i.postimg.cc/RVLkPrr1/image.png
// @grant        none
// @license      MIT
// ==/UserScript==

(function (window, document) {
    'use strict';
    // Your code here...
    setTimeout(() => {
        const newButton = document.createElement('button')
        const ddiv = document.querySelector('div[class="main-container"]')
        newButton.className = "el-button el-button--primary el-button--small"
        newButton.innerHTML = '<span data-id="114">评教</span>'
        ddiv.appendChild(newButton)
        const pingJiao = document.querySelector('span[data-id="114"]')
        pingJiao.parentNode.addEventListener('click', () => {
            const span = document.querySelectorAll('span[class="el-radio__input"]')
            const j = [0, 4, 8, 12, 16, 20, 24, 28, 31, 33, 36, 38]
            for (let i = 0; i < j.length; i++) {
                const ele = j[i];
                span[ele].click()
            }
            const text = document.querySelector('textarea')
            const ping = ['无', '挺好的', '好的', '不错的', '再接再厉']
            const rad = Math.floor(Math.random() * ping.length)
            text.value = ping[rad]
            text.dispatchEvent(new InputEvent("input"))
            button.click()
        })
    }, 5000)
})(window, document);