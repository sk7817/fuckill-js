/**
 * this is fuckill js 
 * author:sk
 * following MIT license
 */

import { SubQueue } from "./sub"
import Observer from "./observer"
import Compile from "./compile" 

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()  :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.Fuckill = factory());
}(this, function () {
    function Fuckill(opts) {
        if (!opts.el) return console.warn('请填写参数: el')
        opts.beforeCreate && opts.beforeCreate.call(this) // beforeCreate 钩子
        this.el = opts.el
        this.created = opts.created.bind(this) // created 钩子
        this.data = opts.data || {} // 数据
        this.methods = opts.methods // 实例方法
        this.subQueue = new SubQueue() //订阅器队列
        this.init()
        opts.mounted && opts.mounted.call(this) // mounted 钩子
    }

    Fuckill.prototype.init = function () {
        Object.keys(this.data).forEach(key => {
            this.proxyKeys(key)
        })
        new Observer(this.data, this) // 数据绑定
        this.created && this.created() // created 钩子
        new Compile(this) // 节点解析
    }

    Fuckill.prototype.proxyKeys = function (attr) {   
        Object.defineProperty(this, attr, {
            enumerable: true,
            configurable: true,
            get() {  
                return this.data[attr]
            },
            set(newVal) {
                if (this.data[attr] === newVal) return
                this.data[attr] = newVal
            }
        })
    }

    return Fuckill

}));