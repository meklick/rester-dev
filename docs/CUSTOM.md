# UPDATE.md

変更・カスタマイズの手順メモ。

---

## 文字列出現の速度を変更したい場合

詩の各文字がフェードインする速度は以下の2ファイルで調整する。

### `app/src/routes/index.tsx`

```ts
// 文字間のディレイ（ms）: 値を大きくするほど遅くなる
const delayMs = Math.min(charIndex() * 100, 4800);

// 作者名のディレイ上限（ms）
const authorDelay = Math.min(bodyChars.length * 100 + 200, 5000);
```

- `charIndex() * 100` の乗数を変えると1文字あたりの間隔が変わる
  - 例: `* 35` → 速い（約30文字/秒）
  - 例: `* 100` → 読み上げ速度（約10文字/秒）
  - 例: `* 150` → ゆっくり（約7文字/秒）
- 第2引数（`4800` / `5000`）は上限キャップ。長い詩でも際限なく遅くならないよう調整する

### `app/src/app.css`

```css
.poem-char {
  animation-duration: 900ms; /* 1文字が完全に現れるまでの時間 */
}

.poem-author {
  animation-duration: 900ms; /* 作者名が現れるまでの時間 */
}
```

- `animation-duration` を大きくするほど1文字の滲み出るアニメーションがゆっくりになる
- 文字間ディレイと合わせて調整すること
