import Vuex from 'vuex' // vuexをインポートして使えるようにする

const createStore = () => {
  return new Vuex.Store({
    state: function() { // state => ストアで管理する値,stateの値は常にfunctionにしなくてはならない ,コンポーネントのdataオプションみたいなもの
      return{ //オブジェクトを返す
        message: 'Hello Vuex from store.'
      }
    },
    // ↓値を操作するための記述（ミューテーション）
    mutations: {
      updateMessage: function(state) {
        state.message = 'updated!'
      }
    }
  })
}
// stateに値を保管する処理
// message => 画面に表示するテキストを格納するための値 messageでなくてもよい

export default createStore
// createStoreをexport defaultでエクスポートして使えるようにする。
// （createStore関数を定義して、プログラムから使えるようにする）

// ===> pages/index.vue