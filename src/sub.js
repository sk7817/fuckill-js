function Suber(vm, attr, cb) {
    this.vm = vm
    this.attr = attr
    this.cb = cb
    this.value = this.get()
}

Suber.prototype.get = function () {
    this.vm.subQueue.target = this // 添加当前订阅者
    let value = this.getAttrVal(this.attr) // 通过获取该属性值来把当前订阅者放入队列
    this.vm.subQueue.target = null // 清除缓存
    return value
}

Suber.prototype.update = function () { 
    let value = this.getAttrVal(this.attr)
    if (value !== this.value) {
        this.cb && this.cb(value)
        this.value = value
    }
}

Suber.prototype.getAttrVal = function (attr) {
    let vm = this.vm
    if (attr.indexOf('.') >= 0) {
        let arr = attr.split('.')
        return arr.reduce((obj, attr) => {
            if (typeof obj !== 'object') {
                return this.vm[obj][attr]
            }
            return obj[attr]
        })
    } else {
        return this.vm[this.attr]
    }
}

function SubQueue() {
    this.subs = []
    this.target = null
}

SubQueue.prototype.addSub = function (sub) {
    this.subs.push(sub)
}

SubQueue.prototype.notifyAllSubs = function () {
    this.subs.forEach(sub => {
        sub.update()
    })
}

export default Suber

export {
    SubQueue
}
