function Observer(data, vm) {
    this.data = data
    this.vm = vm
    this.init()
}

Observer.prototype.init = function () {
    this.initData(this.data)
}

Observer.prototype.initData = function (data) {
    if (!data || typeof data !== 'object') return
    Object.keys(data).forEach(key => {
        this.defineProperty(data, key, data[key])
    })
}

Observer.prototype.defineProperty = function (parent, attr, val) {
    this.initData(val)
    let _this = this
    Object.defineProperty(parent, attr, {
        enumerable: true,
        configurable: true,
        get() {
            if (_this.vm.subQueue.target) {
                if (_this.vm.subQueue.subs.some(sub => sub === _this.vm.subQueue.target)) return val
                _this.vm.subQueue.addSub(_this.vm.subQueue.target)
            }
            return val
        },
        set(newVal) {
            if (val === newVal) return
            val = newVal
            _this.vm.subQueue.notifyAllSubs()
        }
    })
}

export default Observer