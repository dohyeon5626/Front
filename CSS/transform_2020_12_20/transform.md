# Transform

2D 트랜스폼은 프로퍼티값으로 변환함수(transform function)를 사용함

| transform function    | 설명                                                         |     단위      |
| :-------------------- | :----------------------------------------------------------- | :-----------: |
| translate(x,y)        | 요소의 위치를 X축으로 x만큼, Y축으로 y만큼 이동시킨다.       | px, %, em 등  |
| translateX(n)         | 요소의 위치를 X축으로 x만큼 이동시킨다.                      | px, %, em 등  |
| translateY(n)         | 요소의 위치를 Y축으로 y만큼 이동시킨다.                      | px, %, em 등  |
| scale(x,y)            | 요소의 크기를 X축으로 x배, Y축으로 y배 확대 또는 축소 시킨다. |   0과 양수    |
| scaleX(n)             | 요소의 크기를 X축으로 x배 확대 또는 축소 시킨다.             |   0과 양수    |
| scaleY(n)             | 요소의 크기를 Y축으로 y배 확대 또는 축소 시킨다.             |   0과 양수    |
| skew(x-angle,y-angle) | 요소를 X축으로 x 각도만큼, Y축으로 y 각도만큼 기울인다.      | +/- 각도(deg) |
| skewX(x-angle)        | 요소를 X축으로 x 각도만큼 기울인다.                          | +/- 각도(deg) |
| skewY(y-angle)        | 요소를 Y축으로 y 각도만큼 기울인다.                          | +/- 각도(deg) |
| rotate(angle)         | 요소를 angle만큼 회전시킨다.                                 | +/- 각도(deg) |

``` css
transform: translate(10px, 50px);
```

```css
transform: func1 func2 func3 ...;
/* 위와 같이 여러가지 속성을 쓸 수 있음 */
```

