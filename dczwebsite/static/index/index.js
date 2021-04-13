import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'
const indexMixin = {
  data(){
    return {}
  },

  methods:{

  },
  mounted:function () {   //自动触发写入的函数
    $('.carousel').carousel({
      interval: 4000
    })
  }
}
export default indexMixin
