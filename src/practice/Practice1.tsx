export const Practice1 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    return total.toString(); // 返却値を意図的に文字列にする
  };
  const onClickPractice = () => {
    let total: number = 0;
    total = calcTotalFee(5000); // 文字列は数値型の変数に代入できなエラーを出してくれる
    console.log(total);
  };
  return (
    <div className="App">
      <p>引数の型指定の練習</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
