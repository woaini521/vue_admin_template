/*
 *@version: v0.0.1
 *@author: yckj0881
 *@date: 2019-07-03 09:44:58
 *@description: 详情
 */
import { Vue, Component } from 'vue-property-decorator';
import { Card } from 'ant-design-vue';
@Component({
  components: {
    'a-card': Card
  }
})
export default class Detail extends Vue {
  render() {
    return (
      <div class="container">
        <a-card class="cardbox">
          <h1>详情</h1>
        </a-card>
      </div>
    );
  }
}