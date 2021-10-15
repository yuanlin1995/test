import { Component, Vue } from 'vue-property-decorator'

console.log(require('./a'))

@Component
class Index extends Vue {
    dosomething () {
        console.log('https://www.baidu.com')
    }
}

const ins = new Index()
ins.dosomething()
