<!--
データフローの流れを（それぞれ）実装
テンプレート→アクション→ミューテーション→ステート(のmessageの値を)変更して、
vueインスタンス内のマスタッシュ構文で表示したテキストを変える
-->

<template>

  <div class="container">
    <div>
      <p>{{ $store.state.message }}</p>

      <!-- <button v-on:click="$store.commit('updateMessage')">update</button></!-->
      <!-- ミューテーションの機能をコンポーネントから呼び出すには、commitメソッドを利用する。 -->

      <!-- <button v-on:click="$store.commit('updateMessage','Commit with payload')">update</button> -->
      <!-- ミューテーションに値を渡すには、comitに引数を追加する -->

      <!-- <button v-on:click="$store.dispatch('updateMessageAction')">Dispatch</button> -->
      <!-- アクションを経由する(commit → dispatchメソッド) -->

      <button v-on:click="$store.dispatch('updateMessageAction','Dispatch wiht payload')">Dispatch</button>
      <!-- アクションに値を渡す(commit → dispatchメソッド) -->
    </div>
  </div>

</template>

<script>

export default {
}

</script>

<style>
.container{
  width: 100%;
  height: 100%;
}
</style>

<!-- ストアの値の変更方法 =>
”ストアの値を操作する処理”は、ストアの方に書いて、
コンポーネントから呼び出す -->
<!-- ミューテーションを呼び出して値を変更する -->
<!-- 呼び出し元と呼び出される側を疎結合にして、
拡張の柔軟性を高めている。 （イベントの発生と監視に似ている）-->
