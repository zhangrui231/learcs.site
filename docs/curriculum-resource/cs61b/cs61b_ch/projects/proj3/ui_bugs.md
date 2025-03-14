---
title: Common UI Bugs - Project 3 BYOW
description: Project 3 Common UI Bugs.
---

## 隐形文字

让文字显示在屏幕上可能有点麻烦。需要注意几个方面：
 - 字体颜色需要设置为可见的颜色（例如白色）
 - 文本的位置需要在边界内
 - 绘制文字后，你需要调用 `StdDraw.show()` 才能让它显示在屏幕上
 - 否则，你需要确保你的文本在绘制后不会立即被覆盖或清除（例如，`TERenderer.renderTiles` 会清除整个屏幕）

下面这段代码可以正确地绘制文字：
```java
TERenderer ter = new TERenderer();
ter.initialize(80, 40, 0, 0);
StdDraw.setPenColor(Color.WHITE);
StdDraw.text(40, 30, "I like cheese");
StdDraw.show();
```

## 奇怪的瓦片

### 问题

一个常见的问题是，在实现了UI的其他部分后，瓦片字符会突然显示不正常。[这里有一个程序](./FlowerWorld.txt) 演示了这个问题；如果你想跟着操作，可以把这个文件粘贴到你的 `core` 文件夹里。

你会发现花朵看起来不像花朵了。这是因为字体大小太大了，所以每个瓦片的字符都溢出到其他瓦片中。

### 解决方案

问题在于瓦片使用的字体太大，所以我们需要重置字体大小。在你的 `TERenderer` 类里调用 `resetFont` 方法：

```java
/** 设置字体为绘制瓦片的正确字体 */
public void resetFont() {
    Font font = new Font("Monaco", Font.BOLD, TILE_SIZE - 2);
    StdDraw.setFont(font);
}
```

然后，在绘制瓦片之前调用这个方法：

<table>
    <thead>
        <th>之前</th>
        <th>之后</th>
    </thead>
<tr>
<td markdown="block">

```java
// 渲染帧
ter.renderFrame(tiles);
```
</td>
<td markdown="block">

```java
// 渲染帧
ter.resetFont();
ter.renderFrame(tiles);
```
</td>
</tr>
</table>

现在，当你运行 `FlowerWorld` 时，瓦片应该被正确绘制。

## 闪烁的 UI

### 问题

一个常见的问题是UI闪烁。[这里有一个程序](./WaterWorld.txt) 演示了这个问题；如果你想跟着操作，可以把这个文件粘贴到你的 `core` 文件夹里。

你会发现 "HUD goes here" 这段文字在闪烁。原因是每一帧都多次调用了 `StdDraw.show()` - 一次是在 `renderFrame` 调用里，另一次是在第 31 行。这意味着每次循环实际上会在屏幕上绘制两帧：一帧没有文字，另一帧有文字。你看到的到底是哪一帧具有一定的随机性，所以UI才会闪烁。

### 解决方案

问题在于 `renderFrame` 内部有一个额外的 `StdDraw.show()` 调用，所以我们可以创建一个不包含 `StdDraw.show()` 的 `renderFrame` 方法。相反，使用你的 `TERenderer` 类中的 `drawTiles` 方法：

```java
    /**
     * 类似于 renderFrame，但不清除屏幕或显示瓦片
     */
    public void drawTiles(TETile[][] world) {
        for (int x = 0; x < world.length; x += 1) {
            for (int y = 0; y < world[x].length; y += 1) {
                world[x][y].draw(x + xOffset, y + yOffset);
            }
        }
    }
```

替换主游戏循环里的 `renderFrame` 调用：

<table>
    <thead>
        <th>之前</th>
        <th>之后</th>
    </thead>
<tr>
<td markdown="block">

```java
// 主游戏循环
while (true) {
    ter.renderFrame(tiles);
    ...
}
```
</td>
<td markdown="block">

```java
// 主游戏循环
while (true) {
    StdDraw.clear(Color.BLACK);
    ter.drawTiles(tiles);
    ...
}
```
</td>
</tr>
</table>

现在运行 `WaterWorld`，文字应该就不会再闪烁了。
