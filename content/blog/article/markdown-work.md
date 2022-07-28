---
title: Markdown記法サンプル
createdAt: 2022-07-24
tags: ['markdown']
thumbnail: 'programmer.png'
head:
  meta:
    # - property: 'og:title'
    #   content: 'Markdown記法サンプル'
    # - property: 'og:url'
    #   content: 'https://ryo-portfolio.netlify.app/blog/article/markdown-work'
    # - property: 'og:image'
    #   content: '/assets/images/programmer.png'
    - property: 'og:description'
      content: 'よく使用する記法の書き方と表示のまとめです。'
---

よく使用する記法の書き方と表示のまとめです。

<br>

## 見出し

### 書き方

```markdown
# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

##### 見出し 5

###### 見出し 6
```

<br>

### 表示

# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

##### 見出し 5

###### 見出し 6

<br>

## リンク

### 書き方

```markdown
[ポートフォリオ](https://ryo-portfolio.netlify.app/)
```

<br>

### 表示

[ポートフォリオ](https://ryo-portfolio.netlify.app/)

<br>

## 引用

### 書き方

```markdown
> Markdown 記法サンプル
```

<br>

### 表示

> Markdown 記法サンプル

<br>

## コードブロック

### 書き方

````markdown
```typescript
const helloWorld = (): string => 'Hello, world!'
```
````

<br>

### 表示

```typescript
const helloWorld = (): string => 'Hello, world!'
```

<br>

## インラインコード

### 書き方

```markdown
これは`Markdown`についての記事です
```

<br>

### 表示

これは`Markdown`についての記事です

<br>

## 水平線

### 書き方

```markdown
---
```

<br>

### 表示

---

<br>

## 画像

### 書き方

```markdown
![アイコン](https://ryo-portfolio.netlify.app/_nuxt/icon.c1de94d3.jpg 'アイコン')
```

<br>

### 表示

![アイコン](https://ryo-portfolio.netlify.app/_nuxt/icon.c1de94d3.jpg 'アイコン')

<br>

## 箇条書きリスト

### 書き方

```markdown
- 問 1
  - 問 1_1
    - 問 1_1_1
  - 問 1_2
- 問 2
  - 問 2_1
- 問 3
```

<br>

### 表示

- 問 1
  - 問 1_1
    - 問 1_1_1
  - 問 1_2
- 問 2
  - 問 2_1
- 問 3

<br>

## 番号付きリスト

### 書き方

```markdown
1. 問 1
   1. 問 1_1
      1. 問 1_1_1
   1. 問 1_2
1. 問 2
   1. 問 2_1
1. 問 3
```

<br>

### 表示

1. 問 1
   1. 問 1_1
      1. 問 1_1_1
   1. 問 1_2
1. 問 2
   1. 問 2_1
1. 問 3

<br>

## 強調

### 書き方

```markdown
これは**ポートフォリオ**です
```

<br>

### 表示

これは**ポートフォリオ**です

<br>

## 取り消し

### 書き方

```markdown
これは~~ポートフォリオ~~です
```

<br>

### 表示

これは~~ポートフォリオ~~です

<br>

## イタリック

### 書き方

```markdown
これは*ポートフォリオ*です
```

<br>

### 表示

これは*ポートフォリオ*です

<br>

## テーブル

### 書き方

```markdown
| No. | 左寄せ                   |         中央寄せ         |                   右寄せ |
| --: | :----------------------- | :----------------------: | -----------------------: |
|   1 | テキスト                 |     テキストテキスト     | テキストテキストテキスト |
|   2 | テキストテキストテキスト |         テキスト         |         テキストテキスト |
|   3 | テキストテキスト         | テキストテキストテキスト |                 テキスト |
```

<br>

### 表示

| No. | 左寄せ                   |         中央寄せ         |                   右寄せ |
| --: | :----------------------- | :----------------------: | -----------------------: |
|   1 | テキスト                 |     テキストテキスト     | テキストテキストテキスト |
|   2 | テキストテキストテキスト |         テキスト         |         テキストテキスト |
|   3 | テキストテキスト         | テキストテキストテキスト |                 テキスト |

<br>
