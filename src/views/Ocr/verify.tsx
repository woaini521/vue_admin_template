/*
 *@version: v0.0.1
 *@author: yckj0881
 *@date: 2019-07-03 09:51:06
 *@description: verify
 */
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {
  }
})
export default class Verify extends Vue {
  showDialog: boolean = false;
  fullScreen: boolean = false;

  handleDialogShow(type: number) {
    this.showDialog = true;
    if (type == 2) {
      this.fullScreen = true;
    } else {
      this.fullScreen = false;
    }
  }

  render() {
    return (
      <mk-container>
        <h1>审核</h1>
        <h2>
          <ul>
            <li>
              <router-link to='/ocr/detail'>跳转详情</router-link>
            </li>
            <li>
              <a-button on-click={this.handleDialogShow.bind(this, 1)}>
                对话框
              </a-button>
            </li>
            <li>
              <a-button on-click={this.handleDialogShow.bind(this, 2)}>
                页内详情
              </a-button>
            </li>
          </ul>
        </h2>
        <mk-dialog
          show={this.showDialog}
          full={this.fullScreen}
          on-close={() => {
            this.showDialog = false;
          }}
        >
          <div>default</div>
        </mk-dialog>
      </mk-container>
    );
  }
}
